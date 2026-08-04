// YAML imports are handled by @rollup/plugin-yaml at build time; it ships no
// ambient types, so declare the shape here. src/data/index.ts casts these to
// the real interfaces.
declare module '*.yaml' {
  const data: unknown;
  export default data;
}
