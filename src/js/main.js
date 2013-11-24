/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, window, appshell, navigator */

console.debug("MAIN.JS");

require.config({
    paths: {
        "text"              : "vendor/text/text",
        "i18n"              : "vendor/i18n/i18n"
    },

    locale: window.localStorage.getItem("locale") || (typeof (appshell) !== "undefined" ? appshell.app.language : navigator.language)
});

define(function (require, exports, module) {
    "use strict";

    // Load the app module.
    require("app");
});


