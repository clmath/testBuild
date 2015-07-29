!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define("lie/dist/lie",[],a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b.Promise=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";function d(){}b.exports=d},{}],2:[function(a,b,c){"use strict";function d(a){function b(a,b){function e(a){j[b]=a,++k===c&!d&&(d=!0,i.resolve(m,j))}g(a).then(e,function(a){d||(d=!0,i.reject(m,a))})}if("[object Array]"!==Object.prototype.toString.call(a))return f(new TypeError("must be an array"));var c=a.length,d=!1;if(!c)return g([]);for(var j=new Array(c),k=0,l=-1,m=new e(h);++l<c;)b(a[l],l);return m}var e=a("./promise"),f=a("./reject"),g=a("./resolve"),h=a("./INTERNAL"),i=a("./handlers");b.exports=d},{"./INTERNAL":1,"./handlers":3,"./promise":5,"./reject":8,"./resolve":9}],3:[function(a,b,c){"use strict";function d(a){var b=a&&a.then;return a&&"object"==typeof a&&"function"==typeof b?function(){b.apply(a,arguments)}:void 0}var e=a("./tryCatch"),f=a("./resolveThenable"),g=a("./states");c.resolve=function(a,b){var h=e(d,b);if("error"===h.status)return c.reject(a,h.value);var i=h.value;if(i)f.safely(a,i);else{a.state=g.FULFILLED,a.outcome=b;for(var j=-1,k=a.queue.length;++j<k;)a.queue[j].callFulfilled(b)}return a},c.reject=function(a,b){a.state=g.REJECTED,a.outcome=b;for(var c=-1,d=a.queue.length;++c<d;)a.queue[c].callRejected(b);return a}},{"./resolveThenable":10,"./states":11,"./tryCatch":12}],4:[function(a,b,c){b.exports=c=a("./promise"),c.resolve=a("./resolve"),c.reject=a("./reject"),c.all=a("./all"),c.race=a("./race")},{"./all":2,"./promise":5,"./race":7,"./reject":8,"./resolve":9}],5:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);if("function"!=typeof a)throw new TypeError("resolver must be a function");this.state=h.PENDING,this.queue=[],this.outcome=void 0,a!==f&&g.safely(this,a)}var e=a("./unwrap"),f=a("./INTERNAL"),g=a("./resolveThenable"),h=a("./states"),i=a("./queueItem");b.exports=d,d.prototype["catch"]=function(a){return this.then(null,a)},d.prototype.then=function(a,b){if("function"!=typeof a&&this.state===h.FULFILLED||"function"!=typeof b&&this.state===h.REJECTED)return this;var c=new d(f);if(this.state!==h.PENDING){var g=this.state===h.FULFILLED?a:b;e(c,g,this.outcome)}else this.queue.push(new i(c,a,b));return c}},{"./INTERNAL":1,"./queueItem":6,"./resolveThenable":10,"./states":11,"./unwrap":13}],6:[function(a,b,c){"use strict";function d(a,b,c){this.promise=a,"function"==typeof b&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),"function"==typeof c&&(this.onRejected=c,this.callRejected=this.otherCallRejected)}var e=a("./handlers"),f=a("./unwrap");b.exports=d,d.prototype.callFulfilled=function(a){e.resolve(this.promise,a)},d.prototype.otherCallFulfilled=function(a){f(this.promise,this.onFulfilled,a)},d.prototype.callRejected=function(a){e.reject(this.promise,a)},d.prototype.otherCallRejected=function(a){f(this.promise,this.onRejected,a)}},{"./handlers":3,"./unwrap":13}],7:[function(a,b,c){"use strict";function d(a){function b(a){g(a).then(function(a){d||(d=!0,i.resolve(k,a))},function(a){d||(d=!0,i.reject(k,a))})}if("[object Array]"!==Object.prototype.toString.call(a))return f(new TypeError("must be an array"));var c=a.length,d=!1;if(!c)return g([]);for(var j=-1,k=new e(h);++j<c;)b(a[j]);return k}var e=a("./promise"),f=a("./reject"),g=a("./resolve"),h=a("./INTERNAL"),i=a("./handlers");b.exports=d},{"./INTERNAL":1,"./handlers":3,"./promise":5,"./reject":8,"./resolve":9}],8:[function(a,b,c){"use strict";function d(a){var b=new e(f);return g.reject(b,a)}var e=a("./promise"),f=a("./INTERNAL"),g=a("./handlers");b.exports=d},{"./INTERNAL":1,"./handlers":3,"./promise":5}],9:[function(a,b,c){"use strict";function d(a){if(a)return a instanceof e?a:g.resolve(new e(f),a);var b=typeof a;switch(b){case"boolean":return h;case"undefined":return j;case"object":return i;case"number":return k;case"string":return l}}var e=a("./promise"),f=a("./INTERNAL"),g=a("./handlers");b.exports=d;var h=g.resolve(new e(f),!1),i=g.resolve(new e(f),null),j=g.resolve(new e(f),void 0),k=g.resolve(new e(f),0),l=g.resolve(new e(f),"")},{"./INTERNAL":1,"./handlers":3,"./promise":5}],10:[function(a,b,c){"use strict";function d(a,b){function c(b){h||(h=!0,e.reject(a,b))}function d(b){h||(h=!0,e.resolve(a,b))}function g(){b(d,c)}var h=!1,i=f(g);"error"===i.status&&c(i.value)}var e=a("./handlers"),f=a("./tryCatch");c.safely=d},{"./handlers":3,"./tryCatch":12}],11:[function(a,b,c){c.REJECTED=["REJECTED"],c.FULFILLED=["FULFILLED"],c.PENDING=["PENDING"]},{}],12:[function(a,b,c){"use strict";function d(a,b){var c={};try{c.value=a(b),c.status="success"}catch(d){c.status="error",c.value=d}return c}b.exports=d},{}],13:[function(a,b,c){"use strict";function d(a,b,c){e(function(){var d;try{d=b(c)}catch(e){return f.reject(a,e)}d===a?f.reject(a,new TypeError("Cannot resolve promise with itself")):f.resolve(a,d)})}var e=a("immediate"),f=a("./handlers");b.exports=d},{"./handlers":3,immediate:15}],14:[function(a,b,c){},{}],15:[function(a,b,c){"use strict";function d(){f=!0;for(var a,b,c=i.length;c;){for(b=i,i=[],a=-1;++a<c;)b[a]();c=i.length}f=!1}function e(a){1!==i.push(a)||f||g()}for(var f,g,h=[a("./nextTick"),a("./mutation.js"),a("./messageChannel"),a("./stateChange"),a("./timeout")],i=[],j=-1,k=h.length;++j<k;)if(h[j]&&h[j].test&&h[j].test()){g=h[j].install(d);break}b.exports=e},{"./messageChannel":16,"./mutation.js":17,"./nextTick":14,"./stateChange":18,"./timeout":19}],16:[function(a,b,c){(function(a){"use strict";c.test=function(){return a.setImmediate?!1:"undefined"!=typeof a.MessageChannel},c.install=function(b){var c=new a.MessageChannel;return c.port1.onmessage=b,function(){c.port2.postMessage(0)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],17:[function(a,b,c){(function(a){"use strict";var b=a.MutationObserver||a.WebKitMutationObserver;c.test=function(){return b},c.install=function(c){var d=0,e=new b(c),f=a.document.createTextNode("");return e.observe(f,{characterData:!0}),function(){f.data=d=++d%2}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],18:[function(a,b,c){(function(a){"use strict";c.test=function(){return"document"in a&&"onreadystatechange"in a.document.createElement("script")},c.install=function(b){return function(){var c=a.document.createElement("script");return c.onreadystatechange=function(){b(),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},a.document.documentElement.appendChild(c),b}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],19:[function(a,b,c){"use strict";c.test=function(){return!0},c.install=function(a){return function(){setTimeout(a,0)}}},{}]},{},[4])(4)}),define("requirejs-dplugins/jquery",[],function(){function a(a){return["core"].concat(a.split(/, */)).map(function(a){return"jquery/src/"+a})}return require.config({map:{jquery:{"jquery/src/selector":"jquery/src/selector-native"}}}),{normalize:function(a){return a},load:function(b,c,d,e){e.isBuild?d():"undefined"!=typeof jQuery?d(jQuery):"undefined"!=typeof $?d($):require(a(b),function(a){d(a)})},addModules:function(b,c,d){d(a(c))}}}),define("requirejs-dplugins/css",["./has","./Promise!","module"],function(a,b,c){"use strict";a.add("event-link-onload-api",function(a){var b=a.navigator.userAgent.match(/AppleWebKit\/([\d.]+)/);return!b||parseInt(b[1],10)>535});var d,e={},f=function(c){return new b(function(b){if(a("event-link-onload-api"))c.onreadystatechange=c.onload=function(){c.readyState&&"complete"!==c.readyState||(c.onreadystatechange=c.onload=null,b())};else{var d=function(){var a=c.sheet||c.styleSheet,e=document.styleSheets;a&&-1!==Array.prototype.lastIndexOf.call(e,a)?b():setTimeout(d,25)};d()}})},g={id:c.id,load:function(b,g,h){if(a("builder"))return j.addOnce(i,b),void h();var k=c.config();k.layersMap&&(b=k.layersMap[b]||b);var l,m=document.head||document.getElementsByTagName("head")[0],n=g.toUrl(b);e[n]||(l=document.createElement("link"),l.rel="stylesheet",l.type="text/css",l.href=n,m.insertBefore(l,d?d.nextSibling:m.firstChild),d=l,e[n]=f(l)),e[n].then(function(){h(b)})}};if(a("builder")){var h,i=[],j={writeConfig:function(a,b,c,d){var e={config:{}};e.config[b]={layersMap:{}},d.forEach(function(a){e.config[b].layersMap[a]=c}),a("require.config("+JSON.stringify(e)+");")},writeLayer:function(a,b,d){function e(a){var b,c=a.shift();if(c)try{b=require.nodeRequire(c)}catch(d){return e(a)}return b}var f=require.getNodePath(require.toUrl(c.id).replace(/[^\/]*$/,"node_modules/clean-css")),g=e([f,"clean-css"]),h=require.nodeRequire("fs");if(d=d.map(require.toUrl).filter(function(a){return h.existsSync(a)?!0:(console.log(">> Css file '"+a+"' was not found."),!1)}),g){var i="";return d.forEach(function(a){var c=new g({relativeTo:"./",target:b}).minify("@import url("+a+");");i+=c.styles||c}),a(b,i),!0}return console.log(">> WARNING: Node module clean-css not found. Skipping CSS inlining. If you want CSS inlining run 'npm install clean-css' in your console."),d.forEach(function(b){a(b,h.readFileSync(b))}),!1},addOnce:function(a,b){-1===a.indexOf(b)&&a.push(b)}};g.writeFile=function(a,b,c,d){h=d},g.onLayerEnd=function(a,b){if(b.name&&b.path){var d=b.path.replace(/\.js$/,".css"),e=b.name+".css",f=j.writeLayer(h,d,i);f&&j.writeConfig(a,c.id,e,i),i=[]}},g.buildFunctions=j}return g}),define("requirejs-dplugins/Promise",["require"],function(a){return{load:function(b,c,d,e){if(e=e||{},e.isBuild)d();else if("function"==typeof Promise)d(Promise);else{var f="lie/dist/lie";a([f],function(a){d(a)})}}}}),define("requirejs-dplugins/i18n",["./i18n/common","./i18n/build","module"],function(a,b,c){var d,e,f=a.mixin,g=a.eachProp,h=a.parseName,i=a.getMasterMid,j=function(a){var b={};return g(a,function(a,c){c.forEach(function(c){b[c]=a})}),b},k=function(a,b){var c={};return a._pseudoRoot&&(c[b]={},f(c,a._pseudoRoot),delete a._pseudoRoot,f(c[b],a),a=c),a},l=function(b,c,d){var e=i(b);c([e],function(e){var g=function(b,h,i,j){var k=function(c){f(j,c),i=a.getParentLocale(i),!c._flattened&&i?g(b,h,i,j):(j._flattened=!0,d(j))};e[i]===!0||1===e[i]?c([b+i+"/"+h],k):k(e[i]||{})};e=k(e,b.masterLocale),g(b.prefix,b.suffix,b.requestedLocale,{})})},m=function(a,b,c,d,e,f){for(var g=a.requestedLocale,h=c.localesMap[b];g&&h.indexOf(g)<0;)g=d(g);g?(a.masterLocale=g,e([b+"_"+g],function(){o(a,c,e,f)})):(console.log("i18n: no relevant layer "+b+" found for locale "+a.requestedLocale+"."),f())},n=function(a,b,c,d,e,f){var g=function(h){h?e(["maybe!"+b+"_"+h],function(b){b?(a.masterLocale=h,o(a,c,e,f)):g(d(h))}):(console.log("i18n: no relevant layer "+b+" found for locale "+a.requestedLocale+"."),f())};g(a.requestedLocale)},o=function(a,b,c,d){var e=i(a);a.requestedLocale===a.masterLocale||b.layerOnly||!b.enhanceLayer?c([e],function(a){a.root&&(a=a.root),d(a)}):l(a,c,d)};return{load:function(b,e,g,k){if(!b)return void g();k=k||{};var o,p,q={};return f(q,"function"==typeof c.config?c.config()||{}:{}),k.isBuild?(d=q.localesList,void g()):(q.enhanceLayer=void 0===q.enhanceLayer?!0:q.enhanceLayer,b=h(b),b.requestedLocale=b.requestedLocale||a.getLocale(q.locale||k.locale),o=i(b),q.bundlesMap?(q.bundlesMap=j(q.bundlesMap),p=q.bundlesMap[o],!p&&q.layerOnly?(console.log("i18n: module "+o+" not found in layer."),void g()):p?q.languagePack?void n(b,p,q,a.getParentLocale,e,g):void m(b,p,q,a.getParentLocale,e,g):void l(b,e,g)):void l(b,e,g))},write:function(a,c,d){var e,f=h(c);f.requestedLocale?(e=b.resolveSync(f.requestedLocale,f),"root"!==f.requestedLocale&&(e._pseudoRoot={},e._flattened=!0),d.asModule(a+"!"+c,"define("+JSON.stringify(e)+")")):b.addBundleToNlsLayer(f)},writeFile:function(a,b,c,d){e=d},onLayerEnd:function(a,f){if(f.name&&f.path){var g;b.setLocalesList(d),g=b.getLayersContent(),b.writeLayers(g,f,e),b.writeConfig(c.id,f,a)}b.reset()}}}),define("requirejs-dplugins/i18n/build",["./common"],function(a){var b,c,d=[],e=a.mixin,f=a.eachProp,g=a.getMasterMid,h=function(a){var b;return c||(b=a.name.match(/^(.*\/)?(.*)$/),c=(b[1]||"")+"nls/"+b[2]),c},i=function(a,b){var c=a.path.match(/^(.*\/)?(.*)\.js$/);return(c[1]||"")+"nls/"+c[2]+"_"+b+".js"},j=function(){return b=[],d.forEach(function(a){var c=require(g(a));f(c,function(a){c[a]&&b.indexOf(a)<0&&b.push(a)})}),b},k=function(a,b){return a.root=a.root===!0||1===a.root?require(b.prefix+"root/"+b.suffix):a.root,a},l=function(b){var c={};return f(b,function(b){for(var d=a.getParentLocale(b);d&&"root"!==d;)c[d]=c[d]||{},c[d][b]=!0,d=a.getParentLocale(d)}),c},m=function(b,c,d){var f,h=b,i={};if(2===arguments.length&&(d=k(require(g(c)),c)),"root"!==h){for(;h&&"root"!==h;)d[h]&&(f=require(c.prefix+h+"/"+c.suffix),e(i,f)),h=a.getParentLocale(h);f=d.root,e(i,f)}else e(i,d);return i};return{addBundleToNlsLayer:function(a){d.push(a)},setLocalesList:function(a){b=a?a.slice():j(),b.indexOf("root")<0&&b.push("root")},reset:function(){d=[],b=void 0,c=void 0},getLayersContent:function(){var a={};return d.forEach(function(c){var d=k(require(g(c)),c),e=l(d);b.forEach(function(b){var f=m(b,c,d);a[b]=a[b]||"";var g;"root"!==b?(g=c.prefix+b+"/"+c.suffix,f._flattened=!0,f._pseudoRoot=e[b]||{}):g=c.prefix+c.suffix,a[b]+='define("'+g+'",'+JSON.stringify(f)+");"})}),a},writeLayers:function(a,b,c){f(a,function(a,d){d+="define('"+h(b)+"_"+a+"', true);",c(i(b,a),d)})},writeConfig:function(a,c,e){var f=d.map(g),i=h(c),j={config:{}};j.config[a]={bundlesMap:{},localesMap:{}},j.config[a].bundlesMap[i]=f,j.config[a].localesMap[i]=b,e("require.config("+JSON.stringify(j)+");")},resolveSync:m}}),define("requirejs-dplugins/i18n/common",["./parentLocale"],function(a){var b=/(^.*(?:^|\/)nls\/)([^\/]*)\/?([^\/]*)$/;return{eachProp:function(a,b){var c;for(c in a)a.hasOwnProperty(c)&&b(c,a[c])},getLocale:function(a){return a||(a="undefined"==typeof navigator?"root":navigator.language||navigator.userLanguage||"root"),a.toLowerCase()},getParentLocale:function(b){if(!b||"root"===b)return void 0;if(a[b])return a[b];var c=b.split("-");return c.pop(),c.length>0?c.join("-"):"root"},mixin:function c(a,b,d){var e;for(e in b)!b.hasOwnProperty(e)||a.hasOwnProperty(e)&&!d?"object"==typeof b[e]&&(!a[e]&&b[e]&&(a[e]={}),c(a[e],b[e],d)):a[e]=b[e]},parseName:function(a){var c=a.match(b);return{prefix:c[1],masterLocale:"root",requestedLocale:c[3]?c[2]:null,suffix:c[3]||c[2]}},getMasterMid:function(a){return"root"===a.masterLocale?a.prefix+a.suffix:a.prefix+a.masterLocale+"/"+a.suffix}}}),define("requirejs-dplugins/i18n/parentLocale",{"en-ag":"en-001","en-ai":"en-001","en-bb":"en-001","en-bm":"en-001","en-bs":"en-001","en-bw":"en-001","en-bz":"en-001","en-cc":"en-001","en-ck":"en-001","en-cm":"en-001","en-cx":"en-001","en-dm":"en-001","en-er":"en-001","en-fj":"en-001","en-fm":"en-001","en-gb":"en-001","en-gd":"en-001","en-gh":"en-001","en-gm":"en-001","en-gy":"en-001","en-jm":"en-001","en-ke":"en-001","en-ki":"en-001","en-kn":"en-001","en-ky":"en-001","en-lc":"en-001","en-lr":"en-001","en-ls":"en-001","en-mg":"en-001","en-ms":"en-001","en-mu":"en-001","en-mw":"en-001","en-na":"en-001","en-nf":"en-001","en-ng":"en-001","en-nr":"en-001","en-nu":"en-001","en-pg":"en-001","en-ph":"en-001","en-pn":"en-001","en-pw":"en-001","en-rw":"en-001","en-sb":"en-001","en-sc":"en-001","en-sd":"en-001","en-sl":"en-001","en-ss":"en-001","en-sx":"en-001","en-sz":"en-001","en-tc":"en-001","en-tk":"en-001","en-to":"en-001","en-tt":"en-001","en-tv":"en-001","en-tz":"en-001","en-ug":"en-001","en-vc":"en-001","en-vu":"en-001","en-ws":"en-001","en-za":"en-001","en-zm":"en-001","en-zw":"en-001","en-150":"en-gb","en-au":"en-gb","en-be":"en-gb","en-dg":"en-gb","en-fk":"en-gb","en-gg":"en-gb","en-gi":"en-gb","en-hk":"en-gb","en-ie":"en-gb","en-im":"en-gb","en-in":"en-gb","en-io":"en-gb","en-je":"en-gb","en-mo":"en-gb","en-mt":"en-gb","en-nz":"en-gb","en-pk":"en-gb","en-sg":"en-gb","en-sh":"en-gb","en-vg":"en-gb","es-ar":"es-419","es-bo":"es-419","es-cl":"es-419","es-co":"es-419","es-cr":"es-419","es-cu":"es-419","es-do":"es-419","es-ec":"es-419","es-gt":"es-419","es-hn":"es-419","es-mx":"es-419","es-ni":"es-419","es-pa":"es-419","es-pe":"es-419","es-pr":"es-419","es-py":"es-419","es-sv":"es-419","es-us":"es-419","es-uy":"es-419","es-ve":"es-419","pt-ao":"pt-pt","pt-cv":"pt-pt","pt-gw":"pt-pt","pt-mo":"pt-pt","pt-mz":"pt-pt","pt-st":"pt-pt","pt-tl":"pt-pt","az-cyrl":"root","bs-cyrl":"root","en-dsrt":"root","ha-arab":"root","mn-mong":"root","ms-arab":"root","pa-arab":"root","shi-latn":"root","sr-latn":"root","uz-arab":"root","uz-cyrl":"root","vai-latn":"root","zh-hant":"root","zh-hant-mo":"zh-hant-hk"}),define("requirejs-dplugins/has",["module"],function(a){function b(a,b,c){var d=a.match(e),f=0,g=function(a){var e=d[f++];if(":"===e)return"";if("?"===d[f++]){var h=b(e);return void 0===h&&c?void 0:!a&&h?g():(g(!0),g(a))}return e||""};return g()}function c(a,b){for(var c=0;c<a.length;c++)":"!==a[c]&&"?"!==a[c]&&"?"!==a[c+1]&&b(a[c],c)}var d=a.config&&a.config()||{},e=/[\?:]|[^:\?]+/g,f=function(a){var b=function(){return this}();return"function"==typeof d[a]?d[a]=d[a](b):d[a]};return f.cache=d,f.add=function(a,b,c,e){return f("builder")?void 0:(("undefined"==typeof d[a]||e)&&(d[a]=b),c&&f(a))},f.normalize=function(a,b){var d=a.match(e);return c(d,function(a,c){d[c]=b(a)}),d.join("")},f.load=function(a,c,d,e){if(e=e||{},!a)return void d();var g=b(a,f,e.isBuild);g?c([g],d):d()},f.addModules=function(a,d,g){var h=[],i=b(d,f,!0);if(i)h.push(i);else if("undefined"==typeof i){var j=d.match(e);c(j,function(a){h.push(a)})}g(h)},f}),define("decor/sniff",["./features"],function(a){if(a("host-browser")){var b=navigator,c=b.userAgent,d=b.appVersion,e=parseFloat(d);if(a.add("mac",d.indexOf("Macintosh")>=0),c.match(/(iPhone|iPod|iPad)/)){var f=RegExp.$1.replace(/P/,"p"),g=c.match(/OS ([\d_]+)/)?RegExp.$1:"1",h=parseFloat(g.replace(/_/,".").replace(/_/g,""));a.add(f,h),a.add("ios",h)}a.add("android",parseFloat(c.split("Android ")[1])||void 0),a.add("msapp",parseFloat(c.split("MSAppHost/")[1])||void 0),a.add("wp",parseFloat(c.split("Windows Phone ")[1])||void 0);var i=parseFloat(c.split("WebKit/")[1])||void 0;i?(a.add("webkit",i),a.add("chrome",parseFloat(c.split("Chrome/")[1])||void 0),a.add("safari",d.indexOf("Safari")>=0&&!a("chrome")&&!a("android")?parseFloat(d.split("Version/")[1]):void 0)):d.indexOf("Trident")>=0?a.add("ie",document.documentMode||parseFloat(d.split("rv:")[1])):c.indexOf("Gecko")>=0&&(a.add("mozilla",e),a.add("ff",parseFloat(c.split("Firefox/")[1]||c.split("Minefield/")[1])||void 0))}return a}),define("decor/schedule",["./features"],function(a){"use strict";function b(){for(var a=!0;a;){a=!1;for(var b in g){var d=g[b];delete g[b],d(),a=!0}}c=!1}var c,d="_schedule",e=0,f=Math.random()+"",g={},h=a("mutation-observer-api")&&document.createElement("div");return a("mutation-observer-api")?(h.id=0,new MutationObserver(b).observe(h,{attributes:!0})):!a("setimmediate-api")&&a("host-browser")&&window.addEventListener("message",function(a){a.data===f&&b()}),function(i){var j=d+e++;return g[j]=i,c||(a("mutation-observer-api")?++h.id:a("setimmediate-api")?setImmediate(b):window.postMessage(f,"*"),c=!0),{remove:function(){delete g[j]}}}}),define("decor/features",["requirejs-dplugins/has"],function(a){return a.add("console-api","undefined"!=typeof console),a.add("host-browser","undefined"!=typeof window),a.add("object-observe-api","function"==typeof Object.observe&&"function"==typeof Array.observe),a.add("object-is-api",Object.is),a.add("setimmediate-api","function"==typeof setImmediate),a.add("mutation-observer-api","undefined"!=typeof MutationObserver&&(/\[\s*native\s+code\s*\]/i.test(MutationObserver)||!/^\s*function/.test(MutationObserver))),a.add("polymer-platform","undefined"!=typeof Platform),a}),define("decor/Stateful",["dcl/advise","dcl/dcl","./features","./Observable"],function(a,b,c,d){function e(a){if(g[a])return g[a];var b=a.replace(/^[a-z]|-[a-zA-Z]/g,function(a){return a.charAt(a.length-1).toUpperCase()}),c=g[a]={p:"_shadow"+b+"Attr",s:"_set"+b+"Attr",g:"_get"+b+"Attr"};return c}function f(a,b,c){d.getNotifier(a).notify({type:"update",object:a,name:b+"",oldValue:c})}var g={},h=/^constructor$|^_set$|^_get$|^deliver$|^discardChanges$|^_(.+)Attr$/,i=b(null,{getProps:function(){var a={};for(var b in this)h.test(b)||(a[b]=!0);return a},introspect:function(a){Object.keys(a).forEach(function(a){var b=e(a),c=b.p,d=b.g,f=b.s;c in this||(this[c]=this[a],delete this[a],Object.defineProperty(this,a,{enumerable:!0,set:function(b){f in this?this[f](b):this._set(a,b)},get:function(){return d in this?this[d]():this[c]}}))},this)},constructor:b.advise({before:function(){var a=this.constructor;a._introspected||(a._props=a.prototype.getProps(),a.prototype.introspect(a._props),a._introspected=!0),d.call(this)},after:function(a){this.processConstructorParameters(a)}}),processConstructorParameters:function(a){a.length&&this.mix(a[0])},mix:function(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])},_set:function(a,b){var c=e(a).p,g=this[c];this[c]=b,!d.is(b,g)&&f(this,a,g)},_get:function(a){return this[e(a).p]},notifyCurrentValue:function(){Array.prototype.forEach.call(arguments,function(a){f(this,a,this[e(a).p])},this)},getPropsToObserve:function(){return this.constructor._props},observe:function(b){var c=new i.PropertyListObserver(this,this.getPropsToObserve());c.open(b,this);var d=a.after(this,"deliver",c.deliver.bind(c)),e=a.after(this,"discardChanges",c.discardChanges.bind(c));return a.before(c,"close",function(){d.unadvise(),e.unadvise()}),c},deliver:function(){},discardChanges:function(){}});return b.chainAfter(i,"introspect"),i.PropertyListObserver=function(a,b){this.o=a,this.props=b},i.PropertyListObserver.prototype={open:function(a,b){var c=this.props;return this._boundCallback=function(d){if(!this._closed&&!this._beingDiscarded){var e={};d.forEach(function(a){a.name in c&&!(a.name in e)&&(e[a.name]=a.oldValue)});for(var f in e){a.call(b,e);break}}}.bind(this),this._h=d.observe(this.o,this._boundCallback),this.o},deliver:function(){this._boundCallback&&d.deliverChangeRecords(this._boundCallback)},discardChanges:function(){return this._beingDiscarded=!0,this._boundCallback&&d.deliverChangeRecords(this._boundCallback),this._beingDiscarded=!1,this.o},setValue:function(){},close:function(){this._h&&(this._h.remove(),this._h=null),this._closed=!0}},i.PropertyListObserver.prototype.remove=i.PropertyListObserver.prototype.close,i}),function(a){"undefined"!=typeof define?define("dcl/dcl",["./mini"],a):"undefined"!=typeof module?module.exports=a(require("./mini")):dcl=a(dcl)}(function(a){"use strict";function b(){}function c(b){return a._makeSuper(b,f)}function d(a,c,d){var e=a||b,f=c||b,g=d||b,h=function(){var a,b;e.apply(this,arguments);try{a=g.apply(this,arguments)}catch(c){a=c,b=!0}if(f.call(this,arguments,a),b)throw a;return a};return h.advices={before:a,after:c,around:d},h}function e(b){return function(c,d){var e,f=c._meta;f&&(e=+f.weaver[d]||0,e&&e!=b&&a._error("set chaining",d,c,b,e),f.weaver[d]=b)}}var f=a(a.Super,{constructor:function(){this.before=this.around.before,this.after=this.around.after,this.around=this.around.around}});return a.mix(a,{Advice:f,advise:c,before:function(b){return a.advise({before:b})},after:function(b){return a.advise({after:b})},around:a.superCall,chainBefore:e(1),chainAfter:e(2),isInstanceOf:function(a,b){if(a instanceof b)return!0;var c,d=a.constructor._meta;if(d)for(d=d.bases,c=d.length-1;c>=0;--c)if(d[c]===b)return!0;return!1},_stub:function(b,c,e,f){var g=f[e]=a._extractChain(c,e,"around"),h=a._extractChain(c,e,"before").reverse(),i=a._extractChain(c,e,"after");return g=b?a._stubChainSuper(g,1==b?function(b){return a._stubChain(b.reverse())}:a._stubChain,e):a._stubSuper(g,e),h.length||i.length?d(a._stubChain(h),a._stubChain(i),g):g||function(){}}}),a}),function(a){"undefined"!=typeof define?define("dcl/mini",[],a):"undefined"!=typeof module?module.exports=a():dcl=a()}(function(){"use strict";function a(b,d){var f,j,k,l,m,n,o,p,q,r,s=[0],t=0;if(b)if(b instanceof Array){for(m={},p=b.slice(0).reverse(),q=p.length-1;q>=0;--q)if(j=p[q],j._uniqueId=j._uniqueId||g++,f=j._meta){for(o=f.bases,t=o.length-1;t>0;--t)r=o[t]._uniqueId,m[r]=(m[r]||0)+1;p[q]=o.slice(0)}else p[q]=[j];n={};a:for(;p.length;){for(q=0;q<p.length;++q)if(o=p[q],j=o[0],r=j._uniqueId,!m[r]){n[r]||(s.push(j),n[r]=1),o.shift(),o.length?--m[o[0]._uniqueId]:p.splice(q,1);continue a}a._error("cycle",d,p)}b=b[0],t=s.length-((l=b._meta)&&b===s[s.length-(t=l.bases.length)]?t:1)-1}else b._uniqueId=b._uniqueId||g++,s=s.concat((l=b._meta)?l.bases:b);for(f=b?a.delegate(b[i]):{},o=b&&(l=b._meta)?a.delegate(l.weaver):{constructor:2};t>0;--t)if(j=s[t],l=j._meta,a.mix(f,l&&l.ownProps||j[i]),l)for(r in p=l.weaver)o[r]=(+o[r]||0)|p[r];for(r in d)c(l=d[r])?o[r]=+o[r]||0:f[r]=l;return l={bases:s,ownProps:d,weaver:o,chains:{}},s[0]={_meta:l,prototype:f},e(l,f),k=f[h],k._meta=l,k[i]=f,s[0]=k,a._postprocess(k)}function b(a){this.around=a}function c(a){return a&&a.spr instanceof b}function d(a){var b=[];for(var c in a)b.push(c);return b}function e(b,c){var d=b.weaver,e=b.bases,f=b.chains;for(var g in d)c[g]=a._stub(d[g],e,g,f)}var f,g=0,h="constructor",i="prototype",j={};return(f=function(a,b){for(var c in b)a[c]=b[c]})(a,{mix:f,delegate:function(a){return Object.create(a)},allKeys:d,Super:b,superCall:function(b){return a._makeSuper(b)},_makeSuper:function(a,c){var d=function(){};return d.spr=new(c||b)(a),d},_postprocess:function(a){return a},_error:function(a){throw Error("dcl: "+a)},_instantiate:function(a,b,c){var d=a.spr.around(b);return d.ctr=a.ctr,d},_extractChain:function(a,b,d){for(var e,f,g=a.length-1,k=[],l="around"==d;e=a[g];--g)((f=e._meta)?(f=f.ownProps).hasOwnProperty(b)&&(c(f=f[b])?l?f.spr.around:f=f.spr[d]:l):l&&(f=b==h?e:e[i][b])&&f!==j[b])&&(f.ctr=e,k.push(f));return k},_stubChain:function(a){var b,c=a.length;return c?1==c?(b=a[0],function(){b.apply(this,arguments)}):function(){for(var b=0;c>b;++b)a[b].apply(this,arguments)}:0},_stubSuper:function(b,d){for(var e,f=0,g=j[d];e=b[f];++f)g=c(e)?b[f]=a._instantiate(e,g,d):e;return d!=h?g:function(){g.apply(this,arguments)}},_stubChainSuper:function(b,d,e){for(var f,g,i=0,j=0;f=b[i];++i)c(f)&&(g=i-j,b[i]=a._instantiate(f,g?1==g?b[j]:d(b.slice(j,i)):0,e),j=i);return g=i-j,g?1==g&&e!=h?b[j]:d(j?b.slice(j):b):0},_stub:function(b,c,d,e){var f=e[d]=a._extractChain(c,d,"around");return(b?a._stubChainSuper(f,a._stubChain,d):a._stubSuper(f,d))||function(){}}}),a}),function(a){"undefined"!=typeof define?define("dcl/advise",[],a):"undefined"!=typeof module?module.exports=a():advise=a()}(function(){"use strict";function a(a,b){this.next_before=this.prev_before=this.next_after=this.prev_after=this.next_around=this.prev_around=this,this.instance=a,this.name=b}function b(a){var b=function(){var b,c,d,e=this,f=arguments;for(b=a.prev_before;b!==a;b=b.prev_before)b.before.apply(e,f);try{a.prev_around!==a&&(c=a.prev_around.around.apply(e,f))}catch(g){c=g,d=!0}for(b=a.next_after;b!==a;b=b.next_after)b.after.call(e,f,c);if(d)throw c;return c};return b.adviceNode=a,b}function c(c,d,e){var f,g=c[d];return g&&g.adviceNode&&g.adviceNode instanceof a?f=g.adviceNode:(f=new a(c,d),g&&g.advices?(g=g.advices,f.add(g.before,g.after,g.around)):f.add(0,0,g),c[d]=b(f)),"function"==typeof e&&(e=e(d,c)),f.add(e.before,e.after,0,e.around)}var d=a.prototype={add:function(b,d,e,f){var g=new a(this.instance,this.name);return g.parent=this,g.before=b,this._add("before",g),g.after=d,this._add("after",g),g.around=e,this._add("around",g,f),g.original=f,f&&(g.around=c._instantiate(f,g.prev_around.around,this)),g},_add:function(a,b,c){if(b[a]||c){var d="next_"+a,e="prev_"+a;(b[e]=this[e])[d]=(b[d]=this)[e]=b}},remove:function(a){this._remove("before",a),this._remove("after",a),this._remove("around",a)},_remove:function(a,b){var c="next_"+a,d="prev_"+a;b[c][d]=b[d],b[d][c]=b[c]},destroy:function(){var a=this.prev_around.around,b=this.next_around,d=this.parent;if(this.remove(this),b!==this)for(;b!==d;a=b.around,b=b.next_around)b.original&&(b.around=c._instantiate(b.original,a,this));this.instance=0}};return d.unadvise=d.destroy,c.before=function(a,b,d){return c(a,b,{before:d})},c.after=function(a,b,d){return c(a,b,{after:d})},c.around=function(a,b,d){return c(a,b,{around:d})},c.Node=a,c._instantiate=function(a,b,c){return a(b)},c}),define("decor/ObservableArray",["requirejs-dplugins/has","./Observable"],function(a,b){"use strict";var c,d,e=Object.defineProperty,f=[],g=/\[\s*object\s+global\s*\]/i;return function(){var h="_observableArray";c=a("object-observe-api")?function(a){var c=[];return b.call(c),e(c,h,{value:1}),e(c,"set",Object.getOwnPropertyDescriptor(b.prototype,"set")),"number"==typeof a&&1===arguments.length?c.length=a:f.push.apply(c,arguments),c}:function(a){var i=this&&!g.test(this)&&!this.hasOwnProperty("length"),j=i?[]:new c;if(i){b.call(j),e(j,h,{value:1});for(var k in d)e(j,k,{value:d[k],configurable:!0,writable:!0})}return"number"==typeof a&&1===arguments.length?j.length=a:f.push.apply(j,arguments),j},c.test=function(a){return a&&a[h]}}(),a("object-observe-api")?c.canObserve=function(a){return"function"==typeof(a||{}).splice}:c.canObserve=c.test,a("object-observe-api")||!function(){function a(a,c){0>a&&(a=this.length+a);var d=this.length,e={index:a,removed:this.slice(a,a+c),addedCount:arguments.length-2},g=f.splice.apply(this,arguments),h=d!==this.length&&{type:"update",object:this,name:"length",oldValue:d},i=b.getNotifier(this);return i.performChange("splice",function(){return h&&i.notify(h),e}),g}d={splice:a,set:function(c,d){var e;return"length"===c?(e=new Array(Math.max(d-this.length,0)),e.unshift(Math.min(this.length,d),Math.max(this.length-d,0)),a.apply(this,e)):!isNaN(c)&&+c>=this.length?(e=new Array(c-this.length),e.push(d),e.unshift(this.length,0),a.apply(this,e)):b.prototype.set.call(this,c,d),d},pop:function(){return a.call(this,-1,1)[0]},push:function(){var b=[this.length,0];return f.push.apply(b,arguments),a.apply(this,b),this.length},reverse:function(){var a={type:"splice",object:this,index:0,removed:this.slice(),addedCount:this.length},c=f.reverse.apply(this,arguments);return b.getNotifier(this).notify(a),c},shift:function(){return a.call(this,0,1)[0]},sort:function(){var a={type:"splice",object:this,index:0,removed:this.slice(),addedCount:this.length},c=f.sort.apply(this,arguments);return b.getNotifier(this).notify(a),c},unshift:function(){var b=[0,0];return f.push.apply(b,arguments),a.apply(this,b),this.length}}}(),c.observe=function(){function c(a,b,c,d){return c>=b?b-c:a>=d?d-a:Math.min(b,d)-Math.max(a,c)}function d(a){return"add"!==a.type&&"update"!==a.type?a:{type:"splice",object:a.object,index:+a.name,removed:[a.oldValue],addedCount:1}}function e(b,e){var g=[];e.forEach(function(b){b=d(b);for(var e=!1,h=0,i=0;i<g.length;++i){var j;a("object-observe-api")&&Object.isFrozen(g[i])?j=g[i]={type:"splice",object:g[i].object,index:g[i].index+h,removed:g[i].removed,addedCount:g[i].addedCount}:(j=g[i],j.index+=h);var k=c(j.index,j.index+j.addedCount,b.index,b.index+b.removed.length);if(k>=0){g.splice(i--,1);var l,m=j.addedCount-k+b.addedCount;j.index<b.index?(l=b.removed.slice(Math.max(k,0)),f.unshift.apply(l,j.removed)):(l=b.removed.slice(0,k>0?j.index-b.index:b.length),f.push.apply(l,j.removed),f.push.apply(l,b.removed.slice(j.index+j.addedCount-b.index))),
0===l.length&&0===m?e=!0:b={type:"splice",object:j.object,index:Math.min(j.index,b.index),removed:l,addedCount:m},h-=j.addedCount-j.removed.length}else if(b.index<j.index){var n=b.addedCount-b.removed.length;j.index+=n,h+=n,g.splice(i++,0,b),e=!0}}e||g.push(b)}),g.length>0&&b(g)}return a("object-observe-api")?function(a,b){return Array.observe(a,b=e.bind(a,b)),{deliver:Object.deliverChangeRecords.bind(Object,b),remove:Array.unobserve.bind(Array,a,b)}}:function(a,c){var d=Object.create(b.observe(a,c=e.bind(a,c),["add","update","delete","splice"]));return d.deliver=b.deliverChangeRecords.bind(b,c),d}}(),c}),define("decor/Observable",["./features","./features!object-observe-api?:./schedule"],function(a,b){"use strict";var c,d=Object.defineProperty,e=Object.getOwnPropertyDescriptor,f={add:1,update:1,"delete":1,reconfigure:1,setPrototype:1,preventExtensions:1};if(c=function(a){this._observable||d(this,"_observable",{value:1}),a&&c.assign(this,a)},c.test=function(a){return a&&a._observable},c.is=a("object-is-api")?Object.is:function(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b},c.assign=function(a){if(null==a)throw new TypeError("Can't convert "+a+" to object.");a=Object(a);for(var b=1,d=arguments.length;d>b;++b)for(var e=Object(arguments[b]),f=Object.getOwnPropertyNames(e),g=0,h=f.length;h>g;++g){var i=f[g];c.prototype.set.call(a,i,e[i])}return a},a("object-observe-api")?c.canObserve=function(a){return"object"==typeof a&&null!=a}:c.canObserve=c.test,a("object-observe-api"))d(c.prototype,"set",{value:function(a,b){return this[a]=b,b},configurable:!0,writable:!0}),c.observe=function(a,b,c){return Object.observe.call(this,a,b,c),{remove:function(){Object.unobserve(a,b)}}},c.getNotifier=Object.getNotifier,c.deliverChangeRecords=Object.deliverChangeRecords;else{d(c.prototype,"set",{value:function(a,b){var d=a in this?"update":"add",f=this[a],g=(e(this,a)||{}).set;if(this[a]=b,!c.is(b,f)&&void 0===g){var h={type:d,object:this,name:a+""};"update"===d&&(h.oldValue=f),c.getNotifier(this).notify(h)}return b},configurable:!0,writable:!0});var g=0,h={},i=null,j=function(){a("polymer-platform")&&Platform.performMicrotaskCheckpoint();for(var b=!0;b;){b=!1;var d=[];for(var e in h)d.push(h[e]);h={},d=d.sort(function(a,b){return a._seq-b._seq});for(var f=0,g=d.length;g>f;++f)d[f]._changeRecords.length>0&&(c.deliverChangeRecords(d[f]),b=!0)}i=null},k=function(a){0===a._changeRecords.length&&0===a._refCountOfNotifier&&(a._seq=void 0)},l=function(a){this.target=a,this.observers={},this._activeChanges={}};l.prototype={notify:function(a){function c(a,b,c){if(c in b){for(var d in b)if(a[d]>0)return!1;return!0}}for(var d in this.observers)if(c(this._activeChanges,this.observers[d].acceptTable,a.type)){var e=this.observers[d].callback;e._changeRecords.push(a),h[e._seq]=e,i||(i=b(j))}},performChange:function(a,b){this._activeChanges[a]=(this._activeChanges[a]||0)+1;var c=b.call(void 0);if(--this._activeChanges[a],c){var d={type:a,object:this.target};for(var e in c)e in d||(d[e]=c[e]);this.notify(d)}}},c.getNotifier=function(a){return e(a,"_notifier")||d(a,"_notifier",{value:new l(a)}),a._notifier},c.observe=function(a,b,d){if(Object(a)!==a)throw new TypeError("Observable.observe() cannot be called on non-object.");"_seq"in b||(b._seq=g++,b._changeRecords=[],b._refCountOfNotifier=0);var e=d?d.reduce(function(a,b){return a[b]=1,a},{}):f,h=c.getNotifier(a);return b._seq in h.observers?h.observers[b._seq].acceptTable=e:(h.observers[b._seq]={acceptTable:e,callback:b},++b._refCountOfNotifier),{remove:function(){b._seq in h.observers&&(delete h.observers[b._seq],--b._refCountOfNotifier)}}},c.deliverChangeRecords=function(b){var c=b._changeRecords.length;try{b(b._changeRecords.splice(0,c))}catch(d){a("console-api")&&console.error("Error occured in observer callback: "+(d.stack||d))}k(b)}}return c}),define("decor/Invalidating",["dcl/dcl","./Stateful","./Destroyable"],function(a,b,c){var d=a([b,c],{constructor:a.after(function(){this.initializeInvalidating()}),initializeInvalidating:function(){this.own(this._hComputing=this.observe(function(a){this.computeProperties(a),this.deliverComputing()}),this._hRendering=this.observe(function(a){this.refreshRendering(a)})),this.discardChanges()},deliverComputing:function(){return this._hComputing&&this._hComputing.deliver(),this._hComputing},discardComputing:function(){return this._hComputing&&this._hComputing.discardChanges(),this._hComputing},computeProperties:function(){},refreshRendering:function(){}});return a.chainAfter(d,"computeProperties"),a.chainAfter(d,"refreshRendering"),d}),define("decor/Evented",["dcl/dcl","dcl/advise"],function(a,b){return a(null,{on:function(a,c){return b.before(this,"on"+a,c)},emit:function(a){var b="on"+a;if(this[b]){var c=Array.prototype.slice.call(arguments,1);this[b].apply(this,c)}}})}),define("decor/Destroyable",["dcl/advise","dcl/dcl"],function(a,b){var c=b(null,{destroy:b.advise({before:function(){this._beingDestroyed=!0,this._releaseHandles()},after:function(){this._destroyed=!0}}),_releaseHandles:function(){},own:function(){var b=["destroy","remove","cancel"],c=Array.prototype.slice.call(arguments);return c.forEach(function(c){function d(){f.destroy(),g.forEach(function(a){a.destroy()})}var e,f=a.after(this,"_releaseHandles",function(){c[e]()}),g=[];c.then&&c.then(d,d),b.forEach(function(b){"function"==typeof c[b]&&(e||(e=b),c.then||g.push(a.after(c,b,d)))})},this),c},defer:function(a,b){var c=setTimeout(function(){c&&(c=null,this._destroyed||a.call(this))}.bind(this),b||0);return{remove:function(){return c&&(clearTimeout(c),c=null),null}}}});return b.chainBefore(c,"destroy"),c});
//# sourceMappingURL=layer.map
var paths = {};
!require.s.contexts._.config.paths["decor"] && (paths["decor"] = "decor-build");
require.config({
	paths: paths
});
define("decor-build/layer", [], function(){});
