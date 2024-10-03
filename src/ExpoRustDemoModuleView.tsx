import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoRustDemoModuleViewProps } from './ExpoRustDemoModule.types';

const NativeView: React.ComponentType<ExpoRustDemoModuleViewProps> =
  requireNativeViewManager('ExpoRustDemoModule');

export default function ExpoRustDemoModuleView(props: ExpoRustDemoModuleViewProps) {
  return <NativeView {...props} />;
}
