/*
 Highstock JS v8.1.0 (2020-05-12)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/aroon",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,m,c,k){a.hasOwnProperty(m)||(a[m]=k.apply(null,c))}a=a?a._modules:{};c(a,"mixins/multipe-lines.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,c){var p=c.defined,
k=c.error,m=c.merge,l=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(b){var a=[];(this.pointArrayMap||[]).forEach(function(d){d!==b&&a.push("plot"+d.charAt(0).toUpperCase()+d.slice(1))});return a},toYData:function(b){var a=[];(this.pointArrayMap||[]).forEach(function(d){a.push(b[d])});return a},translate:function(){var b=this,a=b.pointArrayMap,d=[],e;d=b.getTranslatedLinesNames();l.prototype.translate.apply(b,
arguments);b.points.forEach(function(l){a.forEach(function(a,c){e=l[a];null!==e&&(l[d[c]]=b.yAxis.toPixels(e,!0))})})},drawGraph:function(){var b=this,a=b.linesApiNames,d=b.points,e=d.length,c=b.options,q=b.graph,g={options:{gapSize:c.gapSize}},f=[],h;b.getTranslatedLinesNames(b.pointValKey).forEach(function(b,a){for(f[a]=[];e--;)h=d[e],f[a].push({x:h.x,plotX:h.plotX,plotY:h[b],isNull:!p(h[b])});e=d.length});a.forEach(function(a,d){f[d]?(b.points=f[d],c[a]?b.options=m(c[a].styles,g):k('Error: "There is no '+
a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),b.graph=b["graph"+a],l.prototype.drawGraph.call(b),b["graph"+a]=b.graph):k('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=d;b.options=c;b.graph=q;l.prototype.drawGraph.call(b)}}});c(a,"indicators/aroon.src.js",[a["parts/Utilities.js"],a["mixins/multipe-lines.js"]],function(a,c){function m(a,
b){var c=a[0],d=0,e;for(e=1;e<a.length;e++)if("max"===b&&a[e]>=c||"min"===b&&a[e]<=c)c=a[e],d=e;return d}var k=a.merge,n=a.pick;a=a.seriesType;a("aroon","sma",{params:{period:25},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Aroon Up: {point.y}<br/>Aroon Down: {point.aroonDown}<br/>'},aroonDown:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}},k(c,{nameBase:"Aroon",pointArrayMap:["y","aroonDown"],pointValKey:"y",
linesApiNames:["aroonDown"],getValues:function(a,b){b=b.period;var c=a.xData,d=(a=a.yData)?a.length:0,e=[],k=[],l=[],g;for(g=b-1;g<d;g++){var f=a.slice(g-b+1,g+2);var h=m(f.map(function(a){return n(a[2],a)}),"min");f=m(f.map(function(a){return n(a[1],a)}),"max");f=f/b*100;h=h/b*100;c[g+1]&&(e.push([c[g+1],f,h]),k.push(c[g+1]),l.push([f,h]))}return{values:e,xData:k,yData:l}}}));""});c(a,"masters/indicators/aroon.src.js",[],function(){})});
//# sourceMappingURL=aroon.js.map