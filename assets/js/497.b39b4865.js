"use strict";
exports.id = 497;
exports.ids = [497];
exports.modules = {

/***/ 45891:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SandpackClient)
/* harmony export */ });
/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6701);


var SandpackClient = /** @class */ (function () {
    function SandpackClient(iframeSelector, sandboxSetup, options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.sandboxSetup = sandboxSetup;
        this.iframeSelector = iframeSelector;
    }
    /**
     * Clients handles
     */
    SandpackClient.prototype.updateOptions = function (options) {
        if (!(0,dequal__WEBPACK_IMPORTED_MODULE_0__/* .dequal */ .J)(this.options, options)) {
            this.options = options;
            this.updateSandbox();
        }
    };
    SandpackClient.prototype.updateSandbox = function (_sandboxSetup, _isInitializationCompile) {
        if (_sandboxSetup === void 0) { _sandboxSetup = this.sandboxSetup; }
        throw Error("Method not implemented");
    };
    SandpackClient.prototype.destroy = function () {
        throw Error("Method not implemented");
    };
    /**
     * Bundler communication
     */
    SandpackClient.prototype.dispatch = function (_message) {
        throw Error("Method not implemented");
    };
    SandpackClient.prototype.listen = function (_listener) {
        throw Error("Method not implemented");
    };
    return SandpackClient;
}());




/***/ }),

/***/ 10497:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SandpackNode": () => (/* binding */ SandpackNode)
});

// EXTERNAL MODULE: ../node_modules/@codesandbox/sandpack-client/dist/types-965d4afd.mjs
var types_965d4afd = __webpack_require__(1025);
// EXTERNAL MODULE: external "buffer"
var external_buffer_ = __webpack_require__(14300);
;// CONCATENATED MODULE: ../node_modules/@codesandbox/nodebox/build/index.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// ../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js
var require_pad = __commonJS({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js"(exports, module) {
    module.exports = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length - size);
    };
  }
});

// ../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js
var require_fingerprint_browser = __commonJS({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js"(exports, module) {
    var pad = require_pad();
    var env = typeof window === "object" ? window : self;
    var globalCount = Object.keys(env).length;
    var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    var clientId = pad((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4);
    module.exports = function fingerprint() {
      return clientId;
    };
  }
});

// ../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js
var require_getRandomValue_browser = __commonJS({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js"(exports, module) {
    var getRandomValue;
    var crypto = typeof window !== "undefined" && (window.crypto || window.msCrypto) || typeof self !== "undefined" && self.crypto;
    if (crypto) {
      lim = Math.pow(2, 32) - 1;
      getRandomValue = function() {
        return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
      };
    } else {
      getRandomValue = Math.random;
    }
    var lim;
    module.exports = getRandomValue;
  }
});

// ../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js
var require_cuid = __commonJS({
  "../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js"(exports, module) {
    var fingerprint = require_fingerprint_browser();
    var pad = require_pad();
    var getRandomValue = require_getRandomValue_browser();
    var c = 0;
    var blockSize = 4;
    var base = 36;
    var discreteValues = Math.pow(base, blockSize);
    function randomBlock() {
      return pad((getRandomValue() * discreteValues << 0).toString(base), blockSize);
    }
    function safeCounter() {
      c = c < discreteValues ? c : 0;
      c++;
      return c - 1;
    }
    function cuid3() {
      var letter = "c", timestamp = new Date().getTime().toString(base), counter = pad(safeCounter().toString(base), blockSize), print = fingerprint(), random = randomBlock() + randomBlock();
      return letter + timestamp + counter + print + random;
    }
    cuid3.slug = function slug() {
      var date = new Date().getTime().toString(36), counter = safeCounter().toString(36).slice(-4), print = fingerprint().slice(0, 1) + fingerprint().slice(-1), random = randomBlock().slice(-2);
      return date.slice(-2) + counter + print + random;
    };
    cuid3.isCuid = function isCuid(stringToCheck) {
      if (typeof stringToCheck !== "string")
        return false;
      if (stringToCheck.startsWith("c"))
        return true;
      return false;
    };
    cuid3.isSlug = function isSlug(stringToCheck) {
      if (typeof stringToCheck !== "string")
        return false;
      var stringLength = stringToCheck.length;
      if (stringLength >= 7 && stringLength <= 10)
        return true;
      return false;
    };
    cuid3.fingerprint = fingerprint;
    module.exports = cuid3;
  }
});

// ../../node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/format.js
var require_format = __commonJS({
  "../../node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/format.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.format = void 0;
    var POSITIONALS_EXP = /(%?)(%([sdjo]))/g;
    function serializePositional(positional, flag) {
      switch (flag) {
        case "s":
          return positional;
        case "d":
        case "i":
          return Number(positional);
        case "j":
          return JSON.stringify(positional);
        case "o": {
          if (typeof positional === "string") {
            return positional;
          }
          var json = JSON.stringify(positional);
          if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
            return positional;
          }
          return json;
        }
      }
    }
    function format4(message) {
      var positionals = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        positionals[_i - 1] = arguments[_i];
      }
      if (positionals.length === 0) {
        return message;
      }
      var positionalIndex = 0;
      var formattedMessage = message.replace(POSITIONALS_EXP, function(match, isEscaped, _, flag) {
        var positional = positionals[positionalIndex];
        var value = serializePositional(positional, flag);
        if (!isEscaped) {
          positionalIndex++;
          return value;
        }
        return match;
      });
      if (positionalIndex < positionals.length) {
        formattedMessage += " " + positionals.slice(positionalIndex).join(" ");
      }
      formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
      return formattedMessage;
    }
    exports.format = format4;
  }
});

// ../../node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/invariant.js
var require_invariant = __commonJS({
  "../../node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/invariant.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.invariant = exports.createInvariantWith = exports.InvariantError = void 0;
    var format_1 = require_format();
    var STACK_FRAMES_TO_IGNORE = 2;
    function cleanErrorStack(error) {
      if (!error.stack) {
        return;
      }
      var nextStack = error.stack.split("\n");
      nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
      error.stack = nextStack.join("\n");
    }
    var InvariantError = function(_super) {
      __extends(InvariantError2, _super);
      function InvariantError2(message) {
        var positionals = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          positionals[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = "Invariant Violation";
        _this.message = format_1.format.apply(void 0, __spreadArray([message], positionals));
        cleanErrorStack(_this);
        return _this;
      }
      return InvariantError2;
    }(Error);
    exports.InvariantError = InvariantError;
    function createInvariantWith(ErrorConstructor) {
      var invariant4 = function(predicate, message) {
        var positionals = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          positionals[_i - 2] = arguments[_i];
        }
        if (!predicate) {
          var resolvedMessage = format_1.format.apply(void 0, __spreadArray([message], positionals));
          var isConstructor = !!ErrorConstructor.prototype.name;
          var error = isConstructor ? new ErrorConstructor(resolvedMessage) : ErrorConstructor(resolvedMessage);
          cleanErrorStack(error);
          throw error;
        }
      };
      return invariant4;
    }
    exports.createInvariantWith = createInvariantWith;
    function polymorphicInvariant(ErrorClass) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      return createInvariantWith(ErrorClass).apply(void 0, args);
    }
    exports.invariant = createInvariantWith(InvariantError);
    exports.invariant.as = polymorphicInvariant;
  }
});

// ../../node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/.pnpm/outvariant@1.3.0/node_modules/outvariant/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_invariant(), exports);
    __exportStar(require_format(), exports);
  }
});

// ../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js
var require_createDeferredExecutor = __commonJS({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDeferredExecutor = void 0;
    function createDeferredExecutor() {
      const executor = (resolve, reject) => {
        executor.state = "pending";
        executor.resolve = (data) => {
          if (executor.state !== "pending") {
            return;
          }
          executor.result = data;
          const onFulfilled = (value) => {
            executor.state = "fulfilled";
            return value;
          };
          return resolve(data instanceof Promise ? data : Promise.resolve(data).then(onFulfilled));
        };
        executor.reject = (reason) => {
          if (executor.state !== "pending") {
            return;
          }
          queueMicrotask(() => {
            executor.state = "rejected";
          });
          return reject(executor.rejectionReason = reason);
        };
      };
      return executor;
    }
    exports.createDeferredExecutor = createDeferredExecutor;
  }
});

// ../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js
var require_DeferredPromise = __commonJS({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeferredPromise = void 0;
    var createDeferredExecutor_1 = require_createDeferredExecutor();
    var DeferredPromise4 = class extends Promise {
      #executor;
      resolve;
      reject;
      constructor(executor = null) {
        const deferredExecutor = (0, createDeferredExecutor_1.createDeferredExecutor)();
        super((originalResolve, originalReject) => {
          deferredExecutor(originalResolve, originalReject);
          executor?.(deferredExecutor.resolve, deferredExecutor.reject);
        });
        this.#executor = deferredExecutor;
        this.resolve = this.#executor.resolve;
        this.reject = this.#executor.reject;
      }
      get state() {
        return this.#executor.state;
      }
      get rejectionReason() {
        return this.#executor.rejectionReason;
      }
      then(onFulfilled, onRejected) {
        return this.#decorate(super.then(onFulfilled, onRejected));
      }
      catch(onRejected) {
        return this.#decorate(super.catch(onRejected));
      }
      finally(onfinally) {
        return this.#decorate(super.finally(onfinally));
      }
      #decorate(promise) {
        return Object.defineProperties(promise, {
          resolve: { configurable: true, value: this.resolve },
          reject: { configurable: true, value: this.reject }
        });
      }
    };
    exports.DeferredPromise = DeferredPromise4;
  }
});

// ../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js
var require_build = __commonJS({
  "../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_createDeferredExecutor(), exports);
    __exportStar(require_DeferredPromise(), exports);
  }
});

// ../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js
var require_MemoryLeakError = __commonJS({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MemoryLeakError = void 0;
    var MemoryLeakError = class extends Error {
      emitter;
      type;
      count;
      constructor(emitter, type, count) {
        super(`Possible EventEmitter memory leak detected. ${count} ${type.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`);
        this.emitter = emitter;
        this.type = type;
        this.count = count;
        this.name = "MaxListenersExceededWarning";
      }
    };
    exports.MemoryLeakError = MemoryLeakError;
  }
});

// ../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js
var require_Emitter = __commonJS({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitter = void 0;
    var MemoryLeakError_1 = require_MemoryLeakError();
    var _events, _maxListeners, _hasWarnedAboutPotentialMemortyLeak, _getListeners, getListeners_fn, _removeListener, removeListener_fn, _wrapOnceListener, wrapOnceListener_fn, _internalEmit, internalEmit_fn;
    var _Emitter = class {
      constructor() {
        __privateAdd(this, _getListeners);
        __privateAdd(this, _removeListener);
        __privateAdd(this, _wrapOnceListener);
        __privateAdd(this, _internalEmit);
        __privateAdd(this, _events, void 0);
        __privateAdd(this, _maxListeners, void 0);
        __privateAdd(this, _hasWarnedAboutPotentialMemortyLeak, void 0);
        __privateSet(this, _events, /* @__PURE__ */ new Map());
        __privateSet(this, _maxListeners, _Emitter.defaultMaxListeners);
        __privateSet(this, _hasWarnedAboutPotentialMemortyLeak, false);
      }
      static listenerCount(emitter, eventName) {
        return emitter.listenerCount(eventName);
      }
      setMaxListeners(maxListeners) {
        __privateSet(this, _maxListeners, maxListeners);
        return this;
      }
      getMaxListeners() {
        return __privateGet(this, _maxListeners);
      }
      eventNames() {
        return Array.from(__privateGet(this, _events).keys());
      }
      emit(eventName, ...data) {
        const listeners = __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName);
        listeners.forEach((listener) => {
          listener.apply(this, data);
        });
        return listeners.length > 0;
      }
      addListener(eventName, listener) {
        __privateMethod(this, _internalEmit, internalEmit_fn).call(this, "newListener", eventName, listener);
        const nextListeners = __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName).concat(listener);
        __privateGet(this, _events).set(eventName, nextListeners);
        if (__privateGet(this, _maxListeners) > 0 && this.listenerCount(eventName) > __privateGet(this, _maxListeners) && !__privateGet(this, _hasWarnedAboutPotentialMemortyLeak)) {
          __privateSet(this, _hasWarnedAboutPotentialMemortyLeak, true);
          const memoryLeakWarning = new MemoryLeakError_1.MemoryLeakError(this, eventName, this.listenerCount(eventName));
          console.warn(memoryLeakWarning);
        }
        return this;
      }
      on(eventName, listener) {
        return this.addListener(eventName, listener);
      }
      once(eventName, listener) {
        return this.addListener(eventName, __privateMethod(this, _wrapOnceListener, wrapOnceListener_fn).call(this, eventName, listener));
      }
      prependListener(eventName, listener) {
        const listeners = __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName);
        if (listeners.length > 0) {
          const nextListeners = [listener].concat(listeners);
          __privateGet(this, _events).set(eventName, nextListeners);
        } else {
          __privateGet(this, _events).set(eventName, listeners.concat(listener));
        }
        return this;
      }
      prependOnceListener(eventName, listener) {
        return this.prependListener(eventName, __privateMethod(this, _wrapOnceListener, wrapOnceListener_fn).call(this, eventName, listener));
      }
      removeListener(eventName, listener) {
        const listeners = __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName);
        if (listeners.length > 0) {
          __privateMethod(this, _removeListener, removeListener_fn).call(this, listeners, listener);
          __privateGet(this, _events).set(eventName, listeners);
          __privateMethod(this, _internalEmit, internalEmit_fn).call(this, "removeListener", eventName, listener);
        }
        return this;
      }
      off(eventName, listener) {
        return this.removeListener(eventName, listener);
      }
      removeAllListeners(eventName) {
        if (eventName) {
          __privateGet(this, _events).delete(eventName);
        } else {
          __privateGet(this, _events).clear();
        }
        return this;
      }
      listeners(eventName) {
        return Array.from(__privateMethod(this, _getListeners, getListeners_fn).call(this, eventName));
      }
      listenerCount(eventName) {
        return __privateMethod(this, _getListeners, getListeners_fn).call(this, eventName).length;
      }
      rawListeners(eventName) {
        return this.listeners(eventName);
      }
    };
    var Emitter2 = _Emitter;
    _events = new WeakMap();
    _maxListeners = new WeakMap();
    _hasWarnedAboutPotentialMemortyLeak = new WeakMap();
    _getListeners = new WeakSet();
    getListeners_fn = function(eventName) {
      return __privateGet(this, _events).get(eventName) || [];
    };
    _removeListener = new WeakSet();
    removeListener_fn = function(listeners, listener) {
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
      return [];
    };
    _wrapOnceListener = new WeakSet();
    wrapOnceListener_fn = function(eventName, listener) {
      const onceListener = (...data) => {
        this.removeListener(eventName, onceListener);
        listener.apply(this, data);
      };
      return onceListener;
    };
    _internalEmit = new WeakSet();
    internalEmit_fn = function(internalEventName, eventName, listener) {
      this.emit(
        internalEventName,
        ...[eventName, listener]
      );
    };
    __publicField(Emitter2, "defaultMaxListeners", 10);
    exports.Emitter = Emitter2;
  }
});

// ../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js
var require_lib2 = __commonJS({
  "../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_Emitter(), exports);
    __exportStar(require_MemoryLeakError(), exports);
  }
});

// src/messages.ts
var import_cuid = __toESM(require_cuid());
var import_outvariant = __toESM(require_lib());
var import_deferred_promise = __toESM(require_build());

// src/logger.ts
var FLAG = window.localStorage["CSB_EMULATOR_DEBUG"];
var DEFAULT = "\x1B[0m";
var GREEN = "\x1B[32;1m";
var RED = "\x1B[31m";
var BLUE = "\x1B[34m";
var YELLOW = "\x1B[33;1m";
var MAGENTA = "\x1B[35;1m";
var CYAN = "\x1B[36;1m";
var COLOR_SCOPE = {
  preview: YELLOW,
  emulator: MAGENTA,
  runtime: CYAN,
  bridge: BLUE,
  "runtime:worker": CYAN
};
function createDebug(scope) {
  return function debug3(message, ...data) {
    if (FLAG === "true") {
      const direction = () => {
        if (message.includes("sender"))
          return `${GREEN}sender`;
        if (message.includes("receiver"))
          return `${RED}receiver`;
        return "";
      };
      const cleanMessage = message.replace(/\[.+\]:/, "");
      console.log(`${COLOR_SCOPE[scope]}${scope}:${direction()}${DEFAULT}:${cleanMessage}`, ...data);
    }
  };
}

// src/messages.ts
var debug = createDebug("emulator");
var MessageReceiver = class {
  emitter;
  senderPort = null;
  constructor() {
    this.emitter = new EventTarget();
    this.waitForHandshake();
  }
  waitForHandshake() {
    const handshakePromise = new import_deferred_promise.DeferredPromise();
    const handshakeListener = (message) => {
      const { data } = message;
      debug("[message-receiver]: incoming", message);
      if (data.type === "internal/handshake") {
        (0, import_outvariant.invariant)(
          message.ports.length > 0,
          "Failed to confirm a MessageReceiver handshake: received event has no ports"
        );
        this.senderPort = message.ports[0];
        this.addMessageListener();
        debug("[message-receiver]: handshake received!", this.senderPort);
        this.send("internal/handshake/done");
        debug("[message-receiver]: finish handshake");
      }
    };
    window.addEventListener("message", handshakeListener);
    handshakePromise.then(() => {
      window.removeEventListener("message", handshakeListener);
    });
    window.parent.postMessage({ type: "internal/ready" }, "*");
    return handshakePromise;
  }
  addMessageListener() {
    (0, import_outvariant.invariant)(
      this.senderPort,
      "[MessageReceiver] Failed to add a message listener: sender port is not defined. Did you forget to await a handshake?"
    );
    this.senderPort.onmessage = (evt) => {
      const data = evt.data;
      if (data.type == null) {
        return;
      }
      this.emitter.dispatchEvent(
        new MessageEvent(data.type, {
          data: data.payload
        })
      );
    };
  }
  on(event, listener, options) {
    this.emitter.addEventListener(
      event,
      async (message) => {
        if (!(message instanceof MessageEvent)) {
          return;
        }
        const { operationId, payload } = message.data;
        try {
          const listenerPayload = await listener(payload);
          this.send("internal/operation/done", { operationId, listenerPayload });
        } catch (error) {
          if (error instanceof Error) {
            this.send("internal/operation/failed", { operationId, error });
          }
        }
      },
      options
    );
  }
  send(event, ...data) {
    (0, import_outvariant.invariant)(
      this.senderPort,
      '[MessageReceiver] Failed to send a message "%j": sender port is not defined. Did you forget to await a handshake?',
      event
    );
    const payload = data[0] || {};
    debug('[message-receiver]: send "%s"', event, payload);
    this.senderPort.postMessage({ type: event, payload });
  }
};
var MessageSender = class {
  constructor(target) {
    this.target = target;
    this.emitter = new EventTarget();
    this.channel = new MessageChannel();
    this.receiverPort = this.channel.port1;
    const receiverReadyPromise = new import_deferred_promise.DeferredPromise();
    const handshakeListener = (message) => {
      if (message.data.type === "internal/ready") {
        debug("[message-sender]: runtime is ready");
        receiverReadyPromise.resolve();
      }
    };
    window.addEventListener("message", handshakeListener);
    receiverReadyPromise.then(() => {
      window.removeEventListener("message", handshakeListener);
    });
    this.receiverReadyPromise = receiverReadyPromise;
    this.receiverPort.onmessage = (evt) => {
      const data = evt.data;
      if (data.type != null) {
        debug('[message-sender]: emitting "%s" event...', data.type, data.payload);
        this.emitter.dispatchEvent(new MessageEvent(data.type, { data: data.payload }));
      }
    };
  }
  emitter;
  channel;
  receiverPort;
  receiverReadyPromise;
  async handshake() {
    const handshakePromise = new import_deferred_promise.DeferredPromise();
    await this.receiverReadyPromise;
    debug("[message-sender]: sending handshake");
    this.target.postMessage(
      {
        type: "internal/handshake"
      },
      "*",
      [this.channel.port2]
    );
    this.on("internal/handshake/done", () => {
      handshakePromise.resolve();
      clearTimeout(rejectionTimeout);
    });
    const rejectionTimeout = setTimeout(() => {
      handshakePromise.reject(new Error("MessageSender: Handshake timeout"));
    }, 5e3);
    return handshakePromise;
  }
  on(event, listener, options) {
    debug('[message-sender]: add listener "%s"', event);
    this.emitter.addEventListener(
      event,
      (message) => {
        if (message instanceof MessageEvent) {
          listener(message);
        }
      },
      options
    );
  }
  off(event, listener, options) {
    this.emitter.removeEventListener(event, listener, options);
  }
  async send(event, ...data) {
    const operationPromise = new import_deferred_promise.DeferredPromise();
    const operationId = (0, import_cuid.default)();
    const payload = data[0] || {};
    debug('[message-sender]: send "%s" (%s)', event, operationId, payload);
    this.receiverPort.postMessage({ type: event, payload: { operationId, payload } });
    debug('[message-sender]: adding done listener for "%s" (%s)', event, operationId);
    const handleOperationDone = (doneEvent) => {
      const { data: data2 } = doneEvent;
      if (data2.operationId === operationId) {
        const listenerPayload = data2.listenerPayload || {};
        debug('[message-sender]: resolving "%s (%s) promise!', event, operationId);
        operationPromise.resolve({
          ...listenerPayload,
          operationId: data2.operationId
        });
      }
    };
    const handleOperationFailed = (failEvent) => {
      const { data: data2 } = failEvent;
      if (data2.operationId === operationId) {
        debug('[message-sender]: rejecting "%s (%s) promise!', event, operationId);
        operationPromise.reject(data2.error);
      }
    };
    this.on("internal/operation/done", handleOperationDone);
    this.on("internal/operation/failed", handleOperationFailed);
    return operationPromise.finally(() => {
      this.emitter.removeEventListener("internal/operation/done", handleOperationDone);
      this.emitter.removeEventListener("internal/operation/failed", handleOperationFailed);
    });
  }
};

// src/Nodebox.ts
var import_outvariant5 = __toESM(require_lib());
var import_deferred_promise3 = __toESM(require_build());

// src/modules/fs.ts
var import_cuid2 = __toESM(require_cuid());
var import_outvariant2 = __toESM(require_lib());
var FileSystemApi = class {
  constructor(channel) {
    this.channel = channel;
  }
  async init(files) {
    await this.channel.send("fs/init", { files });
  }
  async readFile(path, encoding) {
    const response = await this.channel.send("fs/readFile", { path, encoding }).catch((error) => {
      throw new Error((0, import_outvariant2.format)('Failed to read file at path "%s"', path), { cause: error });
    });
    if (!response) {
      throw new Error("File not found");
    }
    return response.data;
  }
  async writeFile(path, content, options) {
    let encoding = void 0;
    let recursive = false;
    if (typeof options === "object") {
      encoding = options.encoding;
      recursive = !!options.recursive;
    } else if (typeof options === "string") {
      encoding = options;
    }
    await this.channel.send("fs/writeFile", { path, content, encoding, recursive }).catch((error) => {
      throw new Error((0, import_outvariant2.format)('Failed to write file at path "%s"', path), { cause: error });
    });
  }
  async readdir(path) {
    const response = await this.channel.send("fs/readdir", { path }).catch((error) => {
      throw new Error((0, import_outvariant2.format)('Failed to read directory at path "%s"', path), { cause: error });
    });
    if (!response) {
      throw new Error("Directory not found");
    }
    return response.data;
  }
  async mkdir(path, options) {
    const recursive = !!options?.recursive;
    await this.channel.send("fs/mkdir", { path, recursive }).catch((error) => {
      throw new Error((0, import_outvariant2.format)('Failed to make directory at path "%s"', path), { cause: error });
    });
  }
  async stat(path) {
    const response = await this.channel.send("fs/stat", { path }).catch((error) => {
      throw new Error((0, import_outvariant2.format)('Failed to stat file at path "%s"', path), { cause: error });
    });
    if (!response) {
      throw new Error("File not found");
    }
    return response.data;
  }
  async watch(includes, excludes, listener) {
    const watcherId = (0, import_cuid2.default)();
    await this.channel.send("fs/watch", { watcherId, includes, excludes });
    this.channel.on("fs/watch-event", ({ data }) => {
      if (data.watcherId === watcherId && listener) {
        const evt = { ...data };
        delete evt.watcherId;
        listener(evt);
      }
    });
    return {
      dispose: () => this.channel.send("fs/unwatch", { watcherId })
    };
  }
};

// src/modules/shell.ts
var import_outvariant3 = __toESM(require_lib());
var import_strict_event_emitter = __toESM(require_lib2());
var ShellApi = class {
  constructor(channel) {
    this.channel = channel;
  }
  create() {
    return new ShellProcess(this.channel);
  }
};
var ShellProcess = class {
  constructor(channel) {
    this.channel = channel;
    this.state = "running";
    this.stdout = new import_strict_event_emitter.Emitter();
    this.stderr = new import_strict_event_emitter.Emitter();
    this.stdin = {
      write: (data) => {
        if (!this.id) {
          throw new Error("Failed to write to stdin, no process is currently running");
        }
        return this.channel.send("shell/stdin", { data, workerId: this.id });
      }
    };
    this.forwardStdEvents();
  }
  id;
  state;
  stdout;
  stderr;
  stdin;
  forwardStdEvents() {
    this.channel.on("worker/tty", (message) => {
      const { data } = message;
      if (data.workerId !== this.id) {
        return;
      }
      switch (data.payload.type) {
        case "out": {
          this.stdout.emit("data", data.payload.data);
          break;
        }
        case "err": {
          this.stderr.emit("data", data.payload.data);
          break;
        }
      }
    });
  }
  async runCommand(command, args, options = {}) {
    (0, import_outvariant3.invariant)(!this.id, 'Failed to run "runCommand" on a ShellProcess: there is already a process running.');
    const shellInfo = await this.channel.send("shell/runCommand", { command, args, options });
    (0, import_outvariant3.invariant)(shellInfo, 'Failed to run "runCommand" on a ShellProcess: was not able to retrieve a running process.');
    this.id = shellInfo.id;
    this.state = "running";
    return shellInfo;
  }
  async on(message, listener) {
    switch (message) {
      case "progress": {
        this.channel.on("worker/progress", ({ data }) => {
          listener(data.status);
        });
        return;
      }
      case "exit": {
        this.channel.on("worker/exit", ({ data }) => {
          if (data.workerId === this.id) {
            listener(data.exitCode, data.error);
          }
        });
        return;
      }
    }
  }
  async kill() {
    (0, import_outvariant3.invariant)(
      this.id,
      'Failed to run "kill" on a ShellProcess: there is no process running. Did you forget to run it?'
    );
    this.state = "idle";
    await this.channel.send("shell/exit", { id: this.id }).catch((error) => {
      throw new Error((0, import_outvariant3.format)('Failed to kill shell with ID "%s"', this.id), { cause: error });
    });
    this.id = void 0;
  }
};

// src/modules/preview.ts
var import_outvariant4 = __toESM(require_lib());
var import_deferred_promise2 = __toESM(require_build());
var TIMEOUT = 2e4;
var PreviewApi = class {
  constructor(channel) {
    this.channel = channel;
  }
  async waitFor(payload, predicate, timeout = TIMEOUT) {
    const readyPromise = new import_deferred_promise2.DeferredPromise();
    const rejectTimeout = setTimeout(() => {
      readyPromise.reject();
    }, timeout);
    const previewInformation = await this.channel.send("preview/get/info", payload).catch((error) => {
      readyPromise.reject(
        new Error(
          (0, import_outvariant4.format)(
            'Failed to look up preview information for shell ID "%s" (port: %d)',
            payload.sourceShellId,
            payload.port
          )
        )
      );
    });
    const foundPreview = previewInformation && predicate(previewInformation);
    if (foundPreview) {
      readyPromise.resolve({
        url: previewInformation.url,
        port: previewInformation.port,
        sourceShellId: previewInformation.sourceShellId
      });
    }
    this.channel.on("preview/port/ready", ({ data }) => {
      if (!foundPreview && predicate(data)) {
        readyPromise.resolve({
          url: data.url,
          port: data.port,
          sourceShellId: data.sourceShellId
        });
      }
    });
    return readyPromise.finally(() => {
      clearTimeout(rejectTimeout);
    });
  }
  async getByShellId(sourceShellId, timeout) {
    return this.waitFor({ sourceShellId }, (data) => data.sourceShellId === sourceShellId, timeout).catch((error) => {
      throw new Error((0, import_outvariant4.format)('Failed to get shell by ID "%s"', sourceShellId), { cause: error });
    });
  }
  async waitForPort(port, timeout) {
    return this.waitFor({ port }, (data) => data.port === port, timeout).catch((error) => {
      throw new Error((0, import_outvariant4.format)("Failed to await port %d", port), { cause: error });
    });
  }
};

// src/Nodebox.ts
var DEFAULT_RUNTIME_URL = "https://nodebox-runtime.codesandbox.io";
var debug2 = createDebug("emulator");
var Nodebox = class {
  constructor(options) {
    this.options = options;
    (0, import_outvariant5.invariant)(
      this.options.iframe,
      'Failed to create a Nodebox: expected "iframe" argument to be a reference to an <iframe> element but got %j',
      this.options.iframe
    );
    this.url = this.options.runtimeUrl || DEFAULT_RUNTIME_URL;
    this.isConnected = false;
  }
  channel = null;
  isConnected;
  url;
  fileSystemApi = null;
  shellApi = null;
  previewApi = null;
  async connect() {
    const { iframe, cdnUrl } = this.options;
    debug2("[message-sender]: Connecting to node emulator...");
    const connectionPromise = new import_deferred_promise3.DeferredPromise();
    if (!this.url) {
      connectionPromise.reject(
        new Error("Nodebox URL is missing. Did you forget to provide it when creating this Nodebox instance?")
      );
    }
    (0, import_outvariant5.invariant)(
      iframe.contentWindow,
      "Failed to create a MessageChannel with the Nodebox iframe: no content window found"
    );
    this.channel = new MessageSender(iframe.contentWindow);
    const frameLoadPromise = new import_deferred_promise3.DeferredPromise();
    iframe.setAttribute("src", this.url);
    iframe.addEventListener(
      "load",
      () => {
        frameLoadPromise.resolve();
      },
      { once: true }
    );
    iframe.addEventListener(
      "error",
      (event) => {
        frameLoadPromise.reject(event.error);
      },
      { once: true }
    );
    await frameLoadPromise;
    debug2("[message-sender]: IFrame loaded...");
    await this.channel.handshake();
    debug2("[message-sender]: Handshake completed...");
    this.channel.send("connect", {
      cdnUrl
    });
    this.channel.on("runtime/ready", () => {
      connectionPromise.resolve();
    });
    return connectionPromise.then(() => {
      debug2("[message-sender]: Connected to runtime...");
      this.isConnected = true;
    });
  }
  get fs() {
    (0, import_outvariant5.invariant)(
      this.isConnected,
      'Failed to access the File System API: consumer is not connected. Did you forget to run "connect()"?'
    );
    if (this.fileSystemApi) {
      return this.fileSystemApi;
    }
    this.fileSystemApi = new FileSystemApi(this.channel);
    return this.fileSystemApi;
  }
  get shell() {
    (0, import_outvariant5.invariant)(
      this.isConnected,
      'Failed to access the Shell API: consumer is not connected. Did you forget to run "connect()"?'
    );
    if (this.shellApi) {
      return this.shellApi;
    }
    this.shellApi = new ShellApi(this.channel);
    return this.shellApi;
  }
  get preview() {
    (0, import_outvariant5.invariant)(
      this.isConnected,
      'Failed to access the Preview API: consumer is not connected. Did you forget to run "connect()"?'
    );
    if (this.previewApi) {
      return this.previewApi;
    }
    this.previewApi = new PreviewApi(this.channel);
    return this.previewApi;
  }
};

// src/runtime-protocol.types.ts
var INJECT_MESSAGE_TYPE = "INJECT_AND_INVOKE";
var PREVIEW_LOADED_MESSAGE_TYPE = "PREVIEW_LOADED";


// EXTERNAL MODULE: ../node_modules/@codesandbox/sandpack-client/dist/base-3665f77c.mjs
var base_3665f77c = __webpack_require__(45891);
// EXTERNAL MODULE: ../node_modules/outvariant/lib/index.js
var lib = __webpack_require__(12284);
// EXTERNAL MODULE: ../node_modules/dequal/dist/index.mjs
var dist = __webpack_require__(6701);
;// CONCATENATED MODULE: ../node_modules/@codesandbox/sandpack-client/dist/clients/node/index.mjs







var writeBuffer = function (content, encoding) {
    if (encoding === void 0) { encoding = "utf8"; }
    if (typeof content === "string") {
        return external_buffer_.Buffer.from(content, encoding);
    }
    else {
        return content;
    }
};
var readBuffer = function (content) {
    if (typeof content === "string")
        return content;
    return external_buffer_.Buffer.from(content).toString("utf-8");
};
var fromBundlerFilesToFS = function (files) {
    return Object.entries(files).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        acc[key] = writeBuffer(value.code);
        return acc;
    }, {});
};
/**
 * Figure out which script it must run to start a server
 */
var findStartScriptPackageJson = function (packageJson) {
    var _a;
    var scripts = {};
    var possibleKeys = ["dev", "start"];
    try {
        scripts = JSON.parse(packageJson).scripts;
    }
    catch (e) {
        throw (0,types_965d4afd.c)("Could not parse package.json file: " + e.message);
    }
    (0,lib.invariant)(scripts, "Failed to start. Please provide a `start` or `dev` script on the package.json");
    for (var index = 0; index < possibleKeys.length; index++) {
        if (possibleKeys[index] in scripts) {
            var script = possibleKeys[index];
            var candidate = scripts[script];
            var env = (_a = candidate
                .match(/(\w+=\w+;)*\w+=\w+/g)) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, curr) {
                var _a = curr.split("="), key = _a[0], value = _a[1];
                acc[key] = value;
                return acc;
            }, {});
            var _b = candidate
                .replace(/(\w+=\w+;)*\w+=\w+/g, "")
                .trim()
                .split(" "), command = _b[0], args = _b.slice(1);
            return [command, args, { env: env }];
        }
    }
    throw (0,types_965d4afd.c)("Failed to start. Please provide a `start` or `dev` script on the package.json");
};
var getMessageFromError = function (error) {
    if (typeof error === "string")
        return error;
    if (typeof error === "object" && "message" in error) {
        return error.message;
    }
    return (0,types_965d4afd.c)("The server could not be reached. Make sure that the node script is running and that a port has been started.");
};

var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.listeners = {};
        this.listenersCount = 0;
        this.channelId = Math.floor(Math.random() * 1000000);
        this.listeners = [];
    }
    EventEmitter.prototype.cleanup = function () {
        this.listeners = {};
        this.listenersCount = 0;
    };
    EventEmitter.prototype.dispatch = function (message) {
        Object.values(this.listeners).forEach(function (listener) { return listener(message); });
    };
    EventEmitter.prototype.listener = function (listener) {
        var _this = this;
        if (typeof listener !== "function") {
            return function () {
                return;
            };
        }
        var listenerId = this.listenersCount;
        this.listeners[listenerId] = listener;
        this.listenersCount++;
        return function () {
            delete _this.listeners[listenerId];
        };
    };
    return EventEmitter;
}());

function loadPreviewIframe(iframe, url) {
    return (0,types_965d4afd._)(this, void 0, void 0, function () {
        var contentWindow, TIME_OUT, MAX_MANY_TIRES, tries, timeout;
        return (0,types_965d4afd.a)(this, function (_a) {
            contentWindow = iframe.contentWindow;
            (0,types_965d4afd.n)(contentWindow, "Failed to await preview iframe: no content window found");
            TIME_OUT = 3000;
            MAX_MANY_TIRES = 20;
            tries = 0;
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var triesToSetUrl = function () {
                        var onLoadPage = function () {
                            clearTimeout(timeout);
                            tries = MAX_MANY_TIRES;
                            resolve();
                            iframe.removeEventListener("load", onLoadPage);
                        };
                        if (tries >= MAX_MANY_TIRES) {
                            reject((0,types_965d4afd.c)("Could not able to connect to preview."));
                            return;
                        }
                        iframe.setAttribute("src", url);
                        timeout = setTimeout(function () {
                            triesToSetUrl();
                            iframe.removeEventListener("load", onLoadPage);
                        }, TIME_OUT);
                        tries = tries + 1;
                        iframe.addEventListener("load", onLoadPage);
                    };
                    iframe.addEventListener("error", function () { return reject(new Error("Iframe error")); });
                    iframe.addEventListener("abort", function () { return reject(new Error("Aborted")); });
                    triesToSetUrl();
                })];
        });
    });
}
var setPreviewIframeProperties = function (iframe, options) {
    iframe.style.border = "0";
    iframe.style.width = options.width || "100%";
    iframe.style.height = options.height || "100%";
    iframe.style.overflow = "hidden";
    iframe.allow = "cross-origin-isolated";
};

var consoleHook = "var t=\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof window?window:\"undefined\"!=typeof globalThis?globalThis:\"undefined\"!=typeof self?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,\"default\")?t.default:t}var e={},n={};!function(t){t.__esModule=!0,t.default=[\"log\",\"debug\",\"info\",\"warn\",\"error\",\"table\",\"clear\",\"time\",\"timeEnd\",\"count\",\"assert\",\"command\",\"result\"]}(n);var a,o={},i={};(a=i).__esModule=!0,a.default=function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+\"-\"+t()+\"-\"+t()+\"-\"+t()+\"-\"+t()+\"-\"+Date.now()};var u={},s={__esModule:!0};s.update=s.state=void 0,s.update=function(t){s.state=t};var f={},c={};!function(r){var e=t&&t.__assign||function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},e.apply(this,arguments)};r.__esModule=!0,r.initialState=void 0,r.initialState={timings:{},count:{}};var n=function(){return\"undefined\"!=typeof performance&&performance.now?performance.now():Date.now()};r.default=function(t,a){var o,i,u;switch(void 0===t&&(t=r.initialState),a.type){case\"COUNT\":var s=t.count[a.name]||0;return e(e({},t),{count:e(e({},t.count),(o={},o[a.name]=s+1,o))});case\"TIME_START\":return e(e({},t),{timings:e(e({},t.timings),(i={},i[a.name]={start:n()},i))});case\"TIME_END\":var f=t.timings[a.name],c=n(),l=c-f.start;return e(e({},t),{timings:e(e({},t.timings),(u={},u[a.name]=e(e({},f),{end:c,time:l}),u))});default:return t}}}(c),function(r){var e=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r.__esModule=!0;var n=e(c),a=s;r.default=function(t){a.update(n.default(a.state,t))}}(f);var l={__esModule:!0};l.timeEnd=l.timeStart=l.count=void 0,l.count=function(t){return{type:\"COUNT\",name:t}},l.timeStart=function(t){return{type:\"TIME_START\",name:t}},l.timeEnd=function(t){return{type:\"TIME_END\",name:t}};var d=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};u.__esModule=!0,u.stop=u.start=void 0;var p=s,h=d(f),m=l;u.start=function(t){h.default(m.timeStart(t))},u.stop=function(t){var r=null===p.state||void 0===p.state?void 0:p.state.timings[t];return r&&!r.end?(h.default(m.timeEnd(t)),{method:\"log\",data:[t+\": \"+p.state.timings[t].time+\"ms\"]}):{method:\"warn\",data:[\"Timer '\"+t+\"' does not exist\"]}};var y={},v=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};y.__esModule=!0,y.increment=void 0;var _=s,b=v(f),g=l;y.increment=function(t){return b.default(g.count(t)),{method:\"log\",data:[t+\": \"+_.state.count[t]]}};var M={},T=t&&t.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),a=0;for(r=0;r<e;r++)for(var o=arguments[r],i=0,u=o.length;i<u;i++,a++)n[a]=o[i];return n};M.__esModule=!0,M.test=void 0,M.test=function(t){for(var r=[],e=1;e<arguments.length;e++)r[e-1]=arguments[e];return!t&&(0===r.length&&r.push(\"console.assert\"),{method:\"error\",data:T([\"Assertion failed:\"],r)})},function(r){var e=t&&t.__assign||function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},e.apply(this,arguments)},n=t&&t.__createBinding||(Object.create?function(t,r,e,n){void 0===n&&(n=e),Object.defineProperty(t,n,{enumerable:!0,get:function(){return r[e]}})}:function(t,r,e,n){void 0===n&&(n=e),t[n]=r[e]}),a=t&&t.__setModuleDefault||(Object.create?function(t,r){Object.defineProperty(t,\"default\",{enumerable:!0,value:r})}:function(t,r){t.default=r}),o=t&&t.__importStar||function(t){if(t&&t.__esModule)return t;var r={};if(null!=t)for(var e in t)\"default\"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&n(r,t,e);return a(r,t),r},s=t&&t.__spreadArrays||function(){for(var t=0,r=0,e=arguments.length;r<e;r++)t+=arguments[r].length;var n=Array(t),a=0;for(r=0;r<e;r++)for(var o=arguments[r],i=0,u=o.length;i<u;i++,a++)n[a]=o[i];return n},f=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r.__esModule=!0;var c=f(i),l=o(u),d=o(y),p=o(M);r.default=function(t,r,n){var a=n||c.default();switch(t){case\"clear\":return{method:t,id:a};case\"count\":return!!(o=\"string\"==typeof r[0]?r[0]:\"default\")&&e(e({},d.increment(o)),{id:a});case\"time\":case\"timeEnd\":var o;return!!(o=\"string\"==typeof r[0]?r[0]:\"default\")&&(\"time\"===t?(l.start(o),!1):e(e({},l.stop(o)),{id:a}));case\"assert\":if(0!==r.length){var i=p.test.apply(p,s([r[0]],r.slice(1)));if(i)return e(e({},i),{id:a})}return!1;case\"error\":return{method:t,id:a,data:r.map((function(t){try{return t.stack||t}catch(r){return t}}))};default:return{method:t,id:a,data:r}}}}(o);var S={},O={};!function(t){var r;t.__esModule=!0,function(t){t[t.infinity=0]=\"infinity\",t[t.minusInfinity=1]=\"minusInfinity\",t[t.minusZero=2]=\"minusZero\"}(r||(r={})),t.default={type:\"Arithmetic\",lookup:Number,shouldTransform:function(t,r){return\"number\"===t&&(r===1/0||r===-1/0||function(t){return 1/t==-1/0}(r))},toSerializable:function(t){return t===1/0?r.infinity:t===-1/0?r.minusInfinity:r.minusZero},fromSerializable:function(t){return t===r.infinity?1/0:t===r.minusInfinity?-1/0:t===r.minusZero?-0:t}}}(O);var w={};!function(t){t.__esModule=!0,t.default={type:\"Function\",lookup:Function,shouldTransform:function(t,r){return\"function\"==typeof r},toSerializable:function(t){var r=\"\";try{r=t.toString().substring(r.indexOf(\"{\")+1,r.lastIndexOf(\"}\"))}catch(t){}return{name:t.name,body:r,proto:Object.getPrototypeOf(t).constructor.name}},fromSerializable:function(t){try{var r=function(){};return\"string\"==typeof t.name&&Object.defineProperty(r,\"name\",{value:t.name,writable:!1}),\"string\"==typeof t.body&&Object.defineProperty(r,\"body\",{value:t.body,writable:!1}),\"string\"==typeof t.proto&&(r.constructor={name:t.proto}),r}catch(r){return t}}}}(w);var A={};!function(t){var r;function e(t){for(var r={},e=0,n=t.attributes;e<n.length;e++){var a=n[e];r[a.name]=a.value}return r}t.__esModule=!0,t.default={type:\"HTMLElement\",shouldTransform:function(t,r){return r&&r.children&&\"string\"==typeof r.innerHTML&&\"string\"==typeof r.tagName},toSerializable:function(t){return{tagName:t.tagName.toLowerCase(),attributes:e(t),innerHTML:t.innerHTML}},fromSerializable:function(t){try{var e=(r||(r=document.implementation.createHTMLDocument(\"sandbox\"))).createElement(t.tagName);e.innerHTML=t.innerHTML;for(var n=0,a=Object.keys(t.attributes);n<a.length;n++){var o=a[n];try{e.setAttribute(o,t.attributes[o])}catch(t){}}return e}catch(r){return t}}}}(A);var j={};!function(r){var e=t&&t.__assign||function(){return e=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},e.apply(this,arguments)};r.__esModule=!0,r.default={type:\"Map\",shouldTransform:function(t,r){return r&&r.constructor&&\"Map\"===r.constructor.name},toSerializable:function(t){var r={};return t.forEach((function(t,e){var n=\"object\"==typeof e?JSON.stringify(e):e;r[n]=t})),{name:\"Map\",body:r,proto:Object.getPrototypeOf(t).constructor.name}},fromSerializable:function(t){var r=t.body,n=e({},r);return\"string\"==typeof t.proto&&(n.constructor={name:t.proto}),n}}}(j);var z={};!function(t){t.__esModule=!0;var r=\"@t\",e=/^#*@(t|r)$/,n=(0,eval)(\"this\"),a=\"function\"==typeof ArrayBuffer,o=\"function\"==typeof Map,i=\"function\"==typeof Set,u=[\"Int8Array\",\"Uint8Array\",\"Uint8ClampedArray\",\"Int16Array\",\"Uint16Array\",\"Int32Array\",\"Uint32Array\",\"Float32Array\",\"Float64Array\"],s=Array.prototype.slice,f={serialize:function(t){return JSON.stringify(t)},deserialize:function(t){return JSON.parse(t)}},c=function(){function t(t,r){this.references=t,this.transforms=r,this.transformsMap=this._makeTransformsMap(),this.circularCandidates=[],this.circularCandidatesDescrs=[],this.circularRefCount=0}return t._createRefMark=function(t){var r=Object.create(null);return r[\"@r\"]=t,r},t.prototype._createCircularCandidate=function(t,r,e){this.circularCandidates.push(t),this.circularCandidatesDescrs.push({parent:r,key:e,refIdx:-1})},t.prototype._applyTransform=function(t,e,n,a){var o=Object.create(null),i=a.toSerializable(t);return\"object\"==typeof i&&this._createCircularCandidate(t,e,n),o[r]=a.type,o.data=this._handleValue((function(){return i}),e,n),o},t.prototype._handleArray=function(t){for(var r=[],e=function(e){r[e]=n._handleValue((function(){return t[e]}),r,e)},n=this,a=0;a<t.length;a++)e(a);return r},t.prototype._handlePlainObject=function(t){var r,n,a=Object.create(null),o=function(r){if(Reflect.has(t,r)){var n=e.test(r)?\"#\"+r:r;a[n]=i._handleValue((function(){return t[r]}),a,n)}},i=this;for(var u in t)o(u);var s=null===(n=null===(r=null==t?void 0:t.__proto__)||void 0===r?void 0:r.constructor)||void 0===n?void 0:n.name;return s&&\"Object\"!==s&&(a.constructor={name:s}),a},t.prototype._handleObject=function(t,r,e){return this._createCircularCandidate(t,r,e),Array.isArray(t)?this._handleArray(t):this._handlePlainObject(t)},t.prototype._ensureCircularReference=function(r){var e=this.circularCandidates.indexOf(r);if(e>-1){var n=this.circularCandidatesDescrs[e];return-1===n.refIdx&&(n.refIdx=n.parent?++this.circularRefCount:0),t._createRefMark(n.refIdx)}return null},t.prototype._handleValue=function(t,r,e){try{var n=t(),a=typeof n,o=\"object\"===a&&null!==n;if(o){var i=this._ensureCircularReference(n);if(i)return i}var u=this._findTransform(a,n);return u?this._applyTransform(n,r,e,u):o?this._handleObject(n,r,e):n}catch(t){try{return this._handleValue((function(){return t instanceof Error?t:new Error(t)}),r,e)}catch(t){return null}}},t.prototype._makeTransformsMap=function(){if(o){var t=new Map;return this.transforms.forEach((function(r){r.lookup&&t.set(r.lookup,r)})),t}},t.prototype._findTransform=function(t,r){if(o&&r&&r.constructor&&(null==(a=this.transformsMap.get(r.constructor))?void 0:a.shouldTransform(t,r)))return a;for(var e=0,n=this.transforms;e<n.length;e++){var a;if((a=n[e]).shouldTransform(t,r))return a}},t.prototype.transform=function(){for(var r=this,e=[this._handleValue((function(){return r.references}),null,null)],n=0,a=this.circularCandidatesDescrs;n<a.length;n++){var o=a[n];o.refIdx>0&&(e[o.refIdx]=o.parent[o.key],o.parent[o.key]=t._createRefMark(o.refIdx))}return e},t}(),l=function(){function t(t,r){this.activeTransformsStack=[],this.visitedRefs=Object.create(null),this.references=t,this.transformMap=r}return t.prototype._handlePlainObject=function(t){var r=Object.create(null);for(var n in\"constructor\"in t&&(t.constructor&&\"string\"==typeof t.constructor.name||(t.constructor={name:\"Object\"})),t)t.hasOwnProperty(n)&&(this._handleValue(t[n],t,n),e.test(n)&&(r[n.substring(1)]=t[n],delete t[n]));for(var a in r)t[a]=r[a]},t.prototype._handleTransformedObject=function(t,e,n){var a=t[r],o=this.transformMap[a];if(!o)throw new Error(\"Can't find transform for \\\"\"+a+'\" type.');this.activeTransformsStack.push(t),this._handleValue(t.data,t,\"data\"),this.activeTransformsStack.pop(),e[n]=o.fromSerializable(t.data)},t.prototype._handleCircularSelfRefDuringTransform=function(t,r,e){var n=this.references;Object.defineProperty(r,e,{val:void 0,configurable:!0,enumerable:!0,get:function(){return void 0===this.val&&(this.val=n[t]),this.val},set:function(t){this.val=t}})},t.prototype._handleCircularRef=function(t,r,e){this.activeTransformsStack.includes(this.references[t])?this._handleCircularSelfRefDuringTransform(t,r,e):(this.visitedRefs[t]||(this.visitedRefs[t]=!0,this._handleValue(this.references[t],this.references,t)),r[e]=this.references[t])},t.prototype._handleValue=function(t,e,n){if(\"object\"==typeof t&&null!==t){var a=t[\"@r\"];if(void 0!==a)this._handleCircularRef(a,e,n);else if(t[r])this._handleTransformedObject(t,e,n);else if(Array.isArray(t))for(var o=0;o<t.length;o++)this._handleValue(t[o],t,o);else this._handlePlainObject(t)}},t.prototype.transform=function(){return this.visitedRefs[0]=!0,this._handleValue(this.references[0],this.references,0),this.references[0]},t}(),d=[{type:\"[[NaN]]\",shouldTransform:function(t,r){return\"number\"===t&&isNaN(r)},toSerializable:function(){return\"\"},fromSerializable:function(){return NaN}},{type:\"[[undefined]]\",shouldTransform:function(t){return\"undefined\"===t},toSerializable:function(){return\"\"},fromSerializable:function(){}},{type:\"[[Date]]\",lookup:Date,shouldTransform:function(t,r){return r instanceof Date},toSerializable:function(t){return t.getTime()},fromSerializable:function(t){var r=new Date;return r.setTime(t),r}},{type:\"[[RegExp]]\",lookup:RegExp,shouldTransform:function(t,r){return r instanceof RegExp},toSerializable:function(t){var r={src:t.source,flags:\"\"};return t.globalThis&&(r.flags+=\"g\"),t.ignoreCase&&(r.flags+=\"i\"),t.multiline&&(r.flags+=\"m\"),r},fromSerializable:function(t){return new RegExp(t.src,t.flags)}},{type:\"[[Error]]\",lookup:Error,shouldTransform:function(t,r){return r instanceof Error},toSerializable:function(t){var r,e;return t.stack||null===(e=(r=Error).captureStackTrace)||void 0===e||e.call(r,t),{name:t.name,message:t.message,stack:t.stack}},fromSerializable:function(t){var r=new(n[t.name]||Error)(t.message);return r.stack=t.stack,r}},{type:\"[[ArrayBuffer]]\",lookup:a&&ArrayBuffer,shouldTransform:function(t,r){return a&&r instanceof ArrayBuffer},toSerializable:function(t){var r=new Int8Array(t);return s.call(r)},fromSerializable:function(t){if(a){var r=new ArrayBuffer(t.length);return new Int8Array(r).set(t),r}return t}},{type:\"[[TypedArray]]\",shouldTransform:function(t,r){if(a)return ArrayBuffer.isView(r)&&!(r instanceof DataView);for(var e=0,o=u;e<o.length;e++){var i=o[e];if(\"function\"==typeof n[i]&&r instanceof n[i])return!0}return!1},toSerializable:function(t){return{ctorName:t.constructor.name,arr:s.call(t)}},fromSerializable:function(t){return\"function\"==typeof n[t.ctorName]?new n[t.ctorName](t.arr):t.arr}},{type:\"[[Map]]\",lookup:o&&Map,shouldTransform:function(t,r){return o&&r instanceof Map},toSerializable:function(t){var r=[];return t.forEach((function(t,e){r.push(e),r.push(t)})),r},fromSerializable:function(t){if(o){for(var r=new Map,e=0;e<t.length;e+=2)r.set(t[e],t[e+1]);return r}for(var n=[],a=0;a<t.length;a+=2)n.push([t[e],t[e+1]]);return n}},{type:\"[[Set]]\",lookup:i&&Set,shouldTransform:function(t,r){return i&&r instanceof Set},toSerializable:function(t){var r=[];return t.forEach((function(t){r.push(t)})),r},fromSerializable:function(t){if(i){for(var r=new Set,e=0;e<t.length;e++)r.add(t[e]);return r}return t}}],p=function(){function t(t){this.transforms=[],this.transformsMap=Object.create(null),this.serializer=t||f,this.addTransforms(d)}return t.prototype.addTransforms=function(t){for(var r=0,e=t=Array.isArray(t)?t:[t];r<e.length;r++){var n=e[r];if(this.transformsMap[n.type])throw new Error('Transform with type \"'+n.type+'\" was already added.');this.transforms.push(n),this.transformsMap[n.type]=n}return this},t.prototype.removeTransforms=function(t){for(var r=0,e=t=Array.isArray(t)?t:[t];r<e.length;r++){var n=e[r],a=this.transforms.indexOf(n);a>-1&&this.transforms.splice(a,1),delete this.transformsMap[n.type]}return this},t.prototype.encode=function(t){var r=new c(t,this.transforms).transform();return this.serializer.serialize(r)},t.prototype.decode=function(t){var r=this.serializer.deserialize(t);return new l(r,this.transformsMap).transform()},t}();t.default=p}(z);var E=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};S.__esModule=!0,S.Decode=P=S.Encode=void 0;var k=E(O),C=E(w),D=E(A),N=E(j),R=E(z),I=[D.default,C.default,k.default,N.default],x=new R.default;x.addTransforms(I);var P=S.Encode=function(t){return JSON.parse(x.encode(t))};S.Decode=function(t){return x.decode(JSON.stringify(t))},function(r){var e=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r.__esModule=!0;var a=e(n),i=e(o),u=S;r.default=function(t,r,e){void 0===e&&(e=!0);for(var n=t,o={pointers:{},src:{npm:\"https://npmjs.com/package/console-feed\",github:\"https://github.com/samdenty99/console-feed\"}},s=function(t){var a=n[t];n[t]=function(){a.apply(this,arguments);var n=[].slice.call(arguments);setTimeout((function(){var a=i.default(t,n);if(a){var o=a;e&&(o=u.Encode(a)),r(o,a)}}))},o.pointers[t]=a},f=0,c=a.default;f<c.length;f++)s(c[f]);return n.feed=o,n}}(e),r(e)(window.console,(function(t){var r=P(t);parent.postMessage({type:\"console\",codesandbox:!0,log:Array.isArray(r)?r[0]:r},\"*\")}));\n";

/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/explicit-function-return-type, no-restricted-globals */
function setupHistoryListeners() {
    // @ts-ignore
    var origHistoryProto = window.history.__proto__;
    var historyList = [];
    var historyPosition = 0;
    var dispatchMessage = function (url) {
        parent.postMessage({
            type: "urlchange",
            url: url,
            back: historyPosition > 0,
            forward: historyPosition < historyList.length - 1
        }, "*");
    };
    function pushHistory(url, state) {
        // remove "future" locations
        historyList.splice(historyPosition + 1);
        historyList.push({ url: url, state: state });
        historyPosition = historyList.length - 1;
    }
    Object.assign(window.history, {
        go: function (delta) {
            var newPos = historyPosition + delta;
            if (newPos >= 0 && newPos <= historyList.length - 1) {
                historyPosition = newPos;
                var _a = historyList[historyPosition], url = _a.url, state = _a.state;
                origHistoryProto.replaceState.call(window.history, state, "", url);
                var newURL = document.location.href;
                dispatchMessage(newURL);
                window.dispatchEvent(new PopStateEvent("popstate", { state: state }));
            }
        },
        back: function () {
            window.history.go(-1);
        },
        forward: function () {
            window.history.go(1);
        },
        pushState: function (state, title, url) {
            origHistoryProto.replaceState.call(window.history, state, title, url);
            pushHistory(url, state);
            dispatchMessage(document.location.href);
        },
        replaceState: function (state, title, url) {
            origHistoryProto.replaceState.call(window.history, state, title, url);
            historyList[historyPosition] = { state: state, url: url };
            dispatchMessage(document.location.href);
        }
    });
    function handleMessage(_a) {
        var data = _a.data;
        if (data.type === "urlback") {
            history.back();
        }
        else if (data.type === "urlforward") {
            history.forward();
        }
        else if (data.type === "refresh") {
            document.location.reload();
        }
    }
    window.addEventListener("message", handleMessage);
}

/* eslint-disable @typescript-eslint/ban-ts-comment */
var scripts = [
    { code: setupHistoryListeners.toString(), id: "historyListener" },
    {
        code: "function consoleHook() {" + consoleHook + "\n};",
        id: "consoleHook"
    },
];
var injectScriptToIframe = function (iframe) {
    scripts.forEach(function (_a) {
        var _b;
        var code = _a.code, id = _a.id;
        var message = {
            uid: id,
            type: INJECT_MESSAGE_TYPE,
            code: "exports.activate = " + code,
            scope: {}
        };
        (_b = iframe.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(message, "*");
    });
};

/* eslint-disable no-console,@typescript-eslint/no-explicit-any,prefer-rest-params,@typescript-eslint/explicit-module-boundary-types */
var SandpackNode = /** @class */ (function (_super) {
    (0,types_965d4afd.g)(SandpackNode, _super);
    function SandpackNode(selector, sandboxInfo, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, selector, sandboxInfo, (0,types_965d4afd.h)((0,types_965d4afd.h)({}, options), { bundlerURL: options.bundlerURL })) || this;
        _this._modulesCache = new Map();
        _this.emitter = new EventEmitter();
        // Assign iframes
        _this.manageIframes(selector);
        // Init emulator
        _this.createNodebox();
        return _this;
    }
    SandpackNode.prototype.createNodebox = function () {
        this.emulator = new Nodebox({
            iframe: this.emulatorIframe,
            runtimeUrl: this.options.bundlerURL
        });
    };
    /**
     * It initializes the emulator and provide it with files, template and script to run
     */
    SandpackNode.prototype.compile = function (files) {
        return (0,types_965d4afd._)(this, void 0, void 0, function () {
            var shellId, err_1;
            return (0,types_965d4afd.a)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        // 1. Init
                        this.dispatch({ type: "start", firstLoad: true });
                        return [4 /*yield*/, this.emulator.connect()];
                    case 1:
                        _a.sent();
                        // 2. Setup
                        return [4 /*yield*/, this.emulator.fs.init(files)];
                    case 2:
                        // 2. Setup
                        _a.sent();
                        // 2.1 Other dependencies
                        return [4 /*yield*/, this.globalListeners()];
                    case 3:
                        // 2.1 Other dependencies
                        _a.sent();
                        return [4 /*yield*/, this.createShellProcessFromTask(files)];
                    case 4:
                        shellId = (_a.sent()).id;
                        // 4. Launch Preview
                        return [4 /*yield*/, this.createPreviewURLFromId(shellId)];
                    case 5:
                        // 4. Launch Preview
                        _a.sent();
                        return [4 /*yield*/, this.setLocationURLIntoIFrame()];
                    case 6:
                        _a.sent();
                        // 5. Returns to consumer
                        this.dispatchDoneMessage();
                        return [3 /*break*/, 8];
                    case 7:
                        err_1 = _a.sent();
                        this.dispatch({
                            type: "action",
                            action: "notification",
                            notificationType: "error",
                            title: getMessageFromError(err_1)
                        });
                        this.dispatch({ type: "done", compilatonError: true });
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * It creates a new shell and run the starting task
     */
    SandpackNode.prototype.createShellProcessFromTask = function (files) {
        return (0,types_965d4afd._)(this, void 0, void 0, function () {
            var packageJsonContent;
            var _a;
            var _this = this;
            return (0,types_965d4afd.a)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        packageJsonContent = readBuffer(files["/package.json"]);
                        this.emulatorCommand = findStartScriptPackageJson(packageJsonContent);
                        this.emulatorShellProcess = this.emulator.shell.create();
                        // Shell listeners
                        return [4 /*yield*/, this.emulatorShellProcess.on("exit", function (exitCode) {
                                _this.dispatch({
                                    type: "action",
                                    action: "notification",
                                    notificationType: "error",
                                    title: (0,types_965d4afd.c)("Error: process.exit(" + exitCode + ") called.")
                                });
                            })];
                    case 1:
                        // Shell listeners
                        _b.sent();
                        return [4 /*yield*/, this.emulatorShellProcess.on("progress", function (data) {
                                var _a, _b;
                                if (data.state === "command_running" ||
                                    data.state === "starting_command") {
                                    _this.dispatch({
                                        type: "shell/progress",
                                        data: (0,types_965d4afd.h)((0,types_965d4afd.h)({}, data), { command: [
                                                (_a = _this.emulatorCommand) === null || _a === void 0 ? void 0 : _a[0],
                                                (_b = _this.emulatorCommand) === null || _b === void 0 ? void 0 : _b[1].join(" "),
                                            ].join(" ") })
                                    });
                                    return;
                                }
                                _this.dispatch({ type: "shell/progress", data: data });
                            })];
                    case 2:
                        _b.sent();
                        this.emulatorShellProcess.stdout.on("data", function (data) {
                            _this.dispatch({ type: "stdout", payload: { data: data, type: "out" } });
                        });
                        this.emulatorShellProcess.stderr.on("data", function (data) {
                            _this.dispatch({ type: "stdout", payload: { data: data, type: "err" } });
                        });
                        return [4 /*yield*/, (_a = this.emulatorShellProcess).runCommand.apply(_a, this.emulatorCommand)];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    SandpackNode.prototype.createPreviewURLFromId = function (id) {
        return (0,types_965d4afd._)(this, void 0, void 0, function () {
            var url;
            return (0,types_965d4afd.a)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.iframePreviewUrl = undefined;
                        return [4 /*yield*/, this.emulator.preview.getByShellId(id)];
                    case 1:
                        url = (_a.sent()).url;
                        this.iframePreviewUrl = url;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Nodebox needs to handle two types of iframes at the same time:
     *
     * 1. Runtime iframe: where the emulator process runs, which is responsible
     *    for creating the other iframes (hidden);
     * 2. Preview iframes: any other node process that contains a PORT (public);
     */
    SandpackNode.prototype.manageIframes = function (selector) {
        var _a;
        /**
         * Pick the preview iframe
         */
        if (typeof selector === "string") {
            var element = document.querySelector(selector);
            (0,types_965d4afd.n)(element, "The element '" + selector + "' was not found");
            this.iframe = document.createElement("iframe");
        }
        else {
            this.iframe = selector;
        }
        // Set preview iframe styles
        setPreviewIframeProperties(this.iframe, this.options);
        (0,types_965d4afd.n)(this.iframe.parentNode, "The given iframe does not have a parent.");
        /**
         * Create the runtime iframe, which is hidden sibling
         * from the preview one
         */
        this.emulatorIframe = document.createElement("iframe");
        this.emulatorIframe.classList.add("sp-bridge-frame");
        (_a = this.iframe.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(this.emulatorIframe);
    };
    SandpackNode.prototype.setLocationURLIntoIFrame = function () {
        return (0,types_965d4afd._)(this, void 0, void 0, function () {
            return (0,types_965d4afd.a)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.iframePreviewUrl) return [3 /*break*/, 2];
                        return [4 /*yield*/, loadPreviewIframe(this.iframe, this.iframePreviewUrl)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send all messages and events to tell to the
     * consumer that the bundler is ready without any error
     */
    SandpackNode.prototype.dispatchDoneMessage = function () {
        this.dispatch({ type: "done", compilatonError: false });
        if (this.iframePreviewUrl) {
            this.dispatch({
                type: "urlchange",
                url: this.iframePreviewUrl,
                back: false,
                forward: false
            });
        }
    };
    SandpackNode.prototype.globalListeners = function () {
        return (0,types_965d4afd._)(this, void 0, void 0, function () {
            var _this = this;
            return (0,types_965d4afd.a)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.addEventListener("message", function (event) {
                            if (event.data.type === PREVIEW_LOADED_MESSAGE_TYPE) {
                                injectScriptToIframe(_this.iframe);
                            }
                            if (event.data.type === "urlchange") {
                                _this.dispatch({
                                    type: "urlchange",
                                    url: event.data.url,
                                    back: event.data.back,
                                    forward: event.data.forward
                                });
                            }
                            _this.dispatch(event.data);
                        });
                        return [4 /*yield*/, this.emulator.fs.watch(["*"], [
                                ".next",
                                "node_modules",
                                "build",
                                "dist",
                                "vendor",
                                ".config",
                                ".vuepress",
                            ], function (message) { return (0,types_965d4afd._)(_this, void 0, void 0, function () {
                                var event, path, type, _a, content, newContent, err_2;
                                return (0,types_965d4afd.a)(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!message)
                                                return [2 /*return*/];
                                            event = message;
                                            path = "newPath" in event
                                                ? event.newPath
                                                : "path" in event
                                                    ? event.path
                                                    : "";
                                            return [4 /*yield*/, this.emulator.fs.stat(path)];
                                        case 1:
                                            type = (_b.sent()).type;
                                            if (type !== "file")
                                                return [2 /*return*/, null];
                                            _b.label = 2;
                                        case 2:
                                            _b.trys.push([2, 10, , 11]);
                                            _a = event.type;
                                            switch (_a) {
                                                case "change": return [3 /*break*/, 3];
                                                case "create": return [3 /*break*/, 3];
                                                case "remove": return [3 /*break*/, 5];
                                                case "rename": return [3 /*break*/, 6];
                                                case "close": return [3 /*break*/, 8];
                                            }
                                            return [3 /*break*/, 9];
                                        case 3: return [4 /*yield*/, this.emulator.fs.readFile(event.path, "utf8")];
                                        case 4:
                                            content = _b.sent();
                                            this.dispatch({
                                                type: "fs/change",
                                                path: event.path,
                                                content: content
                                            });
                                            this._modulesCache.set(event.path, writeBuffer(content));
                                            return [3 /*break*/, 9];
                                        case 5:
                                            this.dispatch({
                                                type: "fs/remove",
                                                path: event.path
                                            });
                                            this._modulesCache["delete"](event.path);
                                            return [3 /*break*/, 9];
                                        case 6:
                                            this.dispatch({
                                                type: "fs/remove",
                                                path: event.oldPath
                                            });
                                            this._modulesCache["delete"](event.oldPath);
                                            return [4 /*yield*/, this.emulator.fs.readFile(event.newPath, "utf8")];
                                        case 7:
                                            newContent = _b.sent();
                                            this.dispatch({
                                                type: "fs/change",
                                                path: event.newPath,
                                                content: newContent
                                            });
                                            this._modulesCache.set(event.newPath, writeBuffer(newContent));
                                            return [3 /*break*/, 9];
                                        case 8: return [3 /*break*/, 9];
                                        case 9: return [3 /*break*/, 11];
                                        case 10:
                                            err_2 = _b.sent();
                                            this.dispatch({
                                                type: "action",
                                                action: "notification",
                                                notificationType: "error",
                                                title: getMessageFromError(err_2)
                                            });
                                            return [3 /*break*/, 11];
                                        case 11: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * PUBLIC Methods
     */
    SandpackNode.prototype.restartShellProcess = function () {
        var _a;
        return (0,types_965d4afd._)(this, void 0, void 0, function () {
            return (0,types_965d4afd.a)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.emulatorShellProcess && this.emulatorCommand)) return [3 /*break*/, 3];
                        // 1. Set the loading state and clean the URL
                        this.dispatch({ type: "start", firstLoad: true });
                        // 2. Exit shell
                        return [4 /*yield*/, this.emulatorShellProcess.kill()];
                    case 1:
                        // 2. Exit shell
                        _b.sent();
                        (_a = this.iframe) === null || _a === void 0 ? void 0 : _a.removeAttribute("attr");
                        // 3. new Nodebox instance
                        this.createNodebox();
                        // 3.1 reassign helpers & run command again
                        return [4 /*yield*/, this.compile(Object.fromEntries(this._modulesCache))];
                    case 2:
                        // 3.1 reassign helpers & run command again
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SandpackNode.prototype.updateSandbox = function (setup) {
        var _this = this;
        var _a;
        var modules = fromBundlerFilesToFS(setup.files);
        /**
         * Update file changes
         */
        if (((_a = this.emulatorShellProcess) === null || _a === void 0 ? void 0 : _a.state) === "running") {
            Object.entries(modules).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                if (!_this._modulesCache.get(key) ||
                    external_buffer_.Buffer.compare(value, _this._modulesCache.get(key)) !== 0) {
                    _this.emulator.fs.writeFile(key, value, { recursive: true });
                }
            });
            return;
        }
        /**
         * Pass init files to the bundler
         */
        this.dispatch({
            codesandbox: true,
            modules: modules,
            template: setup.template,
            type: "compile"
        });
        // Add modules to cache, this will ensure uniqueness changes
        Object.entries(modules).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            _this._modulesCache.set(key, writeBuffer(value));
        });
    };
    SandpackNode.prototype.dispatch = function (message) {
        var _a, _b;
        return (0,types_965d4afd._)(this, void 0, void 0, function () {
            var _c;
            return (0,types_965d4afd.a)(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = message.type;
                        switch (_c) {
                            case "compile": return [3 /*break*/, 1];
                            case "refresh": return [3 /*break*/, 2];
                            case "urlback": return [3 /*break*/, 4];
                            case "urlforward": return [3 /*break*/, 4];
                            case "shell/restart": return [3 /*break*/, 5];
                            case "shell/openPreview": return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 7];
                    case 1:
                        this.compile(message.modules);
                        return [3 /*break*/, 8];
                    case 2: return [4 /*yield*/, this.setLocationURLIntoIFrame()];
                    case 3:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        (_b = (_a = this.iframe) === null || _a === void 0 ? void 0 : _a.contentWindow) === null || _b === void 0 ? void 0 : _b.postMessage(message, "*");
                        return [3 /*break*/, 8];
                    case 5:
                        this.restartShellProcess();
                        return [3 /*break*/, 8];
                    case 6:
                        window.open(this.iframePreviewUrl, "_blank");
                        return [3 /*break*/, 8];
                    case 7:
                        this.emitter.dispatch(message);
                        _d.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    SandpackNode.prototype.listen = function (listener) {
        return this.emitter.listener(listener);
    };
    SandpackNode.prototype.destroy = function () {
        this.emulatorIframe.remove();
        this.emitter.cleanup();
    };
    return SandpackNode;
}(base_3665f77c.S));




/***/ })

};
;
//# sourceMappingURL=497.b39b4865.js.map