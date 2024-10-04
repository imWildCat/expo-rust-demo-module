GIT_ROOT := $(shell git rev-parse --show-toplevel)

MODULE_NAME := expo_rust_demo_module
LIB_NAME := libexpo_rust_demo_module

build-ios:
	cargo build --target aarch64-apple-ios
	cargo build --target aarch64-apple-ios-sim

gen-bindings-ios:
	cargo run -p uniffi-builder --features=uniffi/cli --bin uniffi-bindgen generate --language swift --out-dir $(GIT_ROOT)/ios/generated/headers --no-format --library $(GIT_ROOT)/rust/target/aarch64-apple-ios/debug/libexpo_rust_demo_module.dylib
	mv $(GIT_ROOT)/ios/generated/headers/ExpoRustDemoModule.swift $(GIT_ROOT)/ios/generated/ExpoRustDemoModuleRustBridge.swift
	mv $(GIT_ROOT)/ios/generated/headers/ExpoRustDemoModuleFFI.modulemap $(GIT_ROOT)/ios/generated/headers/module.modulemap

xcframework-ios:
	rm -rf $(GIT_ROOT)/ios/generated/ExpoRustDemoModuleFFI.xcframework || true
	xcodebuild -create-xcframework \
    -library $(GIT_ROOT)/rust/target/aarch64-apple-ios/debug/$(LIB_NAME).a -headers $(GIT_ROOT)/ios/generated/headers \
    -library $(GIT_ROOT)/rust/target/aarch64-apple-ios-sim/debug/$(LIB_NAME).a -headers $(GIT_ROOT)/ios/generated/headers \
    -output $(GIT_ROOT)/ios/generated/ExpoRustDemoModuleFFI.xcframework

all-ios: build-ios gen-bindings-ios xcframework-ios

build-android:
	cargo ndk --no-strip -t arm64-v8a -o $(GIT_ROOT)/android/src/main/jniLibs build -q
	
gen-bindings-android:
	cargo run -p uniffi-builder --features=uniffi/cli --bin uniffi-bindgen generate --language kotlin --out-dir $(GIT_ROOT)/android/src/main/java --no-format --library $(GIT_ROOT)/android/src/main/jniLibs/arm64-v8a/libexpo_rust_demo_module.so

all-android: build-android gen-bindings-android

clean:
	cargo clean

format:
	cargo fmt

prepare-apple:
	rustup target add aarch64-apple-ios
	rustup target add aarch64-apple-ios-sim

prepare-android:
	rustup target add aarch64-linux-android

prepare-android-cargo-ndk:
	cargo install cargo-ndk
