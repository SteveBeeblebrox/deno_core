// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
import * as module from "checkin:testing";
import { assert, test } from "checkin:testing";

test(function testIsAnyArrayBuffer() {
  assert(system.core.isAnyArrayBuffer(new ArrayBuffer(4)));
  assert(system.core.isAnyArrayBuffer(new SharedArrayBuffer(4)));
  assert(!system.core.isAnyArrayBuffer(new Uint8Array(4)));
});

test(function testIsArgumentsObject() {
  let args: IArguments;
  (function () {
    args = arguments;
  })();
  assert(system.core.isArgumentsObject(args));
  assert(!system.core.isArgumentsObject({}));
});

test(function testIsArrayBuffer() {
  assert(system.core.isArrayBuffer(new ArrayBuffer(4)));
  assert(!system.core.isArrayBuffer(new SharedArrayBuffer(4)));
  assert(!system.core.isArrayBuffer(new Uint8Array(4)));
});

test(function testIsArrayBufferView() {
  assert(system.core.isArrayBufferView(new DataView(new ArrayBuffer(4))));
  assert(system.core.isArrayBufferView(new Uint8Array(4)));
  assert(!system.core.isArrayBufferView(new ArrayBuffer(4)));
});

test(function testIsAsyncFunction() {
  assert(system.core.isAsyncFunction(async function () {}));
  assert(system.core.isAsyncFunction(async function* () {}));
  assert(!system.core.isAsyncFunction(function () {}));
  assert(!system.core.isAsyncFunction(function* () {}));
});

test(function testIsBigIntObject() {
  assert(system.core.isBigIntObject(Object(1n)));
  assert(!system.core.isBigIntObject(1n));
  assert(!system.core.isBigIntObject(1));
});

test(function testIsBooleanObject() {
  assert(system.core.isBooleanObject(new Boolean(true)));
  assert(!system.core.isBooleanObject(true));
  assert(!system.core.isBooleanObject("true"));
});

test(function testIsBoxedPrimitive() {
  assert(system.core.isBoxedPrimitive(Object(1n)));
  assert(system.core.isBoxedPrimitive(new Boolean(true)));
  assert(system.core.isBoxedPrimitive(new Number(1)));
  assert(system.core.isBoxedPrimitive(Object(Symbol())));
  assert(system.core.isBoxedPrimitive(new String("str")));
  assert(!system.core.isBoxedPrimitive(1n));
  assert(!system.core.isBoxedPrimitive(true));
  assert(!system.core.isBoxedPrimitive(1));
  assert(!system.core.isBoxedPrimitive(Symbol()));
  assert(!system.core.isBoxedPrimitive("str"));
});

test(function testIsDataView() {
  assert(system.core.isDataView(new DataView(new ArrayBuffer(4))));
  assert(!system.core.isDataView(new Uint8Array(4)));
  assert(!system.core.isDataView(new ArrayBuffer(4)));
});

test(function testIsDate() {
  assert(system.core.isDate(new Date()));
  assert(!system.core.isDate({}));
});

test(function testIsGeneratorFunction() {
  assert(system.core.isGeneratorFunction(async function* () {}));
  assert(system.core.isGeneratorFunction(function* () {}));
  assert(!system.core.isGeneratorFunction(async function () {}));
  assert(!system.core.isGeneratorFunction(function () {}));
});

test(function testIsGeneratorObject() {
  const generator = (function* () {})();
  assert(system.core.isGeneratorObject(generator));
  assert(!system.core.isGeneratorObject({}));
});

test(function testIsMap() {
  assert(system.core.isMap(new Map()));
  assert(!system.core.isMap(new Set()));
  assert(!system.core.isMap(new WeakMap()));
  assert(!system.core.isMap(new WeakSet()));
});

test(function testIsMapIterator() {
  const map = new Map();
  assert(system.core.isMapIterator(map.values()));
  assert(!system.core.isMapIterator(map));
});

test(function testIsModuleNamespaceObject() {
  assert(system.core.isModuleNamespaceObject(module));
  assert(!system.core.isModuleNamespaceObject({}));
});

test(function testIsNativeError() {
  assert(system.core.isNativeError(new Error()));
  assert(system.core.isNativeError(new TypeError()));
  assert(!system.core.isNativeError({}));
});

test(function testIsNativeError() {
  assert(system.core.isNumberObject(new Number(1)));
  assert(!system.core.isNumberObject(1));
});

test(function testIsPromise() {
  assert(system.core.isPromise(new Promise((resolve) => resolve(1))));
  assert(!system.core.isPromise({}));
});

test(function testIsProxy() {
  assert(system.core.isProxy(new Proxy({}, {})));
  assert(!system.core.isProxy({}));
});

test(function testIsRegExp() {
  assert(system.core.isRegExp(/foo/));
  assert(!system.core.isRegExp({}));
});

test(function testIsSet() {
  assert(system.core.isSet(new Set()));
  assert(!system.core.isSet(new Map()));
  assert(!system.core.isSet(new WeakSet()));
  assert(!system.core.isSet(new WeakMap()));
});

test(function testIsSetIterator() {
  const set = new Set();
  assert(system.core.isSetIterator(set.values()));
  assert(!system.core.isSetIterator(set));
});

test(function testIsSharedArrayBuffer() {
  assert(system.core.isSharedArrayBuffer(new SharedArrayBuffer(4)));
  assert(!system.core.isSharedArrayBuffer(new ArrayBuffer(4)));
  assert(!system.core.isSharedArrayBuffer(new Uint8Array(4)));
});

test(function testIsStringObject() {
  assert(system.core.isStringObject(new String("str")));
  assert(!system.core.isStringObject("str"));
});

test(function testIsSymbolObject() {
  assert(system.core.isSymbolObject(Object(Symbol())));
  assert(!system.core.isSymbolObject(Symbol()));
});

test(function testIsTypedArray() {
  assert(system.core.isTypedArray(new Uint8Array(4)));
  assert(!system.core.isTypedArray(new DataView(new ArrayBuffer(4))));
  assert(!system.core.isTypedArray(new ArrayBuffer(4)));
});

test(function testIsWeakMap() {
  assert(system.core.isWeakMap(new WeakMap()));
  assert(!system.core.isWeakMap(new WeakSet()));
  assert(!system.core.isWeakMap(new Map()));
  assert(!system.core.isWeakMap(new Set()));
});

test(function testIsWeakSet() {
  assert(system.core.isWeakSet(new WeakSet()));
  assert(!system.core.isWeakSet(new WeakMap()));
  assert(!system.core.isWeakSet(new Set()));
  assert(!system.core.isWeakSet(new Map()));
});
