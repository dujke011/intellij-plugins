"use strict";
// Copyright 2000-2018 JetBrains s.r.o.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
var utils_1 = require("./utils");
var modulePath = process.argv[2];
var configFilePath = process.argv[3];
var tslint = require(modulePath);
var version = utils_1.getVersion(tslint);
if (version.kind == 1 /* VERSION_4_AND_HIGHER */) {
    var configFile = tslint.Configuration.loadConfigurationFromPath(configFilePath);
    var result = {
        rules: mapToObject(configFile.rules, mapOptions),
        jsRules: mapToObject(configFile.jsRules, mapOptions)
    };
    console.log(JSON.stringify(result));
}
else {
    var config = tslint.loadConfigurationFromPath(configFilePath);
    console.log(JSON.stringify(config));
}
function mapToObject(map, mapper) {
    var rules = {};
    try {
        for (var map_1 = __values(map), map_1_1 = map_1.next(); !map_1_1.done; map_1_1 = map_1.next()) {
            var _a = __read(map_1_1.value, 2), key = _a[0], value = _a[1];
            rules[key] = mapper(value);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (map_1_1 && !map_1_1.done && (_b = map_1["return"])) _b.call(map_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return rules;
    var e_1, _b;
}
function mapOptions(options) {
    return {
        severity: options.ruleSeverity.toString(),
        options: options.ruleArguments
    };
}
