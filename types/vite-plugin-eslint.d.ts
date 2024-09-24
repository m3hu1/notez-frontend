declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite';

  interface Options {
    // Add any options that the plugin supports here
  }

  function eslint(options?: Options): Plugin;

  export default eslint;
}