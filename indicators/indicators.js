/*
 Highstock JS v8.1.0 (2020-05-12)

 Indicator series type for Highstock

 (c) 2010-2019 Pawel Fus, Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/indicators",["highcharts","highcharts/modules/stock"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,c,p,e){a.hasOwnProperty(c)||(a[c]=e.apply(null,p))}a=a?a._modules:{};f(a,"mixins/indicator-required.js",[a["parts/Utilities.js"]],function(a){var c=a.error;return{isParentLoaded:function(a,
e,f,k,q){if(a)return k?k(a):!0;c(q||this.generateMessage(f,e));return!1},generateMessage:function(a,c){return'Error: "'+a+'" indicator type requires "'+c+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});f(a,"indicators/indicators.src.js",[a["parts/Globals.js"],a["parts/Utilities.js"],a["mixins/indicator-required.js"]],function(a,c,f){var e=c.addEvent,k=c.error,p=c.extend,q=c.isArray,t=c.pick,u=c.seriesType,v=c.splat,l=a.Series,r=a.seriesTypes,
m=a.seriesTypes.ohlc.prototype,w=f.generateMessage;e(a.Series,"init",function(d){d=d.options;d.useOhlcData&&"highcharts-navigator-series"!==d.id&&p(this,{pointValKey:m.pointValKey,keys:m.keys,pointArrayMap:m.pointArrayMap,toYData:m.toYData})});e(l,"afterSetOptions",function(d){d=d.options;var a=d.dataGrouping;a&&d.useOhlcData&&"highcharts-navigator-series"!==d.id&&(a.approximation="ohlc")});u("sma","line",{name:void 0,tooltip:{valueDecimals:4},linkedTo:void 0,compareToMain:!1,params:{index:0,period:14}},
{processData:function(){var d=this.options.compareToMain,a=this.linkedParent;l.prototype.processData.apply(this,arguments);a&&a.compareValue&&d&&(this.compareValue=a.compareValue)},bindTo:{series:!0,eventName:"updatedData"},hasDerivedData:!0,useCommonDataGrouping:!0,nameComponents:["period"],nameSuffixes:[],calculateOn:"init",requiredIndicators:[],requireIndicators:function(){var a={allLoaded:!0};this.requiredIndicators.forEach(function(d){r[d]?r[d].prototype.requireIndicators():(a.allLoaded=!1,a.needed=
d)});return a},init:function(a,h){function d(){var a=b.points||[],d=(b.xData||[]).length,c=b.getValues(b.linkedParent,b.options.params)||{values:[],xData:[],yData:[]},h=[],f=!0;if(d&&!b.hasGroupedData&&b.visible&&b.points)if(b.cropped){if(b.xAxis){var g=b.xAxis.min;var e=b.xAxis.max}d=b.cropData(c.xData,c.yData,g,e);for(g=0;g<d.xData.length;g++)h.push([d.xData[g]].concat(v(d.yData[g])));d=c.xData.indexOf(b.xData[0]);g=c.xData.indexOf(b.xData[b.xData.length-1]);-1===d&&g===c.xData.length-2&&h[0][0]===
a[0].x&&h.shift();b.updateData(h)}else c.xData.length!==d-1&&c.xData.length!==d+1&&(f=!1,b.updateData(c.values));f&&(b.xData=c.xData,b.yData=c.yData,b.options.data=c.values);!1===b.bindTo.series&&(delete b.processedXData,b.isDirty=!0,b.redraw());b.isDirtyData=!1}var b=this,c=b.requireIndicators();if(!c.allLoaded)return k(w(b.type,c.needed));l.prototype.init.call(b,a,h);a.linkSeries();b.dataEventsToUnbind=[];if(!b.linkedParent)return k("Series "+b.options.linkedTo+" not found! Check `linkedTo`.",!1,
a);b.dataEventsToUnbind.push(e(b.bindTo.series?b.linkedParent:b.linkedParent.xAxis,b.bindTo.eventName,d));if("init"===b.calculateOn)d();else var f=e(b.chart,b.calculateOn,function(){d();f()});return b},getName:function(){var a=this.name,c=[];a||((this.nameComponents||[]).forEach(function(a,b){c.push(this.options.params[a]+t(this.nameSuffixes[b],""))},this),a=(this.nameBase||this.type.toUpperCase())+(this.nameComponents?" ("+c.join(", ")+")":""));return a},getValues:function(a,c){var d=c.period,b=
a.xData;a=a.yData;var f=a.length,e=0,h=0,k=[],l=[],m=[],n=-1;if(!(b.length<d)){for(q(a[0])&&(n=c.index?c.index:0);e<d-1;)h+=0>n?a[e]:a[e][n],e++;for(c=e;c<f;c++){h+=0>n?a[c]:a[c][n];var g=[b[c],h/d];k.push(g);l.push(g[0]);m.push(g[1]);h-=0>n?a[c-e]:a[c-e][n]}return{values:k,xData:l,yData:m}}},destroy:function(){this.dataEventsToUnbind.forEach(function(a){a()});l.prototype.destroy.apply(this,arguments)}});""});f(a,"masters/indicators/indicators.src.js",[],function(){})});
//# sourceMappingURL=indicators.js.map