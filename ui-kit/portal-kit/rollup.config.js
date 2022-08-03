import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import eslint from "@rollup/plugin-eslint";

export default {
  // use glob in the input
  input: ["src/index.js"],
  output: {
    format: "iife",
    file: "dist/bundle.js"
  },
  watch: {
    clearScreen: true
  },
  plugins: [
    resolve(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true
    }),
    babel({
      babelHelpers: "bundled",
    }),
    commonjs(),
    eslint({
      throwOnError: true,
      exclude: ["node_modules/**", "dist/**"]
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 8080,
    }),
    livereload({ watch: "dist" })
  ]
};
