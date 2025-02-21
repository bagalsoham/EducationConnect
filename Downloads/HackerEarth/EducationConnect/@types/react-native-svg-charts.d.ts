declare module 'react-native-svg-charts' {
  import { Component } from 'react';
  import { ViewStyle, TextStyle } from 'react-native';

  export interface ProgressCircleProps {
    style?: ViewStyle;
    progress: number;
    progressColor?: string;
    strokeWidth?: number;
    children?: React.ReactNode;
  }

  export class ProgressCircle extends Component<ProgressCircleProps> {}
  // Add other exports as needed
} 