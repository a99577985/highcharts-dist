/*
 Highcharts JS v8.1.0 (2020-05-12)

 Old IE (v6, v7, v8) module for Highcharts v6+.

 (c) 2010-2019 Highsoft AS
 Author: Torstein Honsi

 License: www.highcharts.com/license
*/
(function(d){"object"===typeof module&&module.exports?(d["default"]=d,module.exports=d):"function"===typeof define&&define.amd?define("highcharts/modules/oldie",["highcharts"],function(p){d(p);d.Highcharts=p;return d}):d("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(d){function p(d,v,t,m){d.hasOwnProperty(v)||(d[v]=m.apply(null,t))}d=d?d._modules:{};p(d,"modules/oldie.src.js",[d["parts/Globals.js"],d["parts/Color.js"],d["parts/SVGElement.js"],d["parts/SVGRenderer.js"],d["parts/Utilities.js"]],
function(d,v,t,m,f){var p=v.parse,g=f.addEvent,D=f.createElement,y=f.css,G=f.defined,H=f.discardElement,K=f.erase,z=f.extend,w=f.extendClass,O=f.isArray,L=f.isNumber,E=f.isObject;v=f.merge;var P=f.offset,A=f.pick,q=f.pInt,Q=f.uniqueKey,M=d.Chart,x=d.deg2rad,k=d.doc,N=d.noop,F=d.svg,u=d.win;d.getOptions().global.VMLRadialGradientURL="http://code.highcharts.com/8.1.0/gfx/vml-radial-gradient.png";k&&!k.defaultView&&(d.getStyle=f.getStyle=function(a,b){var c={width:"clientWidth",height:"clientHeight"}[b];
if(a.style[b])return q(a.style[b]);"opacity"===b&&(b="filter");if(c)return a.style.zoom=1,Math.max(a[c]-2*f.getStyle(a,"padding"),0);a=a.currentStyle[b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()})];"filter"===b&&(a=a.replace(/alpha\(opacity=([0-9]+)\)/,function(a,b){return b/100}));return""===a?1:q(a)});F||(g(t,"afterInit",function(){"text"===this.element.nodeName&&this.css({position:"absolute"})}),d.Pointer.prototype.normalize=function(a,b){a=a||u.event;a.target||(a.target=a.srcElement);
b||(this.chartPosition=b=P(this.chart.container));return z(a,{chartX:Math.round(Math.max(a.x,a.clientX-b.left)),chartY:Math.round(a.y)})},M.prototype.ieSanitizeSVG=function(a){return a=a.replace(/<IMG /g,"<image ").replace(/<(\/?)TITLE>/g,"<$1title>").replace(/height=([^" ]+)/g,'height="$1"').replace(/width=([^" ]+)/g,'width="$1"').replace(/hc-svg-href="([^"]+)">/g,'xlink:href="$1"/>').replace(/ id=([^" >]+)/g,' id="$1"').replace(/class=([^" >]+)/g,'class="$1"').replace(/ transform /g," ").replace(/:(path|rect)/g,
"$1").replace(/style="([^"]+)"/g,function(a){return a.toLowerCase()})},M.prototype.isReadyToRender=function(){var a=this;return F||u!=u.top||"complete"===k.readyState?!0:(k.attachEvent("onreadystatechange",function(){k.detachEvent("onreadystatechange",a.firstRender);"complete"===k.readyState&&a.firstRender()}),!1)},k.createElementNS||(k.createElementNS=function(a,b){return k.createElement(b)}),d.addEventListenerPolyfill=function(a,b){function c(a){a.target=a.srcElement||u;b.call(e,a)}var e=this;e.attachEvent&&
(e.hcEventsIE||(e.hcEventsIE={}),b.hcKey||(b.hcKey=Q()),e.hcEventsIE[b.hcKey]=c,e.attachEvent("on"+a,c))},d.removeEventListenerPolyfill=function(a,b){this.detachEvent&&(b=this.hcEventsIE[b.hcKey],this.detachEvent("on"+a,b))},g={docMode8:k&&8===k.documentMode,init:function(a,b){var c=["<",b,' filled="f" stroked="f"'],e=["position: ","absolute",";"],h="div"===b;("shape"===b||h)&&e.push("left:0;top:0;width:1px;height:1px;");e.push("visibility: ",h?"hidden":"visible");c.push(' style="',e.join(""),'"/>');
b&&(c=h||"span"===b||"img"===b?c.join(""):a.prepVML(c),this.element=D(c));this.renderer=a},add:function(a){var b=this.renderer,c=this.element,e=b.box,h=a&&a.inverted;e=a?a.element||a:e;a&&(this.parentGroup=a);h&&b.invertChild(c,e);e.appendChild(c);this.added=!0;this.alignOnAdd&&!this.deferUpdateTransform&&this.updateTransform();if(this.onAdd)this.onAdd();this.className&&this.attr("class",this.className);return this},updateTransform:t.prototype.htmlUpdateTransform,setSpanRotation:function(){var a=
this.rotation,b=Math.cos(a*x),c=Math.sin(a*x);y(this.element,{filter:a?["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-c,", M21=",c,", M22=",b,", sizingMethod='auto expand')"].join(""):"none"})},getSpanCorrection:function(a,b,c,e,h){var d=e?Math.cos(e*x):1,B=e?Math.sin(e*x):0,r=A(this.elemHeight,this.element.offsetHeight);this.xCorr=0>d&&-a;this.yCorr=0>B&&-r;var l=0>d*B;this.xCorr+=B*b*(l?1-c:c);this.yCorr-=d*b*(e?l?c:1-c:1);h&&"left"!==h&&(this.xCorr-=a*c*(0>d?-1:1),e&&(this.yCorr-=
r*c*(0>B?-1:1)),y(this.element,{textAlign:h}))},pathToVML:function(a){for(var b=a.length,c=[];b--;)L(a[b])?c[b]=Math.round(10*a[b])-5:"Z"===a[b]?c[b]="x":(c[b]=a[b],!a.isArc||"wa"!==a[b]&&"at"!==a[b]||(c[b+5]===c[b+7]&&(c[b+7]+=a[b+7]>a[b+5]?1:-1),c[b+6]===c[b+8]&&(c[b+8]+=a[b+8]>a[b+6]?1:-1)));return c.join(" ")||"x"},clip:function(a){var b=this;if(a){var c=a.members;K(c,b);c.push(b);b.destroyClip=function(){K(c,b)};a=a.getCSS(b)}else b.destroyClip&&b.destroyClip(),a={clip:b.docMode8?"inherit":"rect(auto)"};
return b.css(a)},css:t.prototype.htmlCss,safeRemoveChild:function(a){a.parentNode&&H(a)},destroy:function(){this.destroyClip&&this.destroyClip();return t.prototype.destroy.apply(this)},on:function(a,b){this.element["on"+a]=function(){var a=u.event;a.target=a.srcElement;b(a)};return this},cutOffPath:function(a,b){a=a.split(/[ ,]/);var c=a.length;if(9===c||11===c)a[c-4]=a[c-2]=q(a[c-2])-10*b;return a.join(" ")},shadow:function(a,b,c){var e=[],h,d=this.element,B=this.renderer,r=d.style,l=d.path;l&&"string"!==
typeof l.value&&(l="x");var f=l;if(a){var k=A(a.width,3);var n=(a.opacity||.15)/k;for(h=1;3>=h;h++){var g=2*k+1-2*h;c&&(f=this.cutOffPath(l.value,g+.5));var m=['<shape isShadow="true" strokeweight="',g,'" filled="false" path="',f,'" coordsize="10 10" style="',d.style.cssText,'" />'];var p=D(B.prepVML(m),null,{left:q(r.left)+A(a.offsetX,1),top:q(r.top)+A(a.offsetY,1)});c&&(p.cutOff=g+1);m=['<stroke color="',a.color||"#000000",'" opacity="',n*h,'"/>'];D(B.prepVML(m),null,null,p);b?b.element.appendChild(p):
d.parentNode.insertBefore(p,d);e.push(p)}this.shadows=e}return this},updateShadows:N,setAttr:function(a,b){this.docMode8?this.element[a]=b:this.element.setAttribute(a,b)},getAttr:function(a){return this.docMode8?this.element[a]:this.element.getAttribute(a)},classSetter:function(a){(this.added?this.element:this).className=a},dashstyleSetter:function(a,b,c){(c.getElementsByTagName("stroke")[0]||D(this.renderer.prepVML(["<stroke/>"]),null,null,c))[b]=a||"solid";this[b]=a},dSetter:function(a,b,c){var e=
this.shadows;a=a||[];this.d=a.join&&a.join(" ");c.path=a=this.pathToVML(a);if(e)for(c=e.length;c--;)e[c].path=e[c].cutOff?this.cutOffPath(a,e[c].cutOff):a;this.setAttr(b,a)},fillSetter:function(a,b,c){var e=c.nodeName;"SPAN"===e?c.style.color=a:"IMG"!==e&&(c.filled="none"!==a,this.setAttr("fillcolor",this.renderer.color(a,c,b,this)))},"fill-opacitySetter":function(a,b,c){D(this.renderer.prepVML(["<",b.split("-")[0],' opacity="',a,'"/>']),null,null,c)},opacitySetter:N,rotationSetter:function(a,b,c){c=
c.style;this[b]=c[b]=a;c.left=-Math.round(Math.sin(a*x)+1)+"px";c.top=Math.round(Math.cos(a*x))+"px"},strokeSetter:function(a,b,c){this.setAttr("strokecolor",this.renderer.color(a,c,b,this))},"stroke-widthSetter":function(a,b,c){c.stroked=!!a;this[b]=a;L(a)&&(a+="px");this.setAttr("strokeweight",a)},titleSetter:function(a,b){this.setAttr(b,a)},visibilitySetter:function(a,b,c){"inherit"===a&&(a="visible");this.shadows&&this.shadows.forEach(function(c){c.style[b]=a});"DIV"===c.nodeName&&(a="hidden"===
a?"-999em":0,this.docMode8||(c.style[b]=a?"visible":"hidden"),b="top");c.style[b]=a},xSetter:function(a,b,c){this[b]=a;"x"===b?b="left":"y"===b&&(b="top");this.updateClipping?(this[b]=a,this.updateClipping()):c.style[b]=a},zIndexSetter:function(a,b,c){c.style[b]=a},fillGetter:function(){return this.getAttr("fillcolor")||""},strokeGetter:function(){return this.getAttr("strokecolor")||""},classGetter:function(){return this.getAttr("className")||""}},g["stroke-opacitySetter"]=g["fill-opacitySetter"],
d.VMLElement=g=w(t,g),g.prototype.ySetter=g.prototype.widthSetter=g.prototype.heightSetter=g.prototype.xSetter,g={Element:g,isIE8:-1<u.navigator.userAgent.indexOf("MSIE 8.0"),init:function(a,b,c){this.crispPolyLine=m.prototype.crispPolyLine;this.alignedObjects=[];var e=this.createElement("div").css({position:"relative"});var d=e.element;a.appendChild(e.element);this.isVML=!0;this.box=d;this.boxWrapper=e;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(b,c,!1);if(!k.namespaces.hcv){k.namespaces.add("hcv",
"urn:schemas-microsoft-com:vml");try{k.createStyleSheet().cssText="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}catch(R){k.styleSheets[0].cssText+="hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "}}},isHidden:function(){return!this.box.offsetWidth},clipRect:function(a,b,c,e){var d=this.createElement(),f=E(a);return z(d,{members:[],count:0,left:(f?a.x:a)+1,top:(f?a.y:b)+1,width:(f?
a.width:c)-1,height:(f?a.height:e)-1,getCSS:function(a){var b=a.element,c=b.nodeName,e=a.inverted,d=this.top-("shape"===c?b.offsetTop:0),h=this.left;b=h+this.width;var f=d+this.height;d={clip:"rect("+Math.round(e?h:d)+"px,"+Math.round(e?f:b)+"px,"+Math.round(e?b:f)+"px,"+Math.round(e?d:h)+"px)"};!e&&a.docMode8&&"DIV"===c&&z(d,{width:b+"px",height:f+"px"});return d},updateClipping:function(){d.members.forEach(function(a){a.element&&a.css(d.getCSS(a))})}})},color:function(a,b,c,e){var h=this,f=/^rgba/,
k,r,l="none";a&&a.linearGradient?r="gradient":a&&a.radialGradient&&(r="pattern");if(r){var g,m,n=a.linearGradient||a.radialGradient,q,t,v,x,u="";a=a.stops;var y=[],z=function(){k=['<fill colors="'+y.join(",")+'" opacity="',t,'" o:opacity2="',q,'" type="',r,'" ',u,'focus="100%" method="any" />'];D(h.prepVML(k),null,null,b)};var w=a[0];var A=a[a.length-1];0<w[0]&&a.unshift([0,w[1]]);1>A[0]&&a.push([1,A[1]]);a.forEach(function(a,b){f.test(a[1])?(I=p(a[1]),g=I.get("rgb"),m=I.get("a")):(g=a[1],m=1);y.push(100*
a[0]+"% "+g);b?(t=m,v=g):(q=m,x=g)});if("fill"===c)if("gradient"===r)c=n.x1||n[0]||0,a=n.y1||n[1]||0,w=n.x2||n[2]||0,n=n.y2||n[3]||0,u='angle="'+(90-180*Math.atan((n-a)/(w-c))/Math.PI)+'"',z();else{l=n.r;var E=2*l,F=2*l,G=n.cx,H=n.cy,J=b.radialReference,C;l=function(){J&&(C=e.getBBox(),G+=(J[0]-C.x)/C.width-.5,H+=(J[1]-C.y)/C.height-.5,E*=J[2]/C.width,F*=J[2]/C.height);u='src="'+d.getOptions().global.VMLRadialGradientURL+'" size="'+E+","+F+'" origin="0.5,0.5" position="'+G+","+H+'" color2="'+x+'" ';
z()};e.added?l():e.onAdd=l;l=v}else l=g}else if(f.test(a)&&"IMG"!==b.tagName){var I=p(a);e[c+"-opacitySetter"](I.get("a"),c,b);l=I.get("rgb")}else l=b.getElementsByTagName(c),l.length&&(l[0].opacity=1,l[0].type="solid"),l=a;return l},prepVML:function(a){var b=this.isIE8;a=a.join("");b?(a=a.replace("/>",' xmlns="urn:schemas-microsoft-com:vml" />'),a=-1===a.indexOf('style="')?a.replace("/>",' style="display:inline-block;behavior:url(#default#VML);" />'):a.replace('style="','style="display:inline-block;behavior:url(#default#VML);')):
a=a.replace("<","<hcv:");return a},text:m.prototype.html,path:function(a){var b={coordsize:"10 10"};O(a)?b.d=a:E(a)&&z(b,a);return this.createElement("shape").attr(b)},circle:function(a,b,c){var e=this.symbol("circle");E(a)&&(c=a.r,b=a.y,a=a.x);e.isCircle=!0;e.r=c;return e.attr({x:a,y:b})},g:function(a){var b;a&&(b={className:"highcharts-"+a,"class":"highcharts-"+a});return this.createElement("div").attr(b)},image:function(a,b,c,e,d){var h=this.createElement("img").attr({src:a});1<arguments.length&&
h.attr({x:b,y:c,width:e,height:d});return h},createElement:function(a){return"rect"===a?this.symbol(a):m.prototype.createElement.call(this,a)},invertChild:function(a,b){var c=this;b=b.style;var e="IMG"===a.tagName&&a.style;y(a,{flip:"x",left:q(b.width)-(e?q(e.top):1),top:q(b.height)-(e?q(e.left):1),rotation:-90});[].forEach.call(a.childNodes,function(b){c.invertChild(b,a)})},symbols:{arc:function(a,b,c,e,d){var h=d.start,f=d.end,g=d.r||c||e;c=d.innerR;e=Math.cos(h);var l=Math.sin(h),k=Math.cos(f),
m=Math.sin(f);if(0===f-h)return["x"];h=["wa",a-g,b-g,a+g,b+g,a+g*e,b+g*l,a+g*k,b+g*m];d.open&&!c&&h.push("e","M",a,b);h.push("at",a-c,b-c,a+c,b+c,a+c*k,b+c*m,a+c*e,b+c*l,"x","e");h.isArc=!0;return h},circle:function(a,b,c,e,d){d&&G(d.r)&&(c=e=2*d.r);d&&d.isCircle&&(a-=c/2,b-=e/2);return["wa",a,b,a+c,b+e,a+c,b+e/2,a+c,b+e/2,"e"]},rect:function(a,b,c,d,f){return m.prototype.symbols[G(f)&&f.r?"callout":"square"].call(0,a,b,c,d,f)}}},d.VMLRenderer=w=function(){this.init.apply(this,arguments)},w.prototype=
v(m.prototype,g),d.Renderer=w);m.prototype.getSpanWidth=function(a,b){var c=a.getBBox(!0).width;!F&&this.forExport&&(c=this.measureSpanWidth(b.firstChild.data,a.styles));return c};m.prototype.measureSpanWidth=function(a,b){var c=k.createElement("span");a=k.createTextNode(a);c.appendChild(a);y(c,b);this.box.appendChild(c);b=c.offsetWidth;H(c);return b}});p(d,"masters/modules/oldie.src.js",[],function(){})});
//# sourceMappingURL=oldie.js.map