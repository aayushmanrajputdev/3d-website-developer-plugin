# 3D Web Development Stack Selection Guide

## Project Type Decision Matrix

| Project Type | Recommended Stack | Why |
|--------------|-------------------|-----|
| Simple 3D landing page | Three.js (ESM) + Vite | Lightweight, no React overhead |
| Full React application with 3D | React Three Fiber + Drei | Declarative, React integration |
| High visual fidelity, no-code | Spline + React Spline Runtime | Designer-friendly, fast prototyping |
| Cutting-edge graphics | Three.js WebGPURenderer | Next-gen web graphics |

## Three.js vs React Three Fiber

### Three.js (vanilla)
- **Pros**: Full control, lightweight, no framework dependency
- **Cons**: More boilerplate, manual scene management
- **Best for**: Simple scenes, performance-critical apps, learning WebGL

### React Three Fiber (R3F)
- **Pros**: Declarative, React ecosystem, Suspense support, hooks
- **Cons**: Abstraction overhead, learning curve
- **Best for**: Complex scenes, team collaboration, React codebases

## GSAP ScrollTrigger Integration Patterns

### Pattern 1: Simple scrub
```javascript
gsap.to(obj, {
  rotation: Math.PI * 2,
  scrollTrigger: {
    trigger: ".container",
    start: "top center",
    end: "bottom center",
    scrub: true
  }
});
```

### Pattern 2: Pin + reveal
```javascript
gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    end: "+=500",
    pin: true,
    scrub: true
  }
})
.to(".element", { opacity: 1, y: 0 }, 0)
.to(".element2", { opacity: 1, y: 0 }, 0.5);
```

## Performance Optimization Checklist

- [ ] Use `InstancedMesh` for repeated geometry
- [ ] Pre-allocate Vector3/Matrix4 objects
- [ ] Dispose geometries, materials, textures on unmount
- [ ] Set correct colorSpace for textures
- [ ] Use `useMemo` for heavy computations
- [ ] Avoid setState in useFrame
- [ ] Enable frustum culling
- [ ] Use LOD (Level of Detail) for complex scenes