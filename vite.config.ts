import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "node:fs";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    {
      name: "demo-deeplink-fallback",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next();

          const url = new URL(req.url, "http://localhost");
          const pathname = url.pathname;

          // If the request is a direct file request or doesn't target demos, let it through.
          if (!pathname.startsWith("/demos/")) return next();
          if (pathname.endsWith("/index.html")) return next();
          if (path.extname(pathname)) return next();

          const parts = pathname.split("/").filter(Boolean); // ["demos", "<slug>", ...]
          const slug = parts[1];
          if (!slug) return next();

          const demoIndexPath = path.join(process.cwd(), "public", "demos", slug, "index.html");
          if (!fs.existsSync(demoIndexPath)) return next();

          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(fs.readFileSync(demoIndexPath));
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next();

          const url = new URL(req.url, "http://localhost");
          const pathname = url.pathname;

          if (!pathname.startsWith("/demos/")) return next();
          if (pathname.endsWith("/index.html")) return next();
          if (path.extname(pathname)) return next();

          const parts = pathname.split("/").filter(Boolean);
          const slug = parts[1];
          if (!slug) return next();

          const demoIndexPath = path.join(process.cwd(), "public", "demos", slug, "index.html");
          if (!fs.existsSync(demoIndexPath)) return next();

          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(fs.readFileSync(demoIndexPath));
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
