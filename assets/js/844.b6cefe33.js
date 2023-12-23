"use strict";
exports.id = 844;
exports.ids = [844];
exports.modules = {

/***/ 29594:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ SandpackClient)
/* harmony export */ });
/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93186);


var SandpackClient = /** @class */ (function () {
    function SandpackClient(iframeSelector, sandboxSetup, options) {
        if (options === void 0) { options = {}; }
        this.status = "idle";
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

/***/ 74844:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SandpackRuntime: () => (/* binding */ SandpackRuntime)
/* harmony export */ });
/* harmony import */ var _types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63032);
/* harmony import */ var dequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93186);
/* harmony import */ var _base_80a1f760_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29594);
/* harmony import */ var outvariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25307);





/**
 * This file is a copy of the resolver from the `codesandbox-api` package.
 * We wanted to avoid to reference codesandbox-api because of the code that runs on load in the package.
 * The plan is to take some time and refactor codesandbox-api into what it was supposed to be in the first place,
 * an abstraction over the actions that can be dispatched between the bundler and the iframe.
 */
var Protocol = /** @class */ (function () {
    function Protocol(type, handleMessage, protocol) {
        var _this = this;
        this.type = type;
        this.handleMessage = handleMessage;
        this.protocol = protocol;
        this._disposeMessageListener = this.protocol.channelListen(function (msg) { return (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__._)(_this, void 0, void 0, function () {
            var message, result, response, err_1, response;
            return (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(msg.type === this.getTypeId() && msg.method)) return [3 /*break*/, 4];
                        message = msg;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.handleMessage(message)];
                    case 2:
                        result = _a.sent();
                        response = {
                            type: this.getTypeId(),
                            msgId: message.msgId,
                            result: result,
                        };
                        this.protocol.dispatch(response);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        response = {
                            type: this.getTypeId(),
                            msgId: message.msgId,
                            error: {
                                message: err_1.message,
                            },
                        };
                        this.protocol.dispatch(response);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }
    Protocol.prototype.getTypeId = function () {
        return "protocol-".concat(this.type);
    };
    Protocol.prototype.dispose = function () {
        this._disposeMessageListener();
    };
    return Protocol;
}());

var IFrameProtocol = /** @class */ (function () {
    function IFrameProtocol(iframe, origin) {
        // React to messages from any iframe
        this.globalListeners = {};
        this.globalListenersCount = 0;
        // React to messages from the iframe owned by this instance
        this.channelListeners = {};
        this.channelListenersCount = 0;
        // Random number to identify this instance of the client when messages are coming from multiple iframes
        this.channelId = Math.floor(Math.random() * 1000000);
        this.frameWindow = iframe.contentWindow;
        this.origin = origin;
        this.globalListeners = [];
        this.channelListeners = [];
        this.eventListener = this.eventListener.bind(this);
        if (typeof window !== "undefined") {
            window.addEventListener("message", this.eventListener);
        }
    }
    IFrameProtocol.prototype.cleanup = function () {
        window.removeEventListener("message", this.eventListener);
        this.globalListeners = {};
        this.channelListeners = {};
        this.globalListenersCount = 0;
        this.channelListenersCount = 0;
    };
    // Sends the channelId and triggers an iframeHandshake promise to resolve,
    // so the iframe can start listening for messages (based on the id)
    IFrameProtocol.prototype.register = function () {
        if (!this.frameWindow) {
            return;
        }
        this.frameWindow.postMessage({
            type: "register-frame",
            origin: document.location.origin,
            id: this.channelId,
        }, this.origin);
    };
    // Messages are dispatched from the client directly to the instance iframe
    IFrameProtocol.prototype.dispatch = function (message) {
        if (!this.frameWindow) {
            return;
        }
        this.frameWindow.postMessage((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.h)({ $id: this.channelId, codesandbox: true }, message), this.origin);
    };
    // Add a listener that is called on any message coming from an iframe in the page
    // This is needed for the `initialize` message which comes without a channelId
    IFrameProtocol.prototype.globalListen = function (listener) {
        var _this = this;
        if (typeof listener !== "function") {
            return function () {
                return;
            };
        }
        var listenerId = this.globalListenersCount;
        this.globalListeners[listenerId] = listener;
        this.globalListenersCount++;
        return function () {
            delete _this.globalListeners[listenerId];
        };
    };
    // Add a listener that is called on any message coming from an iframe with the instance channelId
    // All other messages (eg: from other iframes) are ignored
    IFrameProtocol.prototype.channelListen = function (listener) {
        var _this = this;
        if (typeof listener !== "function") {
            return function () {
                return;
            };
        }
        var listenerId = this.channelListenersCount;
        this.channelListeners[listenerId] = listener;
        this.channelListenersCount++;
        return function () {
            delete _this.channelListeners[listenerId];
        };
    };
    // Handles message windows coming from iframes
    IFrameProtocol.prototype.eventListener = function (evt) {
        // skip events originating from different iframes
        if (evt.source !== this.frameWindow) {
            return;
        }
        var message = evt.data;
        if (!message.codesandbox) {
            return;
        }
        Object.values(this.globalListeners).forEach(function (listener) {
            return listener(message);
        });
        if (message.$id !== this.channelId) {
            return;
        }
        Object.values(this.channelListeners).forEach(function (listener) {
            return listener(message);
        });
    };
    return IFrameProtocol;
}());

var MAX_CLIENT_DEPENDENCY_COUNT = 50;
function getTemplate(pkg, 
/* eslint-disable @typescript-eslint/no-explicit-any */
modules) {
    if (!pkg) {
        return "static";
    }
    var _a = pkg.dependencies, dependencies = _a === void 0 ? {} : _a, _b = pkg.devDependencies, devDependencies = _b === void 0 ? {} : _b;
    var totalDependencies = (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.i)((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.i)([], Object.keys(dependencies), true), Object.keys(devDependencies), true);
    var moduleNames = Object.keys(modules);
    var adonis = ["@adonisjs/framework", "@adonisjs/core"];
    if (totalDependencies.some(function (dep) { return adonis.indexOf(dep) > -1; })) {
        return "adonis";
    }
    var nuxt = ["nuxt", "nuxt-edge", "nuxt-ts", "nuxt-ts-edge", "nuxt3"];
    if (totalDependencies.some(function (dep) { return nuxt.indexOf(dep) > -1; })) {
        return "nuxt";
    }
    if (totalDependencies.indexOf("next") > -1) {
        return "next";
    }
    var apollo = [
        "apollo-server",
        "apollo-server-express",
        "apollo-server-hapi",
        "apollo-server-koa",
        "apollo-server-lambda",
        "apollo-server-micro",
    ];
    if (totalDependencies.some(function (dep) { return apollo.indexOf(dep) > -1; })) {
        return "apollo";
    }
    if (totalDependencies.indexOf("mdx-deck") > -1) {
        return "mdx-deck";
    }
    if (totalDependencies.indexOf("gridsome") > -1) {
        return "gridsome";
    }
    if (totalDependencies.indexOf("vuepress") > -1) {
        return "vuepress";
    }
    if (totalDependencies.indexOf("ember-cli") > -1) {
        return "ember";
    }
    if (totalDependencies.indexOf("sapper") > -1) {
        return "sapper";
    }
    if (totalDependencies.indexOf("gatsby") > -1) {
        return "gatsby";
    }
    if (totalDependencies.indexOf("quasar") > -1) {
        return "quasar";
    }
    if (totalDependencies.indexOf("@docusaurus/core") > -1) {
        return "docusaurus";
    }
    if (totalDependencies.indexOf("remix") > -1) {
        return "remix";
    }
    if (totalDependencies.indexOf("astro") > -1) {
        return "node";
    }
    // CLIENT
    if (moduleNames.some(function (m) { return m.endsWith(".re"); })) {
        return "reason";
    }
    var parcel = ["parcel-bundler", "parcel"];
    if (totalDependencies.some(function (dep) { return parcel.indexOf(dep) > -1; })) {
        return "parcel";
    }
    var dojo = ["@dojo/core", "@dojo/framework"];
    if (totalDependencies.some(function (dep) { return dojo.indexOf(dep) > -1; })) {
        return "@dojo/cli-create-app";
    }
    if (totalDependencies.indexOf("@nestjs/core") > -1 ||
        totalDependencies.indexOf("@nestjs/common") > -1) {
        return "nest";
    }
    if (totalDependencies.indexOf("react-styleguidist") > -1) {
        return "styleguidist";
    }
    if (totalDependencies.indexOf("react-scripts") > -1) {
        return "create-react-app";
    }
    if (totalDependencies.indexOf("react-scripts-ts") > -1) {
        return "create-react-app-typescript";
    }
    if (totalDependencies.indexOf("@angular/core") > -1) {
        return "angular-cli";
    }
    if (totalDependencies.indexOf("preact-cli") > -1) {
        return "preact-cli";
    }
    if (totalDependencies.indexOf("@sveltech/routify") > -1 ||
        totalDependencies.indexOf("@roxi/routify") > -1) {
        return "node";
    }
    if (totalDependencies.indexOf("vite") > -1) {
        return "node";
    }
    if (totalDependencies.indexOf("@frontity/core") > -1) {
        return "node";
    }
    if (totalDependencies.indexOf("svelte") > -1) {
        return "svelte";
    }
    if (totalDependencies.indexOf("vue") > -1) {
        return "vue-cli";
    }
    if (totalDependencies.indexOf("cx") > -1) {
        return "cxjs";
    }
    var nodeDeps = [
        "express",
        "koa",
        "nodemon",
        "ts-node",
        "@tensorflow/tfjs-node",
        "webpack-dev-server",
        "snowpack",
    ];
    if (totalDependencies.some(function (dep) { return nodeDeps.indexOf(dep) > -1; })) {
        return "node";
    }
    if (Object.keys(dependencies).length >= MAX_CLIENT_DEPENDENCY_COUNT) {
        // The dependencies are too much for client sandboxes to handle
        return "node";
    }
    return undefined;
}

var _a;
var BUNDLER_URL = "https://".concat((_a = "2.10.0") === null || _a === void 0 ? void 0 : _a.replace(/\./g, "-"), "-sandpack.codesandbox.io/");
var SandpackRuntime = /** @class */ (function (_super) {
    (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.g)(SandpackRuntime, _super);
    function SandpackRuntime(selector, sandboxSetup, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, selector, sandboxSetup, options) || this;
        _this.getTranspilerContext = function () {
            return new Promise(function (resolve) {
                var unsubscribe = _this.listen(function (message) {
                    if (message.type === "transpiler-context") {
                        resolve(message.data);
                        unsubscribe();
                    }
                });
                _this.dispatch({ type: "get-transpiler-context" });
            });
        };
        _this.bundlerURL = options.bundlerURL || BUNDLER_URL;
        if (options.teamId) {
            _this.bundlerURL =
                _this.bundlerURL.replace("https://", "https://" + options.teamId + "-") +
                    "?cache=".concat(Date.now());
        }
        _this.bundlerState = undefined;
        _this.errors = [];
        _this.status = "initializing";
        if (typeof selector === "string") {
            _this.selector = selector;
            var element = document.querySelector(selector);
            (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(element, "The element '".concat(selector, "' was not found"));
            _this.element = element;
            _this.iframe = document.createElement("iframe");
            _this.initializeElement();
        }
        else {
            _this.element = selector;
            _this.iframe = selector;
        }
        if (!_this.iframe.getAttribute("sandbox")) {
            _this.iframe.setAttribute("sandbox", "allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts");
            _this.iframe.setAttribute("allow", "accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-write;");
        }
        _this.setLocationURLIntoIFrame();
        _this.iframeProtocol = new IFrameProtocol(_this.iframe, _this.bundlerURL);
        _this.unsubscribeGlobalListener = _this.iframeProtocol.globalListen(function (mes) {
            if (mes.type !== "initialized" || !_this.iframe.contentWindow) {
                return;
            }
            _this.iframeProtocol.register();
            if (_this.options.fileResolver) {
                _this.fileResolverProtocol = new Protocol("fs", function (data) { return (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__._)(_this, void 0, void 0, function () {
                    return (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(this, function (_a) {
                        if (data.method === "isFile") {
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            return [2 /*return*/, this.options.fileResolver.isFile(data.params[0])];
                        }
                        else if (data.method === "readFile") {
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            return [2 /*return*/, this.options.fileResolver.readFile(data.params[0])];
                        }
                        else {
                            throw new Error("Method not supported");
                        }
                    });
                }); }, _this.iframeProtocol);
            }
            _this.updateSandbox(_this.sandboxSetup, true);
        });
        _this.unsubscribeChannelListener = _this.iframeProtocol.channelListen(function (mes) {
            switch (mes.type) {
                case "start": {
                    _this.errors = [];
                    break;
                }
                case "status": {
                    _this.status = mes.status;
                    break;
                }
                case "action": {
                    if (mes.action === "show-error") {
                        _this.errors = (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.i)((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.i)([], _this.errors, true), [(0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(mes)], false);
                    }
                    break;
                }
                case "done": {
                    _this.status = "done";
                    break;
                }
                case "state": {
                    _this.bundlerState = mes.state;
                    break;
                }
            }
        });
        return _this;
    }
    SandpackRuntime.prototype.setLocationURLIntoIFrame = function () {
        var _a;
        var urlSource = this.options.startRoute
            ? new URL(this.options.startRoute, this.bundlerURL).toString()
            : this.bundlerURL;
        (_a = this.iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.location.replace(urlSource);
        this.iframe.src = urlSource;
    };
    SandpackRuntime.prototype.destroy = function () {
        this.unsubscribeChannelListener();
        this.unsubscribeGlobalListener();
        this.iframeProtocol.cleanup();
    };
    SandpackRuntime.prototype.updateOptions = function (options) {
        if (!(0,dequal__WEBPACK_IMPORTED_MODULE_0__/* .dequal */ .J)(this.options, options)) {
            this.options = options;
            this.updateSandbox();
        }
    };
    SandpackRuntime.prototype.updateSandbox = function (sandboxSetup, isInitializationCompile) {
        var _a, _b, _c, _d;
        if (sandboxSetup === void 0) { sandboxSetup = this.sandboxSetup; }
        this.sandboxSetup = (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.h)((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.h)({}, this.sandboxSetup), sandboxSetup);
        var files = this.getFiles();
        var modules = Object.keys(files).reduce(function (prev, next) {
            var _a;
            return ((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.h)((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.h)({}, prev), (_a = {}, _a[next] = {
                code: files[next].code,
                path: next,
            }, _a)));
        }, {});
        var packageJSON = JSON.parse((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.b)(this.sandboxSetup.dependencies, this.sandboxSetup.devDependencies, this.sandboxSetup.entry));
        try {
            packageJSON = JSON.parse(files["/package.json"].code);
        }
        catch (e) {
            console.error((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.c)("could not parse package.json file: " + e.message));
        }
        // TODO move this to a common format
        var normalizedModules = Object.keys(files).reduce(function (prev, next) {
            var _a;
            return ((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.h)((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.h)({}, prev), (_a = {}, _a[next] = {
                content: files[next].code,
                path: next,
            }, _a)));
        }, {});
        this.dispatch({
            type: "compile",
            codesandbox: true,
            version: 3,
            isInitializationCompile: isInitializationCompile,
            modules: modules,
            reactDevTools: this.options.reactDevTools,
            externalResources: this.options.externalResources || [],
            hasFileResolver: Boolean(this.options.fileResolver),
            disableDependencyPreprocessing: this.sandboxSetup.disableDependencyPreprocessing,
            template: this.sandboxSetup.template ||
                getTemplate(packageJSON, normalizedModules),
            showOpenInCodeSandbox: (_a = this.options.showOpenInCodeSandbox) !== null && _a !== void 0 ? _a : true,
            showErrorScreen: (_b = this.options.showErrorScreen) !== null && _b !== void 0 ? _b : true,
            showLoadingScreen: (_c = this.options.showLoadingScreen) !== null && _c !== void 0 ? _c : false,
            skipEval: this.options.skipEval || false,
            clearConsoleDisabled: !this.options.clearConsoleOnFirstCompile,
            logLevel: (_d = this.options.logLevel) !== null && _d !== void 0 ? _d : _types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.S.Info,
            customNpmRegistries: this.options.customNpmRegistries,
            teamId: this.options.teamId,
            sandboxId: this.options.sandboxId,
        });
    };
    SandpackRuntime.prototype.dispatch = function (message) {
        /**
         * Intercept "refresh" dispatch: this will make sure
         * that the iframe is still in the location it's supposed to be.
         * External links inside the iframe will change the location and
         * prevent the user from navigating back.
         */
        if (message.type === "refresh") {
            this.setLocationURLIntoIFrame();
        }
        this.iframeProtocol.dispatch(message);
    };
    SandpackRuntime.prototype.listen = function (listener) {
        return this.iframeProtocol.channelListen(listener);
    };
    /**
     * Get the URL of the contents of the current sandbox
     */
    SandpackRuntime.prototype.getCodeSandboxURL = function () {
        var files = this.getFiles();
        var paramFiles = Object.keys(files).reduce(function (prev, next) {
            var _a;
            return ((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.h)((0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.h)({}, prev), (_a = {}, _a[next.replace("/", "")] = {
                content: files[next].code,
                isBinary: false,
            }, _a)));
        }, {});
        return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
            method: "POST",
            body: JSON.stringify({ files: paramFiles }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(function (x) { return x.json(); })
            .then(function (res) { return ({
            sandboxId: res.sandbox_id,
            editorUrl: "https://codesandbox.io/s/".concat(res.sandbox_id),
            embedUrl: "https://codesandbox.io/embed/".concat(res.sandbox_id),
        }); });
    };
    SandpackRuntime.prototype.getFiles = function () {
        var sandboxSetup = this.sandboxSetup;
        if (sandboxSetup.files["/package.json"] === undefined) {
            return (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.d)(sandboxSetup.files, sandboxSetup.dependencies, sandboxSetup.devDependencies, sandboxSetup.entry);
        }
        return this.sandboxSetup.files;
    };
    SandpackRuntime.prototype.initializeElement = function () {
        this.iframe.style.border = "0";
        this.iframe.style.width = this.options.width || "100%";
        this.iframe.style.height = this.options.height || "100%";
        this.iframe.style.overflow = "hidden";
        (0,_types_0877c553_mjs__WEBPACK_IMPORTED_MODULE_2__.n)(this.element.parentNode, "The given iframe does not have a parent.");
        this.element.parentNode.replaceChild(this.iframe, this.element);
    };
    return SandpackRuntime;
}(_base_80a1f760_mjs__WEBPACK_IMPORTED_MODULE_3__.S));




/***/ })

};
;
//# sourceMappingURL=844.b6cefe33.js.map