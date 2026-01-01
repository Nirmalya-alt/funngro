
/**
 * Manual type definitions for Vite environment variables.
 * Fixed: Removed problematic 'vite/client' reference that was causing "Cannot find type definition file" errors.
 */

interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
