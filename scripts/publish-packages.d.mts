import type { readFileSync } from "node:fs";

export interface PackageInfo {
  name: string;
  version: string;
}

export type ExecFile = (
  command: string,
  args: string[],
  options?: object,
) => Buffer | string;

export interface PublishPackagesOptions {
  packages?: string[];
  execFile?: ExecFile;
  readPackage?: typeof readPackageInfo;
}

export const packageDirs: string[];

export function readPackageInfo(
  packageDir: string,
  readFile?: typeof readFileSync,
): PackageInfo;

export function isPackageVersionMissingError(error: unknown): boolean;

export function isPackageVersionPublished(
  packageInfo: PackageInfo,
  execFile?: ExecFile,
): boolean;

export function publishPackage(
  packageDir: string,
  tag: string,
  execFile?: ExecFile,
): void;

export function publishPackages(
  tag: string,
  options?: PublishPackagesOptions,
): void;

export function isEntrypoint(): boolean;
