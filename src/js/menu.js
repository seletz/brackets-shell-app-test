/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global require, define, appshell: true, $, window, navigator, Mustache */

define(function (require, exports, module) {
    "use strict";

    var NO_ERROR           = 0,
        ERR_UNKNOWN        = 1,
        ERR_INVALID_PARAMS = 2,
        ERR_NOT_FOUND      = 3;

    //var Tests = require("tests");

    function check_error(code) {
        switch (code) {
        case NO_ERROR:
            break;
        case ERR_INVALID_PARAMS:
            console.error("menu: invalid parameters");
            break;
        case ERR_NOT_FOUND:
            console.error("menu: menu item not found");
            break;
        default:
            console.error("menu: unknown error: code " + code);
        }
    }

    console.debug("** menu");

    appshell.shellAPI = {};
    appshell.shellAPI.executeCommand = function (command) {
        console.debug("shellAPI.executeCommand: command=" + command);

        if (command === 'tests.ajax') {
            console.debug("AJAX TEST");
            $.ajax({
                url: "http://skynet.solunor.com:1080/Windchill/servlet/nexiles/tools/version",
                //username: "wcadmin",
                //password: ""xxxxx",
                success: function (data) {
                    console.debug("SUCCESS: ", data);
                },
                error: function () {
                    console.debug("ERROR: ", arguments);
                }
            });
        }
    };

    appshell.app.addMenu('Tests', 'tests', '', '', check_error);
    appshell.app.addMenuItem('tests', 'AJAX Test', 'tests.ajax', '', '', '', '', check_error);

});

/* vim: set ts=4 sw=4 expandtab : */

