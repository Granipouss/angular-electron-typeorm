import { Injectable } from '@angular/core';

import * as childProcess from 'child_process';
import { ipcRenderer, remote, webFrame } from 'electron';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer = window.require('electron').ipcRenderer;
  webFrame: typeof webFrame = window.require('electron').webFrame;
  remote: typeof remote = window.require('electron').remote;

  childProcess: typeof childProcess = window.require('child_process');
  fs: typeof fs = window.require('fs');
}
