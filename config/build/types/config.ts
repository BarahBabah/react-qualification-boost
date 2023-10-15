export type BuildMode = "production" | "development";

export interface buildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: buildPaths;
  isDev: boolean;
}
