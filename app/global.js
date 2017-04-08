/**
 * Created by ya on 4/8/2017.
 */

var GLOBAL_CONSTANTS = {};
window.GLOBAL_CONSTANTS = GLOBAL_CONSTANTS;

(function setupConstants() {
    var baseUrl = "";
    switch (location.origin) {
        // dev mode
        case "http://cityguide-frontend.dev":
            baseUrl = 'http://localhost:12222/api/v1';
            break;
        // prod mode
        case "https://cityguide.nbakaev.com":
            baseUrl = 'https://cityguide.nbakaev.com/api/v1';
            break;
    }
    GLOBAL_CONSTANTS.SERVER_URL = baseUrl;
})();


