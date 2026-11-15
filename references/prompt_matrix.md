# 3D Web Development: AI Harness Prompt Matrix

## Model Capabilities & Best Use Cases

| AI Harness | Best For | Key Advantage | Recommended Task |
|------------|----------|---------------|------------------|
| **OpenCode** | Multi-file Scaffolding & Subagents | Parallel tool calls, workspace context | Full 3D app structure, R3F setup, build audits |
| **Claude Code** | Architecture & Refactoring | Precise diffs, step-by-step logic | Complex 3D state management, GSAP binding |
| **ChatGPT (Codex)** | Shader Math & Visual Styling | Creative math, instant visual feedback | Custom GLSL vertex & fragment shaders, particle physics |
| **Cursor / Windsurf** | In-line Auto-complete & Tweaks | Fast inline code completions | Tuning lighting, materials, and camera vectors |

## Prompt Engineering Guidelines by Harness

### OpenCode Prompts
Use explicit task delegation and context-aware instructions:
```
Context: Building a React Three Fiber product configurator

Subagent 1: Generate scene structure with responsive camera
Subagent 2: Create R3F component with proper resource disposal
Subagent 3: Implement GSAP ScrollTrigger integration
Subagent 4: Run performance audit with analyze_3d_perf.py
```

### Claude Code Prompts
Provide clear architectural constraints:
```
Build a 3D WebGL experience where:
- Camera follows scroll position with lerp damping
- Objects animate based on viewport intersection
- All resources must be disposed on unmount
- Target 60 FPS on desktop, 45 FPS on mobile
```

### Codex Prompts
Describe visual effects with mathematical precision:
```
Create a vertex shader that:
- Displaces vertices using Perlin noise
- Time-based animation with uTime uniform
- Wave frequency controlled by uFrequency uniform
- Amplitude controlled by uAmplitude uniform
```

### Cursor Prompts
Request specific component patterns:
```
Implement <AnimatedModel /> component using:
- R3F useFrame for animation loop
- Drei useAnimations for GLTF animations  
- useMemo for geometry optimization
- useEffect cleanup for disposal
```