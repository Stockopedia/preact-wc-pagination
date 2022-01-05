import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import bundleSize from 'rollup-plugin-bundle-size'


export default {
  input: "src/index.wc.ts",
  output: [
    {
      file: "./dist-wc/index.js",
      format: "cjs",
      sourcemap: true
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss(),
    bundleSize()
  ]
};