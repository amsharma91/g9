!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.g9=t():e.g9=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t){"use strict";function n(e,t,n){var r,i,o,a,s=function(e){n(o+e.clientX-r,a+e.clientY-i)},f=function c(e){document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",c)};e.addEventListener("mousedown",function(e){e.preventDefault(),r=e.clientX,i=e.clientY;var n=t(e),c=u(n,2);o=c[0],a=c[1],o=o||0,a=a||0,document.addEventListener("mousemove",s),document.addEventListener("mouseup",f)})}function r(e,t){e&&Object.keys(e).forEach(function(n){return t(e[n],n)})}function i(e,t){var n=arguments.length<=2||void 0===arguments[2]?null:arguments[2];r(t,function(t,r){e.setAttributeNS(n,r,t)})}function o(e){var t={};return Object.keys(e).forEach(function(n){return t[n]=e[n]}),t}function a(e,t,n){for(;Math.abs(t-n)>.001;){var r=(t+n)/2;e(r)?t=r:n=r}return(t+n)/2}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{!r&&u["return"]&&u["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.makeDraggable=n,t.forIn=r,t.setAttributes=i,t.shallowClone=o,t.findPhaseChange=a},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e){var t=e.type,n=e.renderer,r=e.base,i=e.options,o=e.cost;p[t]={renderer:n,base:r,type:t,options:i,cost:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.addshape=i;var o=n(6),a=r(o),u=n(8),s=r(u),f=n(10),c=r(f),l=n(7),h=r(l),d=n(9),v=r(d),p={};i(a),i(s),i(c),i(h),i(v),t["default"]=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){return function(t){function n(){return"auto"+p+d++}function r(e){return function(){if(v[v.length-1]++,null===i||(i+"|").startsWith(v.join("|"))){v.push(0);var t=d;d=0,p=v.join("|");var n=e.apply(this,arguments);v.pop(),d=t,p=v.join("|")}return n}}var i=arguments.length<=1||void 0===arguments[1]?null:arguments[1],u=arguments[2],c=u.width,l=u.height,h={},d=0,v=[0],p=v.join("|"),y={pure:r,width:c,height:l};return(0,f.forIn)(s["default"],function(e,t){y[t]=function(){for(var r={type:t},i=[].slice.call(arguments),u=0;u<i.length-1;u++)r[e.options[u]]=i[u];if("object"!==a(i[u])){r[e.options[u]]=i[u];var s=o({},e.base)}else var s=o({},e.base,i[u]);e.options.forEach(function(e){e in s&&(r[e]=s[e],delete s[e])}),r.attributes=s,r.id=n(),r.stack=v.join("|"),h[r.id]=r}}),e(t,y),h}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=i;var u=n(2),s=r(u),f=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(3),a=r(o),u=n(5),s=r(u),f=n(2),c=r(f),l=n(1);e.exports=function(e,t){function n(){var e=arguments.length<=0||void 0===arguments[0]?"left":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"top":arguments[1];return w=e,x=t,r(),this}function r(){var e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0],t=m.getBoundingClientRect();k=t.width,O=t.height,j=t.top,N=t.left,E="left"===w?0:"center"===w?k/2:k,P="top"===x?0:"center"===x?O/2:O,m.setAttribute("viewBox",[-E,-P,k,O].join(" ")),e&&h()}function o(e){return"string"==typeof e?document.querySelector(e).appendChild(m):e.appendChild(m),r(),this}function f(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];var a=!0,f=v[t],d=f.type,p=Object.keys(y);f.cares&&(p=f.cares);var g=p.map(function(e){return y[e]}),m=function(e){var n,o=i({},y);p.forEach(function(t,n){return o[t]=e[n]});var a=b(o,f.stack,{width:k,height:O}),u=a[t];return(n=c["default"][d]).cost.apply(n,[u].concat(r))},w=m(g),x=function(e){return(0,u.gradient)(m,e)},j=function(e){return x(e).every(function(e){return 0===e})};if(j(g)){var N=function(e){return x(e).forEach(function(t,n){0!==t&&(g[n]=e[n])})};_[t]&&N(_[t]),j(g)&&N(p.map(function(t){return e[t]})),a=!1}var E=(0,s["default"])(m,g,a).solution;j(E)?p.forEach(function(e,t){E[t]=(0,l.findPhaseChange)(function(e){var n=E.slice(0);return n[t]=e,0===x(n)[t]},E[t],g[t])}):_[t]=g.slice(0),m(E)<w&&(p.forEach(function(e,t){return y[e]=E[t]}),h())}function h(){v=b(y,null,{width:k,height:O}),(0,l.forIn)(v,function(e,t){g[t]||(g[t]=new c["default"][e.type].renderer(t,m,f)),g[t].setOffset(j+P,N+E),g[t].render(e)}),(0,l.forIn)(g,function(e,t){t in v||(e.remove(),delete g[t])}),p(y,v)}function d(e){y=e,h()}var v,p=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2],y=(0,l.shallowClone)(e),b=(0,a["default"])(t),g={},m=document.createElementNS("http://www.w3.org/2000/svg","svg"),w="left",x="top",k=0,O=0,j=0,N=0,E=0,P=0,_={};return window.addEventListener("load",r),window.addEventListener("resize",r),window.addEventListener("scroll",function(e){return r(!1)}),{setData:d,desire:f,align:n,insertInto:o,resize:r,node:m}}},function(e,t){"use strict";function n(e){return Math.sqrt(e.reduce(function(e,t){return e+t*t},0))}function r(e){for(var t=Array(e),n=0;e>n;n++){t[n]=Array(e);for(var r=0;e>r;r++)t[n][r]=+(n==r)}return t}function i(e){return e.map(function(e){return-e})}function o(e,t){return"number"!=typeof e[0]?e.map(function(e){return o(e,t)}):e.reduce(function(e,n,r){return e+n*t[r]},0)}function a(e,t){return"number"!=typeof e[0]?e.map(function(e,n){return a(e,t[n])}):e.map(function(e,n){return e-t[n]})}function u(e,t){return"number"!=typeof e[0]?e.map(function(e,n){return u(e,t[n])}):e.map(function(e,n){return e+t[n]})}function s(e,t){return e.map(function(e){return e.map(function(e){return e/t})})}function f(e,t){return"number"!=typeof e[0]?e.map(function(e){return f(e,t)}):e.map(function(e){return e*t})}function c(e,t){return e.map(function(e,n){return f(t,e)})}function l(e,t){var n=t.length,r=e(t);if(isNaN(r))throw new Error("The gradient at ["+t.join(" ")+"] is NaN!");for(var i=Math.max,o=Math.abs,a=Math.min,u=t.slice(0),s=Array(n),f=0;n>f;f++)for(var c=i(1e-6*r,1e-8),l=0;;l++){if(20==l)throw new Error("Gradient failed at index "+f+" of ["+t.join(" ")+"]");u[f]=t[f]+c;var h=e(u);u[f]=t[f]-c;var d=e(u);if(u[f]=t[f],!isNaN(h)&&!isNaN(d)){s[f]=(h-d)/(2*c);var v=t[f]-c,p=t[f],y=t[f]+c,b=(h-r)/c,g=(r-d)/c,m=a(i(o(b-s[f]),o(g-s[f]),o(b-g)),c),w=i(o(s[f]),o(h),o(r),o(d),o(v),o(p),o(y),1e-8);if(.001>m/w)break}c/=16}return s}function h(e,t,h){var d=arguments.length<=3||void 0===arguments[3]?1e-8:arguments[3],v=arguments.length<=4||void 0===arguments[4]?1e3:arguments[4];d=Math.max(d,2e-16);var p=function(t){return l(e,t)};t=t.slice(0);var y=p(t),b=e(t);if(isNaN(b))throw new Error("minimize: f(x0) is a NaN!");for(var g=t.length,m=r(g),w=0;v>w;w++){if(!y.every(isFinite)){var x="Gradient has Infinity or NaN";break}var k=i(o(m,y));if(!k.every(isFinite)){var x="Search direction has Infinity or NaN";break}var O=n(k);if(d>O){var x="Newton step smaller than tol";break}for(var j,N=1,E=o(y,k),P=t;v>w&&N*O>=d;w++){j=f(k,N),P=u(t,j);var _=e(P);if(!(_-b>=.1*N*E||isNaN(_)))break;N*=.5}if(d>N*O&&h){var x="Line search step size smaller than tol";break}if(w===v){var x="maxit reached during line search";break}var C=p(P),M=a(C,y),A=o(M,j),S=o(m,M);m=a(u(m,f(c(j,j),(A+o(M,S))/(A*A))),s(u(c(S,j),c(j,S)),A)),t=P,b=_,y=C}return{solution:t,f:b,gradient:y,invHessian:m,iterations:w,message:x}}Object.defineProperty(t,"__esModule",{value:!0}),t.gradient=l,t["default"]=h},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n){var r=e.x-t,i=e.y-n;return r*r+i*i}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.options=t.base=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="circle",t.base={r:5,fill:"#000"},t.options=["x","y","cares"],t.renderer=function(){function e(t,n,i){r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","circle"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.getPos.bind(this),function(e,n){return i(t,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"getPos",value:function(){return[this.renderable.x,this.renderable.y]}},{key:"setOffset",value:function(e,t){this.topOffset=e,this.leftOffset=t}},{key:"render",value:function(e){this.renderable=e,(0,a.setAttributes)(this.el,e.attributes),(0,a.setAttributes)(this.el,{cx:e.x,cy:e.y})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n){var r=e.x-t,i=e.y-n;return r*r+i*i}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.options=t.base=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="image",t.base={},t.options=["href","x","y","width","height","cares"],t.renderer=function(){function e(t,n,i){r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","image"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.getPos.bind(this),function(e,n){return i(t,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"getPos",value:function(){return[this.renderable.x,this.renderable.y]}},{key:"render",value:function(e){this.renderable=e,(0,a.setAttributes)(this.el,e.attributes),(0,a.setAttributes)(this.el,{href:c.href},"http://www.w3.org/1999/xlink"),(0,a.setAttributes)(this.el,{x:e.x-e.width/2,y:e.y-e.height/2,width:e.width,height:e.height})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n,r){var i=e.x1,o=e.y1,a=e.x2,u=e.y2,s=i+(a-i)*t-n,f=o+(u-o)*t-r;return s*s+f*f}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.base=t.options=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="line",t.options=["x1","y1","x2","y2","cares"],t.base={stroke:"#000"},t.renderer=function(){function e(t,n,i){var o=this;r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","line"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.startDrag.bind(this),function(e,n){return i(t,o.r,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"startDrag",value:function(e){var t=this.renderable,n=t.x1,r=t.y1,i=t.x2,o=t.y2,a=e.clientX,u=e.clientY,s=a-this.leftOffset,f=u-this.topOffset,c=i-n,l=o-r,h=s-n,d=f-r;return this.r=Math.sqrt(h*h+d*d)/Math.sqrt(c*c+l*l),[s,f]}},{key:"setOffset",value:function(e,t){this.topOffset=e,this.leftOffset=t}},{key:"render",value:function(e){this.renderable=e;var t=e.x1,n=e.y1,r=e.x2,i=e.y2,o=e.attributes;(0,a.setAttributes)(this.el,o),(0,a.setAttributes)(this.el,{x1:t,y1:n,x2:r,y2:i})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n,r,i){var o=e.x+e.width*t-r,a=e.y+e.height*n-i;return o*o+a*a}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.options=t.base=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="rect",t.base={fill:"#000"},t.options=["x","y","width","height","cares"],t.renderer=function(){function e(t,n,i){var o=this;r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","rect"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.startDrag.bind(this),function(e,n){return i(t,o.rx,o.ry,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"startDrag",value:function(e){var t=e.clientX,n=e.clientY,r=t-this.leftOffset,i=n-this.topOffset;return this.rx=(r-this.renderable.x)/this.renderable.width,this.ry=(i-this.renderable.y)/this.renderable.height,[r,i]}},{key:"setOffset",value:function(e,t){this.topOffset=e,this.leftOffset=t}},{key:"render",value:function(e){this.renderable=e;var t=e.x,n=e.y,r=e.width,i=e.height;0>r&&(t+=r,r=-r),0>i&&(n+=i,i=-i),(0,a.setAttributes)(this.el,e.attributes),(0,a.setAttributes)(this.el,{x:t,y:n,width:r,height:i})}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t,n){var r=e.x-t,i=e.y-n;return r*r+i*i}Object.defineProperty(t,"__esModule",{value:!0}),t.renderer=t.options=t.base=t.type=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.cost=i;var a=n(1);t.type="text",t.base={},t.options=["text","x","y","cares"],t.renderer=function(){function e(t,n,i){r(this,e),this.el=document.createElementNS("http://www.w3.org/2000/svg","text"),n.appendChild(this.el),(0,a.makeDraggable)(this.el,this.getPos.bind(this),function(e,n){return i(t,e,n)})}return o(e,[{key:"remove",value:function(){this.el.parentNode.removeChild(this.el),delete this.el}},{key:"getPos",value:function(){return[this.renderable.x,this.renderable.y]}},{key:"setOffset",value:function(e,t){this.topOffset=e,this.leftOffset=t}},{key:"render",value:function(e){this.renderable=e,(0,a.setAttributes)(this.el,e.attributes),(0,a.setAttributes)(this.el,{x:e.x,y:e.y}),this.el.innerHTML=e.text}}]),e}()}])});