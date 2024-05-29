// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.

/**
 * Call a callback function after a delay.
 */
export function setTimeout(callback, delay = 0) {
  return system.core.queueUserTimer(
    system.core.getTimerDepth() + 1,
    false,
    delay,
    callback,
  );
}

/**
 * Call a callback function after a delay.
 */
export function setInterval(callback, delay = 0) {
  return system.core.queueUserTimer(
    system.core.getTimerDepth() + 1,
    true,
    delay,
    callback,
  );
}

/**
 * Clear a timeout or interval.
 */
export function clearTimeout(id) {
  system.core.cancelTimer(id);
}

/**
 * Clear a timeout or interval.
 */
export function clearInterval(id) {
  system.core.cancelTimer(id);
}

/**
 * Mark a timer as not blocking event loop exit.
 */
export function unrefTimer(id) {
  system.core.unrefTimer(id);
}

/**
 * Mark a timer as blocking event loop exit.
 */
export function refTimer(id) {
  system.core.refTimer(id);
}
