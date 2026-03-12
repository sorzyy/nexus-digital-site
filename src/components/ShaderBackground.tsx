import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                           + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                            dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 5; i++) {
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    
    // Mouse influence
    vec2 mouseInfluence = (uMouse - 0.5) * 0.3;
    
    // Animated coordinates
    vec2 p = uv * aspect * 2.0;
    p.x += uTime * 0.05;
    p.y += uTime * 0.03;
    
    // Multiple layers of noise
    float n1 = fbm(p + mouseInfluence + uTime * 0.1);
    float n2 = fbm(p * 1.5 - uTime * 0.15 + mouseInfluence * 0.5);
    float n3 = fbm(p * 0.5 + uTime * 0.08);
    
    // Combine noises
    float noise = (n1 + n2 * 0.5 + n3 * 0.25) / 1.75;
    
    // Colors
    vec3 purple = vec3(0.545, 0.361, 0.965); // #8B5CF6
    vec3 cyan = vec3(0.024, 0.714, 0.831);   // #06B6D4
    vec3 dark = vec3(0.039, 0.039, 0.039);   // #0A0A0A
    vec3 accent = vec3(0.976, 0.451, 0.086); // #F97316
    
    // Create gradient
    float gradient = smoothstep(0.0, 1.0, uv.y);
    vec3 baseColor = mix(dark, purple * 0.3, gradient * 0.5);
    
    // Add noise colors
    float noiseMask = smoothstep(-0.5, 1.0, noise);
    vec3 color = mix(baseColor, purple, noiseMask * 0.4);
    color = mix(color, cyan, smoothstep(0.3, 0.8, noise) * 0.3);
    color = mix(color, accent, smoothstep(0.6, 1.0, noise) * 0.15);
    
    // Vignette
    float vignette = 1.0 - length((uv - 0.5) * 1.5);
    vignette = smoothstep(0.0, 0.7, vignette);
    color *= vignette;
    
    // Add subtle glow spots
    float glow1 = smoothstep(0.4, 0.0, length(uv - vec2(0.2 + sin(uTime * 0.2) * 0.1, 0.3 + cos(uTime * 0.15) * 0.1)));
    float glow2 = smoothstep(0.5, 0.0, length(uv - vec2(0.8 + cos(uTime * 0.18) * 0.1, 0.7 + sin(uTime * 0.12) * 0.1)));
    
    color += purple * glow1 * 0.3;
    color += cyan * glow2 * 0.2;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
      
      // Smooth mouse follow
      mouseRef.current.x += (state.pointer.x * 0.5 + 0.5 - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (state.pointer.y * 0.5 + 0.5 - mouseRef.current.y) * 0.05;
      material.uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function ShaderBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: '#0A0A0A' }}
      >
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
