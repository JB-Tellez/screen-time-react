"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/screen-time-react/index.html","df2b49012916043ea19aabc7e342c948"],["/screen-time-react/static/css/main.fdf89153.css","ea8d59c4565188621b83a5e9ae5ea060"],["/screen-time-react/static/js/main.74e2c148.js","2010307a1d65812eba975203b2af1362"],["/screen-time-react/static/media/100-icon.1163845f.png","1163845fe48fbe22b3807f12793a9fd5"],["/screen-time-react/static/media/144421stars.6494ab5b.png","6494ab5b3760b5e2cc46f5566a245371"],["/screen-time-react/static/media/Godsownjunkyardfree.a837560c.otf","a837560c1d82751f7a4a4e6985b29d38"],["/screen-time-react/static/media/blur.00ea1a5d.png","00ea1a5d51bd36c96e79f91ee9cd84c8"],["/screen-time-react/static/media/family-icon-big.85062803.png","85062803dec3de7baaed8d65a5edb693"],["/screen-time-react/static/media/family-icon.8a80b01b.png","8a80b01ba0295140c3f2c2a4ff849b7a"],["/screen-time-react/static/media/little-girl-icon.6dcc0834.png","6dcc0834d1853c7e9e1ea64c325a1a55"],["/screen-time-react/static/media/loader-big.a770b679.gif","a770b6797b68e3f8920e473eb824bac0"],["/screen-time-react/static/media/movie.91c0ef13.png","91c0ef1310d6bac61b27c546926fdcd9"],["/screen-time-react/static/media/robot-big.f2c972cc.png","f2c972cc9dd075a7a785a5977371d9ad"],["/screen-time-react/static/media/rw-widgets.12f0820c.woff","12f0820c451bdc75f4d1ef97732bf6e8"],["/screen-time-react/static/media/rw-widgets.792dcd18.svg","792dcd18baf5f544aabcad1883d673c2"],["/screen-time-react/static/media/rw-widgets.bc7c4a59.eot","bc7c4a59f924cf037aad6e1f9edba366"],["/screen-time-react/static/media/rw-widgets.eceddf47.ttf","eceddf474df95d8d4a7e316668c3be85"],["/screen-time-react/static/media/screentime_final.685dfef3.gif","685dfef3924d81e32bdc5e3309cee6a7"],["/screen-time-react/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/screen-time-react/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/screen-time-react/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/screen-time-react/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/screen-time-react/static/media/teen-boy-icon.3a609909.png","3a609909ce6924cc1811d80f9ccede49"],["/screen-time-react/static/media/timer.6d82af5e.png","6d82af5e30ce48d4a1759413e951ced6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/screen-time-react/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});