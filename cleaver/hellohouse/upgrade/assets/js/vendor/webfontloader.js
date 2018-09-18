/* Web Font Loader | 1.6.26 | https://github.com/typekit/webfontloader */
!function(){function a(a,b,c){return a.call.apply(a.bind,arguments)}function b(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function c(d,e,f){return c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:b,c.apply(null,arguments)}function e(a,b){this.a=a,this.m=b||a,this.c=this.m.document}function g(a,b,c,d){if(b=a.c.createElement(b),c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));return d&&b.appendChild(a.c.createTextNode(d)),b}function h(a,b,c){a=a.c.getElementsByTagName(b)[0],a||(a=document.documentElement),a.insertBefore(c,a.lastChild)}function i(a){a.parentNode&&a.parentNode.removeChild(a)}function j(a,b,c){b=b||[],c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}for(b=[],e=0;e<d.length;e+=1){for(f=!1,g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function k(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}function l(a){if("string"==typeof a.f)return a.f;var b=a.m.location.protocol;return"about:"==b&&(b=a.a.location.protocol),"https:"==b?"https:":"http:"}function m(a){return a.m.location.hostname||a.a.location.hostname}function n(a,b,c){function d(){k&&e&&i&&(k(j),k=null)}b=g(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,i=!0,j=null,k=c||null;f?(b.onload=function(){e=!0,d()},b.onerror=function(){e=!0,j=Error("Stylesheet failed to load"),d()}):setTimeout(function(){e=!0,d()},0),h(a,"head",b)}function o(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=g(a,"script",{src:b}),h=!1;return f.onload=f.onreadystatechange=function(){h||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(h=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))},e.appendChild(f),setTimeout(function(){h||(h=!0,c&&c(Error("Script load timeout")))},d||5e3),f}return null}function p(){this.a=0,this.c=null}function q(a){return a.a++,function(){a.a--,s(a)}}function r(a,b){a.c=b,s(a)}function s(a){0==a.a&&a.c&&(a.c(),a.c=null)}function t(a){this.a=a||"-"}function u(a,b){this.c=a,this.f=4,this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function v(a){return y(a)+" "+(a.f+"00")+" 300px "+w(a.c)}function w(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function x(a){return a.a+a.f}function y(a){var b="normal";return"o"===a.a?b="oblique":"i"===a.a&&(b="italic"),b}function z(a){var b=4,c="n",d=null;return a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10)))),c+b}function A(a,b){this.c=a,this.f=a.m.document.documentElement,this.h=b,this.a=new t("-"),this.j=!1!==b.events,this.g=!1!==b.classes}function B(a){a.g&&j(a.f,[a.a.c("wf","loading")]),D(a,"loading")}function C(a){if(a.g){var b=k(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive")),j(a.f,c,d)}D(a,"inactive")}function D(a,b,c){a.j&&a.h[b]&&(c?a.h[b](c.c,x(c)):a.h[b]())}function E(){this.c={}}function F(a,b,c){var e,d=[];for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d}function G(a,b){this.c=a,this.f=b,this.a=g(this.c,"span",{"aria-hidden":"true"},this.f)}function H(a){h(a.c,"body",a.a)}function I(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+w(a.c)+";"+("font-style:"+y(a)+";font-weight:"+(a.f+"00")+";")}function J(a,b,c,d,e,f){this.g=a,this.j=b,this.a=d,this.c=c,this.f=e||3e3,this.h=f||void 0}function K(a,b,c,d,e,f,g){this.v=a,this.B=b,this.c=c,this.a=d,this.s=g||"BESbswy",this.f={},this.w=e||3e3,this.u=f||null,this.o=this.j=this.h=this.g=null,this.g=new G(this.c,this.s),this.h=new G(this.c,this.s),this.j=new G(this.c,this.s),this.o=new G(this.c,this.s),a=new u(this.a.c+",serif",x(this.a)),a=I(a),this.g.a.style.cssText=a,a=new u(this.a.c+",sans-serif",x(this.a)),a=I(a),this.h.a.style.cssText=a,a=new u("serif",x(this.a)),a=I(a),this.j.a.style.cssText=a,a=new u("sans-serif",x(this.a)),a=I(a),this.o.a.style.cssText=a,H(this.g),H(this.h),H(this.j),H(this.o)}function N(){if(null===M){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return M}function O(a,b,c){for(var d in L)if(L.hasOwnProperty(d)&&b===a.f[L[d]]&&c===a.f[L[d]])return!0;return!1}function P(a){var e,b=a.g.a.offsetWidth,c=a.h.a.offsetWidth;(e=b===a.f.serif&&c===a.f["sans-serif"])||(e=N()&&O(a,b,c)),e?d()-a.A>=a.w?N()&&O(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?R(a,a.v):R(a,a.B):Q(a):R(a,a.v)}function Q(a){setTimeout(c(function(){P(this)},a),50)}function R(a,b){setTimeout(c(function(){i(this.g.a),i(this.h.a),i(this.j.a),i(this.o.a),b(this.a)},a),0)}function S(a,b,c){this.c=a,this.a=b,this.f=0,this.o=this.j=!1,this.s=c}function U(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&j(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),D(a,"active")):C(a.a))}function V(a){this.j=a,this.a=new E,this.h=0,this.f=this.g=!0}function W(a,b,d,e,f){var g=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=f||null,h=e||null||{};if(0===d.length&&g)C(b.a);else{b.f+=d.length,g&&(b.j=g);var i,k=[];for(i=0;i<d.length;i++){var l=d[i],m=h[l.c],n=b.a,o=l;n.g&&j(n.f,[n.a.c("wf",o.c,x(o).toString(),"loading")]),D(n,"fontloading",o),n=null,null===T&&(T=!!window.FontFace&&(!(o=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))||42<parseInt(o[1],10))),n=T?new J(c(b.g,b),c(b.h,b),b.c,l,b.s,m):new K(c(b.g,b),c(b.h,b),b.c,l,b.s,a,m),k.push(n)}for(i=0;i<k.length;i++)k[i].start()}},0)}function X(a,b,c){var d=[],e=c.timeout;B(b);var d=F(a.a,c,a.c),f=new S(a.c,b,e);for(a.h=d.length,b=0,c=d.length;b<c;b++)d[b].load(function(b,c,d){W(a,f,b,c,d)})}function Y(a,b){this.c=a,this.a=b}function Z(a,b,c){var d=l(a.c);return a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""),d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}function $(a,b){this.c=a,this.a=b}function _(a,b,c){a?this.c=a:this.c=b+aa,this.a=[],this.f=[],this.g=c||""}function ba(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":"),a.a.push(e.join(f))}}function ca(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));return b=a.c+"?family="+c.join("%7C"),0<a.f.length&&(b+="&subset="+a.f.join(",")),0<a.g.length&&(b+="&text="+encodeURIComponent(a.g)),b}function da(a){this.f=a,this.a=[],this.c={}}function ia(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g,h=d[1];if(g=[],h)for(var h=h.split(","),i=h.length,j=0;j<i;j++){var k;if(k=h[j],k.match(/^[\w-]+$/)){var l=ha.exec(k.toLowerCase());if(null==l)k="";else{if(k=l[2],k=null==k||""==k?"n":ga[k],l=l[1],null==l||""==l)l="4";else var m=fa[l],l=m?m:isNaN(l)?"4":l.substr(0,1);k=[k,l].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g),3==d.length&&(d=d[2],g=[],d=d?d.split(","):g,0<d.length&&(d=ea[d[0]])&&(a.c[e]=d))}for(a.c[e]||(d=ea[e])&&(a.c[e]=d),d=0;d<f.length;d+=1)a.a.push(new u(e,f[d]))}}function ja(a,b){this.c=a,this.a=b}function la(a,b){this.c=a,this.a=b}function ma(a,b){this.c=a,this.f=b,this.a=[]}var d=Date.now||function(){return+new Date},f=!!window.FontFace;t.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)},J.prototype.start=function(){var a=this.c.m.document,b=this,c=d(),e=new Promise(function(e,f){function g(){d()-c>=b.f?f():a.fonts.load(v(b.a),b.h).then(function(a){1<=a.length?e():setTimeout(g,25)},function(){f()})}g()}),f=new Promise(function(a,c){setTimeout(c,b.f)});Promise.race([f,e]).then(function(){b.g(b.a)},function(){b.j(b.a)})};var L={D:"serif",C:"sans-serif"},M=null;K.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=d(),P(this)};var T=null;S.prototype.g=function(a){var b=this.a;b.g&&j(b.f,[b.a.c("wf",a.c,x(a).toString(),"active")],[b.a.c("wf",a.c,x(a).toString(),"loading"),b.a.c("wf",a.c,x(a).toString(),"inactive")]),D(b,"fontactive",a),this.o=!0,U(this)},S.prototype.h=function(a){var b=this.a;if(b.g){var c=k(b.f,b.a.c("wf",a.c,x(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,x(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,x(a).toString(),"inactive")),j(b.f,d,e)}D(b,"fontinactive",a),U(this)},V.prototype.load=function(a){this.c=new e(this.j,a.context||this.j),this.g=!1!==a.events,this.f=!1!==a.classes,X(this,new A(this.c,a),a)},Y.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var g,c=f["__mti_fntLst"+d](),e=[];if(c)for(var h=0;h<c.length;h++){var i=c[h].fontfamily;void 0!=c[h].fontStyle&&void 0!=c[h].fontWeight?(g=c[h].fontStyle+c[h].fontWeight,e.push(new u(i,g))):e.push(new u(i))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;o(this.c,Z(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])},$.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new p;for(b=0,c=d.length;b<c;b++)n(this.c,d[b],q(g));var h=[];for(b=0,c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var i=d[1].split(","),j=0;j<i.length;j+=1)h.push(new u(d[0],i[j]));else h.push(new u(d[0]));r(g,function(){a(h,f)})};var aa="//fonts.googleapis.com/css",ea={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},fa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ga={i:"i",italic:"i",n:"n",normal:"n"},ha=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,ka={Arimo:!0,Cousine:!0,Tinos:!0};ja.prototype.load=function(a){var b=new p,c=this.c,d=new _(this.a.api,l(c),this.a.text),e=this.a.families;ba(d,e);var f=new da(e);ia(f),n(c,ca(d),q(b)),r(b,function(){a(f.a,f.c,ka)})},la.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?o(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var d=[],e=0;e<b.length;e+=2)for(var f=b[e],g=b[e+1],h=0;h<g.length;h++)d.push(new u(f,g[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(a){}a(d)}},2e3):a([])},ma.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var e=0,f=c.fonts.length;e<f;++e){var g=c.fonts[e];d.a.push(new u(g.name,z("font-weight:"+g.weight+";font-style:"+g.style)))}a(d.a)},o(this.c,l(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+m(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var na=new V(window);na.a.c.custom=function(a,b){return new $(b,a)},na.a.c.fontdeck=function(a,b){return new ma(b,a)},na.a.c.monotype=function(a,b){return new Y(b,a)},na.a.c.typekit=function(a,b){return new la(b,a)},na.a.c.google=function(a,b){return new ja(b,a)};var oa={load:c(na.load,na)};"function"==typeof define&&define.amd?define(function(){return oa}):"undefined"!=typeof module&&module.exports?module.exports=oa:(window.WebFont=oa,window.WebFontConfig&&na.load(window.WebFontConfig))}();