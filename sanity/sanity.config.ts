// Proxy config to allow building the Studio from the `sanity` subfolder.
// This file re-exports the root `sanity.config.ts` so Rollup can resolve the
// expected relative path from `.sanity/runtime/app.js`.
export { default } from '../sanity.config';
