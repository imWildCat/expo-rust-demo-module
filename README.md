# expo-rust-demo-module

## What is this?

> To reduce the friction and cost of developing native apps, we need a way to run Rust code in React Native.
> Expo has done a lot of work to make writing bindings between Swift/Kotlin and TypeScript easier.
> Meanwhile, Mozilla has been working on [uniffi-rs](https://github.com/mozilla/uniffi-rs) to make it easier to write bindings between Rust and Swift/Kotlin.
>
> This project is connecting the dots between Expo and Rust.

A demo project showcasing the integration of Expo and Rust with automatic binding generation using uniffi-rs. Write once using TypeScript and Rust, run everywhere!

## About me

Long-term cross-platform enusiastic living in Canada, previously Senior Software Engineer at Microsoft, working on Outlook Mobile and OneDrive Photos.

Open for roles as Web / Mobile dev.

Contact me at: <https://github.com/imWildCat>

## Features

- Seamless integration of Rust code in Expo projects
- Automatic binding generation with uniffi-rs
- Cross-platform compatibility (iOS, Android, and Web / WASM but haven't included yet)
- Performance benefits of Rust with the ease of use of Expo and the React Native ecosystem

## Screenshots

| Android                                                                                                                                  | iOS                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/aa21639e-6ea4-4044-9f13-979e69a57db7" alt="rust demo - Google Pixel 3" width="250"> | <img src="https://github.com/user-attachments/assets/5c095c0e-8363-44d3-bbf6-03d4a96e88a2" alt="rust demo - iPhone 15" width="330"> |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [Rust](https://www.rust-lang.org/tools/install) (latest stable version)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [Cargo NDK](https://github.com/bbqsrc/cargo-ndk) (for Android)
- [CocoaPods](https://cocoapods.org/) (for iOS)
- [Android Studio](https://developer.android.com/studio) (for Android)
- [Xcode](https://developer.apple.com/xcode/) (for iOS)

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/imWildCat/expo-rust-demo-module.git
   cd expo-rust-demo-module
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

3. Build the Rust library:

   ```shell
   cd rust/expo_rust_demo_module
   make all-android # for Android
   make all-ios # for iOS
   ```

4. Run the Expo project:
   ```shell
   cd example && npm install && npm start
   ```

## Usage

This demo project includes a simple example of calling Rust functions from TypeScript. Check out the `src/index.ts` file for usage examples.

### Connecting the Dots

#### Rust

`rust/expo_rust_demo_module/src/lib.rs`

#### TypeScript

`src/index.ts`

#### Swift

`ios/ExpoRustDemoModule.swift`

#### Kotlin

`android/src/main/java/expo/modules/rustdemomodule/ExpoRustDemoModule.kt`

All generated files are ignored by git. Please check out the Makefile under `rust/expo_rust_demo_module` to see how to generate them.
Alternatively, please refer to the GitHub Actions to see how to generate them.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Original README.md below:

# API documentation

- [Documentation for the main branch](https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/rust-demo-module.md)
- [Documentation for the latest stable release](https://docs.expo.dev/versions/latest/sdk/rust-demo-module/)

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-rust-demo-module
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.

### Configure for Android

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide](https://github.com/expo/expo#contributing).
