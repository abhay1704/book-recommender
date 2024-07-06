// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hLKIg":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "41a61c76f878242e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1Qzfd":[function(require,module,exports) {
var _scrollHandlerJs = require("./scrollHandler.js");
var _starRatingJs = require("./starRating.js");
var _bookHandlerJs = require("./bookHandler.js");
var _domUtilsJs = require("./domUtils.js");
const spinner = `<div class="loader"></div>`;
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _scrollHandlerJs.initScrollHandler)();
    (0, _starRatingJs.initStarRating)();
    (0, _scrollHandlerJs.elasticScroll)();
    (0, _scrollHandlerJs.navScroller)();
    (0, _scrollHandlerJs.scrollReveal)();
    (0, _domUtilsJs.getElement)("body").insertAdjacentHTML("beforeend", spinner);
    const urlParams = new URLSearchParams(window.location.search);
    const bookName = urlParams.get("book");
    console.log(bookName);
    (0, _bookHandlerJs.getBook)(bookName).then((data)=>{
        (0, _bookHandlerJs.setWebpageData)(data);
        setTimeout(()=>{
            (0, _domUtilsJs.getElement)(".loader").style.display = "none";
            (0, _domUtilsJs.getElement)("#whole-content").style.display = "block";
        }, 1500);
    }).catch((error)=>{
        (0, _domUtilsJs.setError)(error, "body");
        (0, _domUtilsJs.getElement)(".loader").style.display = "none";
        (0, _domUtilsJs.getElement)("#whole-content").style.display = "none";
    });
});

},{"./scrollHandler.js":"gBdiz","./starRating.js":"9ciYj","./bookHandler.js":"2YxFA","./domUtils.js":"ljlVQ"}],"gBdiz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initScrollHandler", ()=>initScrollHandler);
parcelHelpers.export(exports, "elasticScroll", ()=>elasticScroll);
parcelHelpers.export(exports, "navScroller", ()=>navScroller);
parcelHelpers.export(exports, "scrollReveal", ()=>scrollReveal);
var _domUtilsJs = require("./domUtils.js");
var _overscroll = require("overscroll");
var _overscrollDefault = parcelHelpers.interopDefault(_overscroll);
const initScrollHandler = ()=>{
    const header = (0, _domUtilsJs.getElement)("header");
    const home = (0, _domUtilsJs.getElement)("#home-section");
    let lastScrollTop = 0;
    let dec = 0;
    const scrollDown = ()=>header.classList.remove("collapse");
    const scrollUp = ()=>header.classList.add("collapse");
    const screenScroll = ()=>{
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (dec < 15) scrollUp();
        else scrollDown();
        dec = dec * (lastScrollTop - scrollTop) < 0 ? 0 : dec + (lastScrollTop - scrollTop) * 0.1;
        lastScrollTop = scrollTop;
    };
    const removeHeader = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (!entry.isIntersecting) {
                header.classList.add("collapse", "dark");
                window.addEventListener("scroll", screenScroll);
            } else {
                header.classList.remove("collapse", "dark");
                window.removeEventListener("scroll", screenScroll);
            }
        });
    }, {
        threshold: 0.3
    });
    removeHeader.observe(home);
};
const elasticScroll = ()=>{
    const content = document.getElementById("whole-content");
    let startY = 0;
    let isPulling = false;
    let top = false; // Use `let` for variables that will change
    document.addEventListener("touchstart", (e)=>{
        // Check if the user is at the bottom of the page or at the top
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight || window.scrollY === 0) {
            startY = e.touches[0].pageY;
            isPulling = true;
            top = window.scrollY === 0;
        }
    }, {
        passive: true
    });
    document.addEventListener("touchmove", (e)=>{
        if (isPulling) {
            const pullDistance = e.touches[0].pageY - startY;
            // Apply the effect based on the direction of the pull
            if (top) // Pulling down at the top
            content.style.transform = `translateY(${-pullDistance * 0.1}px)`;
            else // Pulling up at the bottom
            content.style.transform = `translateY(${pullDistance < 0 ? pullDistance * 0.01 : 0}px)`;
        }
    }, {
        passive: true
    });
    document.addEventListener("touchend", ()=>{
        if (isPulling) content.style.transform = ""; // Reset the transform
        isPulling = false;
    });
};
const scrollHandler = (target)=>{
    const targetId = target.getAttribute("href");
    const targetElement = (0, _domUtilsJs.getElement)(targetId);
    targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};
const navScroller = ()=>{
    const nav = (0, _domUtilsJs.getElement)("nav");
    const navLinks = (0, _domUtilsJs.getElements)(".nav-links");
    const navBtns = (0, _domUtilsJs.getElements)(".btns--nav");
    navLinks.forEach((navLink)=>{
        navLink.addEventListener("click", (e)=>{
            const target = e.target.closest(".nav-link");
            if (!target) return;
            e.preventDefault();
            scrollHandler(target);
        });
    });
    navBtns.forEach((navBtn)=>{
        navBtn.addEventListener("click", (e)=>{
            const target = e.target.closest(".btn--nav");
            if (!target) return;
            e.preventDefault();
            scrollHandler(target);
        });
    });
};
function scrollReveal() {
    const revealElements = (0, _domUtilsJs.getElements)("section:not(#home-section)");
    const revealObserver = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.style.transform = "translateY(0)";
                entry.target.style.opacity = 1;
            }
        });
    });
    revealElements.forEach((element)=>{
        revealObserver.observe(element);
    });
}

},{"./domUtils.js":"ljlVQ","overscroll":"6irIj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ljlVQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getElement", ()=>getElement);
parcelHelpers.export(exports, "getElements", ()=>getElements);
parcelHelpers.export(exports, "setElementText", ()=>setElementText);
parcelHelpers.export(exports, "setBookCoverImage", ()=>setBookCoverImage);
parcelHelpers.export(exports, "setError", ()=>setError);
const getElement = (selector)=>document.querySelector(selector);
const getElements = (selector)=>document.querySelectorAll(selector);
const setElementText = (selector, text)=>{
    getElements(selector).forEach((element)=>element.textContent = text);
};
function setBookCoverImage(imageUrl) {
    imageUrl = imageUrl.replace("http://", "https://");
    getElement("#home-section").style.backgroundImage = `url(${imageUrl})`;
}
function setError(msg, parent = "#whole-content") {
    const error = `<div class="error">${msg}</div>`;
    getElement(parent).insertAdjacentHTML("beforeend", error);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6irIj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _compose = require("./utils/compose");
var _composeDefault = parcelHelpers.interopDefault(_compose);
var _scope = require("./scope");
var _scopeDefault = parcelHelpers.interopDefault(_scope);
var _init = require("./init");
var _initDefault = parcelHelpers.interopDefault(_init);
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    } else return Array.from(arr);
}
function OverScroll(scope) {
    var mode = scope.mode, animation = scope.animation, initialPosition = scope.position, onDestroy = scope.onDestroy, onInit = scope.onInit;
    var _animation$run = animation.run(), scrollTo = _animation$run.scrollTo, position = _animation$run.position, scrollToSection = _animation$run.scrollToSection;
    if (mode === "scroll") scrollTo.apply(undefined, _toConsumableArray(initialPosition).concat([
        true
    ]));
    if (mode === "section") scrollToSection(initialPosition, true);
    // 初始化事件
    onInit();
    return {
        position: position,
        scrollTo: mode === "scroll" ? scrollTo : scrollToSection,
        destroy: onDestroy
    };
}
exports.default = (0, _composeDefault.default)(OverScroll, (0, _initDefault.default), (0, _scopeDefault.default));

},{"./utils/compose":"j18uQ","./scope":"1ucPr","./init":"lR9mh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j18uQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>compose);
function compose() {
    for(var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++)funcs[_key] = arguments[_key];
    if (funcs.length === 0) return function(arg) {
        return arg;
    };
    if (funcs.length === 1) return funcs[0];
    var last = funcs[funcs.length - 1];
    var rest = funcs.slice(0, -1);
    return function() {
        return rest.reduceRight(function(composed, f) {
            return f(composed);
        }, last.apply(undefined, arguments));
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ucPr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _whatitis = require("whatitis");
var _whatitisDefault = parcelHelpers.interopDefault(_whatitis);
var _actions = require("./actions");
var _actionsDefault = parcelHelpers.interopDefault(_actions);
var _dom = require("./utils/dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
var _domStates = require("./domStates");
var _domStatesDefault = parcelHelpers.interopDefault(_domStates);
var _animations = require("./animations");
var _animationsDefault = parcelHelpers.interopDefault(_animations);
var _getWindow = require("./utils/dom/getWindow");
var _getWindowDefault = parcelHelpers.interopDefault(_getWindow);
var _getDocument = require("./utils/dom/getDocument");
var _getDocumentDefault = parcelHelpers.interopDefault(_getDocument);
var _handlers = require("./handlers");
var X = "x";
var Y = "y";
var XY = "xy";
var xreg = /x/i;
var yreg = /y/i;
var OVERSCROLL = "OverScroll";
var OVERSCROLLX = "OverScrollX";
var OVERSCROLLY = "OverScrollY";
var BUBBLE = "bubble";
var NOBUBBLE = "noBubble";
function hasX(axis) {
    return xreg.test(axis);
}
function hasY(axis) {
    return yreg.test(axis);
}
function hasXY(axis) {
    return hasX(axis) && hasY(axis);
}
function getAxis() {
    var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : XY;
    if (hasXY(axis)) return XY;
    else if (hasX(axis)) return X;
    return Y;
}
var getScrollByAxis = function getScrollByAxis(_ref) {
    var target = _ref.target, axis = _ref.axis, win = _ref.win, html = _ref.html, body = _ref.body, isPageScroll = _ref.isPageScroll;
    return function() {
        // CSS1Compat 标准模式 BackCompat 混杂模式
        // const isCSS1Compat = doc.compatMode === 'CSS1Compat';
        var scrollX = function scrollX() {
            return !isPageScroll ? target.scrollLeft : (0, _whatitisDefault.default).Defined(win.pageXOffset) ? win.pageXOffset : Math.max(html.scrollLeft, body.scrollLeft);
        };
        var scrollY = function scrollY() {
            return !isPageScroll ? target.scrollTop : (0, _whatitisDefault.default).Defined(win.pageYOffset) ? win.pageYOffset : Math.max(html.scrollTop, body.scrollTop);
        };
        if (hasXY(axis)) return {
            top: scrollY(),
            left: scrollX()
        };
        else if (hasX(axis)) return {
            top: 0,
            left: scrollX()
        };
        return {
            top: scrollY(),
            left: 0
        };
    };
};
var defaultOptions = {
    axis: XY,
    prefix: OVERSCROLL,
    thumbMiniSize: 20,
    // show: true,
    // showX: true,
    // showY: true,
    target: null,
    watchInterval: 100,
    watch: null,
    onInit: null,
    onScroll: null,
    onBeforeScroll: null,
    onAfterScroll: null,
    onDestroy: null,
    // getContainer: null,
    isPageScroll: false,
    mode: "scroll",
    anchors: null,
    switchScale: [
        0.2,
        0.2
    ],
    position: [
        0,
        0
    ],
    bubble: true,
    dragable: true,
    touchable: true // pointerType === 'touch' 的开关
};
function getOptions() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, axis = _ref2.axis, prefix = _ref2.prefix, target = _ref2.target, watchInterval = _ref2.watchInterval, watch = _ref2.watch, onInit = _ref2.onInit, onScroll = _ref2.onScroll, onBeforeScroll = _ref2.onBeforeScroll, onAfterScroll = _ref2.onAfterScroll, onDestroy = _ref2.onDestroy, mode = _ref2.mode, anchors = _ref2.anchors, switchScale = _ref2.switchScale, position = _ref2.position, bubble = _ref2.bubble, dragable = _ref2.dragable, touchable = _ref2.touchable;
    var options = Object.assign({}, defaultOptions);
    var doc = (0, _getDocumentDefault.default)(target);
    var win = (0, _getWindowDefault.default)(doc);
    var body = doc.body;
    var html = doc.documentElement;
    // 滚动容器
    if ((0, _whatitisDefault.default).Undefined(target) || [
        html,
        body
    ].includes(target)) {
        options.target = doc.scrollingElement || body;
        options.isPageScroll = true;
    } else options.target = target;
    // 元素装载容器
    // if ( target === html ) {
    //   // options.container = options.target === html ? body : options.target;
    //   options.target = body;
    // } else {
    //   options.target = target;
    // }
    // container => containerX containerY
    // if ( is.Function( getContainer )) {
    //   const container = getContainer();
    //   if ( is.Element( container )) {
    //     options.containerX = container;
    //     options.containerY = container;
    //   } else {
    //     const { x, y, X, Y } = container;
    //     options.containerX = x || X;
    //     options.containerY = y || Y || options.containerX;
    //   }
    // } else {
    //   options.containerX = options.container;
    //   options.containerY = options.containerX;
    // }
    // 滚动条 计算
    // axis => scrollX scrollY
    options.axis = getAxis(axis);
    options.scrollX = hasX(options.axis);
    options.scrollY = hasY(options.axis);
    // 滚动条 显示/隐藏
    // show => showX showY
    // options.show = show !== false;
    // options.showX = options.show && showX !== false;
    // options.showY = options.show && showY !== false;
    // 样式前缀 prefix
    if ((0, _whatitisDefault.default).String(prefix)) options.prefix = prefix;
    // 事件
    if ((0, _whatitisDefault.default).Function(onInit)) options.onInit = onInit;
    // onScroll( scrollTop, scrollLeft )
    if ((0, _whatitisDefault.default).Function(onScroll)) options.onScroll = onScroll;
    if ((0, _whatitisDefault.default).Function(onBeforeScroll)) options.onBeforeScroll = onBeforeScroll;
    if ((0, _whatitisDefault.default).Function(onAfterScroll)) options.onAfterScroll = onAfterScroll;
    if ((0, _whatitisDefault.default).Function(onDestroy)) options.onDestroy = onDestroy;
    if ((0, _whatitisDefault.default).Function(watch)) {
        options.watch = watch;
        if ((0, _whatitisDefault.default).Number(watchInterval) && watchInterval > 50) options.watchInterval = watchInterval;
    }
    if ((0, _whatitisDefault.default).Array(position) && position.every((0, _whatitisDefault.default).Number)) options.position = position;
    if (mode === "section") {
        options.mode = mode;
        options.axis = hasY(options.axis) ? Y : X;
        options.scrollX = options.axis === X;
        options.scrollY = options.axis === Y;
        options.position = (0, _whatitisDefault.default).Number(position) ? position : 1;
        if ((0, _whatitisDefault.default).Array(anchors) && anchors.every((0, _whatitisDefault.default).Element)) options.anchors = anchors;
        else options.anchors = Array.prototype.slice.call(target.children);
        if ((0, _whatitisDefault.default).String(switchScale) && /^\d*$/.test(switchScale)) switchScale = [
            parseFloat(switchScale),
            parseFloat(switchScale)
        ];
        if ((0, _whatitisDefault.default).Number(switchScale)) switchScale = [
            switchScale,
            switchScale
        ];
        if ((0, _whatitisDefault.default).Array(switchScale) && anchors.every(function(num) {
            return (0, _whatitisDefault.default).Number(num) && num <= 1 && num >= 0;
        })) options.switchScale = [].concat(switchScale);
    }
    // 设置当前滚动区间是否冒泡事件
    if (bubble === false) options.bubble = bubble;
    // 鼠标拖动开关
    if (dragable === false) options.dragable = dragable;
    // 触摸开关
    if (touchable === false) options.touchable = touchable;
    return Object.assign(options, {
        body: body,
        html: html,
        doc: doc,
        win: win
    });
}
exports.default = function(options) {
    var overscroll = {
        scrollTop: 0,
        scrollLeft: 0,
        scrollHeight: 0,
        scrollWidth: 0,
        clientHeight: 0,
        clientWidth: 0,
        section: 1,
        scrolling: false
    };
    var scope = {
        X: X,
        Y: Y,
        XY: XY,
        xreg: xreg,
        yreg: yreg,
        hasX: hasX,
        hasY: hasY,
        hasXY: hasXY,
        OVERSCROLL: OVERSCROLL,
        OVERSCROLLX: OVERSCROLLX,
        OVERSCROLLY: OVERSCROLLY,
        BUBBLE: BUBBLE,
        NOBUBBLE: NOBUBBLE,
        overscroll: overscroll
    };
    Object.assign(scope, getOptions(options));
    Object.assign(scope, (0, _domDefault.default)(scope), {
        getScroll: getScrollByAxis(scope),
        handleDestroy: (0, _handlers.handleDestroy)(scope),
        handleBeforeScroll: (0, _handlers.handleBeforeScroll)(scope),
        handleAfterScroll: (0, _handlers.handleAfterScroll)(scope),
        handleScroll: (0, _handlers.handleScroll)(scope),
        handleInit: (0, _handlers.handleInit)(scope)
    });
    Object.assign(scope, (0, _domStatesDefault.default)(scope));
    Object.assign(scope, (0, _actionsDefault.default)(scope));
    Object.assign(scope, (0, _animationsDefault.default)(scope));
    return scope;
};

},{"whatitis":"dF3bz","./actions":"1rK3u","./utils/dom":"8aKlG","./domStates":"kEurE","./animations":"ebUvC","./utils/dom/getWindow":"5Pi4K","./utils/dom/getDocument":"codgz","./handlers":"axZby","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dF3bz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isobject = require("isobject");
var _isobjectDefault = parcelHelpers.interopDefault(_isobject);
var _isPlainObject = require("is-plain-object");
var _isPlainObjectDefault = parcelHelpers.interopDefault(_isPlainObject);
var _base = require("./base");
var _baseDefault = parcelHelpers.interopDefault(_base);
var _isDefined = require("./isDefined");
var _isDefinedDefault = parcelHelpers.interopDefault(_isDefined);
var _isUndefined = require("./isUndefined");
var _isUndefinedDefault = parcelHelpers.interopDefault(_isUndefined);
var _isClassOf = require("./isClassOf");
var _isClassOfDefault = parcelHelpers.interopDefault(_isClassOf);
var _isWindow = require("./isWindow");
var _isWindowDefault = parcelHelpers.interopDefault(_isWindow);
var _isElement = require("./isElement");
var _isElementDefault = parcelHelpers.interopDefault(_isElement);
var _isDocument = require("./isDocument");
var _isDocumentDefault = parcelHelpers.interopDefault(_isDocument);
var _isArrayLike = require("./isArrayLike");
var _isArrayLikeDefault = parcelHelpers.interopDefault(_isArrayLike);
var _isOneOf = require("./isOneOf");
var _isOneOfDefault = parcelHelpers.interopDefault(_isOneOf);
var _isOneOfType = require("./isOneOfType"); // Number, Function, RegExp, Boolean, Date, Error, Arguments,
var _isOneOfTypeDefault = parcelHelpers.interopDefault(_isOneOfType);
// PlainObject, Object, Array, ArrayLike, Element
exports.default = Object.assign((0, _baseDefault.default), {
    Undefined: (0, _isUndefinedDefault.default),
    Defined: (0, _isDefinedDefault.default),
    Element: (0, _isElementDefault.default),
    Window: (0, _isWindowDefault.default),
    Document: (0, _isDocumentDefault.default),
    PlainObject: (0, _isPlainObjectDefault.default),
    Object: (0, _isobjectDefault.default),
    ArrayLike: (0, _isArrayLikeDefault.default),
    classOf: (0, _isClassOfDefault.default),
    oneOfType: (0, _isOneOfTypeDefault.default),
    oneOf: (0, _isOneOfDefault.default)
});

},{"isobject":"u8nQr","is-plain-object":"1pLOI","./base":"4STHH","./isDefined":"aeBYg","./isUndefined":"9XVRH","./isClassOf":"eVzgc","./isWindow":"dRv5q","./isElement":"kfBx8","./isDocument":"64fit","./isArrayLike":"9it51","./isOneOf":"7nht0","./isOneOfType":"ka7pa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"u8nQr":[function(require,module,exports) {
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ "use strict";
module.exports = function isObject(val) {
    return val != null && typeof val === "object" && Array.isArray(val) === false;
};

},{}],"1pLOI":[function(require,module,exports) {
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ "use strict";
var isObject = require("c40d935aa50b0faa");
function isObjectObject(o) {
    return isObject(o) === true && Object.prototype.toString.call(o) === "[object Object]";
}
module.exports = function isPlainObject(o) {
    var ctor, prot;
    if (isObjectObject(o) === false) return false;
    // If has modified constructor
    ctor = o.constructor;
    if (typeof ctor !== "function") return false;
    // If has modified prototype
    prot = ctor.prototype;
    if (isObjectObject(prot) === false) return false;
    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty("isPrototypeOf") === false) return false;
    // Most likely a plain Object
    return true;
};

},{"c40d935aa50b0faa":"u8nQr"}],"4STHH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _kindOf = require("kind-of"); // https://github.com/jonschlinkert/kind-of
var _kindOfDefault = parcelHelpers.interopDefault(_kindOf);
var itis = {};
[
    "Array",
    "Number",
    "Function",
    "RegExp",
    "Boolean",
    "Date",
    "Error",
    "Arguments",
    "Null",
    "String"
].forEach(function(name) {
    itis[name] = function(v) {
        return (0, _kindOfDefault.default)(v) === name.toLowerCase();
    };
});
exports.default = itis;

},{"kind-of":"iaObk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iaObk":[function(require,module,exports) {
var toString = Object.prototype.toString;
module.exports = function kindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    var type = typeof val;
    if (type === "boolean") return "boolean";
    if (type === "string") return "string";
    if (type === "number") return "number";
    if (type === "symbol") return "symbol";
    if (type === "function") return isGeneratorFn(val) ? "generatorfunction" : "function";
    if (isArray(val)) return "array";
    if (isBuffer(val)) return "buffer";
    if (isArguments(val)) return "arguments";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    if (isRegexp(val)) return "regexp";
    switch(ctorName(val)){
        case "Symbol":
            return "symbol";
        case "Promise":
            return "promise";
        // Set, Map, WeakSet, WeakMap
        case "WeakMap":
            return "weakmap";
        case "WeakSet":
            return "weakset";
        case "Map":
            return "map";
        case "Set":
            return "set";
        // 8-bit typed arrays
        case "Int8Array":
            return "int8array";
        case "Uint8Array":
            return "uint8array";
        case "Uint8ClampedArray":
            return "uint8clampedarray";
        // 16-bit typed arrays
        case "Int16Array":
            return "int16array";
        case "Uint16Array":
            return "uint16array";
        // 32-bit typed arrays
        case "Int32Array":
            return "int32array";
        case "Uint32Array":
            return "uint32array";
        case "Float32Array":
            return "float32array";
        case "Float64Array":
            return "float64array";
    }
    if (isGeneratorObj(val)) return "generator";
    // Non-plain objects
    type = toString.call(val);
    switch(type){
        case "[object Object]":
            return "object";
        // iterators
        case "[object Map Iterator]":
            return "mapiterator";
        case "[object Set Iterator]":
            return "setiterator";
        case "[object String Iterator]":
            return "stringiterator";
        case "[object Array Iterator]":
            return "arrayiterator";
    }
    // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
};
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isArray(val) {
    if (Array.isArray) return Array.isArray(val);
    return val instanceof Array;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function isRegexp(val) {
    if (val instanceof RegExp) return true;
    return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
}
function isGeneratorFn(name, val) {
    return ctorName(name) === "GeneratorFunction";
}
function isGeneratorObj(val) {
    return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
}
function isArguments(val) {
    try {
        if (typeof val.length === "number" && typeof val.callee === "function") return true;
    } catch (err) {
        if (err.message.indexOf("callee") !== -1) return true;
    }
    return false;
}
/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */ function isBuffer(val) {
    if (val.constructor && typeof val.constructor.isBuffer === "function") return val.constructor.isBuffer(val);
    return false;
}

},{}],"aeBYg":[function(require,module,exports) {
/**
 * 2017-08-12 rainx
 * If a variable is not equal to null or undefined, I think it is defined.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(variable) {
    return variable !== null && variable !== undefined;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9XVRH":[function(require,module,exports) {
/**
 * 2017-08-12 rainx
 * Be contrary to isDefined.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(variable) {
    return variable === null || variable === undefined;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eVzgc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>classOf);
function classOf(Cls) {
    return function(obj) {
        return obj instanceof Cls;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dRv5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(win) {
        return win != null && win === win.window;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kfBx8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeof = require("@babel/runtime/helpers/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
/**
 * nodeType 说明 http://www.w3school.com.cn/jsref/prop_node_nodetype.asp
 *
 * 1 Element  代表元素
 *   Element, Text, Comment, ProcessingInstruction, CDATASection, EntityReference
 * 2 Attr  代表属性
 *   Text, EntityReference
 * 3 Text  代表元素或属性中的文本内容
 *   None
 * 4 CDATASection  代表文档中的 CDATA 部分（不会由解析器解析的文本）
 *   None
 * 5 EntityReference  代表实体引用
 *   Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
 * 6 Entity  代表实体
 *   Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
 * 7 ProcessingInstruction  代表处理指令
 *   None
 * 8 Comment  代表注释
 *   None
 * 9 Document  代表整个文档（DOM 树的根节点）
 *   Element, ProcessingInstruction, Comment, DocumentType
 * 10 DocumentType  向为文档定义的实体提供接口
 *   None
 * 11 DocumentFragment  代表轻量级的 Document 对象，能够容纳文档的某个部分
 *   Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
 * 12 Notation  代表 DTD 中声明的符号
 *   None
 */ exports.default = function(element) {
    return (0, _typeofDefault.default)(element) === "object" && element && element.nodeType === 1;
};

},{"@babel/runtime/helpers/typeof":"jgQjt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jgQjt":[function(require,module,exports) {
function _typeof(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],"64fit":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeof = require("@babel/runtime/helpers/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
exports.default = function(element) {
    return (0, _typeofDefault.default)(element) === "object" && element.nodeType === 9;
};

},{"@babel/runtime/helpers/typeof":"jgQjt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9it51":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(collection) {
        var length = getLength(collection);
        return (0, _baseDefault.default).Number(length) && length >= 0 && length <= MAX_ARRAY_INDEX;
    });
var _isobject = require("isobject");
var _isobjectDefault = parcelHelpers.interopDefault(_isobject);
var _base = require("./base");
var _baseDefault = parcelHelpers.interopDefault(_base);
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
function getLength(obj) {
    return (0, _isobjectDefault.default)(obj) ? obj.length : undefined;
}

},{"isobject":"u8nQr","./base":"4STHH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7nht0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array) {
        return function(variable) {
            return array.indexOf(variable) !== -1;
        };
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ka7pa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(array) {
        return function(variable) {
            return array.reduce(function(result, type) {
                var funName = "is".concat(type[0].toUpperCase() + type.slice(1));
                if ((0, _baseDefault.default)[funName]) return result || (0, _baseDefault.default)[funName](variable);
                return result || false;
            }, false);
        };
    });
var _base = require("./base");
var _baseDefault = parcelHelpers.interopDefault(_base);

},{"./base":"4STHH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1rK3u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(scope) {
    var target = scope.target, win = scope.win, overscroll = scope.overscroll, isPageScroll = scope.isPageScroll, resetState = scope.resetState, getScroll = scope.getScroll, getFromRange = scope.getFromRange, getScrollSize = scope.getScrollSize, getClientSize = scope.getClientSize;
    function setScroll() {
        var scrollLeft = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : overscroll.scrollLeft;
        var scrollTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : overscroll.scrollTop;
        // 取出滚动区域大小和可视范围计算滚动位置
        var scrollTopRange = overscroll.scrollTopRange, scrollLeftRange = overscroll.scrollLeftRange;
        var newScrollTop = scrollTopRange(scrollTop);
        var newScrollLeft = scrollLeftRange(scrollLeft);
        // 重置dom状态
        resetState(newScrollTop, newScrollLeft);
        // 缓存滚动条位置
        overscroll.scrollLeft = newScrollLeft;
        overscroll.scrollTop = newScrollTop;
        if (isPageScroll) win.scrollTo(overscroll.scrollLeft, overscroll.scrollTop);
        else {
            target.scrollTop = overscroll.scrollTop;
            target.scrollLeft = overscroll.scrollLeft;
        }
    }
    function resetCache() {
        var _getScroll = getScroll(), top = _getScroll.top, left = _getScroll.left;
        var _getScrollSize = getScrollSize(), scrollWidth = _getScrollSize.width, scrollHeight = _getScrollSize.height;
        var _getClientSize = getClientSize(), clientWidth = _getClientSize.width, clientHeight = _getClientSize.height;
        overscroll.scrollTop = top;
        overscroll.scrollLeft = left;
        overscroll.scrollWidth = scrollWidth;
        overscroll.scrollHeight = scrollHeight;
        overscroll.clientWidth = clientWidth;
        overscroll.clientHeight = clientHeight;
        overscroll.scrollTopRange = getFromRange(0, scrollHeight - clientHeight);
        overscroll.scrollLeftRange = getFromRange(0, scrollWidth - clientWidth);
    }
    return {
        setScroll: setScroll,
        resetCache: resetCache
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8aKlG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getOffset = require("./getOffset");
var _getFromRange = require("./getFromRange");
var _getFromRangeDefault = parcelHelpers.interopDefault(_getFromRange);
var _getClientSize = require("./getClientSize");
var _getClientSizeDefault = parcelHelpers.interopDefault(_getClientSize);
var _getScrollSize = require("./getScrollSize");
var _getScrollSizeDefault = parcelHelpers.interopDefault(_getScrollSize);
var _hasScrollBar = require("./hasScrollBar");
var _hasScrollBarDefault = parcelHelpers.interopDefault(_hasScrollBar);
var _contains = require("./contains");
var _containsDefault = parcelHelpers.interopDefault(_contains);
var _domData = require("./domData");
var _domDataDefault = parcelHelpers.interopDefault(_domData);
var _getDocument = require("./getDocument");
var _getDocumentDefault = parcelHelpers.interopDefault(_getDocument);
var _getWindow = require("./getWindow");
var _getWindowDefault = parcelHelpers.interopDefault(_getWindow);
var _getParent = require("./getParent");
var _getParentDefault = parcelHelpers.interopDefault(_getParent);
var _extends = Object.assign || function(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
    }
    return target;
};
exports.default = function(scope) {
    var target = scope.target, NOBUBBLE = scope.NOBUBBLE;
    var hasScrollBarFuncs = (0, _hasScrollBarDefault.default)(scope);
    var hasScrollY = hasScrollBarFuncs.hasScrollY, hasScrollX = hasScrollBarFuncs.hasScrollX;
    function getNearestScrollable(dom) {
        return target === dom || (0, _domData.hasData)(dom, NOBUBBLE) || hasScrollY(dom) || hasScrollX(dom) ? dom : (0, _getParentDefault.default)(dom, function(dom) {
            return target === dom || (0, _domData.hasData)(dom, NOBUBBLE) || hasScrollY(dom) || hasScrollX(dom);
        });
    }
    return _extends({
        domData: (0, _domDataDefault.default),
        contains: (0, _containsDefault.default),
        getFromRange: (0, _getFromRangeDefault.default),
        getWindow: (0, _getWindowDefault.default),
        getParent: (0, _getParentDefault.default),
        getDocument: (0, _getDocumentDefault.default),
        getNearestScrollable: getNearestScrollable,
        getOffset: (0, _getOffset.getOffset)(scope),
        getPosition: (0, _getOffset.getPosition)(scope),
        getClientSize: (0, _getClientSizeDefault.default)(scope),
        getScrollSize: (0, _getScrollSizeDefault.default)(scope)
    }, hasScrollBarFuncs);
};

},{"./getOffset":"cM0Pe","./getFromRange":"iZ9dr","./getClientSize":"4zx2d","./getScrollSize":"3E6ba","./hasScrollBar":"1JK4F","./contains":"llmBH","./domData":"e5Saw","./getDocument":"codgz","./getWindow":"5Pi4K","./getParent":"1Sc4t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cM0Pe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOffset", ()=>getOffset);
parcelHelpers.export(exports, "getPosition", ()=>getPosition);
var getOffset = function getOffset(_ref) {
    var win = _ref.win, body = _ref.body, html = _ref.html;
    return function(node) {
        var box = node.getBoundingClientRect();
        // < ie8 不支持 win.pageXOffset, 则使用 html.scrollLeft
        return {
            left: box.left + (win.pageXOffset || html.scrollLeft) - (html.clientLeft || body.clientLeft || 0),
            top: box.top + (win.pageYOffset || html.scrollTop) - (html.clientTop || body.clientTop || 0)
        };
    };
};
var getPosition = function getPosition(scope) {
    return function(node) {
        // if ( node.parentNode === scope.body ) {
        //   return getOffset( scope )( node );
        // }
        var parent = node.parentNode;
        var parentOffset = getOffset(scope)(parent);
        var offset = getOffset(scope)(node);
        return {
            left: offset.left - parentOffset.left,
            top: offset.top - parentOffset.top
        };
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZ9dr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(min, max) {
    return function(number) {
        return Math.min(max, Math.max(min, number));
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4zx2d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(_ref) {
    var html = _ref.html, target = _ref.target, isPageScroll = _ref.isPageScroll;
    return function() {
        var width = void 0;
        var height = void 0;
        if (isPageScroll) {
            width = html.clientWidth;
            height = html.clientHeight;
        // width = win.innerWidth || html.clientWidth;
        // height = win.innerHeight || html.clientHeight;
        } else {
            width = target.clientWidth;
            height = target.clientHeight;
        }
        return {
            width: width,
            height: height
        };
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3E6ba":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(_ref) {
    var body = _ref.body, html = _ref.html, target = _ref.target, isPageScroll = _ref.isPageScroll;
    return function() {
        var width = void 0;
        var height = void 0;
        if (isPageScroll) {
            width = Math.max(html.scrollWidth, body.scrollWidth);
            height = Math.max(html.scrollHeight, body.scrollHeight);
        } else {
            width = target.scrollWidth;
            height = target.scrollHeight;
        }
        return {
            width: width,
            height: height
        };
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1JK4F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _css = require("../css");
var _domData = require("./domData");
// 实际情况下 body documentElement 不会都设置 overflow: scroll
// 推荐 html, body { height: 100% } body { overflow: auto; }
function compose(funcA, funcB) {
    return function() {
        return funcA(funcB.apply(undefined, arguments));
    };
}
var scrollable = function scrollable(attr) {
    return function(dom) {
        return [
            "overlay",
            "scroll",
            "auto"
        ].includes((0, _css.get)(dom, attr));
    };
};
exports.default = function(_ref) {
    var body = _ref.body, html = _ref.html, target = _ref.target, OVERSCROLLX = _ref.OVERSCROLLX, OVERSCROLLY = _ref.OVERSCROLLY;
    function hasScrollX(dom) {
        return dom.scrollWidth > dom.clientWidth && ((0, _domData.hasData)(dom, OVERSCROLLX) || scrollable("overflow-x")(dom));
    }
    function hasScrollY(dom) {
        return dom.scrollHeight > dom.clientHeight && ((0, _domData.hasData)(dom, OVERSCROLLY) || scrollable("overflow-y")(dom));
    }
    function scrollingElement() {
        var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : target;
        return dom === body ? html : dom;
    }
    function hasScroll(dom) {
        return {
            x: hasScrollX(dom),
            y: hasScrollY(dom)
        };
    }
    return {
        hasScroll: compose(hasScroll, scrollingElement),
        hasScrollX: compose(hasScrollX, scrollingElement),
        hasScrollY: compose(hasScrollY, scrollingElement)
    };
};

},{"../css":"kzuBZ","./domData":"e5Saw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzuBZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "set", ()=>set);
var _whatitis = require("whatitis");
var _whatitisDefault = parcelHelpers.interopDefault(_whatitis);
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset/;
var removePixel = {
    left: true,
    top: true
};
var floatMap = {
    cssFloat: 1,
    styleFloat: 1,
    float: 1
};
function getComputedStyle(node) {
    return node.nodeType === 1 ? node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
}
function getStyleValue(node, type, value) {
    type = type.toLowerCase();
    if (value === "auto") {
        if (type === "height") return node.offsetHeight;
        if (type === "width") return node.offsetWidth;
    }
    if (!(type in removePixel)) removePixel[type] = PIXEL_PATTERN.test(type);
    return removePixel[type] ? parseFloat(value) || 0 : value;
}
function get(node, name) {
    var length = arguments.length;
    var style = getComputedStyle(node);
    name = floatMap[name] ? "cssFloat" in node.style ? "cssFloat" : "styleFloat" : name;
    return length === 1 ? style : getStyleValue(node, name, style[name] || node.style[name]);
}
function set(node, name, value) {
    var length = arguments.length;
    name = floatMap[name] ? "cssFloat" in node.style ? "cssFloat" : "styleFloat" : name;
    if (length === 3) {
        if (typeof value === "number" && PIXEL_PATTERN.test(name)) value = value + "px";
        node.style[name] = value; // Number
        return value;
    }
    if ((0, _whatitisDefault.default).PlainObject(name)) Object.entries(name).forEach(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        set(node, key, value);
    });
    // for ( const x in name ) {
    //   if ( name.hasOwnProperty( x )) {
    //     set( node, x, name[x]);
    //   }
    // }
    return getComputedStyle(node);
}

},{"whatitis":"dF3bz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e5Saw":[function(require,module,exports) {
// import camelCase from '../camelCase';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setData", ()=>setData);
parcelHelpers.export(exports, "getData", ()=>getData);
parcelHelpers.export(exports, "hasData", ()=>hasData);
parcelHelpers.export(exports, "removeData", ()=>removeData);
var _hyphenate = require("../hyphenate");
var _hyphenateDefault = parcelHelpers.interopDefault(_hyphenate);
function firstCharToLowerCase(str) {
    var firstChar = str.charAt(0);
    if (/^[A-Z]$/.test(str.charAt(0))) return firstChar.toLowerCase() + str.slice(1);
    return str;
}
var setData = function setData(dom, name) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    if (dom.dataset) dom.dataset[firstCharToLowerCase(name)] = value;
    else dom.setAttribute("data-" + (0, _hyphenateDefault.default)(name), value);
};
var getData = function getData(dom, name) {
    if (dom.dataset) return dom.dataset[firstCharToLowerCase(name)];
    return dom.getAttribute("data-" + (0, _hyphenateDefault.default)(name));
};
var hasData = function hasData(dom, name) {
    if (dom.dataset) return Object.keys(dom.dataset).includes(firstCharToLowerCase(name));
    return dom.hasAttribute("data-" + (0, _hyphenateDefault.default)(name));
};
var removeData = function removeData(dom, name) {
    if (dom.dataset) delete dom.dataset[firstCharToLowerCase(name)];
    else dom.removeAttribute("data-" + (0, _hyphenateDefault.default)(name));
};
exports.default = {
    setData: setData,
    getData: getData,
    hasData: hasData,
    removeData: removeData
};

},{"../hyphenate":"aFxen","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFxen":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>hyphenate);
var hyphenateRE = /([a-z\d])([A-Z])/g;
function hyphenate(str) {
    return str.replace(hyphenateRE, "$1-$2").toLowerCase();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"llmBH":[function(require,module,exports) {
// 检测 parentNode 元素包含 childNode 元素
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>contains);
function contains(parentNode, childNode) {
    // 标准浏览器支持compareDocumentPosition
    if (parentNode.compareDocumentPosition) return !!(parentNode.compareDocumentPosition(childNode) & 16);
    else if (parentNode.contains) return parentNode !== childNode && parentNode.contains(childNode);
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"codgz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getDocument);
var _whatitis = require("whatitis");
var _whatitisDefault = parcelHelpers.interopDefault(_whatitis);
function getDocument(dom) {
    return (0, _whatitisDefault.default).Element(dom) ? dom.ownerDocument : document;
}

},{"whatitis":"dF3bz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Pi4K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getWindow);
var _whatitis = require("whatitis");
var _whatitisDefault = parcelHelpers.interopDefault(_whatitis);
var _getDocument = require("./getDocument");
var _getDocumentDefault = parcelHelpers.interopDefault(_getDocument);
function getWindow(dom) {
    var doc = (0, _whatitisDefault.default).Document(dom) ? dom : (0, _getDocumentDefault.default)(dom);
    return doc.defaultView || window;
}

},{"whatitis":"dF3bz","./getDocument":"codgz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Sc4t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parentNode);
var _whatitis = require("whatitis");
var _whatitisDefault = parcelHelpers.interopDefault(_whatitis);
var _getWindow = require("./getWindow");
var _getWindowDefault = parcelHelpers.interopDefault(_getWindow);
function parentNode(dom, condition) {
    var parent = dom.parentNode;
    if ((0, _whatitisDefault.default).Function(condition)) return parent && condition(parent) === true ? parent : parent ? parentNode(parent, condition) : null;
    return parent || (0, _getWindowDefault.default)(dom);
}

},{"whatitis":"dF3bz","./getWindow":"5Pi4K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kEurE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = function(scope) {
    var target = scope.target, overscroll = scope.overscroll, _scope$domData = scope.domData, setData = _scope$domData.setData, hasData = _scope$domData.hasData, removeData = _scope$domData.removeData, hasScrollY = scope.hasScrollY, hasScrollX = scope.hasScrollX, getNearestScrollable = scope.getNearestScrollable, getParent = scope.getParent, NOBUBBLE = scope.NOBUBBLE;
    function handleState(states) {
        return function(target) {
            var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            if (!hasData(target, state)) {
                states.filter(function(elemState) {
                    return state !== elemState && hasData(target, elemState);
                }).forEach(function(state) {
                    return removeData(target, state);
                });
                if (state && states.includes(state)) setData(target, state);
            }
        };
    }
    // 滚动位置
    var setPositionX = handleState([
        "scrollLeft",
        "scrollRight",
        "scrollX"
    ]);
    var setPositionY = handleState([
        "scrollTop",
        "scrollBottom",
        "scrollY"
    ]);
    // 动画状态
    var setAnimationX = handleState([
        "scrollingX"
    ]);
    var setAnimationY = handleState([
        "scrollingY"
    ]);
    // 方向
    var setDirectionX = handleState([
        "scrollingLeft",
        "scrollingRight"
    ]);
    var setDirectionY = handleState([
        "scrollingUp",
        "scrollingDown"
    ]);
    function animatingX() {
        setAnimationX(target, "scrollingX");
    }
    function animatingY() {
        setAnimationY(target, "scrollingY");
    }
    function scrollingUp() {
        setDirectionY(target, "scrollingUp");
    }
    function scrollingDown() {
        setDirectionY(target, "scrollingDown");
    }
    function scrollingLeft() {
        setDirectionX(target, "scrollingLeft");
    }
    function scrollingRight() {
        setDirectionX(target, "scrollingRight");
    }
    function scrollingStopX() {
        setDirectionX(target);
        setAnimationX(target);
    }
    function scrollingStopY() {
        setDirectionY(target);
        setAnimationY(target);
    }
    function isTop() {
        var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : overscroll;
        return dom.scrollTop < 1;
    }
    function isBottom() {
        var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : overscroll;
        return dom.scrollTop === dom.scrollHeight - dom.clientHeight;
    }
    function isLeft() {
        var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : overscroll;
        return dom.scrollLeft < 1;
    }
    function isRight() {
        var dom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : overscroll;
        return dom.scrollLeft === dom.scrollWidth - dom.clientWidth;
    }
    function scrollableTo(dom) {
        return {
            top: hasScrollY(dom) && !isTop(dom),
            left: hasScrollX(dom) && !isLeft(dom),
            right: hasScrollX(dom) && !isRight(dom),
            bottom: hasScrollY(dom) && !isBottom(dom)
        };
    }
    function scrollable(dom) {
        var childrenState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
            top: false,
            left: false,
            right: false,
            bottom: false
        };
        var scrollableDom = getNearestScrollable(dom);
        var state = scrollableTo(scrollableDom);
        if (target === scrollableDom) return {
            top: state.top && !childrenState.top,
            left: state.left && !childrenState.left,
            right: state.right && !childrenState.right,
            bottom: state.bottom && !childrenState.bottom
        };
        return scrollable(getParent(scrollableDom), {
            top: hasData(scrollableDom, NOBUBBLE) || state.top || childrenState.top,
            left: hasData(scrollableDom, NOBUBBLE) || state.left || childrenState.left,
            right: hasData(scrollableDom, NOBUBBLE) || state.right || childrenState.right,
            bottom: hasData(scrollableDom, NOBUBBLE) || state.bottom || childrenState.bottom
        });
    }
    // 滚动状态设置完成后运行该函数
    function resetState() {
        var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var scrollLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        // 位置判断 -----------------
        // 纵向状态设置
        if (isTop()) setPositionY(target, "scrollTop");
        else if (isBottom()) setPositionY(target, "scrollBottom");
        else setPositionY(target, "scrollY");
        // 横向状态设置
        if (isLeft()) setPositionX(target, "scrollLeft");
        else if (isRight()) setPositionX(target, "scrollRight");
        else setPositionX(target, "scrollX");
        // 滚动状态判断 ----------------
        if (scrollTop === 0 || overscroll.scrollTop === scrollTop) scrollingStopY();
        else if (overscroll.scrollTop > scrollTop) {
            animatingY();
            scrollingDown();
        } else if (overscroll.scrollTop < scrollTop) {
            animatingY();
            scrollingUp();
        }
        if (scrollLeft === 0 || overscroll.scrollLeft === scrollLeft) scrollingStopX();
        else if (overscroll.scrollLeft > scrollLeft) {
            animatingX();
            scrollingRight();
        } else if (overscroll.scrollLeft < scrollLeft) {
            animatingX();
            scrollingLeft();
        }
    }
    return {
        isTop: isTop,
        isBottom: isBottom,
        isLeft: isLeft,
        isRight: isRight,
        animatingX: animatingX,
        animatingY: animatingY,
        scrollingUp: scrollingUp,
        scrollingDown: scrollingDown,
        scrollingLeft: scrollingLeft,
        scrollingRight: scrollingRight,
        scrollingStopX: scrollingStopX,
        scrollingStopY: scrollingStopY,
        resetState: resetState,
        scrollable: scrollable
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebUvC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _animScroll = require("./animScroll");
var _animScrollDefault = parcelHelpers.interopDefault(_animScroll);
var _animSection = require("./animSection");
var _animSectionDefault = parcelHelpers.interopDefault(_animSection);
exports.default = function(scope) {
    var animation = void 0;
    var mode = scope.mode, overscroll = scope.overscroll, handleBeforeScroll = scope.handleBeforeScroll, handleAfterScroll = scope.handleAfterScroll;
    handleBeforeScroll(function() {
        overscroll.scrolling = true;
    });
    handleAfterScroll(function() {
        overscroll.scrolling = false;
    });
    if (mode === "scroll") animation = (0, _animScrollDefault.default)(scope);
    if (mode === "section") animation = (0, _animSectionDefault.default)(scope);
    return {
        animation: animation
    };
};

},{"./animScroll":"aIYDR","./animSection":"2KRGc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIYDR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _whatitis = require("whatitis");
var _whatitisDefault = parcelHelpers.interopDefault(_whatitis);
var _hammerjs = require("hammerjs");
var _hammerjsDefault = parcelHelpers.interopDefault(_hammerjs);
var _browser = require("./utils/browser");
var _browserDefault = parcelHelpers.interopDefault(_browser);
var _addDomEventListener = require("./utils/dom/addDomEventListener");
var _addDomEventListenerDefault = parcelHelpers.interopDefault(_addDomEventListener);
var _requestAnimationFrame = require("./utils/requestAnimationFrame");
function sign(number) {
    return number > 0 ? 1 : -1;
}
var a = function a(v) {
    return v > 30 ? 1.5 : (1 - Math.cos(Math.PI * v / 30)) / 2 * 43.5 / 30 + 1 / 30;
};
var easeInOut = function easeInOut(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b; // eslint-disable-line
    return -c / 2 * (--t * (t - 2) - 1) + b;
};
exports.default = function(scope) {
    var handleDestroy = scope.handleDestroy, overscroll = scope.overscroll, hasScrollY = scope.hasScrollY, target = scope.target, html = scope.html, onScroll = scope.onScroll, isPageScroll = scope.isPageScroll, resetCache = scope.resetCache, scrollable = scope.scrollable, isTop = scope.isTop, isBottom = scope.isBottom, isLeft = scope.isLeft, isRight = scope.isRight, getFromRange = scope.getFromRange, hasScrollX = scope.hasScrollX, onBeforeScroll = scope.onBeforeScroll, onAfterScroll = scope.onAfterScroll, scrollX = scope.scrollX, scrollY = scope.scrollY, getScroll = scope.getScroll, dragable = scope.dragable, touchable = scope.touchable;
    var xory = function xory(func) {
        return function(x, y) {
            if (scrollX && scrollY) func(x, y);
            else if (scrollX) func(x);
            else func(undefined, (0, _whatitisDefault.default).Defined(y) ? y : x);
        };
    };
    var abs = Math.abs;
    var max = Math.max;
    var min = Math.min;
    var setScroll = xory(scope.setScroll);
    var getVelocity = function getVelocity(v) {
        return v === 0 ? 0 : getFromRange(2, 50)(v);
    };
    function runAnimFrame() {
        var vx = 0;
        var vy = 0;
        var dx = 0;
        var dy = 0;
        var ovx = 0;
        var ovy = 0;
        var odx = 0;
        var ody = 0;
        var posX = 0;
        var posY = 0;
        var lastTime = 0;
        var timePointX = 0;
        var timePointY = 0;
        handleDestroy((0, _requestAnimationFrame.requestAnimFrame)(function(time) {
            var scrollLeft = overscroll.scrollLeft, scrollTop = overscroll.scrollTop;
            // 滚动到指定位置
            if (dx !== 0 || dy !== 0) {
                if (hasScrollY() && dy !== 0) {
                    timePointY = min(timePointY, 1);
                    var start = posY - ody;
                    var delta = sign(ody) * easeInOut(timePointY, 0, abs(ody), 1);
                    dy = ody - delta;
                    vy = delta - (scrollTop - start);
                    // 向下/向上
                    if (isBottom() && vy > 0 || isTop() && vy < 0) {
                        vy = 0;
                        dy = 0;
                    }
                    if (timePointY === 1) dy = 0;
                    else timePointY += (time - lastTime) / 1000;
                }
                if (hasScrollX() && dx !== 0) {
                    timePointX = min(timePointX, 1);
                    var _start = posX - odx;
                    var _delta = sign(odx) * easeInOut(timePointX, 0, abs(odx), 1);
                    dx = odx - _delta;
                    vx = _delta - (scrollLeft - _start);
                    // 向右/向左
                    if (isRight() && vx > 0 || isLeft() && vx < 0) {
                        vx = 0;
                        dx = 0;
                    }
                    if (timePointX === 1) dx = 0;
                    else timePointX += (time - lastTime) / 1000;
                }
            } else {
                if (hasScrollY() && vy !== 0) {
                    vy = sign(vy) * max(0, abs(vy) - a(abs(vy)));
                    // 向下/向上
                    if (isBottom() && vy > 0 || isTop() && vy < 0) vy = 0;
                }
                if (hasScrollX() && vx !== 0) {
                    vx = sign(vx) * max(0, abs(vx) - a(abs(vx)));
                    // 向右/向左
                    if (isRight() && vx > 0 || isLeft() && vx < 0) vx = 0;
                }
            }
            if (!overscroll.scrolling && ovx === 0 && ovy === 0 && dx === 0 && dy === 0 && (vx !== 0 || vy !== 0)) onBeforeScroll();
            if (vx !== 0 || vy !== 0) {
                var nextX = scrollLeft + vx;
                var nextY = scrollTop + vy;
                if (overscroll.scrollHeight === overscroll.clientHeight) {
                    nextY = 0;
                    dy = 0;
                    vy = 0;
                    ody = 0;
                    posY = 0;
                    timePointY = 0;
                }
                if (overscroll.scrollWidth === overscroll.clientWidth) {
                    nextX = 0;
                    dx = 0;
                    vx = 0;
                    odx = 0;
                    posX = 0;
                    timePointX = 0;
                }
                setScroll(nextX, nextY);
                // setScroll( scrollLeft + vx, scrollTop + vy );
                // if ( dx !== 0 || dy !== 0 ) {
                onScroll();
            // }
            }
            // 指定距离移动时：速度清空必须 setScroll 之后
            if (dx === 0 && posX !== 0) {
                vx = 0;
                odx = 0;
                posX = 0;
                timePointX = 0;
            }
            if (dy === 0 && posY !== 0) {
                vy = 0;
                ody = 0;
                posY = 0;
                timePointY = 0;
            }
            if (overscroll.scrolling && vx === 0 && vy === 0 && dx === 0 && dy === 0 && (ovx !== 0 || ovy !== 0)) {
                setScroll();
                onAfterScroll();
            }
            // 用于计算滚动的开始和结束
            ovx = vx;
            ovy = vy;
            // 用于计算时间间隔
            lastTime = time;
        }).cancel);
        return {
            scrollMove: xory(function() {
                var velocityX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var velocityY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                if (vy > 0 !== velocityY > 0) vy = 0;
                if (vx > 0 !== velocityX > 0) vx = 0;
                vy += sign(velocityY) * getVelocity(abs(velocityY));
                vy = sign(velocityY) * getVelocity(abs(vy));
                vx += sign(velocityX) * getVelocity(abs(velocityX));
                vx = sign(velocityX) * getVelocity(abs(vx));
            }),
            scrollTo: xory(function() {
                var positionX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : overscroll.scrollLeft;
                var positionY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : overscroll.scrollTop;
                // 一个动作没有结束是开始另一个动作
                if (timePointX !== 0 || timePointY !== 0) {
                    vx = 0;
                    vy = 0;
                    dx = 0;
                    dy = 0;
                    ovx = 0;
                    ovy = 0;
                    odx = 0;
                    ody = 0;
                    posX = 0;
                    posY = 0;
                    timePointX = 0;
                    timePointY = 0;
                } else onBeforeScroll();
                var scrollTop = overscroll.scrollTop, scrollLeft = overscroll.scrollLeft;
                dx = positionX - scrollLeft;
                dy = positionY - scrollTop;
                posX = positionX;
                posY = positionY;
                odx = dx;
                ody = dy;
            }),
            scrollStop: function scrollStop() {
                if (vx !== 0 || vy !== 0) onAfterScroll();
                vx = 0;
                vy = 0;
                dx = 0;
                dy = 0;
                ovx = 0;
                ovy = 0;
                odx = 0;
                ody = 0;
                posX = 0;
                posY = 0;
                timePointX = 0;
                timePointY = 0;
                setScroll();
            }
        };
    }
    function runMouseAction(_ref) {
        var scrollMove = _ref.scrollMove, scrollStop = _ref.scrollStop;
        var eventName = (0, _browserDefault.default).firefox ? "DOMMouseScroll" : "mousewheel";
        handleDestroy((0, _addDomEventListenerDefault.default)(target, "mousedown", scrollStop).remove);
        handleDestroy((0, _addDomEventListenerDefault.default)(isPageScroll ? html : target, eventName, function(event) {
            var deltaY = event.deltaY, deltaX = event.deltaX, shiftKey = event.shiftKey;
            var targetScrollable = scrollable(event.target);
            var targetUnscrollableY = !targetScrollable.top && deltaY >= 0 || !targetScrollable.bottom && deltaY <= 0;
            var targetUnscrollableX = !targetScrollable.left && -deltaX >= 0 || !targetScrollable.right && -deltaX <= 0;
            var scrollTop = overscroll.scrollTop;
            var scrollLeft = overscroll.scrollLeft;
            var x = scrollLeft;
            var y = scrollTop;
            if (!targetUnscrollableX) x = deltaX;
            if (!targetUnscrollableY) y = -deltaY;
            if (x !== scrollLeft || y !== scrollTop) {
                resetCache(scope);
                scrollMove(shiftKey && x === 0 ? y : x, y);
                event.preventDefault();
                event.stopPropagation();
            }
        }).remove);
    }
    function runHammer(_ref2) {
        var scrollMove = _ref2.scrollMove, scrollStop = _ref2.scrollStop;
        var handleTarget = void 0;
        var lastDeltaX = void 0;
        var lastDeltaY = void 0;
        var manager = new (0, _hammerjsDefault.default).Manager(target);
        manager.add(new (0, _hammerjsDefault.default).Pan({
            direction: (0, _hammerjsDefault.default).DIRECTION_ALL,
            threshold: 0
        }));
        manager.on("panstart panmove panend", function(event) {
            event.preventDefault();
            if (!dragable && event.pointerType === "mouse") return;
            if (!touchable && event.pointerType === "touch") return;
            var type = event.type, velocityY = event.velocityY, velocityX = event.velocityX, deltaX = event.deltaX, deltaY = event.deltaY;
            var targetScrollable = scrollable(handleTarget || event.target);
            var targetUnscrollableX = !targetScrollable.left && velocityX >= 0 || !targetScrollable.right && velocityX <= 0;
            var targetUnscrollableY = !targetScrollable.top && velocityY >= 0 || !targetScrollable.bottom && velocityY <= 0;
            var scrollTop = overscroll.scrollTop;
            var scrollLeft = overscroll.scrollLeft;
            var x = scrollLeft;
            var y = scrollTop;
            if (type === "panstart") {
                resetCache(scope);
                lastDeltaX = 0;
                lastDeltaY = 0;
                handleTarget = event.target;
            } else if (type === "panend") {
                handleTarget = null;
                if (!targetUnscrollableX) x = -velocityX * 20;
                if (!targetUnscrollableY) y = -velocityY * 20;
                if (x !== scrollLeft || y !== scrollTop) scrollMove(x, y);
                else if (overscroll.scrolling) onAfterScroll();
            } else {
                if (!targetUnscrollableX) x = scrollLeft - (deltaX - lastDeltaX);
                if (!targetUnscrollableY) y = scrollTop - (deltaY - lastDeltaY);
                if (x !== scrollLeft || y !== scrollTop) {
                    if (!overscroll.scrolling) onBeforeScroll();
                    setScroll(x, y);
                    onScroll();
                }
            }
            lastDeltaX = deltaX;
            lastDeltaY = deltaY;
        });
        handleDestroy(function() {
            return manager.destroy();
        });
        if (touchable) handleDestroy((0, _addDomEventListenerDefault.default)(target, "touchstart", scrollStop).remove);
    }
    return {
        run: function run() {
            resetCache(scope);
            var anim = runAnimFrame();
            runMouseAction(anim);
            if (dragable || touchable) runHammer(anim);
            return {
                scrollTo: function scrollTo(positionX, positionY, noAnimation) {
                    resetCache(scope);
                    if (noAnimation === true) {
                        setScroll(positionX, positionY);
                        return;
                    }
                    anim.scrollStop();
                    anim.scrollTo(positionX, positionY);
                },
                position: function position() {
                    var _getScroll = getScroll(), left = _getScroll.left, top = _getScroll.top;
                    return {
                        scrollTop: top,
                        scrollLeft: left
                    };
                }
            };
        }
    };
};

},{"whatitis":"dF3bz","hammerjs":"lHwvQ","./utils/browser":"3s5Tq","./utils/dom/addDomEventListener":"iSieV","./utils/requestAnimationFrame":"63Bw6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHwvQ":[function(require,module,exports) {
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */ (function(window1, document1, exportName, undefined) {
    "use strict";
    var VENDOR_PREFIXES = [
        "",
        "webkit",
        "Moz",
        "MS",
        "ms",
        "o"
    ];
    var TEST_ELEMENT = document1.createElement("div");
    var TYPE_FUNCTION = "function";
    var round = Math.round;
    var abs = Math.abs;
    var now = Date.now;
    /**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */ function setTimeoutContext(fn, timeout, context) {
        return setTimeout(bindFn(fn, context), timeout);
    }
    /**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */ function invokeArrayArg(arg, fn, context) {
        if (Array.isArray(arg)) {
            each(arg, context[fn], context);
            return true;
        }
        return false;
    }
    /**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */ function each(obj, iterator, context) {
        var i;
        if (!obj) return;
        if (obj.forEach) obj.forEach(iterator, context);
        else if (obj.length !== undefined) {
            i = 0;
            while(i < obj.length){
                iterator.call(context, obj[i], i, obj);
                i++;
            }
        } else for(i in obj)obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
    }
    /**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */ function deprecate(method, name, message) {
        var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
        return function() {
            var e = new Error("get-stack-trace");
            var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
            var log = window1.console && (window1.console.warn || window1.console.log);
            if (log) log.call(window1.console, deprecationMessage, stack);
            return method.apply(this, arguments);
        };
    }
    /**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */ var assign;
    if (typeof Object.assign !== "function") assign = function assign(target) {
        if (target === undefined || target === null) throw new TypeError("Cannot convert undefined or null to object");
        var output = Object(target);
        for(var index = 1; index < arguments.length; index++){
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for(var nextKey in source)if (source.hasOwnProperty(nextKey)) output[nextKey] = source[nextKey];
            }
        }
        return output;
    };
    else assign = Object.assign;
    /**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */ var extend = deprecate(function extend(dest, src, merge) {
        var keys = Object.keys(src);
        var i = 0;
        while(i < keys.length){
            if (!merge || merge && dest[keys[i]] === undefined) dest[keys[i]] = src[keys[i]];
            i++;
        }
        return dest;
    }, "extend", "Use `assign`.");
    /**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */ var merge = deprecate(function merge(dest, src) {
        return extend(dest, src, true);
    }, "merge", "Use `assign`.");
    /**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */ function inherit(child, base, properties) {
        var baseP = base.prototype, childP;
        childP = child.prototype = Object.create(baseP);
        childP.constructor = child;
        childP._super = baseP;
        if (properties) assign(childP, properties);
    }
    /**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */ function bindFn(fn, context) {
        return function boundFn() {
            return fn.apply(context, arguments);
        };
    }
    /**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */ function boolOrFn(val, args) {
        if (typeof val == TYPE_FUNCTION) return val.apply(args ? args[0] || undefined : undefined, args);
        return val;
    }
    /**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */ function ifUndefined(val1, val2) {
        return val1 === undefined ? val2 : val1;
    }
    /**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */ function addEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
            target.addEventListener(type, handler, false);
        });
    }
    /**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */ function removeEventListeners(target, types, handler) {
        each(splitStr(types), function(type) {
            target.removeEventListener(type, handler, false);
        });
    }
    /**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */ function hasParent(node, parent) {
        while(node){
            if (node == parent) return true;
            node = node.parentNode;
        }
        return false;
    }
    /**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */ function inStr(str, find) {
        return str.indexOf(find) > -1;
    }
    /**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */ function splitStr(str) {
        return str.trim().split(/\s+/g);
    }
    /**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */ function inArray(src, find, findByKey) {
        if (src.indexOf && !findByKey) return src.indexOf(find);
        else {
            var i = 0;
            while(i < src.length){
                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) return i;
                i++;
            }
            return -1;
        }
    }
    /**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */ function toArray(obj) {
        return Array.prototype.slice.call(obj, 0);
    }
    /**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */ function uniqueArray(src, key, sort) {
        var results = [];
        var values = [];
        var i = 0;
        while(i < src.length){
            var val = key ? src[i][key] : src[i];
            if (inArray(values, val) < 0) results.push(src[i]);
            values[i] = val;
            i++;
        }
        if (sort) {
            if (!key) results = results.sort();
            else results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
        return results;
    }
    /**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */ function prefixed(obj, property) {
        var prefix, prop;
        var camelProp = property[0].toUpperCase() + property.slice(1);
        var i = 0;
        while(i < VENDOR_PREFIXES.length){
            prefix = VENDOR_PREFIXES[i];
            prop = prefix ? prefix + camelProp : property;
            if (prop in obj) return prop;
            i++;
        }
        return undefined;
    }
    /**
 * get a unique id
 * @returns {number} uniqueId
 */ var _uniqueId = 1;
    function uniqueId() {
        return _uniqueId++;
    }
    /**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */ function getWindowForElement(element) {
        var doc = element.ownerDocument || element;
        return doc.defaultView || doc.parentWindow || window1;
    }
    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;
    var SUPPORT_TOUCH = "ontouchstart" in window1;
    var SUPPORT_POINTER_EVENTS = prefixed(window1, "PointerEvent") !== undefined;
    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);
    var INPUT_TYPE_TOUCH = "touch";
    var INPUT_TYPE_PEN = "pen";
    var INPUT_TYPE_MOUSE = "mouse";
    var INPUT_TYPE_KINECT = "kinect";
    var COMPUTE_INTERVAL = 25;
    var INPUT_START = 1;
    var INPUT_MOVE = 2;
    var INPUT_END = 4;
    var INPUT_CANCEL = 8;
    var DIRECTION_NONE = 1;
    var DIRECTION_LEFT = 2;
    var DIRECTION_RIGHT = 4;
    var DIRECTION_UP = 8;
    var DIRECTION_DOWN = 16;
    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;
    var PROPS_XY = [
        "x",
        "y"
    ];
    var PROPS_CLIENT_XY = [
        "clientX",
        "clientY"
    ];
    /**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */ function Input(manager, callback) {
        var self1 = this;
        this.manager = manager;
        this.callback = callback;
        this.element = manager.element;
        this.target = manager.options.inputTarget;
        // smaller wrapper around the handler, for the scope and the enabled state of the manager,
        // so when disabled the input events are completely bypassed.
        this.domHandler = function(ev) {
            if (boolOrFn(manager.options.enable, [
                manager
            ])) self1.handler(ev);
        };
        this.init();
    }
    Input.prototype = {
        /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */ handler: function() {},
        /**
     * bind the events
     */ init: function() {
            this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        },
        /**
     * unbind the events
     */ destroy: function() {
            this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
            this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
            this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
        }
    };
    /**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */ function createInputInstance(manager) {
        var Type;
        var inputClass = manager.options.inputClass;
        if (inputClass) Type = inputClass;
        else if (SUPPORT_POINTER_EVENTS) Type = PointerEventInput;
        else if (SUPPORT_ONLY_TOUCH) Type = TouchInput;
        else if (!SUPPORT_TOUCH) Type = MouseInput;
        else Type = TouchMouseInput;
        return new Type(manager, inputHandler);
    }
    /**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */ function inputHandler(manager, eventType, input) {
        var pointersLen = input.pointers.length;
        var changedPointersLen = input.changedPointers.length;
        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;
        input.isFirst = !!isFirst;
        input.isFinal = !!isFinal;
        if (isFirst) manager.session = {};
        // source event is the normalized value of the domEvents
        // like 'touchstart, mouseup, pointerdown'
        input.eventType = eventType;
        // compute scale, rotation etc
        computeInputData(manager, input);
        // emit secret event
        manager.emit("hammer.input", input);
        manager.recognize(input);
        manager.session.prevInput = input;
    }
    /**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */ function computeInputData(manager, input) {
        var session = manager.session;
        var pointers = input.pointers;
        var pointersLength = pointers.length;
        // store the first input to calculate the distance and direction
        if (!session.firstInput) session.firstInput = simpleCloneInputData(input);
        // to compute scale and rotation we need to store the multiple touches
        if (pointersLength > 1 && !session.firstMultiple) session.firstMultiple = simpleCloneInputData(input);
        else if (pointersLength === 1) session.firstMultiple = false;
        var firstInput = session.firstInput;
        var firstMultiple = session.firstMultiple;
        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;
        var center = input.center = getCenter(pointers);
        input.timeStamp = now();
        input.deltaTime = input.timeStamp - firstInput.timeStamp;
        input.angle = getAngle(offsetCenter, center);
        input.distance = getDistance(offsetCenter, center);
        computeDeltaXY(session, input);
        input.offsetDirection = getDirection(input.deltaX, input.deltaY);
        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
        input.overallVelocityX = overallVelocity.x;
        input.overallVelocityY = overallVelocity.y;
        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;
        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;
        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;
        computeIntervalInputData(session, input);
        // find the correct target
        var target = manager.element;
        if (hasParent(input.srcEvent.target, target)) target = input.srcEvent.target;
        input.target = target;
    }
    function computeDeltaXY(session, input) {
        var center = input.center;
        var offset = session.offsetDelta || {};
        var prevDelta = session.prevDelta || {};
        var prevInput = session.prevInput || {};
        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
            prevDelta = session.prevDelta = {
                x: prevInput.deltaX || 0,
                y: prevInput.deltaY || 0
            };
            offset = session.offsetDelta = {
                x: center.x,
                y: center.y
            };
        }
        input.deltaX = prevDelta.x + (center.x - offset.x);
        input.deltaY = prevDelta.y + (center.y - offset.y);
    }
    /**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */ function computeIntervalInputData(session, input) {
        var last = session.lastInterval || input, deltaTime = input.timeStamp - last.timeStamp, velocity, velocityX, velocityY, direction;
        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
            var deltaX = input.deltaX - last.deltaX;
            var deltaY = input.deltaY - last.deltaY;
            var v = getVelocity(deltaTime, deltaX, deltaY);
            velocityX = v.x;
            velocityY = v.y;
            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
            direction = getDirection(deltaX, deltaY);
            session.lastInterval = input;
        } else {
            // use latest velocity info if it doesn't overtake a minimum period
            velocity = last.velocity;
            velocityX = last.velocityX;
            velocityY = last.velocityY;
            direction = last.direction;
        }
        input.velocity = velocity;
        input.velocityX = velocityX;
        input.velocityY = velocityY;
        input.direction = direction;
    }
    /**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */ function simpleCloneInputData(input) {
        // make a simple copy of the pointers because we will get a reference if we don't
        // we only need clientXY for the calculations
        var pointers = [];
        var i = 0;
        while(i < input.pointers.length){
            pointers[i] = {
                clientX: round(input.pointers[i].clientX),
                clientY: round(input.pointers[i].clientY)
            };
            i++;
        }
        return {
            timeStamp: now(),
            pointers: pointers,
            center: getCenter(pointers),
            deltaX: input.deltaX,
            deltaY: input.deltaY
        };
    }
    /**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */ function getCenter(pointers) {
        var pointersLength = pointers.length;
        // no need to loop when only one touch
        if (pointersLength === 1) return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
        var x = 0, y = 0, i = 0;
        while(i < pointersLength){
            x += pointers[i].clientX;
            y += pointers[i].clientY;
            i++;
        }
        return {
            x: round(x / pointersLength),
            y: round(y / pointersLength)
        };
    }
    /**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */ function getVelocity(deltaTime, x, y) {
        return {
            x: x / deltaTime || 0,
            y: y / deltaTime || 0
        };
    }
    /**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */ function getDirection(x, y) {
        if (x === y) return DIRECTION_NONE;
        if (abs(x) >= abs(y)) return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
    }
    /**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */ function getDistance(p1, p2, props) {
        if (!props) props = PROPS_XY;
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.sqrt(x * x + y * y);
    }
    /**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */ function getAngle(p1, p2, props) {
        if (!props) props = PROPS_XY;
        var x = p2[props[0]] - p1[props[0]], y = p2[props[1]] - p1[props[1]];
        return Math.atan2(y, x) * 180 / Math.PI;
    }
    /**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */ function getRotation(start, end) {
        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
    }
    /**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */ function getScale(start, end) {
        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
    }
    var MOUSE_INPUT_MAP = {
        mousedown: INPUT_START,
        mousemove: INPUT_MOVE,
        mouseup: INPUT_END
    };
    var MOUSE_ELEMENT_EVENTS = "mousedown";
    var MOUSE_WINDOW_EVENTS = "mousemove mouseup";
    /**
 * Mouse events input
 * @constructor
 * @extends Input
 */ function MouseInput() {
        this.evEl = MOUSE_ELEMENT_EVENTS;
        this.evWin = MOUSE_WINDOW_EVENTS;
        this.pressed = false; // mousedown state
        Input.apply(this, arguments);
    }
    inherit(MouseInput, Input, {
        /**
     * handle mouse events
     * @param {Object} ev
     */ handler: function MEhandler(ev) {
            var eventType = MOUSE_INPUT_MAP[ev.type];
            // on start we want to have the left mouse button down
            if (eventType & INPUT_START && ev.button === 0) this.pressed = true;
            if (eventType & INPUT_MOVE && ev.which !== 1) eventType = INPUT_END;
            // mouse must be down
            if (!this.pressed) return;
            if (eventType & INPUT_END) this.pressed = false;
            this.callback(this.manager, eventType, {
                pointers: [
                    ev
                ],
                changedPointers: [
                    ev
                ],
                pointerType: INPUT_TYPE_MOUSE,
                srcEvent: ev
            });
        }
    });
    var POINTER_INPUT_MAP = {
        pointerdown: INPUT_START,
        pointermove: INPUT_MOVE,
        pointerup: INPUT_END,
        pointercancel: INPUT_CANCEL,
        pointerout: INPUT_CANCEL
    };
    // in IE10 the pointer types is defined as an enum
    var IE10_POINTER_TYPE_ENUM = {
        2: INPUT_TYPE_TOUCH,
        3: INPUT_TYPE_PEN,
        4: INPUT_TYPE_MOUSE,
        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
    };
    var POINTER_ELEMENT_EVENTS = "pointerdown";
    var POINTER_WINDOW_EVENTS = "pointermove pointerup pointercancel";
    // IE10 has prefixed support, and case-sensitive
    if (window1.MSPointerEvent && !window1.PointerEvent) {
        POINTER_ELEMENT_EVENTS = "MSPointerDown";
        POINTER_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel";
    }
    /**
 * Pointer events input
 * @constructor
 * @extends Input
 */ function PointerEventInput() {
        this.evEl = POINTER_ELEMENT_EVENTS;
        this.evWin = POINTER_WINDOW_EVENTS;
        Input.apply(this, arguments);
        this.store = this.manager.session.pointerEvents = [];
    }
    inherit(PointerEventInput, Input, {
        /**
     * handle mouse events
     * @param {Object} ev
     */ handler: function PEhandler(ev) {
            var store = this.store;
            var removePointer = false;
            var eventTypeNormalized = ev.type.toLowerCase().replace("ms", "");
            var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
            var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;
            var isTouch = pointerType == INPUT_TYPE_TOUCH;
            // get index of the event in the store
            var storeIndex = inArray(store, ev.pointerId, "pointerId");
            // start and mouse must be down
            if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
                if (storeIndex < 0) {
                    store.push(ev);
                    storeIndex = store.length - 1;
                }
            } else if (eventType & (INPUT_END | INPUT_CANCEL)) removePointer = true;
            // it not found, so the pointer hasn't been down (so it's probably a hover)
            if (storeIndex < 0) return;
            // update the event in the store
            store[storeIndex] = ev;
            this.callback(this.manager, eventType, {
                pointers: store,
                changedPointers: [
                    ev
                ],
                pointerType: pointerType,
                srcEvent: ev
            });
            if (removePointer) // remove from the store
            store.splice(storeIndex, 1);
        }
    });
    var SINGLE_TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };
    var SINGLE_TOUCH_TARGET_EVENTS = "touchstart";
    var SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";
    /**
 * Touch events input
 * @constructor
 * @extends Input
 */ function SingleTouchInput() {
        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
        this.started = false;
        Input.apply(this, arguments);
    }
    inherit(SingleTouchInput, Input, {
        handler: function TEhandler(ev) {
            var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
            // should we handle the touch events?
            if (type === INPUT_START) this.started = true;
            if (!this.started) return;
            var touches = normalizeSingleTouches.call(this, ev, type);
            // when done, reset the started state
            if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) this.started = false;
            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });
    /**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */ function normalizeSingleTouches(ev, type) {
        var all = toArray(ev.touches);
        var changed = toArray(ev.changedTouches);
        if (type & (INPUT_END | INPUT_CANCEL)) all = uniqueArray(all.concat(changed), "identifier", true);
        return [
            all,
            changed
        ];
    }
    var TOUCH_INPUT_MAP = {
        touchstart: INPUT_START,
        touchmove: INPUT_MOVE,
        touchend: INPUT_END,
        touchcancel: INPUT_CANCEL
    };
    var TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";
    /**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */ function TouchInput() {
        this.evTarget = TOUCH_TARGET_EVENTS;
        this.targetIds = {};
        Input.apply(this, arguments);
    }
    inherit(TouchInput, Input, {
        handler: function MTEhandler(ev) {
            var type = TOUCH_INPUT_MAP[ev.type];
            var touches = getTouches.call(this, ev, type);
            if (!touches) return;
            this.callback(this.manager, type, {
                pointers: touches[0],
                changedPointers: touches[1],
                pointerType: INPUT_TYPE_TOUCH,
                srcEvent: ev
            });
        }
    });
    /**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */ function getTouches(ev, type) {
        var allTouches = toArray(ev.touches);
        var targetIds = this.targetIds;
        // when there is only one touch, the process can be simplified
        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
            targetIds[allTouches[0].identifier] = true;
            return [
                allTouches,
                allTouches
            ];
        }
        var i, targetTouches, changedTouches = toArray(ev.changedTouches), changedTargetTouches = [], target = this.target;
        // get target touches from touches
        targetTouches = allTouches.filter(function(touch) {
            return hasParent(touch.target, target);
        });
        // collect touches
        if (type === INPUT_START) {
            i = 0;
            while(i < targetTouches.length){
                targetIds[targetTouches[i].identifier] = true;
                i++;
            }
        }
        // filter changed touches to only contain touches that exist in the collected target ids
        i = 0;
        while(i < changedTouches.length){
            if (targetIds[changedTouches[i].identifier]) changedTargetTouches.push(changedTouches[i]);
            // cleanup removed touches
            if (type & (INPUT_END | INPUT_CANCEL)) delete targetIds[changedTouches[i].identifier];
            i++;
        }
        if (!changedTargetTouches.length) return;
        return [
            // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
            uniqueArray(targetTouches.concat(changedTargetTouches), "identifier", true),
            changedTargetTouches
        ];
    }
    /**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */ var DEDUP_TIMEOUT = 2500;
    var DEDUP_DISTANCE = 25;
    function TouchMouseInput() {
        Input.apply(this, arguments);
        var handler = bindFn(this.handler, this);
        this.touch = new TouchInput(this.manager, handler);
        this.mouse = new MouseInput(this.manager, handler);
        this.primaryTouch = null;
        this.lastTouches = [];
    }
    inherit(TouchMouseInput, Input, {
        /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */ handler: function TMEhandler(manager, inputEvent, inputData) {
            var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH, isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;
            if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) return;
            // when we're in a touch event, record touches to  de-dupe synthetic mouse event
            if (isTouch) recordTouches.call(this, inputEvent, inputData);
            else if (isMouse && isSyntheticEvent.call(this, inputData)) return;
            this.callback(manager, inputEvent, inputData);
        },
        /**
     * remove the event listeners
     */ destroy: function destroy() {
            this.touch.destroy();
            this.mouse.destroy();
        }
    });
    function recordTouches(eventType, eventData) {
        if (eventType & INPUT_START) {
            this.primaryTouch = eventData.changedPointers[0].identifier;
            setLastTouch.call(this, eventData);
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) setLastTouch.call(this, eventData);
    }
    function setLastTouch(eventData) {
        var touch = eventData.changedPointers[0];
        if (touch.identifier === this.primaryTouch) {
            var lastTouch = {
                x: touch.clientX,
                y: touch.clientY
            };
            this.lastTouches.push(lastTouch);
            var lts = this.lastTouches;
            var removeLastTouch = function() {
                var i = lts.indexOf(lastTouch);
                if (i > -1) lts.splice(i, 1);
            };
            setTimeout(removeLastTouch, DEDUP_TIMEOUT);
        }
    }
    function isSyntheticEvent(eventData) {
        var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
        for(var i = 0; i < this.lastTouches.length; i++){
            var t = this.lastTouches[i];
            var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
            if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) return true;
        }
        return false;
    }
    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction");
    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;
    // magical touchAction value
    var TOUCH_ACTION_COMPUTE = "compute";
    var TOUCH_ACTION_AUTO = "auto";
    var TOUCH_ACTION_MANIPULATION = "manipulation"; // not implemented
    var TOUCH_ACTION_NONE = "none";
    var TOUCH_ACTION_PAN_X = "pan-x";
    var TOUCH_ACTION_PAN_Y = "pan-y";
    var TOUCH_ACTION_MAP = getTouchActionProps();
    /**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */ function TouchAction(manager, value) {
        this.manager = manager;
        this.set(value);
    }
    TouchAction.prototype = {
        /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */ set: function(value) {
            // find out the touch-action by the event handlers
            if (value == TOUCH_ACTION_COMPUTE) value = this.compute();
            if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
            this.actions = value.toLowerCase().trim();
        },
        /**
     * just re-set the touchAction value
     */ update: function() {
            this.set(this.manager.options.touchAction);
        },
        /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */ compute: function() {
            var actions = [];
            each(this.manager.recognizers, function(recognizer) {
                if (boolOrFn(recognizer.options.enable, [
                    recognizer
                ])) actions = actions.concat(recognizer.getTouchAction());
            });
            return cleanTouchActions(actions.join(" "));
        },
        /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */ preventDefaults: function(input) {
            var srcEvent = input.srcEvent;
            var direction = input.offsetDirection;
            // if the touch action did prevented once this session
            if (this.manager.session.prevented) {
                srcEvent.preventDefault();
                return;
            }
            var actions = this.actions;
            var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
            var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
            var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
            if (hasNone) {
                //do not prevent defaults if this is a tap gesture
                var isTapPointer = input.pointers.length === 1;
                var isTapMovement = input.distance < 2;
                var isTapTouchTime = input.deltaTime < 250;
                if (isTapPointer && isTapMovement && isTapTouchTime) return;
            }
            if (hasPanX && hasPanY) // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
            if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) return this.preventSrc(srcEvent);
        },
        /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */ preventSrc: function(srcEvent) {
            this.manager.session.prevented = true;
            srcEvent.preventDefault();
        }
    };
    /**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */ function cleanTouchActions(actions) {
        // none
        if (inStr(actions, TOUCH_ACTION_NONE)) return TOUCH_ACTION_NONE;
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
        // if both pan-x and pan-y are set (different recognizers
        // for different directions, e.g. horizontal pan but vertical swipe?)
        // we need none (as otherwise with pan-x pan-y combined none of these
        // recognizers will work, since the browser would handle all panning
        if (hasPanX && hasPanY) return TOUCH_ACTION_NONE;
        // pan-x OR pan-y
        if (hasPanX || hasPanY) return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
        // manipulation
        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) return TOUCH_ACTION_MANIPULATION;
        return TOUCH_ACTION_AUTO;
    }
    function getTouchActionProps() {
        if (!NATIVE_TOUCH_ACTION) return false;
        var touchMap = {};
        var cssSupports = window1.CSS && window1.CSS.supports;
        [
            "auto",
            "manipulation",
            "pan-y",
            "pan-x",
            "pan-x pan-y",
            "none"
        ].forEach(function(val) {
            // If css.supports is not supported but there is native touch-action assume it supports
            // all values. This is the case for IE 10 and 11.
            touchMap[val] = cssSupports ? window1.CSS.supports("touch-action", val) : true;
        });
        return touchMap;
    }
    /**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */ var STATE_POSSIBLE = 1;
    var STATE_BEGAN = 2;
    var STATE_CHANGED = 4;
    var STATE_ENDED = 8;
    var STATE_RECOGNIZED = STATE_ENDED;
    var STATE_CANCELLED = 16;
    var STATE_FAILED = 32;
    /**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */ function Recognizer(options) {
        this.options = assign({}, this.defaults, options || {});
        this.id = uniqueId();
        this.manager = null;
        // default is enable true
        this.options.enable = ifUndefined(this.options.enable, true);
        this.state = STATE_POSSIBLE;
        this.simultaneous = {};
        this.requireFail = [];
    }
    Recognizer.prototype = {
        /**
     * @virtual
     * @type {Object}
     */ defaults: {},
        /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */ set: function(options) {
            assign(this.options, options);
            // also update the touchAction, in case something changed about the directions/enabled state
            this.manager && this.manager.touchAction.update();
            return this;
        },
        /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ recognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) return this;
            var simultaneous = this.simultaneous;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (!simultaneous[otherRecognizer.id]) {
                simultaneous[otherRecognizer.id] = otherRecognizer;
                otherRecognizer.recognizeWith(this);
            }
            return this;
        },
        /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ dropRecognizeWith: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRecognizeWith", this)) return this;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            delete this.simultaneous[otherRecognizer.id];
            return this;
        },
        /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ requireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "requireFailure", this)) return this;
            var requireFail = this.requireFail;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            if (inArray(requireFail, otherRecognizer) === -1) {
                requireFail.push(otherRecognizer);
                otherRecognizer.requireFailure(this);
            }
            return this;
        },
        /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */ dropRequireFailure: function(otherRecognizer) {
            if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) return this;
            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
            var index = inArray(this.requireFail, otherRecognizer);
            if (index > -1) this.requireFail.splice(index, 1);
            return this;
        },
        /**
     * has require failures boolean
     * @returns {boolean}
     */ hasRequireFailures: function() {
            return this.requireFail.length > 0;
        },
        /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */ canRecognizeWith: function(otherRecognizer) {
            return !!this.simultaneous[otherRecognizer.id];
        },
        /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */ emit: function(input) {
            var self1 = this;
            var state = this.state;
            function emit(event) {
                self1.manager.emit(event, input);
            }
            // 'panstart' and 'panmove'
            if (state < STATE_ENDED) emit(self1.options.event + stateStr(state));
            emit(self1.options.event); // simple 'eventName' events
            if (input.additionalEvent) emit(input.additionalEvent);
            // panend and pancancel
            if (state >= STATE_ENDED) emit(self1.options.event + stateStr(state));
        },
        /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */ tryEmit: function(input) {
            if (this.canEmit()) return this.emit(input);
            // it's failing anyway
            this.state = STATE_FAILED;
        },
        /**
     * can we emit?
     * @returns {boolean}
     */ canEmit: function() {
            var i = 0;
            while(i < this.requireFail.length){
                if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) return false;
                i++;
            }
            return true;
        },
        /**
     * update the recognizer
     * @param {Object} inputData
     */ recognize: function(inputData) {
            // make a new copy of the inputData
            // so we can change the inputData without messing up the other recognizers
            var inputDataClone = assign({}, inputData);
            // is is enabled and allow recognizing?
            if (!boolOrFn(this.options.enable, [
                this,
                inputDataClone
            ])) {
                this.reset();
                this.state = STATE_FAILED;
                return;
            }
            // reset when we've reached the end
            if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) this.state = STATE_POSSIBLE;
            this.state = this.process(inputDataClone);
            // the recognizer has recognized a gesture
            // so trigger an event
            if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) this.tryEmit(inputDataClone);
        },
        /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */ process: function(inputData) {},
        /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */ getTouchAction: function() {},
        /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */ reset: function() {}
    };
    /**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */ function stateStr(state) {
        if (state & STATE_CANCELLED) return "cancel";
        else if (state & STATE_ENDED) return "end";
        else if (state & STATE_CHANGED) return "move";
        else if (state & STATE_BEGAN) return "start";
        return "";
    }
    /**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */ function directionStr(direction) {
        if (direction == DIRECTION_DOWN) return "down";
        else if (direction == DIRECTION_UP) return "up";
        else if (direction == DIRECTION_LEFT) return "left";
        else if (direction == DIRECTION_RIGHT) return "right";
        return "";
    }
    /**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */ function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
        var manager = recognizer.manager;
        if (manager) return manager.get(otherRecognizer);
        return otherRecognizer;
    }
    /**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */ function AttrRecognizer() {
        Recognizer.apply(this, arguments);
    }
    inherit(AttrRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof AttrRecognizer
     */ defaults: {
            /**
         * @type {Number}
         * @default 1
         */ pointers: 1
        },
        /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */ attrTest: function(input) {
            var optionPointers = this.options.pointers;
            return optionPointers === 0 || input.pointers.length === optionPointers;
        },
        /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */ process: function(input) {
            var state = this.state;
            var eventType = input.eventType;
            var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
            var isValid = this.attrTest(input);
            // on cancel input and we've recognized before, return STATE_CANCELLED
            if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) return state | STATE_CANCELLED;
            else if (isRecognized || isValid) {
                if (eventType & INPUT_END) return state | STATE_ENDED;
                else if (!(state & STATE_BEGAN)) return STATE_BEGAN;
                return state | STATE_CHANGED;
            }
            return STATE_FAILED;
        }
    });
    /**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */ function PanRecognizer() {
        AttrRecognizer.apply(this, arguments);
        this.pX = null;
        this.pY = null;
    }
    inherit(PanRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof PanRecognizer
     */ defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: DIRECTION_ALL
        },
        getTouchAction: function() {
            var direction = this.options.direction;
            var actions = [];
            if (direction & DIRECTION_HORIZONTAL) actions.push(TOUCH_ACTION_PAN_Y);
            if (direction & DIRECTION_VERTICAL) actions.push(TOUCH_ACTION_PAN_X);
            return actions;
        },
        directionTest: function(input) {
            var options = this.options;
            var hasMoved = true;
            var distance = input.distance;
            var direction = input.direction;
            var x = input.deltaX;
            var y = input.deltaY;
            // lock to axis?
            if (!(direction & options.direction)) {
                if (options.direction & DIRECTION_HORIZONTAL) {
                    direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
                    hasMoved = x != this.pX;
                    distance = Math.abs(input.deltaX);
                } else {
                    direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
                    hasMoved = y != this.pY;
                    distance = Math.abs(input.deltaY);
                }
            }
            input.direction = direction;
            return hasMoved && distance > options.threshold && direction & options.direction;
        },
        attrTest: function(input) {
            return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
        },
        emit: function(input) {
            this.pX = input.deltaX;
            this.pY = input.deltaY;
            var direction = directionStr(input.direction);
            if (direction) input.additionalEvent = this.options.event + direction;
            this._super.emit.call(this, input);
        }
    });
    /**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */ function PinchRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(PinchRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof PinchRecognizer
     */ defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_NONE
            ];
        },
        attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
        },
        emit: function(input) {
            if (input.scale !== 1) {
                var inOut = input.scale < 1 ? "in" : "out";
                input.additionalEvent = this.options.event + inOut;
            }
            this._super.emit.call(this, input);
        }
    });
    /**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */ function PressRecognizer() {
        Recognizer.apply(this, arguments);
        this._timer = null;
        this._input = null;
    }
    inherit(PressRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof PressRecognizer
     */ defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9 // a minimal movement is ok, but keep it low
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_AUTO
            ];
        },
        process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTime = input.deltaTime > options.time;
            this._input = input;
            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) this.reset();
            else if (input.eventType & INPUT_START) {
                this.reset();
                this._timer = setTimeoutContext(function() {
                    this.state = STATE_RECOGNIZED;
                    this.tryEmit();
                }, options.time, this);
            } else if (input.eventType & INPUT_END) return STATE_RECOGNIZED;
            return STATE_FAILED;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function(input) {
            if (this.state !== STATE_RECOGNIZED) return;
            if (input && input.eventType & INPUT_END) this.manager.emit(this.options.event + "up", input);
            else {
                this._input.timeStamp = now();
                this.manager.emit(this.options.event, this._input);
            }
        }
    });
    /**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */ function RotateRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(RotateRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof RotateRecognizer
     */ defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_NONE
            ];
        },
        attrTest: function(input) {
            return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
        }
    });
    /**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */ function SwipeRecognizer() {
        AttrRecognizer.apply(this, arguments);
    }
    inherit(SwipeRecognizer, AttrRecognizer, {
        /**
     * @namespace
     * @memberof SwipeRecognizer
     */ defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
            pointers: 1
        },
        getTouchAction: function() {
            return PanRecognizer.prototype.getTouchAction.call(this);
        },
        attrTest: function(input) {
            var direction = this.options.direction;
            var velocity;
            if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) velocity = input.overallVelocity;
            else if (direction & DIRECTION_HORIZONTAL) velocity = input.overallVelocityX;
            else if (direction & DIRECTION_VERTICAL) velocity = input.overallVelocityY;
            return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
        },
        emit: function(input) {
            var direction = directionStr(input.offsetDirection);
            if (direction) this.manager.emit(this.options.event + direction, input);
            this.manager.emit(this.options.event, input);
        }
    });
    /**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */ function TapRecognizer() {
        Recognizer.apply(this, arguments);
        // previous time and center,
        // used for tap counting
        this.pTime = false;
        this.pCenter = false;
        this._timer = null;
        this._input = null;
        this.count = 0;
    }
    inherit(TapRecognizer, Recognizer, {
        /**
     * @namespace
     * @memberof PinchRecognizer
     */ defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10 // a multi-tap can be a bit off the initial position
        },
        getTouchAction: function() {
            return [
                TOUCH_ACTION_MANIPULATION
            ];
        },
        process: function(input) {
            var options = this.options;
            var validPointers = input.pointers.length === options.pointers;
            var validMovement = input.distance < options.threshold;
            var validTouchTime = input.deltaTime < options.time;
            this.reset();
            if (input.eventType & INPUT_START && this.count === 0) return this.failTimeout();
            // we only allow little movement
            // and we've reached an end event, so a tap is possible
            if (validMovement && validTouchTime && validPointers) {
                if (input.eventType != INPUT_END) return this.failTimeout();
                var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
                var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
                this.pTime = input.timeStamp;
                this.pCenter = input.center;
                if (!validMultiTap || !validInterval) this.count = 1;
                else this.count += 1;
                this._input = input;
                // if tap count matches we have recognized it,
                // else it has began recognizing...
                var tapCount = this.count % options.taps;
                if (tapCount === 0) {
                    // no failing requirements, immediately trigger the tap event
                    // or wait as long as the multitap interval to trigger
                    if (!this.hasRequireFailures()) return STATE_RECOGNIZED;
                    else {
                        this._timer = setTimeoutContext(function() {
                            this.state = STATE_RECOGNIZED;
                            this.tryEmit();
                        }, options.interval, this);
                        return STATE_BEGAN;
                    }
                }
            }
            return STATE_FAILED;
        },
        failTimeout: function() {
            this._timer = setTimeoutContext(function() {
                this.state = STATE_FAILED;
            }, this.options.interval, this);
            return STATE_FAILED;
        },
        reset: function() {
            clearTimeout(this._timer);
        },
        emit: function() {
            if (this.state == STATE_RECOGNIZED) {
                this._input.tapCount = this.count;
                this.manager.emit(this.options.event, this._input);
            }
        }
    });
    /**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */ function Hammer(element, options) {
        options = options || {};
        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
        return new Manager(element, options);
    }
    /**
 * @const {string}
 */ Hammer.VERSION = "2.0.7";
    /**
 * default settings
 * @namespace
 */ Hammer.defaults = {
        /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */ domEvents: false,
        /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */ touchAction: TOUCH_ACTION_COMPUTE,
        /**
     * @type {Boolean}
     * @default true
     */ enable: true,
        /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */ inputTarget: null,
        /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */ inputClass: null,
        /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */ preset: [
            // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
            [
                RotateRecognizer,
                {
                    enable: false
                }
            ],
            [
                PinchRecognizer,
                {
                    enable: false
                },
                [
                    "rotate"
                ]
            ],
            [
                SwipeRecognizer,
                {
                    direction: DIRECTION_HORIZONTAL
                }
            ],
            [
                PanRecognizer,
                {
                    direction: DIRECTION_HORIZONTAL
                },
                [
                    "swipe"
                ]
            ],
            [
                TapRecognizer
            ],
            [
                TapRecognizer,
                {
                    event: "doubletap",
                    taps: 2
                },
                [
                    "tap"
                ]
            ],
            [
                PressRecognizer
            ]
        ],
        /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */ cssProps: {
            /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */ userSelect: "none",
            /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */ touchSelect: "none",
            /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */ touchCallout: "none",
            /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */ contentZooming: "none",
            /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */ userDrag: "none",
            /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */ tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var STOP = 1;
    var FORCED_STOP = 2;
    /**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */ function Manager(element, options) {
        this.options = assign({}, Hammer.defaults, options || {});
        this.options.inputTarget = this.options.inputTarget || element;
        this.handlers = {};
        this.session = {};
        this.recognizers = [];
        this.oldCssProps = {};
        this.element = element;
        this.input = createInputInstance(this);
        this.touchAction = new TouchAction(this, this.options.touchAction);
        toggleCssProps(this, true);
        each(this.options.recognizers, function(item) {
            var recognizer = this.add(new item[0](item[1]));
            item[2] && recognizer.recognizeWith(item[2]);
            item[3] && recognizer.requireFailure(item[3]);
        }, this);
    }
    Manager.prototype = {
        /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */ set: function(options) {
            assign(this.options, options);
            // Options that need a little more setup
            if (options.touchAction) this.touchAction.update();
            if (options.inputTarget) {
                // Clean up existing event listeners and reinitialize
                this.input.destroy();
                this.input.target = options.inputTarget;
                this.input.init();
            }
            return this;
        },
        /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */ stop: function(force) {
            this.session.stopped = force ? FORCED_STOP : STOP;
        },
        /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */ recognize: function(inputData) {
            var session = this.session;
            if (session.stopped) return;
            // run the touch-action polyfill
            this.touchAction.preventDefaults(inputData);
            var recognizer;
            var recognizers = this.recognizers;
            // this holds the recognizer that is being recognized.
            // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
            // if no recognizer is detecting a thing, it is set to `null`
            var curRecognizer = session.curRecognizer;
            // reset when the last recognizer is recognized
            // or when we're in a new session
            if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) curRecognizer = session.curRecognizer = null;
            var i = 0;
            while(i < recognizers.length){
                recognizer = recognizers[i];
                // find out if we are allowed try to recognize the input for this one.
                // 1.   allow if the session is NOT forced stopped (see the .stop() method)
                // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
                //      that is being recognized.
                // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
                //      this can be setup with the `recognizeWith()` method on the recognizer.
                if (session.stopped !== FORCED_STOP && (!curRecognizer || recognizer == curRecognizer || // 2
                recognizer.canRecognizeWith(curRecognizer))) recognizer.recognize(inputData);
                else recognizer.reset();
                // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
                // current active recognizer. but only if we don't already have an active recognizer
                if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) curRecognizer = session.curRecognizer = recognizer;
                i++;
            }
        },
        /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */ get: function(recognizer) {
            if (recognizer instanceof Recognizer) return recognizer;
            var recognizers = this.recognizers;
            for(var i = 0; i < recognizers.length; i++){
                if (recognizers[i].options.event == recognizer) return recognizers[i];
            }
            return null;
        },
        /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */ add: function(recognizer) {
            if (invokeArrayArg(recognizer, "add", this)) return this;
            // remove existing
            var existing = this.get(recognizer.options.event);
            if (existing) this.remove(existing);
            this.recognizers.push(recognizer);
            recognizer.manager = this;
            this.touchAction.update();
            return recognizer;
        },
        /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */ remove: function(recognizer) {
            if (invokeArrayArg(recognizer, "remove", this)) return this;
            recognizer = this.get(recognizer);
            // let's make sure this recognizer exists
            if (recognizer) {
                var recognizers = this.recognizers;
                var index = inArray(recognizers, recognizer);
                if (index !== -1) {
                    recognizers.splice(index, 1);
                    this.touchAction.update();
                }
            }
            return this;
        },
        /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */ on: function(events, handler) {
            if (events === undefined) return;
            if (handler === undefined) return;
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
                handlers[event] = handlers[event] || [];
                handlers[event].push(handler);
            });
            return this;
        },
        /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */ off: function(events, handler) {
            if (events === undefined) return;
            var handlers = this.handlers;
            each(splitStr(events), function(event) {
                if (!handler) delete handlers[event];
                else handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            });
            return this;
        },
        /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */ emit: function(event, data) {
            // we also want to trigger dom events
            if (this.options.domEvents) triggerDomEvent(event, data);
            // no handlers, so skip it all
            var handlers = this.handlers[event] && this.handlers[event].slice();
            if (!handlers || !handlers.length) return;
            data.type = event;
            data.preventDefault = function() {
                data.srcEvent.preventDefault();
            };
            var i = 0;
            while(i < handlers.length){
                handlers[i](data);
                i++;
            }
        },
        /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */ destroy: function() {
            this.element && toggleCssProps(this, false);
            this.handlers = {};
            this.session = {};
            this.input.destroy();
            this.element = null;
        }
    };
    /**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */ function toggleCssProps(manager, add) {
        var element = manager.element;
        if (!element.style) return;
        var prop;
        each(manager.options.cssProps, function(value, name) {
            prop = prefixed(element.style, name);
            if (add) {
                manager.oldCssProps[prop] = element.style[prop];
                element.style[prop] = value;
            } else element.style[prop] = manager.oldCssProps[prop] || "";
        });
        if (!add) manager.oldCssProps = {};
    }
    /**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */ function triggerDomEvent(event, data) {
        var gestureEvent = document1.createEvent("Event");
        gestureEvent.initEvent(event, true, true);
        gestureEvent.gesture = data;
        data.target.dispatchEvent(gestureEvent);
    }
    assign(Hammer, {
        INPUT_START: INPUT_START,
        INPUT_MOVE: INPUT_MOVE,
        INPUT_END: INPUT_END,
        INPUT_CANCEL: INPUT_CANCEL,
        STATE_POSSIBLE: STATE_POSSIBLE,
        STATE_BEGAN: STATE_BEGAN,
        STATE_CHANGED: STATE_CHANGED,
        STATE_ENDED: STATE_ENDED,
        STATE_RECOGNIZED: STATE_RECOGNIZED,
        STATE_CANCELLED: STATE_CANCELLED,
        STATE_FAILED: STATE_FAILED,
        DIRECTION_NONE: DIRECTION_NONE,
        DIRECTION_LEFT: DIRECTION_LEFT,
        DIRECTION_RIGHT: DIRECTION_RIGHT,
        DIRECTION_UP: DIRECTION_UP,
        DIRECTION_DOWN: DIRECTION_DOWN,
        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
        DIRECTION_ALL: DIRECTION_ALL,
        Manager: Manager,
        Input: Input,
        TouchAction: TouchAction,
        TouchInput: TouchInput,
        MouseInput: MouseInput,
        PointerEventInput: PointerEventInput,
        TouchMouseInput: TouchMouseInput,
        SingleTouchInput: SingleTouchInput,
        Recognizer: Recognizer,
        AttrRecognizer: AttrRecognizer,
        Tap: TapRecognizer,
        Pan: PanRecognizer,
        Swipe: SwipeRecognizer,
        Pinch: PinchRecognizer,
        Rotate: RotateRecognizer,
        Press: PressRecognizer,
        on: addEventListeners,
        off: removeEventListeners,
        each: each,
        merge: merge,
        extend: extend,
        assign: assign,
        inherit: inherit,
        bindFn: bindFn,
        prefixed: prefixed
    });
    // this prevents errors when Hammer is loaded in the presence of an AMD
    //  style loader but by script tag, not by the loader.
    var freeGlobal = typeof window1 !== "undefined" ? window1 : typeof self !== "undefined" ? self : {}; // jshint ignore:line
    freeGlobal.Hammer = Hammer;
    if (typeof define === "function" && define.amd) define(function() {
        return Hammer;
    });
    else if (0, module.exports) module.exports = Hammer;
    else window1[exportName] = Hammer;
})(window, document, "Hammer");

},{}],"3s5Tq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
exports.default = function() {
    if (navigator && navigator.userAgent) {
        var userAgent = navigator.userAgent.toLowerCase();
        var toArray = function toArray(some) {
            return !Array.isArray(some) ? [
                some
            ] : some;
        };
        var regexps = {
            ie: [
                /rv:([\d.]+)\) like gecko/,
                /msie ([\d.]+)/
            ],
            firefox: /firefox\/([\d.]+)/,
            chrome: /chrome\/([\d.]+)/,
            opera: /opera.([\d.]+)/,
            safari: /version\/([\d.]+).*safari/
        };
        return Object.entries(regexps).reduce(function(env, _ref) {
            var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], regexps = _ref2[1];
            toArray(regexps).map(function(regexp) {
                return userAgent.match(regexp);
            }).filter(function(s) {
                return s;
            }).forEach(function(s) {
                env[key] = parseFloat(s[1]);
            });
            return env;
        }, {});
    }
    return {};
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSieV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addEventListener);
var _eventObject = require("./EventObject");
var _eventObjectDefault = parcelHelpers.interopDefault(_eventObject);
function addEventListener(target, eventType, callback) {
    var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    function wrapCallback(e) {
        var ne = new (0, _eventObjectDefault.default)(e);
        callback.call(target, ne);
    }
    if (target.addEventListener) {
        target.addEventListener(eventType, wrapCallback, useCapture);
        return {
            remove: function remove() {
                target.removeEventListener(eventType, wrapCallback, useCapture);
            }
        };
    } else if (target.attachEvent) {
        target.attachEvent("on" + eventType, wrapCallback);
        return {
            remove: function remove() {
                target.detachEvent("on" + eventType, wrapCallback);
            }
        };
    }
    target["on" + eventType] = wrapCallback;
    return {
        remove: function remove() {
            target["on" + eventType] = null;
        }
    };
}

},{"./EventObject":"bQGi7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQGi7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _whatitis = require("whatitis");
var _whatitisDefault = parcelHelpers.interopDefault(_whatitis);
var _eventBaseObject = require("./EventBaseObject");
var _eventBaseObjectDefault = parcelHelpers.interopDefault(_eventBaseObject);
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) return undefined;
        else return get(parent, property, receiver);
    } else if ("value" in desc) return desc.value;
    else {
        var getter = desc.get;
        if (getter === undefined) return undefined;
        return getter.call(receiver);
    }
};
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _possibleConstructorReturn(self, call) {
    if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
// import assign from 'object-assign';
var TRUE = true;
var FALSE = false;
var commonProps = [
    "altKey",
    "bubbles",
    "cancelable",
    "ctrlKey",
    "currentTarget",
    "eventPhase",
    "metaKey",
    "shiftKey",
    "target",
    "timeStamp",
    "view",
    "type"
];
var eventNormalizers = [
    {
        reg: /^key/,
        props: [
            "char",
            "charCode",
            "key",
            "keyCode",
            "which"
        ],
        fix: function fix(event, nativeEvent) {
            if ((0, _whatitisDefault.default).Undefined(event.which)) event.which = !(0, _whatitisDefault.default).Undefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
            // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
            if (event.metaKey === undefined) event.metaKey = event.ctrlKey;
        }
    },
    {
        reg: /^touch/,
        props: [
            "touches",
            "changedTouches",
            "targetTouches"
        ]
    },
    {
        reg: /^hashchange$/,
        props: [
            "newURL",
            "oldURL"
        ]
    },
    {
        reg: /^gesturechange$/i,
        props: [
            "rotation",
            "scale"
        ]
    },
    {
        reg: /^(mousewheel|DOMMouseScroll)$/,
        props: [],
        fix: function fix(event, nativeEvent) {
            var deltaX = void 0;
            var deltaY = void 0;
            var delta = void 0;
            var axis = nativeEvent.axis;
            var detail = nativeEvent.detail;
            var wheelDelta = nativeEvent.wheelDelta;
            var wheelDeltaY = nativeEvent.wheelDeltaY;
            var wheelDeltaX = nativeEvent.wheelDeltaX;
            // ie/webkit
            if (wheelDelta) delta = wheelDelta / 120;
            // gecko
            if (detail) // press control e.detail == 1 else e.detail == 3
            delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
            // Gecko
            if (axis !== undefined) {
                if (axis === event.HORIZONTAL_AXIS) {
                    deltaY = 0;
                    deltaX = 0 - delta;
                } else if (axis === event.VERTICAL_AXIS) {
                    deltaX = 0;
                    deltaY = delta;
                }
            }
            // Webkit
            if (wheelDeltaY !== undefined) deltaY = wheelDeltaY / 120;
            if (wheelDeltaX !== undefined) deltaX = -1 * wheelDeltaX / 120;
            // 默认 deltaY (ie)
            if (!deltaX && !deltaY) deltaY = delta;
            if (deltaX !== undefined) /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */ event.deltaX = deltaX;
            if (deltaY !== undefined) /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */ event.deltaY = deltaY;
            if (delta !== undefined) /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */ event.delta = delta;
        }
    },
    {
        reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
        props: [
            "buttons",
            "clientX",
            "clientY",
            "button",
            "offsetX",
            "relatedTarget",
            "which",
            "fromElement",
            "toElement",
            "offsetY",
            "pageX",
            "pageY",
            "screenX",
            "screenY"
        ],
        fix: function fix(event, nativeEvent) {
            var eventDoc = void 0;
            var doc = void 0;
            var body = void 0;
            var target = event.target;
            var button = nativeEvent.button;
            // Calculate pageX/Y if missing and clientX/Y available
            if (target && (0, _whatitisDefault.default).Undefined(event.pageX) && !(0, _whatitisDefault.default).Undefined(nativeEvent.clientX)) {
                eventDoc = target.ownerDocument || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;
                event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            }
            // which for click: 1 === left; 2 === middle; 3 === right
            // do not use button
            if (!event.which && button !== undefined) {
                if (button & 1) event.which = 1;
                else if (button & 2) event.which = 3;
                else if (button & 4) event.which = 2;
                else event.which = 0;
            }
            // add relatedTarget, if necessary
            if (!event.relatedTarget && event.fromElement) event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
            return event;
        }
    }
];
function retTrue() {
    return TRUE;
}
function retFalse() {
    return FALSE;
}
var DomEventObject = function(_EventBaseObject) {
    _inherits(DomEventObject, _EventBaseObject);
    function DomEventObject(nativeEvent) {
        _classCallCheck(this, DomEventObject);
        var _this = _possibleConstructorReturn(this, (DomEventObject.__proto__ || Object.getPrototypeOf(DomEventObject)).call(this, nativeEvent));
        var type = nativeEvent.type;
        var isNative = (0, _whatitisDefault.default).Function(nativeEvent.stopPropagation) || (0, _whatitisDefault.default).Boolean(nativeEvent.cancelBubble);
        _this.nativeEvent = nativeEvent;
        // in case dom event has been mark as default prevented by lower dom node
        var isDefaultPrevented = retFalse;
        if ("defaultPrevented" in nativeEvent) isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
        else if ("getPreventDefault" in nativeEvent) // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
        isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
        else if ("returnValue" in nativeEvent) isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
        _this.isDefaultPrevented = isDefaultPrevented;
        var fixFns = [];
        var fixFn = void 0;
        var l = void 0;
        var prop = void 0;
        var props = commonProps.concat();
        eventNormalizers.forEach(function(normalizer) {
            if (type.match(normalizer.reg)) {
                props = props.concat(normalizer.props);
                if (normalizer.fix) fixFns.push(normalizer.fix);
            }
        });
        l = props.length;
        // clone properties of the original event object
        while(l){
            prop = props[--l];
            _this[prop] = nativeEvent[prop];
        }
        // fix target property, if necessary
        if (!_this.target && isNative) _this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
        // check if target is a text node (safari)
        if (_this.target && _this.target.nodeType === 3) _this.target = _this.target.parentNode;
        l = fixFns.length;
        while(l){
            fixFn = fixFns[--l];
            fixFn(_this, nativeEvent);
        }
        if (nativeEvent.timeStamp) _this.timeStamp = nativeEvent.timeStamp;
        return _this;
    }
    _createClass(DomEventObject, [
        {
            key: "preventDefault",
            value: function preventDefault() {
                var e = this.nativeEvent;
                // if preventDefault exists run it on the original event
                if (e.preventDefault) e.preventDefault();
                else // otherwise set the returnValue property of the original event to FALSE (IE)
                e.returnValue = FALSE;
                _get(DomEventObject.prototype.__proto__ || Object.getPrototypeOf(DomEventObject.prototype), "preventDefault", this).call(this);
            }
        },
        {
            key: "stopPropagation",
            value: function stopPropagation() {
                var e = this.nativeEvent;
                // if stopPropagation exists run it on the original event
                if (e.stopPropagation) e.stopPropagation();
                else // otherwise set the cancelBubble property of the original event to TRUE (IE)
                e.cancelBubble = TRUE;
                _get(DomEventObject.prototype.__proto__ || Object.getPrototypeOf(DomEventObject.prototype), "stopPropagation", this).call(this);
            }
        }
    ]);
    return DomEventObject;
}((0, _eventBaseObjectDefault.default));
exports.default = DomEventObject;

},{"whatitis":"dF3bz","./EventBaseObject":"esa8L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"esa8L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function returnFalse() {
    return false;
}
function returnTrue() {
    return true;
}
var EventBaseObject = function() {
    function EventBaseObject() {
        _classCallCheck(this, EventBaseObject);
        this.timeStamp = +new Date();
        this.target = undefined;
        this.currentTarget = undefined;
        this.isDefaultPrevented = returnFalse;
        this.isPropagationStopped = returnFalse;
        this.isImmediatePropagationStopped = returnFalse;
    }
    _createClass(EventBaseObject, [
        {
            key: "preventDefault",
            value: function preventDefault() {
                this.isDefaultPrevented = returnTrue;
            }
        },
        {
            key: "stopPropagation",
            value: function stopPropagation() {
                this.isPropagationStopped = returnTrue;
            }
        },
        {
            key: "stopImmediatePropagation",
            value: function stopImmediatePropagation() {
                this.isImmediatePropagationStopped = returnTrue;
                // fixed 1.2
                // call stopPropagation implicitly
                this.stopPropagation();
            }
        },
        {
            key: "halt",
            value: function halt(immediate) {
                if (immediate) this.stopImmediatePropagation();
                else this.stopPropagation();
                this.preventDefault();
            }
        }
    ]);
    return EventBaseObject;
}();
exports.default = EventBaseObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63Bw6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>polyfill);
parcelHelpers.export(exports, "requestAnimFrame", ()=>requestAnimFrame);
var _whatitis = require("whatitis");
var _whatitisDefault = parcelHelpers.interopDefault(_whatitis);
var _invariant = require("invariant");
var _invariantDefault = parcelHelpers.interopDefault(_invariant);
var _performanceNow = require("performance-now");
var _performanceNowDefault = parcelHelpers.interopDefault(_performanceNow);
var global = arguments[3];
var root = typeof window === "undefined" ? global : window;
var vendors = [
    "moz",
    "webkit"
];
var suffix = "AnimationFrame";
var raf = root["request" + suffix];
var caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
for(var i = 0; !raf && i < vendors.length; i++){
    var prefix = vendors[i];
    raf = root[prefix + "Request" + suffix];
    caf = root[prefix + "Cancel" + suffix] || root[prefix + "CancelRequest" + suffix];
}
// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
    var chain = void 0;
    var id = 0;
    var lastTime = 0;
    var handles = {};
    var frameDuration = 1000 / 60;
    var throwError = function throwError(err) {
        return function() {
            throw err;
        };
    };
    var compose = function compose(callback1, callback2) {
        return function(lastTime) {
            return callback1(callback2(lastTime));
        };
    };
    var handler = function handler(handle, next) {
        return function(lastTime) {
            if (handles[handle] !== false) next(lastTime);
            else handles[handle] = null;
            return lastTime;
        };
    };
    var next = function next(handled) {
        chain = chain ? compose(handled, chain) : handled;
    };
    var toCall = function toCall() {
        var cp = chain;
        // Clear chain here to prevent
        // callbacks from appending listeners
        // to the current frame's chain
        chain = null;
        try {
            cp(lastTime);
        } catch (e) {
            setTimeout(throwError(e), 0);
        }
    };
    raf = function raf(callback) {
        if (!chain) {
            var currTime = (0, _performanceNowDefault.default)();
            var timeToCall = Math.max(0, frameDuration - (currTime - lastTime));
            lastTime = timeToCall + currTime;
            root.setTimeout(toCall, Math.round(timeToCall));
        }
        next(handler(++id, callback));
        return id;
    };
    caf = function caf(arg) {
        handles[arg] = false;
    };
}
function polyfill() {
    root.requestAnimationFrame = raf;
    root.cancelAnimationFrame = caf;
    return {
        requestAnimationFrame: root.requestAnimationFrame,
        cancelAnimationFrame: root.cancelAnimationFrame
    };
}
var _polyfill = polyfill(), requestAnimationFrame = _polyfill.requestAnimationFrame, cancelAnimationFrame = _polyfill.cancelAnimationFrame;
function requestAnimFrame(callback) {
    (0, _invariantDefault.default)((0, _whatitisDefault.default).Function(callback), "Expecting callback of requestAnimFrame is a function.");
    var id = void 0;
    var getFrameHandler = function getFrameHandler() {
        return id;
    };
    var cancel = function cancel() {
        return cancelAnimationFrame(id);
    };
    id = requestAnimationFrame(function frameCallback(time) {
        callback(Math.round(time * 10) / 10, cancel);
        id = requestAnimationFrame(frameCallback);
    });
    return {
        cancel: cancel,
        getFrameHandler: getFrameHandler
    };
}

},{"whatitis":"dF3bz","invariant":"d1QgR","performance-now":"7cqVO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1QgR":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ var invariant = function(condition, format, a, b, c, d, e, f) {
    if (format === undefined) throw new Error("invariant requires an error message argument");
    if (!condition) {
        var error;
        if (format === undefined) error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            var args = [
                a,
                b,
                c,
                d,
                e,
                f
            ];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = "Invariant Violation";
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;

},{}],"7cqVO":[function(require,module,exports) {
var process = require("f348cfb52b253442");
// Generated by CoffeeScript 1.12.2
(function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) module.exports = function() {
        return performance.now();
    };
    else if (typeof process !== "undefined" && process !== null && process.hrtime) {
        module.exports = function() {
            return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
            var hr;
            hr = hrtime();
            return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
        module.exports = function() {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    } else {
        module.exports = function() {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
}).call(this);

},{"f348cfb52b253442":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"2KRGc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hammerjs = require("hammerjs");
var _hammerjsDefault = parcelHelpers.interopDefault(_hammerjs);
var _css = require("./utils/css");
var _addDomEventListener = require("./utils/dom/addDomEventListener");
var _addDomEventListenerDefault = parcelHelpers.interopDefault(_addDomEventListener);
var _requestAnimationFrame = require("./utils/requestAnimationFrame");
var _slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
function sign(number) {
    return number > 0 ? 1 : -1;
}
var boundOut = function boundOut(t) {
    return Math.sin(Math.PI * t);
};
var esseOut = function esseOut(t) {
    return t < 0.5 ? 1.5 : Math.sin(Math.PI * t) * 72.5 / 30 + 1 / 30;
};
var divisor = function divisor(d, S) {
    return esseOut((S - d) / S);
};
var bound = function bound(d, S) {
    return boundOut((S - d) / S);
};
var abs = Math.abs;
var max = Math.max;
exports.default = function(scope) {
    var scrollX = scope.scrollX, scrollY = scope.scrollY, handleDestroy = scope.handleDestroy, overscroll = scope.overscroll, hasScrollY = scope.hasScrollY, hasScrollX = scope.hasScrollX, setScroll = scope.setScroll, target = scope.target, switchScale = scope.switchScale, anchors = scope.anchors, getPosition = scope.getPosition, resetCache = scope.resetCache, getScroll = scope.getScroll, scrollable = scope.scrollable, onScroll = scope.onScroll, onAfterScroll = scope.onAfterScroll, onBeforeScroll = scope.onBeforeScroll, handleAfterScroll = scope.handleAfterScroll, handleBeforeScroll = scope.handleBeforeScroll, handleScroll = scope.handleScroll, handleInit = scope.handleInit, dragable = scope.dragable, touchable = scope.touchable;
    // 横向排版 getPosition 有小数，所以加上范围限制保证在寻找缓存中的位置信息时能够精确找到
    function getYPoss() {
        var scrollTopRange = overscroll.scrollTopRange;
        var _getScroll = getScroll(), scrollTop = _getScroll.top;
        return anchors.map(getPosition).map(function(_ref) {
            var top = _ref.top;
            return scrollTopRange(top + scrollTop);
        });
    }
    function getXPoss() {
        var scrollLeftRange = overscroll.scrollLeftRange;
        var _getScroll2 = getScroll(), scrollLeft = _getScroll2.left;
        return anchors.map(getPosition).map(function(_ref2) {
            var left = _ref2.left;
            return scrollLeftRange(left + scrollLeft);
        });
    }
    var possX = void 0;
    var possY = void 0;
    var scrollCache = null;
    var getNearest = function getNearest(pos) {
        var positions = scrollX ? possX : possY;
        return positions.reduce(function(nearest, position) {
            return abs(position - pos) < abs(nearest - pos) ? position : nearest;
        }, null);
    };
    var frame = function frame(v, d, s, rebound) {
        if (v > 0 && d < 0 || v < 0 && d > 0) {
            rebound = true;
            v += sign(d) * max(0.5, 10 * bound(abs(d), s));
            d -= v;
        } else if (rebound) {
            v = sign(d) * max(0.5, 30 * bound(abs(d), s));
            if (abs(d) < abs(v)) v = d;
            d = sign(d) * max(abs(d) - abs(v), 0);
        } else {
            v = sign(d) * max(0.5, 30 * divisor(abs(d), s));
            if (abs(d) < abs(v)) v = d;
            d = sign(d) * max(abs(d) - abs(v), 0);
        }
        return {
            v: v,
            d: d,
            rebound: rebound
        };
    };
    var runAnimFrame = function runAnimFrame() {
        var vx = 0;
        var vy = 0;
        var dx = 0;
        var dy = 0;
        var odx = 0;
        var ody = 0;
        var ovx = 0;
        var ovy = 0;
        var reboundX = false;
        var reboundY = false;
        handleDestroy((0, _requestAnimationFrame.requestAnimFrame)(function() {
            var scrollLeft = overscroll.scrollLeft, scrollTop = overscroll.scrollTop, clientHeight = overscroll.clientHeight, clientWidth = overscroll.clientWidth;
            if (hasScrollY() && dy !== 0) {
                var computed = frame(vy, dy, clientHeight, reboundY);
                vy = computed.v;
                dy = computed.d;
                reboundY = computed.rebound;
            } else if (hasScrollX() && dx !== 0) {
                var _computed = frame(vx, dx, clientWidth, reboundX);
                vx = _computed.v;
                dx = _computed.d;
                reboundX = _computed.rebound;
            }
            if (!overscroll.scrolling && ovx === 0 && ovy === 0 && (dx !== 0 || dy !== 0)) onBeforeScroll();
            if (vx !== 0 || vy !== 0) {
                setScroll(dx === 0 ? getNearest(scrollLeft + vx) : scrollLeft + vx, dy === 0 ? getNearest(scrollTop + vy) : scrollTop + vy);
                if (dx !== 0 || dy !== 0) onScroll();
            }
            if (dy === 0) {
                reboundY = false;
                vy = 0;
                ody = 0;
            }
            if (dx === 0) {
                reboundX = false;
                vx = 0;
                odx = 0;
            }
            if (overscroll.scrolling && vx === 0 && vy === 0 && dx === 0 && dy === 0 && (ovx !== 0 || ovy !== 0)) {
                scrollCache = null;
                setScroll();
                onAfterScroll();
            }
            ovx = vx;
            ovy = vy;
        }).cancel);
        return {
            scrollMove: function scrollMove(velocity, distance) {
                if (scrollX) {
                    reboundX = false;
                    vx = velocity;
                    dx = distance;
                    odx = distance;
                } else {
                    reboundY = false;
                    vy = velocity;
                    dy = distance;
                    ody = distance;
                }
            },
            scrollStop: function scrollStop() {
                if (vx !== 0 || vy !== 0 || dx !== 0 || dy !== 0) scrollCache = {
                    vx: vx,
                    vy: vy,
                    dx: dx,
                    dy: dy,
                    odx: odx,
                    ody: ody,
                    reboundX: reboundX,
                    reboundY: reboundY
                };
                vx = 0;
                vy = 0;
                dx = 0;
                ovx = 0;
                ovy = 0;
                dy = 0;
                odx = 0;
                ody = 0;
                reboundX = false;
                reboundY = false;
                setScroll();
            },
            scrollRestore: function scrollRestore() {
                if (scrollCache) {
                    vx = scrollCache.vx;
                    vy = scrollCache.vy;
                    dx = scrollCache.dx;
                    dy = scrollCache.dy;
                    odx = scrollCache.odx;
                    ody = scrollCache.ody;
                    reboundX = scrollCache.reboundX;
                    reboundY = scrollCache.reboundY;
                }
            },
            scrollClear: function scrollClear() {
                scrollCache = null;
            }
        };
    };
    function runHammer(_ref3) {
        var scrollMove = _ref3.scrollMove, scrollStop = _ref3.scrollStop, scrollRestore = _ref3.scrollRestore, scrollClear = _ref3.scrollClear;
        var lastDeltaX = void 0;
        var lastDeltaY = void 0;
        var handleTarget = void 0;
        var directionX = [
            2,
            4
        ];
        var directionY = [
            8,
            16
        ];
        var _switchScale = _slicedToArray(switchScale, 2), upScale = _switchScale[0], downScale = _switchScale[1];
        var mc = new (0, _hammerjsDefault.default).Manager(target);
        var sectionMoving = function sectionMoving(v, nearestpos, curpos, d, delta) {
            // 初速度足够触发上下滑动
            if (v > 0.5) // 下滑
            scrollMove(-v * 20, nearestpos - (curpos + d));
            else if (v < -0.5) // 上滑
            scrollMove(-v * 20, nearestpos - curpos);
            else if (nearestpos - curpos < downScale * d) scrollMove(-v * 20, nearestpos - curpos);
            else if (d + curpos - nearestpos < upScale * d) scrollMove(-v * 20, nearestpos - (curpos + d));
            else if (delta > 0) scrollMove(-v * 20, nearestpos - (curpos + d));
            else if (delta < 0) scrollMove(-v * 20, nearestpos - curpos);
            else if (nearestpos - curpos > d / 2) scrollMove(0, nearestpos - (curpos + d));
            else scrollMove(0, nearestpos - curpos);
        };
        if (dragable) {
            handleDestroy((0, _addDomEventListenerDefault.default)(target, "mousedown", scrollStop).remove);
            handleDestroy((0, _addDomEventListenerDefault.default)(target, "mouseup", scrollRestore).remove);
        }
        if (touchable) {
            handleDestroy((0, _addDomEventListenerDefault.default)(target, "touchstart", scrollStop).remove);
            handleDestroy((0, _addDomEventListenerDefault.default)(target, "touchend", scrollRestore).remove);
            handleDestroy((0, _addDomEventListenerDefault.default)(target, "touchcancel", scrollRestore).remove);
        }
        mc.add(new (0, _hammerjsDefault.default).Pan({
            direction: (0, _hammerjsDefault.default).DIRECTION_ALL,
            threshold: 0
        }));
        mc.on("panstart panmove panend", function(event) {
            event.preventDefault();
            if (!dragable && event.pointerType === "mouse") return;
            if (!touchable && event.pointerType === "touch") return;
            var type = event.type, velocityY = event.velocityY, velocityX = event.velocityX, deltaX = event.deltaX, deltaY = event.deltaY, offsetDirection = event.offsetDirection;
            var rightDirection = (scrollY ? directionY : directionX).includes(offsetDirection);
            var targetScrollable = scrollable(handleTarget || event.target);
            var targetUnscrollableX = !targetScrollable.left && velocityX >= 0 || !targetScrollable.right && velocityX <= 0;
            var targetUnscrollableY = !targetScrollable.top && velocityY >= 0 || !targetScrollable.bottom && velocityY <= 0;
            var scrollTop = overscroll.scrollTop;
            var scrollLeft = overscroll.scrollLeft;
            var x = scrollLeft;
            var y = scrollTop;
            if (type === "panstart") {
                resetCache(scope);
                lastDeltaX = 0;
                lastDeltaY = 0;
                handleTarget = event.target;
                if (!targetUnscrollableY || !targetUnscrollableX) scrollClear();
            } else if (type === "panend" && scrollY) {
                handleTarget = null;
                possY = getYPoss();
                if (!targetUnscrollableY) scrollClear();
                if (!possY.includes(scrollTop)) {
                    var clientHeight = overscroll.clientHeight;
                    var _deltaY = event.deltaY, _velocityY = event.velocityY;
                    var nearestpos = possY.reduce(function(pos, top) {
                        return top > scrollTop && top < clientHeight + scrollTop ? top : pos;
                    }, 0);
                    if (nearestpos !== 0) sectionMoving(_velocityY, nearestpos, scrollTop, clientHeight, _deltaY);
                }
            } else if (type === "panend" && scrollX) {
                handleTarget = null;
                possX = getXPoss();
                if (!targetUnscrollableX) scrollClear();
                if (!possX.includes(scrollLeft)) {
                    var clientWidth = overscroll.clientWidth;
                    var _deltaX = event.deltaX, _velocityX = event.velocityX;
                    var _nearestpos = possX.reduce(function(pos, left) {
                        return left > scrollLeft && left < clientWidth + scrollLeft ? left : pos;
                    }, 0);
                    if (_nearestpos !== 0) sectionMoving(_velocityX, _nearestpos, scrollLeft, clientWidth, _deltaX);
                }
            } else if (rightDirection) {
                if (!targetUnscrollableX) x = scrollLeft - (deltaX - lastDeltaX);
                if (!targetUnscrollableY) y = scrollTop - (deltaY - lastDeltaY);
                if (x !== scrollLeft || y !== scrollTop) {
                    if (!overscroll.scrolling) onBeforeScroll();
                    setScroll(x, y);
                    onScroll();
                }
            }
            lastDeltaX = deltaX;
            lastDeltaY = deltaY;
        });
        handleDestroy(function() {
            return mc.destroy();
        });
    }
    function _position(runtime) {
        var scrollLeft = overscroll.scrollLeft, scrollTop = overscroll.scrollTop;
        var curpos = scrollX ? scrollLeft : scrollTop;
        var poss = scrollX ? runtime ? getXPoss() : possX : runtime ? getYPoss() : possY;
        return poss.filter(function(pos) {
            return pos <= curpos;
        }).length;
    }
    function setPositionCache() {
        overscroll.positions = scrollX ? possX : possY;
    }
    handleInit(setPositionCache);
    handleScroll(setPositionCache);
    handleBeforeScroll(setPositionCache);
    handleAfterScroll(setPositionCache);
    function setSectionCache() {
        overscroll.section = _position();
    }
    // handleScroll( setSectionCache );
    // handleBeforeScroll( setSectionCache );
    handleAfterScroll(setSectionCache);
    function initSections() {
        // 设置 anchor 样式撑满容器
        anchors.forEach(function(element) {
            (0, _css.set)(element, "height", "100%");
            (0, _css.set)(element, "width", "100%");
        });
        // 重置容器信息
        resetCache();
        if (scrollX) possX = getXPoss();
        else possY = getYPoss();
        overscroll.section = _position(true);
    }
    return {
        run: function run() {
            initSections();
            var anim = runAnimFrame();
            if (dragable || touchable) runHammer(anim);
            return {
                position: function position() {
                    return _position(true);
                },
                scrollTo: function scrollTo(targetPos, noAnimation) {
                    resetCache();
                    var poss = scrollX ? getXPoss() : getYPoss();
                    var scrollLeft = overscroll.scrollLeft, scrollTop = overscroll.scrollTop, clientWidth = overscroll.clientWidth, clientHeight = overscroll.clientHeight;
                    var curpos = scrollX ? scrollLeft : scrollTop;
                    var d = scrollX ? clientWidth : clientHeight;
                    var curIndex = poss.indexOf(curpos) + 1;
                    var index = poss.filter(function(pos) {
                        return pos <= targetPos;
                    }).length;
                    if (scrollX) possX = poss;
                    else possY = poss;
                    if (noAnimation === true) setScroll(scrollX ? poss[index - 1] : 0, scrollY ? poss[index - 1] : 0);
                    else if (curIndex !== index) {
                        anim.scrollStop();
                        anim.scrollClear();
                        anim.scrollMove(0, d * (index - 1) - curpos);
                    }
                },
                scrollToSection: function scrollToSection(index, noAnimation) {
                    resetCache();
                    var scrollLeft = overscroll.scrollLeft, scrollTop = overscroll.scrollTop, clientWidth = overscroll.clientWidth, clientHeight = overscroll.clientHeight;
                    var poss = scrollX ? getXPoss() : getYPoss();
                    var curpos = scrollX ? scrollLeft : scrollTop;
                    var d = scrollX ? clientWidth : clientHeight;
                    var curIndex = poss.indexOf(curpos) + 1;
                    if (scrollX) possX = poss;
                    else possY = poss;
                    if (noAnimation === true) setScroll(scrollX ? poss[index - 1] : 0, scrollY ? poss[index - 1] : 0);
                    else if (curIndex !== index) {
                        anim.scrollStop();
                        anim.scrollClear();
                        anim.scrollMove(0, d * (index - 1) - curpos);
                    }
                }
            };
        }
    };
};

},{"hammerjs":"lHwvQ","./utils/css":"kzuBZ","./utils/dom/addDomEventListener":"iSieV","./utils/requestAnimationFrame":"63Bw6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"axZby":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handler", ()=>handler);
parcelHelpers.export(exports, "handleDestroy", ()=>handleDestroy);
parcelHelpers.export(exports, "handleBeforeScroll", ()=>handleBeforeScroll);
parcelHelpers.export(exports, "handleAfterScroll", ()=>handleAfterScroll);
parcelHelpers.export(exports, "handleScroll", ()=>handleScroll);
parcelHelpers.export(exports, "handleInit", ()=>handleInit);
var _objectPick = require("object.pick");
var _objectPickDefault = parcelHelpers.interopDefault(_objectPick);
var _compose = require("./utils/compose");
var _composeDefault = parcelHelpers.interopDefault(_compose);
var noop = function noop() {};
function handler(name) {
    return function(scope) {
        var mode = scope.mode;
        var wrap = function wrap(func) {
            return function() {
                func.call(scope.target, (0, _objectPickDefault.default)(scope.overscroll, [
                    "scrollTop",
                    "scrollLeft",
                    "scrollHeight",
                    "scrollWidth",
                    "clientHeight",
                    "clientWidth"
                ].concat(mode === "scroll" ? [] : [
                    "section",
                    "positions"
                ])));
            };
        };
        scope.handleCache = scope.handleCache || {};
        scope.handleCache[name] = noop;
        var initialHandler = scope[name] ? scope[name] : noop;
        scope[name] = function() {
            scope.handleCache[name]();
            wrap(initialHandler)();
        };
        return (0, _composeDefault.default)(function(callback) {
            scope.handleCache[name] = scope.handleCache[name] !== noop ? (0, _composeDefault.default)(callback, scope.handleCache[name]) : callback;
        }, wrap);
    };
}
var handleDestroy = handler("onDestroy");
var handleBeforeScroll = handler("onBeforeScroll");
var handleAfterScroll = handler("onAfterScroll");
var handleScroll = handler("onScroll");
var handleInit = handler("onInit");

},{"object.pick":"gFW9I","./utils/compose":"j18uQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gFW9I":[function(require,module,exports) {
/*!
 * object.pick <https://github.com/jonschlinkert/object.pick>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */ "use strict";
var isObject = require("b4ad73961773276a");
module.exports = function pick(obj, keys) {
    if (!isObject(obj) && typeof obj !== "function") return {};
    var res = {};
    if (typeof keys === "string") {
        if (keys in obj) res[keys] = obj[keys];
        return res;
    }
    var len = keys.length;
    var idx = -1;
    while(++idx < len){
        var key = keys[idx];
        if (key in obj) res[key] = obj[key];
    }
    return res;
};

},{"b4ad73961773276a":"u8nQr"}],"lR9mh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(scope) {
        var target = scope.target, axis = scope.axis, hasX = scope.hasX, hasY = scope.hasY, setData = scope.domData.setData, OVERSCROLL = scope.OVERSCROLL, OVERSCROLLX = scope.OVERSCROLLX, OVERSCROLLY = scope.OVERSCROLLY, BUBBLE = scope.BUBBLE, NOBUBBLE = scope.NOBUBBLE, bubble = scope.bubble, resetCache = scope.resetCache;
        // 添加样式
        (0, _css.set)(target, "overflow", "hidden");
        // DOM 打上标记
        setData(target, OVERSCROLL);
        if (hasX(axis)) setData(target, OVERSCROLLX);
        if (hasY(axis)) setData(target, OVERSCROLLY);
        setData(target, bubble ? BUBBLE : NOBUBBLE);
        // 初始化缓存
        resetCache();
        return scope;
    });
var _css = require("./utils/css");

},{"./utils/css":"kzuBZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9ciYj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initStarRating", ()=>initStarRating);
var _domUtilsJs = require("./domUtils.js");
const initStarRating = ()=>{
    const stars = (0, _domUtilsJs.getElements)(".stars span");
    const nStars = +document.querySelector(".stars").dataset.star;
    stars.forEach((star, i)=>{
        if (i < nStars) star.style.opacity = "1";
    });
};

},{"./domUtils.js":"ljlVQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2YxFA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBook", ()=>getBook);
parcelHelpers.export(exports, "setWebpageData", ()=>setWebpageData);
var _apiJs = require("./api.js");
var _domUtilsJs = require("./domUtils.js");
var _authorHandlerJs = require("./authorHandler.js");
var _recommendationHandlerJs = require("./recommendationHandler.js");
var _configJs = require("./config.js");
var _mockupHandlerJs = require("./mockupHandler.js");
const { API_URL_GOOGLE, API_KEY_GOOGLE } = (0, _configJs.API_CONFIG);
function setReccommendations(reccomends) {
    const bookList = (0, _domUtilsJs.getElements)(".book-list .book");
    reccomends.forEach((book, i)=>{
        const [title, { authors, thumbnail, infoLink }] = book.entries();
        const bookElement = document.createElement("div");
        bookList[i].getElement("img").src = thumbnail;
        bookList[i].setElementText(".book-name", title);
        bookList[i].setElementText(".author-name", authors.join(", "));
    });
}
function setAuthorData(authors) {
    (0, _authorHandlerJs.getAuthor)(authors[0]).then((authorData)=>{
        if (authorData.bio === "") {
            (0, _domUtilsJs.getElement)("#about-author").style.display = "none";
            return;
        }
        (0, _domUtilsJs.setElementText)(".author-name", authorData.name);
        if (authorData.image) (0, _apiJs.removeBackground)(authorData.image, "author_image").then((image)=>{
            const url = URL.createObjectURL(image);
            (0, _domUtilsJs.getElement)("#author-img img").src = url;
        });
        (0, _domUtilsJs.getElement)("#about-author .content p").textContent = authorData.bio;
        (0, _domUtilsJs.getElement)(".author-url").href = authorData.url;
    }).catch((error)=>{
        (0, _domUtilsJs.getElement)("#about-author").style.display = "none";
        console.error(error);
    });
}
const getBook = async (query)=>{
    try {
        const url = `${API_URL_GOOGLE}/?q=${query}&key=${API_KEY_GOOGLE}`;
        const searchData = await (0, _apiJs.getData)(url);
        const shortInfo = searchData.items[0].searchInfo.textSnippet;
        const bookUrl = searchData.items[0].selfLink;
        const bookData = await (0, _apiJs.getData)(bookUrl);
        let reccomends;
        try {
            reccomends = await (0, _recommendationHandlerJs.getRecommendations)(query);
        } catch (error) {
            console.error(error);
            reccomends = [];
        }
        return {
            title: bookData.volumeInfo.title,
            subtitle: bookData.volumeInfo.subtitle,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            thumbnail: bookData.volumeInfo.imageLinks.thumbnail,
            infoLink: bookData.volumeInfo.infoLink,
            largeImage: bookData.volumeInfo.imageLinks.large,
            rating: bookData.volumeInfo.averageRating,
            buyLink: bookData.saleInfo.buyLink,
            previewLink: bookData.accessInfo?.webReaderLink || "#",
            categories: bookData.volumeInfo.categories.map((x)=>x.split("/").slice(-1)[0]),
            shortInfo,
            reccomends
        };
    } catch (error) {
        throw error;
    }
};
const setWebpageData = (data)=>{
    const { title, subtitle, previewLink, authors, description, thumbnail, largeImage, buyLink, categories, shortInfo, reccomends } = data;
    const genre = categories[1];
    const subgenre = categories[0];
    const newTitle = `${title} | ${subtitle} | A book by ${authors.join(", ")}`;
    const image = largeImage || thumbnail;
    document.title = newTitle;
    (0, _domUtilsJs.setElementText)(".b-name", title);
    (0, _domUtilsJs.setElementText)(".author-name", authors.join(", "));
    (0, _domUtilsJs.setElementText)(".short-info", shortInfo.slice(0, 200) + "...");
    (0, _domUtilsJs.getElement)(".user-categories").innerHTML = categories.map((x)=>`<li>${x}</li>`).join("");
    (0, _domUtilsJs.getElements)(".order-link").forEach((element)=>element.href = buyLink);
    (0, _domUtilsJs.getElements)(".preview-link").forEach((x)=>x.href = previewLink);
    (0, _domUtilsJs.getElements)(".genre").forEach((x)=>x.textContent = genre);
    (0, _domUtilsJs.getElements)(".sub-genre").forEach((x)=>x.textContent = subgenre);
    (0, _domUtilsJs.getElement)("#description").innerHTML = description;
    (0, _domUtilsJs.setBookCoverImage)(thumbnail);
    (0, _mockupHandlerJs.renderMockup)(thumbnail);
    setAuthorData(authors);
    if (!reccomends.length) (0, _domUtilsJs.getElement)("#recommended-books").style.display = "none";
    else setReccommendations(reccomends);
};

},{"./api.js":"rLA6s","./domUtils.js":"ljlVQ","./authorHandler.js":"8w4KZ","./recommendationHandler.js":"2qIuh","./config.js":"92e0v","./mockupHandler.js":"dBQH6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"rLA6s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getData", ()=>getData);
parcelHelpers.export(exports, "postData", ()=>postData);
parcelHelpers.export(exports, "removeBackground", ()=>removeBackground);
var _configJs = require("./config.js");
const timer = (ms)=>new Promise((_, rej)=>setTimeout(rej.bind(undefined, "Response Timeout!! Internet Connection too slow"), ms));
const getData = async (url)=>{
    try {
        const response = await Promise.race([
            fetch(url),
            timer(7000)
        ]);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    } catch (error) {
        throw error;
    }
};
const postData = async (url, data)=>{
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        if (response.status !== 200) return [];
        return response.json();
    } catch (error) {
        throw error;
    }
};
const removeBackground = async (image_url, file_name)=>{
    const url = `${(0, _configJs.API_CONFIG).BGREMOVER}?file_path=${image_url}&file_name=${file_name}`;
    try {
        const response = await fetch(url);
        const data = await response;
        if (!response.ok) throw new Error(data.message);
        return response.blob();
    } catch (error) {}
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./config.js":"92e0v"}],"92e0v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_CONFIG", ()=>API_CONFIG);
const API_CONFIG = {
    API_URL_GOOGLE: "https://www.googleapis.com/books/v1/volumes",
    API_KEY_GOOGLE: "AIzaSyCEPuCpP9wRZ6zmaA6EIQJzY8zOT5Eyhsg",
    API_KEY_MOCKUP: "5aab411c-74db-45bf-8afc-70c5aec1e534",
    BGREMOVER: "http://127.0.0.1:5000/remove_bg",
    RECOMMEND_URL: "http://127.0.0.1:5000/suggestions",
    TOP_50: "http://127.0.0.1:5000/top50",
    RESULT_PER_PAGE: 9
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8w4KZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAuthor", ()=>getAuthor);
var _apiJs = require("./api.js");
const AUTHOR_IMAGE = (id)=>`https://covers.openlibrary.org/b/id/${id}-L.jpg`;
const getAuthor = async (author)=>{
    const url = `https://openlibrary.org/search/authors.json?q=${author}`;
    const authorResponse = await (0, _apiJs.getData)(url);
    const authorKey = authorResponse.docs[0].key;
    const authorUrl = `https://openlibrary.org/authors/${authorKey}.json`;
    const authorData = await (0, _apiJs.getData)(authorUrl);
    return {
        name: authorData.name,
        image: authorData.photos ? AUTHOR_IMAGE(authorData.photos[0]) : null,
        bio: authorData.bio || "",
        url: authorData.links ? authorData.links[0].url : "#"
    };
};

},{"./api.js":"rLA6s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qIuh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRecommendations", ()=>getRecommendations);
var _config = require("./config");
var _api = require("./api");
const { RECOMMEND_URL } = (0, _config.API_CONFIG);
const getRecommendations = async (query)=>{
    const data = {
        "name": query
    };
    try {
        const recommendations = await (0, _api.postData)(RECOMMEND_URL, data);
        return recommendations;
    } catch (error) {
        throw error;
    }
};

},{"./config":"92e0v","./api":"rLA6s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBQH6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderMockup", ()=>renderMockup);
var _configJs = require("./config.js");
var _apiJs = require("./api.js");
const renderMockup = async (image_url)=>{
    image_url = image_url.replace("http://", "https://");
    const url = "https://api.mediamodifier.com/v2/mockup/render";
    const options = {
        method: "POST",
        headers: {
            api_key: (0, _configJs.API_CONFIG).API_KEY_MOCKUP,
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            nr: 1404,
            layer_inputs: [
                {
                    id: "jujmugkht9uyhlb6sjd",
                    data: image_url,
                    crop: {
                        x: 0,
                        y: 0,
                        width: 128,
                        height: 169
                    },
                    checked: true
                },
                {
                    id: "jujmugkhplsvkwqyyxg",
                    checked: true,
                    color: {
                        red: 0,
                        green: 0,
                        blue: 0
                    }
                }
            ]
        })
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        const mockupImage = await (0, _apiJs.removeBackground)(data.url, "mockup_image");
        const mockupURL = URL.createObjectURL(mockupImage);
        document.querySelectorAll(".book-img img").forEach((bookImage)=>{
            bookImage.src = mockupURL;
        });
    } catch (error) {
        console.error(error);
    }
};

},{"./config.js":"92e0v","./api.js":"rLA6s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hLKIg","1Qzfd"], "1Qzfd", "parcelRequire2955")

//# sourceMappingURL=home.f878242e.js.map
