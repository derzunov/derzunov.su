/*
 The MIT License (MIT)

 Copyright (c) 2015 Dmitry Erzunov (derzunov.work@gmail.com)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/*
 *   DDIC DI CONTAINER
 *   Created by Dmitry Erzunov (derzunov.work@gmail.com)
 */

var DDIC;

DDIC = (function() {
    function DDIC() {
        this.values = {};
        this.services = {};
    }

    DDIC.prototype.set = function(name, callback) {
        if (typeof callback === "function") {
            return this.services[name] = callback;
        } else {
            return this.values[name] = callback;
        }
    };

    DDIC.prototype.get = function(name) {
        if (this.values[name] === void 0 && typeof this.services[name] === 'function') {
            this.values[name] = this.services[name](this);
        }
        return this.values[name];
    };

    DDIC.prototype.extend = function(name, callback) {
        var service;
        service = this.services[name];
        if (service === void 0) {
            console.error('?here is no ' + name + ' service in DDIC');
        }
        return this.services[name] = function(container) {
            return callback(service(container), container);
        };
    };

    return DDIC;

})();