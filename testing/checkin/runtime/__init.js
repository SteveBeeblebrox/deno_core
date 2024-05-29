// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
import "./__bootstrap.js";
import * as async from "checkin:async";
import * as console from "checkin:console";
import * as error from "checkin:error";
import * as timers from "checkin:timers";
import * as worker from "checkin:worker";
import * as throw_ from "checkin:throw";
async;
error;
throw_;

globalThis.console = console.console;
globalThis.setTimeout = timers.setTimeout;
globalThis.setInterval = timers.setInterval;
globalThis.clearTimeout = timers.clearTimeout;
globalThis.clearInterval = timers.clearInterval;
globalThis.Worker = worker.Worker;
system.core.addMainModuleHandler((module) => {
  if (onMainModuleCb) onMainModuleCb(module);
});
let onMainModuleCb = () => {};
Reflect.defineProperty(globalThis, "onmainmodule", {
  set: (cb) => {
    onMainModuleCb = cb;
  },
});
Reflect.defineProperty(globalThis, "onerror", {
  set: (cb) => {
    if (cb) {
      system.core.setReportExceptionCallback((error) => {
        let defaultPrevented = false;
        cb({
          error,
          preventDefault: () => defaultPrevented = true,
        });
        if (!defaultPrevented) {
          system.core.reportUnhandledException(error);
        }
      });
    } else {
      system.core.setReportExceptionCallback(null);
    }
  },
});
Reflect.defineProperty(globalThis, "onunhandledrejection", {
  set: (cb) => {
    if (cb) {
      system.core.setUnhandledPromiseRejectionHandler((promise, reason) => {
        let defaultPrevented = false;
        cb({
          promise,
          reason,
          preventDefault: () => defaultPrevented = true,
        });
        return defaultPrevented;
      });
    } else {
      system.core.setUnhandledPromiseRejectionHandler(null);
    }
  },
});
Reflect.defineProperty(globalThis, "onrejectionhandled", {
  set: (cb) => {
    if (cb) {
      system.core.setHandledPromiseRejectionHandler((promise, reason) => {
        cb({
          promise,
          reason,
        });
      });
    } else {
      system.core.setHandledPromiseRejectionHandler(null);
    }
  },
});
system.unrefTimer = timers.unrefTimer;
system.refTimer = timers.refTimer;
