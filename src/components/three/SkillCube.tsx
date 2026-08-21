"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { SkillGroup } from "@/data/types";

// A plain three.js cube whose 6 faces are the 6 AI skill domains — the cube
// itself is the visual metaphor (a "block" of the stack, like a transformer
// block). Drag to orbit, gentle idle float, auto-rotation when idle.
// Adapted from the old portfolio's Note2Action SystemCube, restyled dark.

// Outward normals of the 6 box material slots (+X, -X, +Y, -Y, +Z, -Z);
// material i shows groups[i], so front-face detection maps straight back.
const BOX_NORMALS = [
  new THREE.Vector3(1, 0, 0),
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(0, -1, 0),
  new THREE.Vector3(0, 0, 1),
  new THREE.Vector3(0, 0, -1),
];

function wrapLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) {
  const words = text.split(" ");
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = word;
      y += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line, x, y);
  return y + lineHeight;
}

function makeFaceCanvas(group: SkillGroup, index: number) {
  const S = 512;
  const canvas = document.createElement("canvas");
  canvas.width = S;
  canvas.height = S;
  const ctx = canvas.getContext("2d")!;

  const grad = ctx.createLinearGradient(0, 0, 0, S);
  grad.addColorStop(0, "#16161f");
  grad.addColorStop(1, "#0c0c13");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, S, S);

  ctx.strokeStyle = "rgba(151, 128, 248, 0.35)";
  ctx.lineWidth = 3;
  ctx.strokeRect(24, 24, S - 48, S - 48);

  ctx.textBaseline = "top";
  ctx.fillStyle = "#9780f8";
  ctx.font = "600 26px 'Space Grotesk', 'Inter', sans-serif";
  ctx.fillText(String(index + 1).padStart(2, "0"), 52, 56);

  ctx.fillStyle = "#f4f4f6";
  ctx.font = "700 52px 'Space Grotesk', 'Inter', sans-serif";
  ctx.fillText(group.name, 52, 120);

  ctx.strokeStyle = "#7c5cff";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(54, 196);
  ctx.lineTo(130, 196);
  ctx.stroke();

  ctx.fillStyle = "rgba(244, 244, 246, 0.72)";
  ctx.font = "400 30px 'Inter', sans-serif";
  let y = 240;
  for (const item of group.items) {
    ctx.fillStyle = "#9780f8";
    ctx.fillText("·", 52, y);
    ctx.fillStyle = "rgba(244, 244, 246, 0.72)";
    y = wrapLines(ctx, item, 78, y, S - 130, 38) + 8;
    if (y > S - 70) break;
  }

  return canvas;
}

export function SkillCube({
  groups,
  onActiveChange,
}: {
  groups: SkillGroup[];
  onActiveChange?: (index: number) => void;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const onActiveRef = useRef(onActiveChange);

  useEffect(() => {
    onActiveRef.current = onActiveChange;
  }, [onActiveChange]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const width = mount.clientWidth || 480;
    const height = mount.clientHeight || 480;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.touchAction = "pan-y";
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.setAttribute("aria-hidden", "true");
    mount.appendChild(renderer.domElement);

    const CUBE = 1.9;
    const SPHERE_R = (CUBE * Math.sqrt(3)) / 2 + 0.15;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
    const frameCamera = () => {
      const vfov = (camera.fov * Math.PI) / 180;
      const fitH = SPHERE_R / Math.tan(vfov / 2);
      const fitW = SPHERE_R / (Math.tan(vfov / 2) * camera.aspect);
      camera.position.z = Math.max(fitH, fitW) * 1.08;
      camera.updateProjectionMatrix();
    };
    frameCamera();

    scene.add(new THREE.AmbientLight(0xffffff, 1.1));
    const dir = new THREE.DirectionalLight(0x9780f8, 0.8);
    dir.position.set(2.5, 3.5, 4);
    scene.add(dir);

    const floatGroup = new THREE.Group();
    const cubeGroup = new THREE.Group();
    scene.add(floatGroup);
    floatGroup.add(cubeGroup);

    const geometry = new THREE.BoxGeometry(CUBE, CUBE, CUBE);
    const six = groups.slice(0, 6);
    const materials = six.map((group, i) => {
      const tex = new THREE.CanvasTexture(makeFaceCanvas(group, i));
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.9,
        metalness: 0.1,
      });
    });
    while (materials.length < 6) materials.push(materials[0]);

    const mesh = new THREE.Mesh(geometry, materials);
    cubeGroup.add(mesh);

    const edgesGeo = new THREE.EdgesGeometry(geometry);
    const edges = new THREE.LineSegments(
      edgesGeo,
      new THREE.LineBasicMaterial({
        color: new THREE.Color("#9780f8"),
        transparent: true,
        opacity: 0.6,
      }),
    );
    cubeGroup.add(edges);

    cubeGroup.quaternion.setFromEuler(new THREE.Euler(-0.34, -0.5, 0));

    // Repaint face labels once web fonts load.
    if (document.fonts?.ready) {
      document.fonts.ready
        .then(() => {
          six.forEach((group, i) => {
            const old = materials[i].map;
            const tex = new THREE.CanvasTexture(makeFaceCanvas(group, i));
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
            materials[i].map = tex;
            materials[i].needsUpdate = true;
            old?.dispose();
          });
        })
        .catch(() => {});
    }

    // --- front-face tracking (drives the info panel next to the cube) ---
    const faceCount = Math.min(groups.length, 6);
    let lastFront = -1;
    const _n = new THREE.Vector3();
    const reportFrontFace = () => {
      let best = 0;
      let bestZ = -Infinity;
      for (let i = 0; i < faceCount; i++) {
        _n.copy(BOX_NORMALS[i]).applyQuaternion(cubeGroup.quaternion);
        if (_n.z > bestZ) {
          bestZ = _n.z;
          best = i;
        }
      }
      if (best !== lastFront) {
        lastFront = best;
        onActiveRef.current?.(best);
      }
    };

    // --- drag to orbit ---
    const drag = { active: false, x: 0, y: 0, idleAt: 0, hovering: false };
    const onPointerDown = (e: PointerEvent) => {
      drag.active = true;
      drag.x = e.clientX;
      drag.y = e.clientY;
      renderer.domElement.style.cursor = "grabbing";
      try {
        renderer.domElement.setPointerCapture(e.pointerId);
      } catch {}
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!drag.active) return;
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      drag.x = e.clientX;
      drag.y = e.clientY;
      const qy = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        dx * 0.006,
      );
      const qx = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(1, 0, 0),
        dy * 0.006,
      );
      cubeGroup.quaternion.premultiply(qy).premultiply(qx);
    };
    const endDrag = () => {
      drag.active = false;
      drag.idleAt = performance.now();
      renderer.domElement.style.cursor = "grab";
    };
    const onPointerEnter = () => {
      drag.hovering = true;
    };
    const onPointerLeave = () => {
      drag.hovering = false;
      drag.idleAt = performance.now();
    };
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerup", endDrag);
    renderer.domElement.addEventListener("pointercancel", endDrag);
    renderer.domElement.addEventListener("pointerenter", onPointerEnter);
    renderer.domElement.addEventListener("pointerleave", onPointerLeave);

    // --- render loop ---
    const clock = new THREE.Clock();
    let raf = 0;
    const AUTOROTATE_DELAY_MS = 2500;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      if (!reducedMotion) {
        floatGroup.position.y = Math.sin(t * 0.8) * 0.03;
        floatGroup.rotation.z = Math.sin(t * 0.4) * 0.01;

        const idleLongEnough =
          performance.now() - drag.idleAt > AUTOROTATE_DELAY_MS;
        if (!drag.active && !drag.hovering && idleLongEnough) {
          const qy = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            0.0035,
          );
          cubeGroup.quaternion.premultiply(qy);
        }
      }

      reportFrontFace();
      renderer.render(scene, camera);
    };
    const start = () => {
      if (!raf) tick();
    };
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) start();
        else stop();
      },
      { threshold: 0.01 },
    );
    io.observe(mount);
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      camera.aspect = w / h;
      frameCamera();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerup", endDrag);
      renderer.domElement.removeEventListener("pointercancel", endDrag);
      renderer.domElement.removeEventListener("pointerenter", onPointerEnter);
      renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
      geometry.dispose();
      edgesGeo.dispose();
      edges.material.dispose();
      materials.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [groups]);

  return <div ref={mountRef} className="h-full w-full" />;
}

export default SkillCube;
