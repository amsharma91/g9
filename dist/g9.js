!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.g9=t():e.g9=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t){"use strict";function n(e,n,r){function i(e){t.draggingCount=s+=1,e.preventDefault(),e=e.touches?e.touches[0]:e,o=e.clientX,a=e.clientY;var r=n(e),i=u(r,2);f=i[0],c=i[1],f=f||0,c=c||0,document.addEventListener("touchmove",l),document.addEventListener("mousemove",l),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h),document.addEventListener("mouseup",h)}var o,a,f,c,l=function(e){e=e.touches?e.touches[0]:e,r(f+e.clientX-o,c+e.clientY-a)},h=function d(e){t.draggingCount=s-=1,document.removeEventListener("mousemove",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",d),document.removeEventListener("touchcancel",d),document.removeEventListener("mouseup",d)};e.addEventListener("touchstart",i),e.addEventListener("mousedown",i)}function r(e,t){e&&Object.keys(e).forEach(function(n){return t(e[n],n)})}function i(e,t){var n=arguments.length<=2||void 0===arguments[2]?null:arguments[2];r(t,function(t,r){e.setAttributeNS(n,r,t)})}function o(e){var t={};return Object.keys(e).forEach(function(n){return t[n]=e[n]}),t}function a(e,t,n){for(;Math.abs(t-n)>.001;){var r=(t+n)/2;e(r)?t=r:n=r}return(t+n)/2}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{!r&&u["return"]&&u["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.makeDraggable=n,t.forIn=r,t.setAttributes=i,t.shallowClone=o,t.findPhaseChange=a;var s=t.draggingCount=0},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e){var t=e.type,n=e.renderer,r=e.base,i=e.options,o=e.cost;p[t]={renderer:n,base:r,type:t,options:i,cost:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.addShape=i;var o=n(6),a=r(o),u=n(8),s=r(u),f=n(10),c=r(f),l=n(7),h=r(l),d=n(9),v=r(d),p={};i(a),i(s),i(c),i(h),i(v),t["default"]=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){return function(t){function n(){return"auto"+p+d++}function r(e){return function(){if(v[v.length-1]++,null===i||(i+"|").startsWith(v.join("|"))){v.push(0);var t=d;d=0,p=v.join("|");var n=e.apply(this,arguments);v.pop(),d=t,p=v.join("|")}return n}}var i=arguments.length<=1||void 0===arguments[1]?null:arguments[1],u=arguments[2],c=u.width,l=u.height,h={},d=0,v=[0],p=v.join("|"),y={pure:r,width:c,height:l};return(0,f.forIn)(s["default"],function(e,t){y[t]=function(){for(var r={type:t},i=[].slice.call(arguments),u=0;u<i.length-1;u++)r[e.options[u]]=i[u];if("object"!==a(i[u])){r[e.options[u]]=i[u];var s=o({},e.base)}else var s=o({},e.base,i[u]);e.options.forEach(function(e){e in s&&(r[e]=s[e],delete s[e])}),r.attributes=s,r.id=n(),r.stack=v.join("|"),h[r.id]=r}}),e(t,y),h}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=i;var u=n(2),s=r(u),f=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){function n(){var e=arguments.length<=0||void 0===arguments[0]?"center":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"center":arguments[1];return O=e,E=t,r(),this}function r(){var e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0],t=k.getBoundingClientRect();j=t.width,N=t.height,C=t.top,P=t.left,_="left"===O?0:"center"===O?j/2:j,M="top"===E?0:"center"===E?N/2:N,k.setAttribute("viewBox",[-_,-M,j,N].join(" ")),e&&d()}function i(e){return k.parentNode&&a(),"string"==typeof e?document.querySelector(e).appendChild(k):e.appendChild(k),window.addEventListener("load",r),window.addEventListener("resize",r),window.addEventListener("scroll",A),r(),this}function a(){window.removeEventListener("load",r),window.removeEventListener("resize",r),window.removeEventListener("scroll",A),k.parentNode.removeChild(k)}function c(t){for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;n>i;i++)r[i-1]=arguments[i];var a=!0,u=b[t],c=u.type,v=Object.keys(g);u.affects&&(v=u.affects);var p=v.map(function(e){return g[e]}),y=function(e){var n,i=o({},g);v.forEach(function(t,n){return i[t]=e[n]});var a=w(i,u.stack,{width:j,height:N}),s=a[t];return(n=l["default"][c]).cost.apply(n,[s].concat(r))},m=y(p),x=function(e){return(0,s.gradient)(y,e)},k=function(e){return x(e).every(function(e){return 0===e})};if(k(p)){var O=function(e){return x(e).forEach(function(t,n){0!==t&&(p[n]=e[n])})};L[t]&&O(L[t]),k(p)&&O(v.map(function(t){return e[t]})),a=!1}var E=(0,f["default"])(y,p,a).solution;k(E)?v.forEach(function(e,t){E[t]=(0,h.findPhaseChange)(function(e){var n=E.slice(0);return n[t]=e,0===x(n)[t]},E[t],p[t])}):L[t]=p.slice(0),y(E)<m&&(v.forEach(function(e,t){return g[e]=E[t]}),d())}function d(){b=w(g,null,{width:j,height:N}),(0,h.forIn)(b,function(e,t){x[t]||(x[t]=new l["default"][e.type].renderer(t,k,c)),x[t].setOffset(C+M,P+_),x[t].render(e)}),(0,h.forIn)(x,function(e,t){t in b||(e.remove(),delete x[t])}),m(g,b)}function v(e){g=e,d()}function p(){return o({},g)}function y(){return h.draggingCount>0}var b,m=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2],g=(0,h.shallowClone)(e),w=(0,u["default"])(t),x={},k=document.createElementNS("http://www.w3.org/2000/svg","svg"),O="center",E="center",j=0,N=0,C=0,P=0,_=0,M=0,A=function(e){return r(!1)},L={};return{setData:v,desire:c,align:n,insertInto:i,resize:r,node:k,remove:a,getData:p,isManipulating:y}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(3),u=r(a),s=n(5),f=r(s),c=n(2),l=r(c),h=n(1),d=r(h);i.addShape=c.addShape,i.utils=d["default"],e.exports=i},function(e,t){"use strict";function n(e){return Math.sqrt(e.reduce(function(e,t){return e+t*t},0))}function r(e){for(var t=Array(e),n=0;e>n;n++){t[n]=Array(e);for(var r=0;e>r;r++)t[n][r]=+(n==r)}return t}function i(e){return e.map(function(e){return-e})}function o(e,t){return"number"!=typeof e[0]?e.map(function(e){return o(e,t)}):e.reduce(function(e,n,r){return e+n*t[r]},0)}function a(e,t){return"number"!=typeof e[0]?e.map(function(e,n){return a(e,t[n])}):e.map(function(e,n){return e-t[n]})}function u(e,t){return"number"!=typeof e[0]?e.map(function(e,n){return u(e,t[n])}):e.map(function(e,n){return e+t[n]})}function s(e,t){return e.map(function(e){return e.map(function(e){return e/t})})}function f(e,t){return"number"!=typeof e[0]?e.map(function(e){return f(e,t)}):e.map(function(e){return e*t})}function c(e,t){return e.map(function(e,n){return f(t,e)})}function l(e,t){var n=t.length,r=e(t);if(isNaN(r))throw new Error("The gradient at ["+t.join(" ")+"] is NaN!");for(var i=Math.max,o=Math.abs,a=Math.min,u=t.slice(0),s=Array(n),f=0;n>f;f++)for(var c=i(1e-6*r,1e-8),l=0;;l++){if(20==l)throw new Error("Gradient failed at index "+f+" of ["+t.join(" ")+"]");u[f]=t[f]+c;var h=e(u);u[f]=t[f]-c;var d=e(u);if(u[f]=t[f],!isNaN(h)&&!isNaN(d)){s[f]=(h-d)/(2*c);var v=t[f]-c,p=t[f],y=t[f]+c,b=(h-r)/c,m=(r-d)/c,g=a(i(o(b-s[f]),o(m-s[f]),o(b-m)),c),w=i(o(s[f]),o(h),o(r),o(d),o(v),o(p),o(y),1e-8);if(.001>g/w)break}c/=16}return s}function h(e,t,h){var d=arguments.length<=3||void 0===arguments[3]?1e-8:arguments[3],v=arguments.length<=4||void 0===arguments[4]?1e3:arguments[4];d=Math.max(d,2e-16);var p=function(t){return l(e,t)};t=t.slice(0);var y=p(t),b=e(t);if(isNaN(b))throw new Error("minimize: f(x0) is a NaN!");for(var m=t.length,g=r(m),w=0;v>w;w++){if(!y.every(isFinite)){var x="Gradient has Infinity or NaN";break}var k=i(o(g,y));if(!k.every(isFinite)){var x="Search direction has Infinity or NaN";break}var O=n(k);if(d>O){var x="Newton step smaller than tol";break}for(var E,j=1,N=o(y,k),C=t;v>w&&j*O>=d;w++){E=f(k,j),C=u(t,E);var P=e(C);if(!(P-b>=.1*j*N||isNaN(P)))break;j*=.5}if(d>j*O&&h){var x="Line search step size smaller than tol";break}if(w===v){var x="maxit reached during line search";break}var _=p(C),M=a(_,y),A=o(M,E),L=o(g,M);g=a(u(g,f(c(E,E),(A+o(M,L))/(A*A))),s(u(c(L,E),c(E,L)),A)),t=C,b=P,y=_}return{solution:t,f:b,gradient:y,invHessian:g,iterations:w,message:x}}Object.defineProperty(t,"__esModule",{value:!0}),t.gradient=l,t["default"]=h},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n){var r=e.x-t,i=e.y-n;return r*r+i*i}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.options=t.base=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="circle",t.base={r:5,fill:"#000"},t.options=["x","y","affects"],t.renderer=function(){function e(t,n,i){r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","circle"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.getPos.bind(this),function(e,n){return i(t,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"getPos",value:function(){return[this.renderable.x,this.renderable.y]}},{key:"setOffset",value:function(e,t){this.topOffset=e,this.leftOffset=t}},{key:"render",value:function(e){this.renderable=e,(0,a.setAttributes)(this.el,e.attributes),(0,a.setAttributes)(this.el,{cx:e.x,cy:e.y})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n){var r=e.x-t,i=e.y-n;return r*r+i*i}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.options=t.base=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="image",t.base={},t.options=["href","x","y","width","height","affects"],t.renderer=function(){function e(t,n,i){r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","image"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.getPos.bind(this),function(e,n){return i(t,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"getPos",value:function(){return[this.renderable.x,this.renderable.y]}},{key:"render",value:function(e){this.renderable=e,(0,a.setAttributes)(this.el,e.attributes),(0,a.setAttributes)(this.el,{href:c.href},"http://www.w3.org/1999/xlink"),(0,a.setAttributes)(this.el,{x:e.x-e.width/2,y:e.y-e.height/2,width:e.width,height:e.height})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n,r){var i=e.x1,o=e.y1,a=e.x2,u=e.y2,s=i+(a-i)*t-n,f=o+(u-o)*t-r;return s*s+f*f}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.base=t.options=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="line",t.options=["x1","y1","x2","y2","affects"],t.base={stroke:"#000"},t.renderer=function(){function e(t,n,i){var o=this;r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","line"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.startDrag.bind(this),function(e,n){return i(t,o.r,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"startDrag",value:function(e){var t=this.renderable,n=t.x1,r=t.y1,i=t.x2,o=t.y2,a=e.clientX,u=e.clientY,s=a-this.leftOffset,f=u-this.topOffset,c=i-n,l=o-r,h=s-n,d=f-r;return this.r=Math.sqrt(h*h+d*d)/Math.sqrt(c*c+l*l),[s,f]}},{key:"setOffset",value:function(e,t){this.topOffset=e,this.leftOffset=t}},{key:"render",value:function(e){this.renderable=e;var t=e.x1,n=e.y1,r=e.x2,i=e.y2,o=e.attributes;(0,a.setAttributes)(this.el,o),(0,a.setAttributes)(this.el,{x1:t,y1:n,x2:r,y2:i})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n,r,i){var o=e.x+e.width*t-r,a=e.y+e.height*n-i;return o*o+a*a}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.options=t.base=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="rect",t.base={fill:"#000"},t.options=["x","y","width","height","affects"],t.renderer=function(){function e(t,n,i){var o=this;r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","rect"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.startDrag.bind(this),function(e,n){return i(t,o.rx,o.ry,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"startDrag",value:function(e){var t=e.clientX,n=e.clientY,r=t-this.leftOffset,i=n-this.topOffset;return this.rx=(r-this.renderable.x)/this.renderable.width,this.ry=(i-this.renderable.y)/this.renderable.height,[r,i]}},{key:"setOffset",value:function(e,t){this.topOffset=e,this.leftOffset=t}},{key:"render",value:function(e){this.renderable=e;var t=e.x,n=e.y,r=e.width,i=e.height;0>r&&(t+=r,r=-r),0>i&&(n+=i,i=-i),(0,a.setAttributes)(this.el,e.attributes),(0,a.setAttributes)(this.el,{x:t,y:n,width:r,height:i})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n){var r=e.x-t,i=e.y-n;return r*r+i*i}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.options=t.base=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="text",t.base={},t.options=["text","x","y","affects"],t.renderer=function(){function e(t,n,i){r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","text"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.getPos.bind(this),function(e,n){return i(t,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"getPos",value:function(){return[this.renderable.x,this.renderable.y]}},{key:"setOffset",value:function(e,t){this.topOffset=e,this.leftOffset=t}},{key:"render",value:function(e){this.renderable=e,(0,a.setAttributes)(this.el,e.attributes),(0,a.setAttributes)(this.el,{x:e.x,y:e.y}),this.el.innerHTML=e.text}}]),e}()}])});