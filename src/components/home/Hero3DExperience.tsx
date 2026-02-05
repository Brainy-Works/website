import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import logo from "@/assets/LOGO.png";

const MODEL_URL = "/assets/sci_fi_cube_01.glb";
const VIDEO_FORWARD_URL =
  "/assets/untitled_Veo%203.1%20Image%20to%20Video_2026-02-04_17-26-52.mp4";
const VIDEO_REVERSE_URL = "/assets/video_reverse.mp4";

// Performance: Detect low-end devices
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
const isLowEnd = typeof navigator !== "undefined" && navigator.hardwareConcurrency <= 4;
const targetPixelRatio = isMobile || isLowEnd ? 1 : Math.min(window.devicePixelRatio, 1.5);

export function Hero3DExperience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoForwardRef = useRef<HTMLVideoElement | null>(null);
  const videoReverseRef = useRef<HTMLVideoElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [videoActive, setVideoActive] = useState(false);
  const [currentDirection, setCurrentDirection] = useState<"forward" | "reverse">("forward");
  const [logoVisible, setLogoVisible] = useState(false);
  const [logoHiding, setLogoHiding] = useState(false);
  const [modelHidden, setModelHidden] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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

    // Optimized renderer settings for performance
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile && !isLowEnd,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
    });
    renderer.setPixelRatio(targetPixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Lighting with mouse-follow capability
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(3, 4, 2);
    const rimLight = new THREE.PointLight(0x6ea8ff, 1.5, 12);
    rimLight.position.set(-3, 1.5, -2);
    const mouseLight = new THREE.PointLight(0x4fc3f7, 0.8, 8);
    mouseLight.position.set(0, 0, 3);

    scene.add(ambientLight, keyLight, rimLight, mouseLight);

    // Create floating particles
    const particleCount = isMobile ? 30 : 60;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities: number[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      velocities.push(
        (Math.random() - 0.5) * 0.002,
        (Math.random() - 0.5) * 0.002,
        (Math.random() - 0.5) * 0.002
      );
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x6ea8ff,
      size: 0.015,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

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
    const pathSpeed = 0.0007;
    let lastFrameTime = 0;
    const targetFPS = isMobile || isLowEnd ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      rafRef.current = requestAnimationFrame(animate);
      
      // Throttle for performance
      const deltaTime = currentTime - lastFrameTime;
      if (deltaTime < frameInterval) return;
      lastFrameTime = currentTime - (deltaTime % frameInterval);

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

      // Mouse-follow light
      mouseLight.position.x += (mouseRef.current.x * 2 - mouseLight.position.x) * 0.05;
      mouseLight.position.y += (-mouseRef.current.y * 2 - mouseLight.position.y) * 0.05;

      // Animate particles
      const posArray = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        posArray[i * 3] += velocities[i * 3];
        posArray[i * 3 + 1] += velocities[i * 3 + 1];
        posArray[i * 3 + 2] += velocities[i * 3 + 2];
        
        // Wrap around bounds
        for (let j = 0; j < 3; j++) {
          if (Math.abs(posArray[i * 3 + j]) > 2) {
            posArray[i * 3 + j] *= -0.9;
          }
        }
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Pulse particle opacity
      particleMaterial.opacity = 0.4 + Math.sin(elapsed * 1.5) * 0.2;

      renderer.render(scene, camera);
    };

    animate(0);

    const handleResize = () => {
      if (!container) return;
      width = Math.max(container.clientWidth, 1);
      height = Math.max(container.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      disposed = true;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);

      // Dispose particles
      particleGeometry.dispose();
      particleMaterial.dispose();

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
      {/* Click hint */}
      {!videoActive && !logoVisible && (
        <div className="hero-click-hint">
          <span className="hero-click-hint-text">Click to explore</span>
          <div className="hero-click-hint-ring" />
        </div>
      )}

      <div
        ref={containerRef}
        className={`hero-3d-stage ${videoActive ? "is-video-active" : ""} ${modelHidden ? "is-hidden" : ""} ${isHovering ? "is-hovering" : ""}`}
        role="button"
        tabIndex={0}
        aria-label="Play cube animation"
        onClick={playForward}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
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
          preload="metadata"
        />
        <video
          ref={videoReverseRef}
          className={`hero-video ${currentDirection === "reverse" ? "is-active-video" : ""}`}
          src={VIDEO_REVERSE_URL}
          muted
          playsInline
          preload="metadata"
        />
      </div>
    </div>
  );
}