allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

val newBuildDir: Directory =
    rootProject.layout.buildDirectory
        .dir("../../build")
        .get()
rootProject.layout.buildDirectory.value(newBuildDir)

subprojects {
    val newSubprojectBuildDir: Directory = newBuildDir.dir(project.name)
    project.layout.buildDirectory.value(newSubprojectBuildDir)
}

// Workaround: package:jni's own build.gradle (pulled in transitively via
// path_provider_android, itself pulled in by google_fonts) skips applying
// the kotlin-android plugin on AGP >= 9, assuming AGP auto-provides it —
// then unconditionally uses the `kotlin { }` DSL block, which fails with
// "Could not find method kotlin()" without that plugin. Pre-apply it here
// before jni's own script runs. Safe to drop once upstream jni fixes its
// AGP-version check (https://github.com/dart-lang/jnigen, package:jni).
subprojects {
    if (project.name == "jni") {
        project.pluginManager.apply("org.jetbrains.kotlin.android")
    }
}
subprojects {
    project.evaluationDependsOn(":app")
}

tasks.register<Delete>("clean") {
    delete(rootProject.layout.buildDirectory)
}
