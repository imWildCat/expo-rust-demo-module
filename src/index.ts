import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ExpoRustDemoModule.web.ts
// and on native platforms to ExpoRustDemoModule.ts
import ExpoRustDemoModule from "./ExpoRustDemoModule";
import {
  ChangeEventPayload,
  ExpoRustDemoModuleViewProps,
} from "./ExpoRustDemoModule.types";
import ExpoRustDemoModuleView from "./ExpoRustDemoModuleView";

// Get the native constant value.
export const PI = ExpoRustDemoModule.PI;

export function hello(): string {
  return ExpoRustDemoModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoRustDemoModule.setValueAsync(value);
}

export function addInRust(a: number, b: number): number {
  return ExpoRustDemoModule.addInRust(a, b);
}

const emitter = new EventEmitter(
  ExpoRustDemoModule ?? NativeModulesProxy.ExpoRustDemoModule,
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void,
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export {
  ExpoRustDemoModuleView,
  ExpoRustDemoModuleViewProps,
  ChangeEventPayload,
};
