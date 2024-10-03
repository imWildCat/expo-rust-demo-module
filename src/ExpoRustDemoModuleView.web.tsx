import * as React from 'react';

import { ExpoRustDemoModuleViewProps } from './ExpoRustDemoModule.types';

export default function ExpoRustDemoModuleView(props: ExpoRustDemoModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
