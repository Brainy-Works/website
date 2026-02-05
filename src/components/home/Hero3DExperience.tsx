import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import logo from "@/assets/LOGO.png";

const MODEL_URL = "/assets/sci_fi_cube_01.glb";
const VIDEO_FORWARD_URL =
  "/assets/untitled_Veo%203.1%20Image%20to%20Video_2026-02-04_17-26-52.mp4";
const VIDEO_REVERSE_URL = "/assets/video_reverse.mp4";

export function Hero3DExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoForwardRef = useRef<HTMLVideoElement | null>(null);
  const videoReverseRef = useRef<HTMLVideoElement | null>(null);
  const [videoActive, setVideoActive] = useState(false);
  const [currentDirection, setCurrentDirection] = useState<"forward" | "reverse">("forward");
  const [logoVisible, setLogoVisible] = useState(false);
  const [logoHiding, setLogoHiding] = useState(false);
  const [modelHidden, setModelHidden] = useState(false);
  const durationRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const stopAll = useCallback(() => {
    videoForwardRef.current?.pause();
    videoReverseRef.current?.pause();
  }, []);

  const playForward = useCallback(() => {
    const forwardVideo = videoForwardRef.current;
    const reverseVideo = videoReverseRef.current;
    if (!forwardVideo || !reverseVideo) return;

    stopAll();
    setLogoVisible(false);
    setLogoHiding(false);
    setModelHidden(true);
    setCurrentDirection("forward");
    setVideoActive(true);

    reverseVideo.currentTime = 0;
    forwardVideo.currentTime = 0;
    const playAttempt = forwardVideo.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => undefined);
    }
  }, [stopAll]);

  const playReverse = useCallback(() => {
    const forwardVideo = videoForwardRef.current;
    const reverseVideo = videoReverseRef.current;
    if (!forwardVideo || !reverseVideo) return;

    stopAll();
    setLogoHiding(true);
    setCurrentDirection("reverse");
    setVideoActive(true);

    const startReverse = () => {
      reverseVideo.currentTime = 0;
      const playAttempt = reverseVideo.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => undefined);
      }
    };

    window.setTimeout(startReverse, 450);
  }, [stopAll]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = Math.max(container.clientWidth, 1);
    let height = Math.max(container.clientHeight, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0.18, 2.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.15);
    keyLight.position.set(3, 4, 2);
    const rimLight = new THREE.PointLight(0x6ea8ff, 1.2, 10);
    rimLight.position.set(-3, 1.5, -2);

    scene.add(ambientLight, keyLight, rimLight);

    const pathGroup = new THREE.Group();
    const modelGroup = new THREE.Group();
    pathGroup.add(modelGroup);
    scene.add(pathGroup);

    let disposed = false;
    const loader = new GLTFLoader();
    loader.load(
      MODEL_URL,
      (gltf) => {
        if (disposed) return;
        const model = gltf.scene;
        const bounds = new THREE.Box3().setFromObject(model);
        const center = bounds.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.scale.set(2.3, 2.3, 2.3);
        modelGroup.add(model);
      },
      undefined,
      (error) => {
        console.error("Failed to load hero model", error);
      }
    );

    const curve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-0.6, -0.1, 0.4),
        new THREE.Vector3(0.2, 0.2, 0.1),
        new THREE.Vector3(0.6, -0.15, -0.4),
        new THREE.Vector3(-0.1, 0.15, -0.6),
        new THREE.Vector3(-0.6, -0.1, 0.4),
      ],
      true,
      "catmullrom",
      0.5
    );

    const clock = new THREE.Clock();
    let pathProgress = 0;
    const pathSpeed = 0.0009;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      pathProgress = (pathProgress + pathSpeed) % 1;

      const position = curve.getPointAt(pathProgress);
      const target = curve.getPointAt((pathProgress + 0.01) % 1);
      pathGroup.position.copy(position);
      pathGroup.lookAt(target);

      const scrollProgress = durationRef.current
        ? (videoForwardRef.current?.currentTime ?? 0) / durationRef.current
        : 0;
      modelGroup.rotation.y = Math.sin(elapsed * 0.4) * 0.2 + scrollProgress * 0.6;
      modelGroup.rotation.x = Math.cos(elapsed * 0.35) * 0.15;
      modelGroup.position.y = Math.sin(elapsed * 0.6) * 0.09 + scrollProgress * 0.08;

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = Math.max(container.clientWidth, 1);
      height = Math.max(container.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      disposed = true;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("resize", handleResize);

      scene.traverse((object) => {
        if ((object as THREE.Mesh).isMesh) {
          const mesh = object as THREE.Mesh;
          mesh.geometry?.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((material) => material.dispose());
          } else if (mesh.material) {
            mesh.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const forwardVideo = videoForwardRef.current;
    const reverseVideo = videoReverseRef.current;
    if (!forwardVideo || !reverseVideo) return;

    const handleMetadata = () => {
      if (!forwardVideo.duration || !reverseVideo.duration) return;
      durationRef.current = Math.min(forwardVideo.duration, reverseVideo.duration);
    };

    const handleForwardEnd = () => {
      stopAll();
      setVideoActive(true);
      setLogoVisible(true);
    };

    const handleReverseEnd = () => {
      stopAll();
      setVideoActive(false);
      setLogoVisible(false);
      setLogoHiding(false);
      setModelHidden(false);
      forwardVideo.currentTime = 0;
      reverseVideo.currentTime = 0;
    };

    forwardVideo.addEventListener("loadedmetadata", handleMetadata);
    reverseVideo.addEventListener("loadedmetadata", handleMetadata);
    forwardVideo.addEventListener("ended", handleForwardEnd);
    reverseVideo.addEventListener("ended", handleReverseEnd);

    return () => {
      forwardVideo.removeEventListener("loadedmetadata", handleMetadata);
      reverseVideo.removeEventListener("loadedmetadata", handleMetadata);
      forwardVideo.removeEventListener("ended", handleForwardEnd);
      reverseVideo.removeEventListener("ended", handleReverseEnd);
    };
  }, [stopAll]);

  return (
    <div className="hero-3d-shell">
      <div
        ref={containerRef}
        className={`hero-3d-stage ${videoActive ? "is-video-active" : ""} ${modelHidden ? "is-hidden" : ""}`}
        role="button"
        tabIndex={0}
        aria-label="Play cube animation"
        onClick={playForward}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            playForward();
          }
        }}
      />
      <button
        type="button"
        className={`hero-logo-button ${logoVisible ? "is-visible" : ""} ${logoHiding ? "is-hiding" : ""}`}
        onClick={playReverse}
        aria-label="Close cube animation"
      >
        <img src={logo} alt="Brainy Works" className="hero-3d-logo" />
      </button>

      <div className={`hero-video-layer ${videoActive ? "is-active" : ""}`}>
        <video
          ref={videoForwardRef}
          className={`hero-video ${currentDirection === "forward" ? "is-active-video" : ""}`}
          src={VIDEO_FORWARD_URL}
          muted
          playsInline
          preload="auto"
        />
        <video
          ref={videoReverseRef}
          className={`hero-video ${currentDirection === "reverse" ? "is-active-video" : ""}`}
          src={VIDEO_REVERSE_URL}
          muted
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}