/*
 Highcharts Gantt JS v8.1.0 (2020-05-12)

 Tree Grid

 (c) 2016-2019 Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/treegrid",["highcharts"],function(E){b(E);b.Highcharts=E;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function E(b,r,y,t){b.hasOwnProperty(r)||(b[r]=t.apply(null,y))}b=b?b._modules:{};E(b,"parts-gantt/Tree.js",[b["parts/Utilities.js"]],function(b){var r=b.extend,y=b.isNumber,t=b.pick,k=function(b,g){var n=b.reduce(function(d,
u){var n=t(u.parent,"");"undefined"===typeof d[n]&&(d[n]=[]);d[n].push(u);return d},{});Object.keys(n).forEach(function(d,u){var b=n[d];""!==d&&-1===g.indexOf(d)&&(b.forEach(function(d){u[""].push(d)}),delete u[d])});return n},g=function(b,k,n,d,u,z){var A=0,m=0,v=z&&z.after,e=z&&z.before;k={data:d,depth:n-1,id:b,level:n,parent:k};var c,h;"function"===typeof e&&e(k,z);e=(u[b]||[]).map(function(e){var a=g(e.id,b,n+1,e,u,z),f=e.start;e=!0===e.milestone?f:e.end;c=!y(c)||f<c?f:c;h=!y(h)||e>h?e:h;A=A+
1+a.descendants;m=Math.max(a.height+1,m);return a});d&&(d.start=t(d.start,c),d.end=t(d.end,h));r(k,{children:e,descendants:A,height:m});"function"===typeof v&&v(k,z);return k};return{getListOfParents:k,getNode:g,getTree:function(b,r){var n=b.map(function(d){return d.id});b=k(b,n);return g("",null,1,null,b,r)}}});E(b,"parts-gantt/TreeGridTick.js",[b["parts/Utilities.js"]],function(b){var r=b.addEvent,y=b.defined,t=b.isObject,k=b.isNumber,g=b.pick,B=b.wrap,C;(function(b){function d(){this.treeGrid||
(this.treeGrid=new v(this))}function n(e,c){e=e.treeGrid;var h=!e.labelIcon,p=c.renderer,a=c.xy,f=c.options,l=f.width,D=f.height,G=a.x-l/2-f.padding;a=a.y-D/2;var d=c.collapsed?90:180,b=c.show&&k(a),w=e.labelIcon;w||(e.labelIcon=w=p.path(p.symbols[f.type](f.x,f.y,l,D)).addClass("highcharts-label-icon").add(c.group));b||w.attr({y:-9999});p.styledMode||w.attr({"stroke-width":1,fill:g(c.color,"#666666")}).css({cursor:"pointer",stroke:f.lineColor,strokeWidth:f.lineWidth});w[h?"attr":"animate"]({translateX:G,
translateY:a,rotation:d})}function z(e,c,h,p,a,f,l,D,G){var d=g(this.options&&this.options.labels,f);f=this.pos;var b=this.axis,w="treegrid"===b.options.type;e=e.apply(this,[c,h,p,a,d,l,D,G]);w&&(c=d&&t(d.symbol,!0)?d.symbol:{},d=d&&k(d.indentation)?d.indentation:0,f=(f=(b=b.treeGrid.mapOfPosToGridNode)&&b[f])&&f.depth||1,e.x+=c.width+2*c.padding+(f-1)*d);return e}function A(e){var c=this,h=c.pos,d=c.axis,a=c.label,f=d.treeGrid.mapOfPosToGridNode,l=d.options,D=g(c.options&&c.options.labels,l&&l.labels),
G=D&&t(D.symbol,!0)?D.symbol:{},b=(f=f&&f[h])&&f.depth;l="treegrid"===l.type;var m=-1<d.tickPositions.indexOf(h);h=d.chart.styledMode;l&&f&&a&&a.element&&a.addClass("highcharts-treegrid-node-level-"+b);e.apply(c,Array.prototype.slice.call(arguments,1));l&&a&&a.element&&f&&f.descendants&&0<f.descendants&&(d=d.treeGrid.isCollapsed(f),n(c,{color:!h&&a.styles&&a.styles.color||"",collapsed:d,group:a.parentGroup,options:G,renderer:a.renderer,show:m,xy:a.xy}),G="highcharts-treegrid-node-"+(d?"expanded":
"collapsed"),a.addClass("highcharts-treegrid-node-"+(d?"collapsed":"expanded")).removeClass(G),h||a.css({cursor:"pointer"}),[a,c.treeGrid.labelIcon].forEach(function(f){f&&!f.attachedTreeGridEvents&&(r(f.element,"mouseover",function(){a.addClass("highcharts-treegrid-node-active");a.renderer.styledMode||a.css({textDecoration:"underline"})}),r(f.element,"mouseout",function(){var f=y(D.style)?D.style:{};a.removeClass("highcharts-treegrid-node-active");a.renderer.styledMode||a.css({textDecoration:f.textDecoration})}),
r(f.element,"click",function(){c.treeGrid.toggleCollapse()}),f.attachedTreeGridEvents=!0)}))}var m=!1;b.compose=function(e){m||(r(e,"init",d),B(e.prototype,"getLabelPosition",z),B(e.prototype,"renderLabel",A),e.prototype.collapse=function(c){this.treeGrid.collapse(c)},e.prototype.expand=function(c){this.treeGrid.expand(c)},e.prototype.toggleCollapse=function(c){this.treeGrid.toggleCollapse(c)},m=!0)};var v=function(){function e(c){this.tick=c}e.prototype.collapse=function(c){var e=this.tick,d=e.axis,
a=d.brokenAxis;a&&d.treeGrid.mapOfPosToGridNode&&(e=d.treeGrid.collapse(d.treeGrid.mapOfPosToGridNode[e.pos]),a.setBreaks(e,g(c,!0)))};e.prototype.expand=function(c){var e=this.tick,d=e.axis,a=d.brokenAxis;a&&d.treeGrid.mapOfPosToGridNode&&(e=d.treeGrid.expand(d.treeGrid.mapOfPosToGridNode[e.pos]),a.setBreaks(e,g(c,!0)))};e.prototype.toggleCollapse=function(c){var e=this.tick,d=e.axis,a=d.brokenAxis;a&&d.treeGrid.mapOfPosToGridNode&&(e=d.treeGrid.toggleCollapse(d.treeGrid.mapOfPosToGridNode[e.pos]),
a.setBreaks(e,g(c,!0)))};return e}();b.Additions=v})(C||(C={}));return C});E(b,"mixins/tree-series.js",[b["parts/Color.js"],b["parts/Utilities.js"]],function(b,r){var y=r.extend,t=r.isArray,k=r.isNumber,g=r.isObject,B=r.merge,C=r.pick;return{getColor:function(n,d){var u=d.index,g=d.mapOptionsToLevel,A=d.parentColor,m=d.parentColorIndex,v=d.series,e=d.colors,c=d.siblings,h=v.points,p=v.chart.options.chart,a;if(n){h=h[n.i];n=g[n.level]||{};if(g=h&&n.colorByPoint){var f=h.index%(e?e.length:p.colorCount);
var l=e&&e[f]}if(!v.chart.styledMode){e=h&&h.options.color;p=n&&n.color;if(a=A)a=(a=n&&n.colorVariation)&&"brightness"===a.key?b.parse(A).brighten(u/c*a.to).get():A;a=C(e,p,l,a,v.color)}var D=C(h&&h.options.colorIndex,n&&n.colorIndex,f,m,d.colorIndex)}return{color:a,colorIndex:D}},getLevelOptions:function(b){var d=null;if(g(b)){d={};var u=k(b.from)?b.from:1;var n=b.levels;var A={};var m=g(b.defaults)?b.defaults:{};t(n)&&(A=n.reduce(function(d,e){if(g(e)&&k(e.level)){var c=B({},e);var b="boolean"===
typeof c.levelIsConstant?c.levelIsConstant:m.levelIsConstant;delete c.levelIsConstant;delete c.level;e=e.level+(b?0:u-1);g(d[e])?y(d[e],c):d[e]=c}return d},{}));n=k(b.to)?b.to:1;for(b=0;b<=n;b++)d[b]=B({},m,g(A[b])?A[b]:{})}return d},setTreeValues:function z(d,b){var g=b.before,m=b.idRoot,v=b.mapIdToNode[m],e=b.points[d.i],c=e&&e.options||{},h=0,p=[];y(d,{levelDynamic:d.level-(("boolean"===typeof b.levelIsConstant?b.levelIsConstant:1)?0:v.level),name:C(e&&e.name,""),visible:m===d.id||("boolean"===
typeof b.visible?b.visible:!1)});"function"===typeof g&&(d=g(d,b));d.children.forEach(function(a,f){var l=y({},b);y(l,{index:f,siblings:d.children.length,visible:d.visible});a=z(a,l);p.push(a);a.visible&&(h+=a.val)});d.visible=0<h||d.visible;g=C(c.value,h);y(d,{children:p,childrenTotal:h,isLeaf:d.visible&&!h,val:g});return d},updateRootId:function(d){if(g(d)){var b=g(d.options)?d.options:{};b=C(d.rootNode,b.rootId,"");g(d.userOptions)&&(d.userOptions.rootId=b);d.rootNode=b}return b}}});E(b,"parts-gantt/GridAxis.js",
[b["parts/Axis.js"],b["parts/Globals.js"],b["parts/Tick.js"],b["parts/Utilities.js"]],function(b,r,y,t){var k=t.addEvent,g=t.defined,B=t.erase,C=t.find,n=t.isArray,d=t.isNumber,u=t.merge,z=t.pick,A=t.timeUnits,m=t.wrap,v=r.dateFormat,e=r.Chart,c=function(a){var f=a.options;f.labels||(f.labels={});f.labels.align=z(f.labels.align,"center");a.categories||(f.showLastLabel=!1);a.labelRotation=0;f.labels.rotation=0};"";b.prototype.getMaxLabelDimensions=function(a,f){var l={width:0,height:0};f.forEach(function(f){f=
a[f];if(t.isObject(f,!0)){var c=t.isObject(f.label,!0)?f.label:{};f=c.getBBox?c.getBBox().height:0;c.textStr&&!d(c.textPxLength)&&(c.textPxLength=c.getBBox().width);c=d(c.textPxLength)?Math.round(c.textPxLength):0;l.height=Math.max(f,l.height);l.width=Math.max(c,l.width)}});return l};r.dateFormats.W=function(a){a=new this.Date(a);var f=(this.get("Day",a)+6)%7,l=new this.Date(a.valueOf());this.set("Date",l,this.get("Date",a)-f+3);f=new this.Date(this.get("FullYear",l),0,1);4!==this.get("Day",f)&&(this.set("Month",
a,0),this.set("Date",a,1+(11-this.get("Day",f))%7));return(1+Math.floor((l.valueOf()-f.valueOf())/6048E5)).toString()};r.dateFormats.E=function(a){return v("%a",a,!0).charAt(0)};k(e,"afterSetChartSize",function(){this.axes.forEach(function(a){(a.grid&&a.grid.columns||[]).forEach(function(f){f.setAxisSize();f.setAxisTranslation()})})});k(y,"afterGetLabelPosition",function(a){var f=this.label,l=this.axis,c=l.reversed,b=l.chart,e=l.options.grid||{},h=l.options.labels,w=h.align,q=p.Side[l.side],x=a.tickmarkOffset,
F=l.tickPositions,m=this.pos-x;F=d(F[a.index+1])?F[a.index+1]-x:l.max+x;var g=l.tickSize("tick");x=g?g[0]:0;g=g?g[1]/2:0;if(!0===e.enabled){if("top"===q){e=l.top+l.offset;var v=e-x}else"bottom"===q?(v=b.chartHeight-l.bottom+l.offset,e=v+x):(e=l.top+l.len-l.translate(c?F:m),v=l.top+l.len-l.translate(c?m:F));"right"===q?(q=b.chartWidth-l.right+l.offset,c=q+x):"left"===q?(c=l.left+l.offset,q=c-x):(q=Math.round(l.left+l.translate(c?F:m))-g,c=Math.round(l.left+l.translate(c?m:F))-g);this.slotWidth=c-q;
a.pos.x="left"===w?q:"right"===w?c:q+(c-q)/2;a.pos.y=v+(e-v)/2;b=b.renderer.fontMetrics(h.style.fontSize,f.element);f=f.getBBox().height;h.useHTML?a.pos.y+=b.b+-(f/2):(f=Math.round(f/b.h),a.pos.y+=(b.b-(b.h-b.f))/2+-((f-1)*b.h/2));a.pos.x+=l.horiz&&h.x||0}});var h=function(){function a(f){this.axis=f}a.prototype.isOuterAxis=function(){var f=this.axis,a=f.grid.columnIndex,c=f.linkedParent&&f.linkedParent.grid.columns||f.grid.columns,b=a?f.linkedParent:f,e=-1,h=0;f.chart[f.coll].forEach(function(a,
c){a.side!==f.side||a.options.isInternal||(h=c,a===b&&(e=c))});return h===e&&(d(a)?c.length===a:!0)};return a}(),p=function(){function a(){}a.compose=function(f){b.keepProps.push("grid");m(f.prototype,"unsquish",a.wrapUnsquish);k(f,"init",a.onInit);k(f,"afterGetOffset",a.onAfterGetOffset);k(f,"afterGetTitlePosition",a.onAfterGetTitlePosition);k(f,"afterInit",a.onAfterInit);k(f,"afterRender",a.onAfterRender);k(f,"afterSetAxisTranslation",a.onAfterSetAxisTranslation);k(f,"afterSetOptions",a.onAfterSetOptions);
k(f,"afterSetOptions",a.onAfterSetOptions2);k(f,"afterSetScale",a.onAfterSetScale);k(f,"afterTickSize",a.onAfterTickSize);k(f,"trimTicks",a.onTrimTicks);k(f,"destroy",a.onDestroy)};a.onAfterGetOffset=function(){var f=this.grid;(f&&f.columns||[]).forEach(function(f){f.getOffset()})};a.onAfterGetTitlePosition=function(f){if(!0===(this.options.grid||{}).enabled){var c=this.axisTitle,b=this.height,e=this.horiz,d=this.left,h=this.offset,w=this.opposite,q=this.options.title,x=void 0===q?{}:q;q=this.top;
var F=this.width,m=this.tickSize(),g=c&&c.getBBox().width,v=x.x||0,p=x.y||0,k=z(x.margin,e?5:10);c=this.chart.renderer.fontMetrics(x.style&&x.style.fontSize,c).f;m=(e?q+b:d)+(e?1:-1)*(w?-1:1)*(m?m[0]/2:0)+(this.side===a.Side.bottom?c:0);f.titlePosition.x=e?d-g/2-k+v:m+(w?F:0)+h+v;f.titlePosition.y=e?m-(w?b:0)+(w?c:-c)/2+h+p:q-k+p}};a.onAfterInit=function(){var f=this.chart,a=this.options.grid;a=void 0===a?{}:a;var e=this.userOptions;a.enabled&&(c(this),m(this,"labelFormatter",function(f){var a=this.axis,
c=this.value,e=a.tickPositions,b=(a.isLinked?a.linkedParent:a).series[0],l=c===e[0];e=c===e[e.length-1];b=b&&C(b.options.data,function(f){return f[a.isXAxis?"x":"y"]===c});this.isFirst=l;this.isLast=e;this.point=b;return f.call(this)}));if(a.columns)for(var d=this.grid.columns=[],h=this.grid.columnIndex=0;++h<a.columns.length;){var g=u(e,a.columns[a.columns.length-h-1],{linkedTo:0,type:"category"});delete g.grid.columns;g=new b(this.chart,g);g.grid.isColumn=!0;g.grid.columnIndex=h;B(f.axes,g);B(f[this.coll],
g);d.push(g)}};a.onAfterRender=function(){var f=this.grid,c=this.options,e=this.chart.renderer;if(!0===(c.grid||{}).enabled){this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions);this.rightWall&&this.rightWall.destroy();if(this.grid&&this.grid.isOuterAxis()&&this.axisLine){var b=c.lineWidth;if(b){var d=this.getLinePath(b),h=d[0],w=d[1],q=((this.tickSize("tick")||[1])[0]-1)*(this.side===a.Side.top||this.side===a.Side.left?-1:1);"M"===h[0]&&"L"===w[0]&&(this.horiz?(h[2]+=
q,w[2]+=q):(h[1]+=q,w[1]+=q));this.grid.axisLineExtra?this.grid.axisLineExtra.animate({d:d}):(this.grid.axisLineExtra=e.path(d).attr({zIndex:7}).addClass("highcharts-axis-line").add(this.axisGroup),e.styledMode||this.grid.axisLineExtra.attr({stroke:c.lineColor,"stroke-width":b}));this.axisLine[this.showAxis?"show":"hide"](!0)}}(f&&f.columns||[]).forEach(function(f){f.render()})}};a.onAfterSetAxisTranslation=function(){var f=this.tickPositions&&this.tickPositions.info,a=this.options,c=a.grid||{},e=
this.userOptions.labels||{};this.horiz&&(!0===c.enabled&&this.series.forEach(function(a){a.options.pointRange=0}),f&&a.dateTimeLabelFormats&&a.labels&&!g(e.align)&&(!1===a.dateTimeLabelFormats[f.unitName].range||1<f.count)&&(a.labels.align="left",g(e.x)||(a.labels.x=3)))};a.onAfterSetOptions=function(a){var c=this.options;a=a.userOptions;var f=c&&t.isObject(c.grid,!0)?c.grid:{};if(!0===f.enabled){var e=u(!0,{className:"highcharts-grid-axis "+(a.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M",
"%H"]},day:{list:["%A, %e. %B","%a, %e. %b","%E"]},week:{list:["Week %W","W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"13px"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},a);"xAxis"===this.coll&&(g(a.linkedTo)&&!g(a.tickPixelInterval)&&(e.tickPixelInterval=350),g(a.tickPixelInterval)||!g(a.linkedTo)||
g(a.tickPositioner)||g(a.tickInterval)||(e.tickPositioner=function(a,c){var f=this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(f){var b,d=e.units;for(b=0;b<d.length;b++)if(d[b][0]===f.unitName){var l=b;break}if(d[l+1]){var h=d[l+1][0];var m=(d[l+1][1]||[1])[0]}else"year"===f.unitName&&(h="year",m=10*f.count);f=A[h];this.tickInterval=f*m;return this.getTimeTicks({unitRange:f,count:m,unitName:h},a,c,this.options.startOfWeek)}}));u(!0,this.options,e);this.horiz&&
(c.minPadding=z(a.minPadding,0),c.maxPadding=z(a.maxPadding,0));d(c.grid.borderWidth)&&(c.tickWidth=c.lineWidth=f.borderWidth)}};a.onAfterSetOptions2=function(a){a=(a=a.userOptions)&&a.grid||{};var c=a.columns;a.enabled&&c&&u(!0,this.options,c[c.length-1])};a.onAfterSetScale=function(){(this.grid.columns||[]).forEach(function(a){a.setScale()})};a.onAfterTickSize=function(a){var c=b.defaultLeftAxisOptions,f=this.horiz,e=this.maxLabelDimensions,d=this.options.grid;d=void 0===d?{}:d;d.enabled&&e&&(c=
2*Math.abs(c.labels.x),f=f?d.cellHeight||c+e.height:c+e.width,n(a.tickSize)?a.tickSize[0]=f:a.tickSize=[f,0])};a.onDestroy=function(a){var c=this.grid;(c.columns||[]).forEach(function(c){c.destroy(a.keepEvents)});c.columns=void 0};a.onInit=function(a){a=a.userOptions||{};var c=a.grid||{};c.enabled&&g(c.borderColor)&&(a.tickColor=a.lineColor=c.borderColor);this.grid||(this.grid=new h(this))};a.onTrimTicks=function(){var a=this.options,c=this.categories,e=this.tickPositions,b=e[0],d=e[e.length-1],h=
this.linkedParent&&this.linkedParent.min||this.min,m=this.linkedParent&&this.linkedParent.max||this.max,q=this.tickInterval;!0!==(a.grid||{}).enabled||c||!this.horiz&&!this.isLinked||(b<h&&b+q>h&&!a.startOnTick&&(e[0]=h),d>m&&d-q<m&&!a.endOnTick&&(e[e.length-1]=m))};a.wrapUnsquish=function(a){var c=this.options.grid;return!0===(void 0===c?{}:c).enabled&&this.categories?this.tickInterval:a.apply(this,Array.prototype.slice.call(arguments,1))};return a}();(function(a){a=a.Side||(a.Side={});a[a.top=0]=
"top";a[a.right=1]="right";a[a.bottom=2]="bottom";a[a.left=3]="left"})(p||(p={}));p.compose(b);return p});E(b,"modules/broken-axis.src.js",[b["parts/Axis.js"],b["parts/Globals.js"],b["parts/Utilities.js"],b["parts/Stacking.js"]],function(b,r,y,t){var k=y.addEvent,g=y.find,B=y.fireEvent,C=y.isArray,n=y.isNumber,d=y.pick,u=r.Series,z=function(){function k(b){this.hasBreaks=!1;this.axis=b}k.isInBreak=function(b,d){var e=b.repeat||Infinity,c=b.from,h=b.to-b.from;d=d>=c?(d-c)%e:e-(c-d)%e;return b.inclusive?
d<=h:d<h&&0!==d};k.lin2Val=function(b){var d=this.brokenAxis;d=d&&d.breakArray;if(!d)return b;var e;for(e=0;e<d.length;e++){var c=d[e];if(c.from>=b)break;else c.to<b?b+=c.len:k.isInBreak(c,b)&&(b+=c.len)}return b};k.val2Lin=function(b){var d=this.brokenAxis;d=d&&d.breakArray;if(!d)return b;var e=b,c;for(c=0;c<d.length;c++){var h=d[c];if(h.to<=b)e-=h.len;else if(h.from>=b)break;else if(k.isInBreak(h,b)){e-=b-h.from;break}}return e};k.prototype.findBreakAt=function(b,d){return g(d,function(d){return d.from<
b&&b<d.to})};k.prototype.isInAnyBreak=function(b,g){var e=this.axis,c=e.options.breaks,h=c&&c.length,p;if(h){for(;h--;)if(k.isInBreak(c[h],b)){var a=!0;p||(p=d(c[h].showPoints,!e.isXAxis))}var f=a&&g?a&&!p:a}return f};k.prototype.setBreaks=function(g,n){var e=this,c=e.axis,h=C(g)&&!!g.length;c.isDirty=e.hasBreaks!==h;e.hasBreaks=h;c.options.breaks=c.userOptions.breaks=g;c.forceRedraw=!0;c.series.forEach(function(c){c.isDirty=!0});h||c.val2lin!==k.val2Lin||(delete c.val2lin,delete c.lin2val);h&&(c.userOptions.ordinal=
!1,c.lin2val=k.lin2Val,c.val2lin=k.val2Lin,c.setExtremes=function(c,a,f,d,h){if(e.hasBreaks){for(var l,g=this.options.breaks;l=e.findBreakAt(c,g);)c=l.to;for(;l=e.findBreakAt(a,g);)a=l.from;a<c&&(a=c)}b.prototype.setExtremes.call(this,c,a,f,d,h)},c.setAxisTranslation=function(h){b.prototype.setAxisTranslation.call(this,h);e.unitLength=null;if(e.hasBreaks){h=c.options.breaks||[];var a=[],f=[],l=0,g,m=c.userMin||c.min,p=c.userMax||c.max,n=d(c.pointRangePadding,0),w;h.forEach(function(a){g=a.repeat||
Infinity;k.isInBreak(a,m)&&(m+=a.to%g-m%g);k.isInBreak(a,p)&&(p-=p%g-a.from%g)});h.forEach(function(c){x=c.from;for(g=c.repeat||Infinity;x-g>m;)x-=g;for(;x<m;)x+=g;for(w=x;w<p;w+=g)a.push({value:w,move:"in"}),a.push({value:w+(c.to-c.from),move:"out",size:c.breakSize})});a.sort(function(a,c){return a.value===c.value?("in"===a.move?0:1)-("in"===c.move?0:1):a.value-c.value});var q=0;var x=m;a.forEach(function(a){q+="in"===a.move?1:-1;1===q&&"in"===a.move&&(x=a.value);0===q&&(f.push({from:x,to:a.value,
len:a.value-x-(a.size||0)}),l+=a.value-x-(a.size||0))});c.breakArray=e.breakArray=f;e.unitLength=p-m-l+n;B(c,"afterBreaks");c.staticScale?c.transA=c.staticScale:e.unitLength&&(c.transA*=(p-c.min+n)/e.unitLength);n&&(c.minPixelPadding=c.transA*c.minPointOffset);c.min=m;c.max=p}});d(n,!0)&&c.chart.redraw()};return k}();r=function(){function b(){}b.compose=function(b,g){b.keepProps.push("brokenAxis");var e=u.prototype;e.drawBreaks=function(c,b){var e=this,a=e.points,f,h,g,k;if(c&&c.brokenAxis&&c.brokenAxis.hasBreaks){var m=
c.brokenAxis;b.forEach(function(b){f=m&&m.breakArray||[];h=c.isXAxis?c.min:d(e.options.threshold,c.min);a.forEach(function(a){k=d(a["stack"+b.toUpperCase()],a[b]);f.forEach(function(b){if(n(h)&&n(k)){g=!1;if(h<b.from&&k>b.to||h>b.from&&k<b.from)g="pointBreak";else if(h<b.from&&k>b.from&&k<b.to||h>b.from&&k>b.to&&k<b.from)g="pointInBreak";g&&B(c,g,{point:a,brk:b})}})})})}};e.gappedPath=function(){var c=this.currentDataGrouping,b=c&&c.gapSize;c=this.options.gapSize;var d=this.points.slice(),a=d.length-
1,f=this.yAxis,e;if(c&&0<a)for("value"!==this.options.gapUnit&&(c*=this.basePointRange),b&&b>c&&b>=this.basePointRange&&(c=b),e=void 0;a--;)e&&!1!==e.visible||(e=d[a+1]),b=d[a],!1!==e.visible&&!1!==b.visible&&(e.x-b.x>c&&(e=(b.x+e.x)/2,d.splice(a+1,0,{isNull:!0,x:e}),f.stacking&&this.options.stacking&&(e=f.stacking.stacks[this.stackKey][e]=new t(f,f.options.stackLabels,!1,e,this.stack),e.total=0)),e=b);return this.getGraphPath(d)};k(b,"init",function(){this.brokenAxis||(this.brokenAxis=new z(this))});
k(b,"afterInit",function(){"undefined"!==typeof this.brokenAxis&&this.brokenAxis.setBreaks(this.options.breaks,!1)});k(b,"afterSetTickPositions",function(){var c=this.brokenAxis;if(c&&c.hasBreaks){var b=this.tickPositions,e=this.tickPositions.info,a=[],d;for(d=0;d<b.length;d++)c.isInAnyBreak(b[d])||a.push(b[d]);this.tickPositions=a;this.tickPositions.info=e}});k(b,"afterSetOptions",function(){this.brokenAxis&&this.brokenAxis.hasBreaks&&(this.options.ordinal=!1)});k(g,"afterGeneratePoints",function(){var c=
this.options.connectNulls,b=this.points,d=this.xAxis,a=this.yAxis;if(this.isDirty)for(var e=b.length;e--;){var g=b[e],k=!(null===g.y&&!1===c)&&(d&&d.brokenAxis&&d.brokenAxis.isInAnyBreak(g.x,!0)||a&&a.brokenAxis&&a.brokenAxis.isInAnyBreak(g.y,!0));g.visible=k?!1:!1!==g.options.visible}});k(g,"afterRender",function(){this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,d(this.pointArrayMap,["y"]))})};return b}();r.compose(b,u);return r});E(b,"parts-gantt/TreeGridAxis.js",[b["parts/Axis.js"],
b["parts/Tick.js"],b["parts-gantt/Tree.js"],b["parts-gantt/TreeGridTick.js"],b["mixins/tree-series.js"],b["parts/Utilities.js"]],function(b,r,y,t,k,g){var B=g.addEvent,C=g.find,n=g.fireEvent,d=g.isNumber,u=g.isObject,z=g.isString,A=g.merge,m=g.pick,v=g.wrap,e;(function(c){function b(a,c){var b=a.collapseStart||0;a=a.collapseEnd||0;a>=c&&(b-=.5);return{from:b,to:a,showPoints:!1}}function e(a,b,c){var e=[],d=[],f={},g={},h=-1,q="boolean"===typeof b?b:!1;a=y.getTree(a,{after:function(a){a=g[a.pos];var b=
0,c=0;a.children.forEach(function(a){c+=(a.descendants||0)+1;b=Math.max((a.height||0)+1,b)});a.descendants=c;a.height=b;a.collapsed&&d.push(a)},before:function(a){var b=u(a.data,!0)?a.data:{},c=z(b.name)?b.name:"",d=f[a.parent];d=u(d,!0)?g[d.pos]:null;var k=function(a){return a.name===c},l;q&&u(d,!0)&&(l=C(d.children,k))?(k=l.pos,l.nodes.push(a)):k=h++;g[k]||(g[k]=l={depth:d?d.depth+1:0,name:c,nodes:[a],children:[],pos:k},-1!==k&&e.push(c),u(d,!0)&&d.children.push(l));z(a.id)&&(f[a.id]=a);l&&!0===
b.collapsed&&(l.collapsed=!0);a.pos=k}});g=function(a,b){var c=function(a,d,e){var f=d+(-1===d?0:b-1),g=(f-d)/2,h=d+g;a.nodes.forEach(function(a){var b=a.data;u(b,!0)&&(b.y=d+(b.seriesIndex||0),delete b.seriesIndex);a.pos=h});e[h]=a;a.pos=h;a.tickmarkOffset=g+.5;a.collapseStart=f+.5;a.children.forEach(function(a){c(a,f+1,e);f=(a.collapseEnd||0)-.5});a.collapseEnd=f+.5;return e};return c(a["-1"],-1,{})}(g,c);return{categories:e,mapOfIdToNode:f,mapOfPosToGridNode:g,collapsedNodes:d,tree:a}}function a(a){a.target.axes.filter(function(a){return"treegrid"===
a.options.type}).forEach(function(b){var c=b.options||{},d=c.labels,f=c.uniqueNames,g=0;if(!b.treeGrid.mapOfPosToGridNode||b.series.some(function(a){return!a.hasRendered||a.isDirtyData||a.isDirty}))c=b.series.reduce(function(a,b){b.visible&&((b.options.data||[]).forEach(function(b){u(b,!0)&&(b.seriesIndex=g,a.push(b))}),!0===f&&g++);return a},[]),c=e(c,f||!1,!0===f?g:1),b.categories=c.categories,b.treeGrid.mapOfPosToGridNode=c.mapOfPosToGridNode,b.hasNames=!0,b.treeGrid.tree=c.tree,b.series.forEach(function(a){var b=
(a.options.data||[]).map(function(a){return u(a,!0)?A(a):a});a.visible&&a.setData(b,!1)}),b.treeGrid.mapOptionsToLevel=k.getLevelOptions({defaults:d,from:1,levels:d&&d.levels,to:b.treeGrid.tree&&b.treeGrid.tree.height}),"beforeRender"===a.type&&(b.treeGrid.collapsedNodes=c.collapsedNodes)})}function f(a,b){var c=this.treeGrid.mapOptionsToLevel||{},d=this.ticks,e=d[b],f;if("treegrid"===this.options.type&&this.treeGrid.mapOfPosToGridNode){var g=this.treeGrid.mapOfPosToGridNode[b];(c=c[g.depth])&&(f=
{labels:c});e?(e.parameters.category=g.name,e.options=f,e.addLabel()):d[b]=new r(this,b,void 0,void 0,{category:g.name,tickmarkOffset:g.tickmarkOffset,options:f})}else a.apply(this,Array.prototype.slice.call(arguments,1))}function g(a){var b=this.options;b=(b=b&&b.labels)&&d(b.indentation)?b.indentation:0;var c=a.apply(this,Array.prototype.slice.call(arguments,1));if("treegrid"===this.options.type&&this.treeGrid.mapOfPosToGridNode){var e=this.treeGrid.mapOfPosToGridNode[-1].height||0;c.width+=b*(e-
1)}return c}function D(b,c,d){var f=this,g="treegrid"===d.type;f.treeGrid||(f.treeGrid=new I(f));g&&(B(c,"beforeRender",a),B(c,"beforeRedraw",a),B(c,"addSeries",function(a){a.options.data&&(a=e(a.options.data,d.uniqueNames||!1,1),f.treeGrid.collapsedNodes=(f.treeGrid.collapsedNodes||[]).concat(a.collapsedNodes))}),B(f,"foundExtremes",function(){f.treeGrid.collapsedNodes&&f.treeGrid.collapsedNodes.forEach(function(a){var b=f.treeGrid.collapse(a);f.brokenAxis&&(f.brokenAxis.setBreaks(b,!1),f.treeGrid.collapsedNodes&&
(f.treeGrid.collapsedNodes=f.treeGrid.collapsedNodes.filter(function(b){return a.collapseStart!==b.collapseStart||a.collapseEnd!==b.collapseEnd})))})}),d=A({grid:{enabled:!0},labels:{align:"left",levels:[{level:void 0},{level:1,style:{fontWeight:"bold"}}],symbol:{type:"triangle",x:-5,y:-5,height:10,width:10,padding:5}},uniqueNames:!1},d,{reversed:!0,grid:{columns:void 0}}));b.apply(f,[c,d]);g&&(f.hasNames=!0,f.options.showLastLabel=!0)}function E(a){var b=this.options;"treegrid"===b.type?(this.min=
m(this.userMin,b.min,this.dataMin),this.max=m(this.userMax,b.max,this.dataMax),n(this,"foundExtremes"),this.setAxisTranslation(!0),this.tickmarkOffset=.5,this.tickInterval=1,this.tickPositions=this.treeGrid.mapOfPosToGridNode?this.treeGrid.getTickPositions():[]):a.apply(this,Array.prototype.slice.call(arguments,1))}var H=!1;c.compose=function(a){H||(v(a.prototype,"generateTick",f),v(a.prototype,"getMaxLabelDimensions",g),v(a.prototype,"init",D),v(a.prototype,"setTickInterval",E),t.compose(r),H=!0)};
var I=function(){function a(a){this.axis=a}a.prototype.collapse=function(a){var c=this.axis,d=c.options.breaks||[];a=b(a,c.max);d.push(a);return d};a.prototype.expand=function(a){var c=this.axis,d=c.options.breaks||[],e=b(a,c.max);return d.reduce(function(a,b){b.to===e.to&&b.from===e.from||a.push(b);return a},[])};a.prototype.getTickPositions=function(){var a=this.axis;return Object.keys(a.treeGrid.mapOfPosToGridNode||{}).reduce(function(b,c){c=+c;!(a.min<=c&&a.max>=c)||a.brokenAxis&&a.brokenAxis.isInAnyBreak(c)||
b.push(c);return b},[])};a.prototype.isCollapsed=function(a){var c=this.axis,d=c.options.breaks||[],e=b(a,c.max);return d.some(function(a){return a.from===e.from&&a.to===e.to})};a.prototype.toggleCollapse=function(a){return this.isCollapsed(a)?this.expand(a):this.collapse(a)};return a}();c.Additions=I})(e||(e={}));b.prototype.utils={getNode:y.getNode};e.compose(b);return e});E(b,"masters/modules/treegrid.src.js",[],function(){})});
//# sourceMappingURL=treegrid.js.map