"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var environment_1 = require("environments/environment");
var app_1 = require("./app");
var app_component_1 = require("./app/app.component");
function main() {
    var modulePromise = null;
    if (module['hot']) {
        module['hot'].accept();
        module['hot'].dispose(function () {
            var oldRootElem = document.querySelector(app_component_1.ROOT_SELECTOR);
            var newRootElem = document.createElement(app_component_1.ROOT_SELECTOR);
            oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
            if (modulePromise) {
                modulePromise.then(function (appModule) {
                    appModule.destroy();
                    if (oldRootElem !== null) {
                        oldRootElem.parentNode.removeChild(oldRootElem);
                    }
                    return appModule;
                });
            }
        });
    }
    modulePromise = platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.AppModule);
    return modulePromise
        .then(environment_1.environment.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
switch (document.readyState) {
    case 'loading':
        document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
        break;
    case 'interactive':
    case 'complete':
    default:
        main();
}
function _domReadyHandler() {
    document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
    main();
}
//# sourceMappingURL=main.browser.js.map