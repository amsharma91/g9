!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.g9=t():e.g9=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t){"use strict";function n(e,n){function r(e){t.draggingCount=s+=1;var r=n(e);e.preventDefault(),e=e.touches?e.touches[0]:e,i=e.clientX,o=e.clientY;var a=function(e){e=e.touches?e.touches[0]:e,r(e.clientX-i,e.clientY-o)},u=function c(e){t.draggingCount=s-=1,document.removeEventListener("mousemove",a),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",c),document.removeEventListener("touchcancel",c),document.removeEventListener("mouseup",c)};document.addEventListener("touchmove",a),document.addEventListener("mousemove",a),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u),document.addEventListener("mouseup",u)}var i,o;e.addEventListener("touchstart",r),e.addEventListener("mousedown",r)}function r(e,n,r){function i(e){t.draggingCount=s+=1,e.preventDefault(),e=e.touches?e.touches[0]:e,o=e.clientX,a=e.clientY;var r=n(e),i=c(r,2);u=i[0],f=i[1],u=u||0,f=f||0,document.addEventListener("touchmove",l),document.addEventListener("mousemove",l),document.addEventListener("touchend",d),document.addEventListener("touchcancel",d),document.addEventListener("mouseup",d)}var o,a,u,f,l=function(e){e=e.touches?e.touches[0]:e,r(u+e.clientX-o,f+e.clientY-a)},d=function h(e){t.draggingCount=s-=1,document.removeEventListener("mousemove",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h),document.removeEventListener("mouseup",h)};e.addEventListener("touchstart",i),e.addEventListener("mousedown",i)}function i(e,t){e&&Object.keys(e).forEach(function(n){return t(e[n],n)})}function o(e,t){var n=arguments.length<=2||void 0===arguments[2]?null:arguments[2];i(t,function(t,r){e.setAttributeNS(n,r,t)})}function a(e){var t={};return Object.keys(e).forEach(function(n){return t[n]=e[n]}),t}function u(e,t,n){for(;Math.abs(t-n)>.001;){var r=(t+n)/2;e(r)?t=r:n=r}return(t+n)/2}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{!r&&u["return"]&&u["return"]()}finally{if(i)throw o}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.addDragHandler=n,t.makeDraggable=r,t.forIn=i,t.setAttributes=o,t.shallowClone=a,t.findPhaseChange=u;var s=t.draggingCount=0},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),o=r(i),a=n(9),u=r(a),c=n(8),s=r(c),f=n(10),l=r(f),d=n(11),h=r(d),v=n(7),g=r(v),m={point:u["default"],circle:o["default"],line:s["default"],rect:l["default"],text:h["default"],image:g["default"]};t["default"]=m},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){return function(t){function n(){return"auto"+g+h++}function r(e){return function(){if(v[v.length-1]++,null===i||(i+"|").startsWith(v.join("|"))){v.push(0);var t=h;h=0,g=v.join("|");var n=e.apply(this,arguments);v.pop(),h=t,g=v.join("|")}return n}}var i=arguments.length<=1||void 0===arguments[1]?null:arguments[1],u=arguments[2],f=u.width,l=u.height,d={},h=0,v=[0],g=v.join("|"),m={pure:r,width:f,height:l};return(0,s.forIn)(c["default"],function(e,t){m[t]=function(){var r=[].slice.call(arguments),i={},u=r[r.length-1];if("object"===("undefined"==typeof u?"undefined":a(u))){i=o({},u);var c=r.length-1}else var c=r.length;for(var s=0;c>s;s++)i[e.argNames[s]]=r[s];i.type=t,i.id=n(),i.stack=v.join("|"),d[i.id]=i}}),e(t,m),d}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=i;var u=n(2),c=r(u),s=n(1)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){function n(){var e=arguments.length<=0||void 0===arguments[0]?"center":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"center":arguments[1];return x=e,k=t,r(),this}function r(){var e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0],t=E.getBoundingClientRect();j=t.width,N=t.height,O=t.top,C=t.left,L="left"===x?0:"center"===x?j/2:j,M="top"===k?0:"center"===k?N/2:N,E.setAttribute("viewBox",[-L,-M,j,N].join(" ")),e&&h()}function i(e){return E.parentNode&&a(),"string"==typeof e?document.querySelector(e).appendChild(E):e.appendChild(E),window.addEventListener("load",r),window.addEventListener("resize",r),window.addEventListener("scroll",P),r(),this}function a(){window.removeEventListener("load",r),window.removeEventListener("resize",r),window.removeEventListener("scroll",P),E.parentNode.removeChild(E)}function f(t,n,r){n=n||Object.keys(w);var i=!0,a=p[t],u=(a.type,n.map(function(e){return w[e]})),f=function(e){var i=o({},w);n.forEach(function(t,n){return i[t]=e[n]});var u=b(i,a.stack,{width:j,height:N}),c=u[t];return r(c)},l=f(u),v=function(e){return(0,c.gradient)(f,e)},g=function(e){return v(e).every(function(e){return 0===e})};if(g(u)){var m=function(e){return v(e).forEach(function(t,n){0!==t&&(u[n]=e[n])})};z[t]&&m(z[t]),g(u)&&m(n.map(function(t){return e[t]})),i=!1}var y=(0,s["default"])(f,u,i).solution;g(y)?n.forEach(function(e,t){y[t]=(0,d.findPhaseChange)(function(e){var n=y.slice(0);return n[t]=e,0===v(n)[t]},y[t],u[t])}):z[t]=u.slice(0),f(y)<l&&(n.forEach(function(e,t){return w[e]=y[t]}),h())}function h(){p=b(w,null,{width:j,height:N}),E.g9Offset={top:O+M,left:C+L},(0,d.forIn)(p,function(e,t){_[t]||(_[t]=new l["default"][e.type](function(){return p[t]},function(e,n){return f(t,n,e)}),_[t].mount(E)),_[t].update()}),(0,d.forIn)(_,function(e,t){t in p||(e.unmount(),delete _[t])}),y(w,p)}function v(e){w=e,h()}function g(){return o({},w)}function m(){return d.draggingCount>0}var p,y=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2],w=(0,d.shallowClone)(e),b=(0,u["default"])(t),_={},E=document.createElementNS("http://www.w3.org/2000/svg","svg"),x="center",k="center",j=0,N=0,O=0,C=0,L=0,M=0,P=function(e){return r(!1)},z={};return{setData:v,desire:f,align:n,insertInto:i,resize:r,node:E,remove:a,getData:g,isManipulating:m}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(3),u=r(a),c=n(5),s=r(c),f=n(2),l=r(f),d=n(1),h=r(d);i.shapes=l["default"],i.utils=h["default"],e.exports=i},function(e,t){"use strict";function n(e){return Math.sqrt(e.reduce(function(e,t){return e+t*t},0))}function r(e){for(var t=Array(e),n=0;e>n;n++){t[n]=Array(e);for(var r=0;e>r;r++)t[n][r]=+(n==r)}return t}function i(e){return e.map(function(e){return-e})}function o(e,t){return"number"!=typeof e[0]?e.map(function(e){return o(e,t)}):e.reduce(function(e,n,r){return e+n*t[r]},0)}function a(e,t){return"number"!=typeof e[0]?e.map(function(e,n){return a(e,t[n])}):e.map(function(e,n){return e-t[n]})}function u(e,t){return"number"!=typeof e[0]?e.map(function(e,n){return u(e,t[n])}):e.map(function(e,n){return e+t[n]})}function c(e,t){return e.map(function(e){return e.map(function(e){return e/t})})}function s(e,t){return"number"!=typeof e[0]?e.map(function(e){return s(e,t)}):e.map(function(e){return e*t})}function f(e,t){return e.map(function(e,n){return s(t,e)})}function l(e,t){var n=t.length,r=e(t);if(isNaN(r))throw new Error("The gradient at ["+t.join(" ")+"] is NaN!");for(var i=Math.max,o=Math.abs,a=Math.min,u=t.slice(0),c=Array(n),s=0;n>s;s++)for(var f=i(1e-6*r,1e-8),l=0;;l++){if(20==l)throw new Error("Gradient failed at index "+s+" of ["+t.join(" ")+"]");u[s]=t[s]+f;var d=e(u);u[s]=t[s]-f;var h=e(u);if(u[s]=t[s],!isNaN(d)&&!isNaN(h)){c[s]=(d-h)/(2*f);var v=t[s]-f,g=t[s],m=t[s]+f,p=(d-r)/f,y=(r-h)/f,w=a(i(o(p-c[s]),o(y-c[s]),o(p-y)),f),b=i(o(c[s]),o(d),o(r),o(h),o(v),o(g),o(m),1e-8);if(.001>w/b)break}f/=16}return c}function d(e,t,d){var h=arguments.length<=3||void 0===arguments[3]?1e-8:arguments[3],v=arguments.length<=4||void 0===arguments[4]?1e3:arguments[4];h=Math.max(h,2e-16);var g=function(t){return l(e,t)};t=t.slice(0);var m=g(t),p=e(t);if(isNaN(p))throw new Error("minimize: f(x0) is a NaN!");for(var y=t.length,w=r(y),b=0;v>b;b++){if(!m.every(isFinite)){var _="Gradient has Infinity or NaN";break}var E=i(o(w,m));if(!E.every(isFinite)){var _="Search direction has Infinity or NaN";break}var x=n(E);if(h>x){var _="Newton step smaller than tol";break}for(var k,j=1,N=o(m,E),O=t;v>b&&j*x>=h;b++){k=s(E,j),O=u(t,k);var C=e(O);if(!(C-p>=.1*j*N||isNaN(C)))break;j*=.5}if(h>j*x&&d){var _="Line search step size smaller than tol";break}if(b===v){var _="maxit reached during line search";break}var L=g(O),M=a(L,m),P=o(M,k),z=o(w,M);w=a(u(w,s(f(k,k),(P+o(M,z))/(P*P))),c(u(f(z,k),f(k,z)),P)),t=O,p=C,m=L}return{solution:t,f:p,gradient:m,invHessian:w,iterations:b,message:_}}Object.defineProperty(t,"__esModule",{value:!0}),t.gradient=l,t["default"]=d},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=function(){function e(t,n){r(this,e),this.minimize_args=n,this.get_args=t}return i(e,[{key:"mount",value:function(e){var t=this;this.container=e,this.el=document.createElementNS("http://www.w3.org/2000/svg","circle"),this.container.appendChild(this.el);var n=function(e,t,n){var r=e.cx-t,i=e.cy-n;return Math.sqrt(r*r+i*i)/e.r},r=function(e){var r=e.clientX,i=e.clientY,o=r-t.container.g9Offset.left,a=i-t.container.g9Offset.top,u=n(t.get_args(),o,a);return function(e,r){var i=t.get_args(),c=i.affects;t.minimize_args(function(t){var i=u-n(t,o+e,a+r);return i*i},c)}};(0,o.addDragHandler)(this.el,r)}},{key:"unmount",value:function(){this.container.removeChild(this.el)}},{key:"update",value:function(){(0,o.setAttributes)(this.el,this.get_args())}}]),e}();a.argNames=["cx","cy","r","affects"],t["default"]=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=function(){function e(t,n){r(this,e),this.minimize_args=n,this.get_args=t}return i(e,[{key:"mount",value:function(e){var t=this;this.container=e,this.el=document.createElementNS("http://www.w3.org/2000/svg","image"),this.container.appendChild(this.el);var n=function(e){var n=t.get_args(),r=n.x,i=n.y,o=n.width,a=n.height,u=e.clientX-t.container.g9Offset.left,c=e.clientY-t.container.g9Offset.top,s=(u-r)/o,f=(c-i)/a;return function(e,n){var r=t.get_args(),i=r.affects;t.minimize_args(function(t){var r=t.x+t.width*s-(u+e),i=t.y+t.height*f-(c+n);return r*r+i*i},i)}};(0,o.addDragHandler)(this.el,n)}},{key:"unmount",value:function(){this.container.removeChild(this.el)}},{key:"update",value:function(){var e=this.get_args(),t=(e.x,e.y,e.width),n=e.height;0>t&&(e.x+=t,e.width=-t),0>n&&(e.y+=n,e.height=-n),(0,o.setAttributes)(this.el,e),(0,o.setAttributes)(this.el,{href:e.href},"http://www.w3.org/1999/xlink")}}]),e}();a.argNames=["href","x","y","width","height","affects"],t["default"]=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=function(){function e(t,n){r(this,e),this.minimize_args=n,this.get_args=t}return i(e,[{key:"mount",value:function(e){var t=this;this.container=e,this.el=document.createElementNS("http://www.w3.org/2000/svg","line"),this.container.appendChild(this.el),(0,o.setAttributes)(this.el,{stroke:"#000"});var n=function(e){var n=t.get_args(),r=n.x1,i=n.y1,o=n.x2,a=n.y2,u=e.clientX,c=e.clientY,s=u-t.container.g9Offset.left,f=c-t.container.g9Offset.top,l=o-r,d=a-i,h=s-r,v=f-i,g=Math.sqrt(h*h+v*v)/Math.sqrt(l*l+d*d);return function(e,n){var r=t.get_args(),i=r.affects;t.minimize_args(function(t){var r=t.x1,i=t.y1,o=t.x2,a=t.y2,u=r+(o-r)*g-(s+e),c=i+(a-i)*g-(f+n);return u*u+c*c},i)}};(0,o.addDragHandler)(this.el,n)}},{key:"unmount",value:function(){this.container.removeChild(this.el)}},{key:"update",value:function(){(0,o.setAttributes)(this.el,this.get_args())}}]),e}();a.argNames=["x1","y1","x2","y2","affects"],t["default"]=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=function(){function e(t,n){r(this,e),this.minimize_args=n,this.get_args=t}return i(e,[{key:"mount",value:function(e){var t=this;this.container=e,this.el=document.createElementNS("http://www.w3.org/2000/svg","circle"),this.container.appendChild(this.el),(0,o.setAttributes)(this.el,{r:5});var n=function(e){var n=t.get_args(),r=n.cx,i=n.cy;return function(e,n){var o=t.get_args(),a=o.affects;t.minimize_args(function(t){var o=t.cx-(r+e),a=t.cy-(i+n);return o*o+a*a},a)}};(0,o.addDragHandler)(this.el,n)}},{key:"unmount",value:function(){this.container.removeChild(this.el)}},{key:"update",value:function(){(0,o.setAttributes)(this.el,this.get_args())}}]),e}();a.argNames=["cx","cy","affects"],t["default"]=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=function(){function e(t,n){r(this,e),this.minimize_args=n,this.get_args=t}return i(e,[{key:"mount",value:function(e){var t=this;this.container=e,this.el=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.container.appendChild(this.el);var n=function(e){var n=t.get_args(),r=n.x,i=n.y,o=n.width,a=n.height,u=e.clientX-t.container.g9Offset.left,c=e.clientY-t.container.g9Offset.top,s=(u-r)/o,f=(c-i)/a;return function(e,n){var r=t.get_args(),i=r.affects;t.minimize_args(function(t){var r=t.x+t.width*s-(u+e),i=t.y+t.height*f-(c+n);return r*r+i*i},i)}};(0,o.addDragHandler)(this.el,n)}},{key:"unmount",value:function(){this.container.removeChild(this.el)}},{key:"update",value:function(){var e=this.get_args(),t=(e.x,e.y,e.width),n=e.height;0>t&&(e.x+=t,e.width=-t),0>n&&(e.y+=n,e.height=-n),(0,o.setAttributes)(this.el,e)}}]),e}();a.argNames=["x","y","width","height","affects"],t["default"]=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=function(){function e(t,n){r(this,e),this.minimize_args=t,this.get_args=n}return i(e,[{key:"mount",value:function(e){var t=this;this.container=e,this.el=document.createElementNS("http://www.w3.org/2000/svg","text"),this.container.appendChild(this.el);var n=function(e){var n=t.get_args(),r=n.x,i=n.y;return function(e,n){var o=t.get_args(),a=o.affects;t.minimize_args(function(t){var o=t.x-(r+e),a=t.y-(i+n);return o*o+a*a},a)}};(0,o.addDragHandler)(this.el,n)}},{key:"unmount",value:function(){this.container.removeChild(this.el)}},{key:"update",value:function(){var e=this.get_args();(0,o.setAttributes)(this.el,e),this.el.innerHTML=e.text}}]),e}();a.argNames=["text","x","y","affects"],t["default"]=a}])});