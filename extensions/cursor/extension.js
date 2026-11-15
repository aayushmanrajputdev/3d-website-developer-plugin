// Cursor AI Extension for 3D Website Developer Skill
// Load this extension to gain expert 3D web development capabilities

export const extension = {
  name: "3D Website Developer",
  description: "Master AI skill for building 3D websites, WebGL experiences, React Three Fiber components, GSAP scroll-driven animations, and GLSL shaders",
  version: "1.0.0",
  author: "Aayushman Rajput",
  
  // Skill loading configuration
  loadSkill: async () => {
    // Fetch and parse SKILL.md from local or remote source
    const skillPath = "./skills/3d-website-developer/SKILL.md";
    return skillPath;
  },
  
  // Cursor-specific prompt templates
  promptTemplates: {
    heroScene: `You are an expert 3D Web Developer specializing in React Three Fiber (R3F) and Three.js. Create an interactive 3D Hero scene for a web application with the following requirements:
1. Setup PerspectiveCamera with responsive aspect ratio handling.
2. Use ambientLight + directionalLight with soft shadows (PCFSoftShadowMap).
3. Create a floating, interactive 3D model with subtle float animation (sin wave on position.y in useFrame).
4. Add hover & click interaction with spring physics (react-spring or motion-framer-3d).
5. Ensure strict resource disposal on unmount to prevent memory leaks.
6. Target 60 FPS on mobile and desktop.`,
    
    scrollStorytelling: `Build a multi-section scroll-driven 3D experience using React Three Fiber, @react-three/drei (ScrollControls), and GSAP ScrollTrigger.
- Section 1: Hero view (Camera pos: [0, 2, 5], Model rotation: [0, 0, 0])
- Section 2: Feature breakdown (Camera smoothly transitions to [3, 0, 2], Model rotates 180deg)
- Section 3: Exploded 3D view (Model parts separate along local axes based on scroll progress)
- Link scroll offset directly to camera interpolation (lerp) for silky smooth transitions.`,
    
    shaderGenerator: `Write a custom THREE.ShaderMaterial in GLSL (vertex & fragment shaders) for a liquid distortion wave effect:
- Vertex Shader: Deform geometry vertices using a 3D Simplex/Perlin noise function driven by uTime.
- Fragment Shader: Sample a color texture and apply chromatic aberration based on vertex displacement.
- Uniforms required: uTime (float), uNoiseFrequency (float), uNoiseAmplitude (float), uTexture (sampler2D).
- Must run cleanly on WebGL 2.0 without precision artifact stutter.`
  },
  
  // Performance rules
  performanceRules: [
    "NEVER call setState inside useFrame (causes frame drops)",
    "NEVER instantiate new THREE.Vector3 or geometries inside render loops",
    "NEVER omit resource disposal - always call geometry.dispose() and material.dispose() on unmount",
    "ALWAYS set texture.colorSpace = THREE.SRGBColorSpace for proper PBR texture rendering",
    "ALWAYS use InstancedMesh for rendering hundreds of repeated 3D objects"
  ]
};

export default extension;