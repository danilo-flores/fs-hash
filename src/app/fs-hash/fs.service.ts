import { Inject, Injectable, InjectionToken } from '@angular/core';
import { MD5 } from 'crypto-js';

export const DIRECTORY_PATH = new InjectionToken<string>('directoryPath');

@Injectable({
  providedIn: 'root',
  deps: [DIRECTORY_PATH]
})

export class FS {
  private directoryPath: string;
  private directory: Map<string, string> = new Map();

  constructor(@Inject(DIRECTORY_PATH) directoryPath: string) {
    this.directoryPath = directoryPath;
  }

  store(filename: string): string {
    const filePath: string = `${this.directoryPath}/${filename}`;
    const hash = MD5(filename).toString();
    this.directory.set(filePath, hash);
    return hash;
  }

  get(filename: string): string | undefined {
    const filePath: string = `${this.directoryPath}/${filename}`;
    return this.directory.get(filePath);
  }
}