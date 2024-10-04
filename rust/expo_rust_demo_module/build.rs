use std::{
    env,
    path::{Path, PathBuf},
};

fn main() {
    if env::var("CARGO_CFG_TARGET_OS").unwrap() == "android" {
        android();
    }
}

fn android() {
    println!("cargo:rustc-link-lib=c++_shared");

    if let Ok(output_path) = env::var("CARGO_NDK_OUTPUT_PATH") {
        let sysroot_libs_path = PathBuf::from(env::var_os("CARGO_NDK_SYSROOT_LIBS_PATH").unwrap());
        let lib_path = sysroot_libs_path.join("libc++_shared.so");
        if !lib_path.exists() {
            panic!(
                "libc++_shared.so does not exist: {}",
                lib_path.to_str().unwrap()
            );
        }

        let current_dir = env::current_dir().unwrap();
        let cpp_shared_so_path = Path::new(&current_dir)
            .join("..")
            .join(output_path)
            .join(env::var("CARGO_NDK_ANDROID_TARGET").unwrap())
            .join("libc++_shared.so");
        // if parent does not exist, create it
        if !cpp_shared_so_path.parent().unwrap().exists() {
            std::fs::create_dir_all(cpp_shared_so_path.parent().unwrap()).unwrap();
        }

        std::fs::copy(lib_path, cpp_shared_so_path).unwrap();
    } else {
        panic!("CARGO_NDK_OUTPUT_PATH is not set");
    }
}
