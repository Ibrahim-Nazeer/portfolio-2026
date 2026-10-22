import React from 'react';

export interface CrystalizedBallProps {
  preset?: 'plasma' | 'aurora' | 'nebula' | 'solar' | 'cosmic' | 'glitch' | string;
  color?: string;
  theme?: 'dark' | 'light';
  size?: number;
  strands?: number;
  crackle?: number;
  flares?: number;
  glow?: number;
  sparks?: number;
  particleCount?: number;
  fill?: number;
  motion?: string;
  particleShape?: string;
  depth?: number;
  sway?: number;
  twinkle?: number;
  haze?: number;
  speed?: number;
  dustSpeed?: number;
  interactive?: boolean;
  hoverStrength?: number;
  intro?: boolean;
  paused?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare const CrystalizedBall: React.ComponentType<CrystalizedBallProps>;
export default CrystalizedBall;
