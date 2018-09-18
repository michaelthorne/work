/* =============================================================================
   Old IE: Polyfills for Internet Explorer 8 and below.
   ========================================================================== */

/*! HTML5 Shiv 3.6.2 | https://github.com/aFarkas/html5shiv
*/(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);

/*! selectivizr 1.0.3b | https://github.com/keithclark/selectivizr
*/(function(e){function _(e){return e.replace(g,M).replace(y,function(e,t,n){var r=n.split(",");for(var i=0,s=r.length;i<s;i++){var o=R(r[i])+O;var u=[];r[i]=o.replace(b,function(e,t,n,r,i){if(t){if(u.length>0){f.push({selector:o.substring(0,i),patches:u});u=[]}return t}else{var s=n?P(n):D(r);if(s){u.push(s);return"."+s.className}return e}})}return t+r.join(",")})}function D(e){return!T||T.test(e)?{className:j(e),applyClass:true}:null}function P(t){var n=true;var i=j(t.slice(1));var o=t.substring(0,5)==":not(";var u;var f;if(o)t=t.slice(5,-1);var l=t.indexOf("(");if(l>-1)t=t.substring(0,l);if(t.charAt(0)==":")switch(t.slice(1)){case"root":n=function(e){return o?e!=r:e==r};break;case"target":if(s==8){n=function(t){var n=function(){var e=location.hash;var n=e.slice(1);return o?e==A||t.id!=n:e!=A&&t.id==n};W(e,"hashchange",function(){U(t,i,n())});return n()};break}return false;case"checked":n=function(e){if(x.test(e.type))W(e,"propertychange",function(){if(event.propertyName=="checked")U(e,i,e.checked!==o)});return e.checked!==o};break;case"disabled":o=!o;case"enabled":n=function(e){if(S.test(e.tagName)){W(e,"propertychange",function(){if(event.propertyName=="$disabled")U(e,i,e.$disabled===o)});a.push(e);e.$disabled=e.disabled;return e.disabled===o}return t==":enabled"?o:!o};break;case"focus":u="focus";f="blur";case"hover":if(!u){u="mouseenter";f="mouseleave"}n=function(e){W(e,o?f:u,function(){U(e,i,true)});W(e,o?u:f,function(){U(e,i,false)});return o};break;default:if(!m.test(t))return false;break}return{className:i,applyClass:n}}function H(){var e,t,n,r;for(var i=0;i<f.length;i++){t=f[i].selector;n=f[i].patches;r=t.replace(w,A);if(r==A||r.charAt(r.length-1)==O)r+="*";try{e=u(r)}catch(s){F("Selector '"+t+"' threw exception '"+s+"'")}if(e)for(var o=0,a=e.length;o<a;o++){var l=e[o];var c=l.className;for(var h=0,p=n.length;h<p;h++){var d=n[h];if(!B(l,d))if(d.applyClass&&(d.applyClass===true||d.applyClass(l)===true))c=z(c,d.className,true)}l.className=c}}}function B(e,t){return(new RegExp("(^|\\s)"+t.className+"(\\s|$)")).test(e.className)}function j(e){return h+"-"+(s==6&&c?l++:e.replace(E,function(e){return e.charCodeAt(0)}))}function F(t){if(e.console)e.console.log(t)}function I(e){return e.replace(L,M)}function q(e){return I(e).replace(k,O)}function R(e){return q(e.replace(N,M).replace(C,M))}function U(e,t,n){var r=e.className;var i=z(r,t,n);if(i!=r){e.className=i;e.parentNode.className+=A}}function z(e,t,n){var r=RegExp("(^|\\s)"+t+"(\\s|$)");var i=r.test(e);if(n)return i?e:e+O+t;else return i?I(e.replace(r,M)):e}function W(e,t,n){e.attachEvent("on"+t,n)}function X(){if(e.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){return null}}function V(e){i.open("GET",e,false);i.send();return i.status==200?i.responseText:A}function $(e,t,n){function r(e){return e.substring(0,e.indexOf("//"))}function i(e){return e.substring(0,e.indexOf("/",8))}if(!t)t=Y;if(e.substring(0,2)=="//")e=r(t)+e;if(/^https?:\/\//i.test(e))return!n&&i(t)!=i(e)?null:e;if(e.charAt(0)=="/")return i(t)+e;var s=t.split(/[?#]/)[0];if(e.charAt(0)!="?"&&s.charAt(s.length-1)!="/")s=s.substring(0,s.lastIndexOf("/")+1);return s+e}function J(e){if(e)return V(e).replace(p,A).replace(d,function(t,n,r,i,s,o){var u=J($(r||s,e));return o?"@media "+o+" {"+u+"}":u}).replace(v,function(t,n,r,i){r=r||A;return n?t:" url("+r+$(i,e,true)+r+") "});return A}function K(){var e,t;for(var r=0;r<n.styleSheets.length;r++){t=n.styleSheets[r];if(t.href!=A){e=$(t.href);if(e)t.cssText=t["rawCssText"]=_(J(e))}}}function Q(){H();if(a.length>0)setInterval(function(){for(var e=0,t=a.length;e<t;e++){var n=a[e];if(n.disabled!==n.$disabled)if(n.disabled){n.disabled=false;n.$disabled=true;n.disabled=true}else n.$disabled=n.disabled}},250)}function Z(e,t){var i=false,s=true,o=function(r){if(r.type=="readystatechange"&&n.readyState!="complete")return;(r.type=="load"?e:n).detachEvent("on"+r.type,o,false);if(!i&&(i=true))t.call(e,r.type||r)},u=function(){try{r.doScroll("left")}catch(e){setTimeout(u,50);return}o("poll")};if(n.readyState=="complete")t.call(e,A);else{if(n.createEventObject&&r.doScroll){try{s=!e.frameElement}catch(a){}if(s)u()}W(n,"readystatechange",o);W(e,"load",o)}}var t=navigator.userAgent.match(/MSIE (\d+)/);if(!t)return false;var n=document;var r=n.documentElement;var i=X();var s=t[1];if(n.compatMode!="CSS1Compat"||s<6||s>8||!i)return;var o={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"};var u;var a=[];var f=[];var l=0;var c=true;var h="slvzr";var p=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*?/g;var d=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))\s*([^;]*);/g;var v=/(behavior\s*?:\s*)?\burl\(\s*(["']?)(?!data:)([^"')]+)\2\s*\)/g;var m=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/;var g=/:(:first-(?:line|letter))/g;var y=/((?:^|(?:\s*})+)(?:\s*@media[^{]+{)?)\s*([^\{]*?[\[:][^{]+)/g;var b=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g;var w=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g;var E=/[^\w-]/g;var S=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/;var x=/^(checkbox|radio)$/;var T=s>6?/[\$\^*]=(['"])\1/:null;var N=/([(\[+~])\s+/g;var C=/\s+([)\]+~])/g;var k=/\s+/g;var L=/^\s*((?:[\S\s]*\S)?)\s*$/;var A="";var O=" ";var M="$1";var G=n.getElementsByTagName("BASE");var Y=G.length>0?G[0].href:n.location.href;K();Z(e,function(){for(var t in o){var n,r,i=e;if(e[t]){n=o[t].replace("*",t).split(".");while((r=n.shift())&&(i=i[r]));if(typeof i=="function"){u=i;Q();return}}}})})(this);

/*! matchMedia polyfill | https://github.com/paulirish/matchMedia.js
*/window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js 1.1.0 | https://github.com/scottjehl/Respond
*/(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);