/*
 Highcharts JS v8.1.0 (2020-05-12)

 Highcharts Drilldown module

 Author: Torstein Honsi
 License: www.highcharts.com/license

*/
(function(g){"object"===typeof module&&module.exports?(g["default"]=g,module.exports=g):"function"===typeof define&&define.amd?define("highcharts/modules/drilldown",["highcharts"],function(n){g(n);g.Highcharts=n;return g}):g("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(g){function n(g,p,n,z){g.hasOwnProperty(p)||(g[p]=z.apply(null,n))}g=g?g._modules:{};n(g,"modules/drilldown.src.js",[g["parts/Color.js"],g["parts/Globals.js"],g["parts/Point.js"],g["parts/SVGRenderer.js"],g["parts/Tick.js"],
g["parts/Utilities.js"]],function(g,p,n,z,B,l){var q=l.addEvent,G=l.removeEvent,C=l.animObject,u=l.extend,x=l.fireEvent,H=l.format,v=l.merge,D=l.objectEach,w=l.pick,I=l.syncTimeout,J=p.noop;l=p.defaultOptions;var r=p.Chart,t=p.seriesTypes,E=t.pie;t=t.column;var F=1;u(l.lang,{drillUpText:"\u25c1 Back to {series.name}"});l.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#003399",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",color:"#003399",fontWeight:"bold",
textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}}};z.prototype.Element.prototype.fadeIn=function(a){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:w(this.newOpacity,1)},a||{duration:250})};r.prototype.addSeriesAsDrilldown=function(a,b){this.addSingleSeriesAsDrilldown(a,b);this.applyDrilldown()};r.prototype.addSingleSeriesAsDrilldown=function(a,b){var c=a.series,d=c.xAxis,e=c.yAxis,f=[],h=[],k;var m=this.styledMode?{colorIndex:w(a.colorIndex,
c.colorIndex)}:{color:a.color||c.color};this.drilldownLevels||(this.drilldownLevels=[]);var y=c.options._levelNumber||0;(k=this.drilldownLevels[this.drilldownLevels.length-1])&&k.levelNumber!==y&&(k=void 0);b=u(u({_ddSeriesId:F++},m),b);var l=c.points.indexOf(a);c.chart.series.forEach(function(a){a.xAxis!==d||a.isDrilling||(a.options._ddSeriesId=a.options._ddSeriesId||F++,a.options._colorIndex=a.userOptions._colorIndex,a.options._levelNumber=a.options._levelNumber||y,k?(f=k.levelSeries,h=k.levelSeriesOptions):
(f.push(a),a.purgedOptions=v({_ddSeriesId:a.options._ddSeriesId,_levelNumber:a.options._levelNumber,selected:a.options.selected},a.userOptions),h.push(a.purgedOptions)))});a=u({levelNumber:y,seriesOptions:c.options,seriesPurgedOptions:c.purgedOptions,levelSeriesOptions:h,levelSeries:f,shapeArgs:a.shapeArgs,bBox:a.graphic?a.graphic.getBBox():{},color:a.isNull?(new g(m.color)).setOpacity(0).get():m.color,lowerSeriesOptions:b,pointOptions:c.options.data[l],pointIndex:l,oldExtremes:{xMin:d&&d.userMin,
xMax:d&&d.userMax,yMin:e&&e.userMin,yMax:e&&e.userMax},resetZoomButton:this.resetZoomButton},m);this.drilldownLevels.push(a);d&&d.names&&(d.names.length=0);b=a.lowerSeries=this.addSeries(b,!1);b.options._levelNumber=y+1;d&&(d.oldPos=d.pos,d.userMin=d.userMax=null,e.userMin=e.userMax=null);c.type===b.type&&(b.animate=b.animateDrilldown||J,b.options.animation=!0)};r.prototype.applyDrilldown=function(){var a=this.drilldownLevels;if(a&&0<a.length){var b=a[a.length-1].levelNumber;this.drilldownLevels.forEach(function(a){a.levelNumber===
b&&a.levelSeries.forEach(function(a){a.options&&a.options._levelNumber===b&&a.remove(!1)})})}this.resetZoomButton&&(this.resetZoomButton.hide(),delete this.resetZoomButton);this.pointer.reset();this.redraw();this.showDrillUpButton();x(this,"afterDrilldown")};r.prototype.getDrilldownBackText=function(){var a=this.drilldownLevels;if(a&&0<a.length)return a=a[a.length-1],a.series=a.seriesOptions,H(this.options.lang.drillUpText,a)};r.prototype.showDrillUpButton=function(){var a=this,b=this.getDrilldownBackText(),
c=a.options.drilldown.drillUpButton,d;if(this.drillUpButton)this.drillUpButton.attr({text:b}).align();else{var e=(d=c.theme)&&d.states;this.drillUpButton=this.renderer.button(b,null,null,function(){a.drillUp()},d,e&&e.hover,e&&e.select).addClass("highcharts-drillup-button").attr({align:c.position.align,zIndex:7}).add().align(c.position,!1,c.relativeTo||"plotBox")}};r.prototype.drillUp=function(){if(this.drilldownLevels&&0!==this.drilldownLevels.length){for(var a=this,b=a.drilldownLevels,c=b[b.length-
1].levelNumber,d=b.length,e=a.series,f,h,k,m,g=function(b){e.forEach(function(a){a.options._ddSeriesId===b._ddSeriesId&&(c=a)});var c=c||a.addSeries(b,!1);c.type===k.type&&c.animateDrillupTo&&(c.animate=c.animateDrillupTo);b===h.seriesPurgedOptions&&(m=c)};d--;)if(h=b[d],h.levelNumber===c){b.pop();k=h.lowerSeries;if(!k.chart)for(f=e.length;f--;)if(e[f].options.id===h.lowerSeriesOptions.id&&e[f].options._levelNumber===c+1){k=e[f];break}k.xData=[];h.levelSeriesOptions.forEach(g);x(a,"drillup",{seriesOptions:h.seriesPurgedOptions||
h.seriesOptions});m.type===k.type&&(m.drilldownLevel=h,m.options.animation=a.options.drilldown.animation,k.animateDrillupFrom&&k.chart&&k.animateDrillupFrom(h));m.options._levelNumber=c;k.remove(!1);m.xAxis&&(f=h.oldExtremes,m.xAxis.setExtremes(f.xMin,f.xMax,!1),m.yAxis.setExtremes(f.yMin,f.yMax,!1));h.resetZoomButton&&(a.resetZoomButton=h.resetZoomButton,a.resetZoomButton.show())}this.redraw();0===this.drilldownLevels.length?this.drillUpButton=this.drillUpButton.destroy():this.drillUpButton.attr({text:this.getDrilldownBackText()}).align();
this.ddDupes.length=[];x(a,"drillupall")}};q(r,"afterInit",function(){var a=this;a.drilldown={update:function(b,c){v(!0,a.options.drilldown,b);w(c,!0)&&a.redraw()}}});q(r,"beforeShowResetZoom",function(){if(this.drillUpButton)return!1});q(r,"render",function(){(this.xAxis||[]).forEach(function(a){a.ddPoints={};a.series.forEach(function(b){var c,d=b.xData||[],e=b.points;for(c=0;c<d.length;c++){var f=b.options.data[c];"number"!==typeof f&&(f=b.pointClass.prototype.optionsToObject.call({series:b},f),
f.drilldown&&(a.ddPoints[d[c]]||(a.ddPoints[d[c]]=[]),a.ddPoints[d[c]].push(e?e[c]:!0)))}});D(a.ticks,B.prototype.drillable)})});t.prototype.animateDrillupTo=function(a){if(!a){var b=this,c=b.drilldownLevel;this.points.forEach(function(a){var b=a.dataLabel;a.graphic&&a.graphic.hide();b&&(b.hidden="hidden"===b.attr("visibility"),b.hidden||(b.hide(),a.connector&&a.connector.hide()))});I(function(){b.points&&b.points.forEach(function(a,b){b=b===(c&&c.pointIndex)?"show":"fadeIn";var d="show"===b?!0:void 0,
e=a.dataLabel;if(a.graphic)a.graphic[b](d);e&&!e.hidden&&(e.fadeIn(),a.connector&&a.connector.fadeIn())})},Math.max(this.chart.options.drilldown.animation.duration-50,0));delete this.animate}};t.prototype.animateDrilldown=function(a){var b=this,c=this.chart,d=c.drilldownLevels,e,f=C(c.options.drilldown.animation),h=this.xAxis,k=c.styledMode;a||(d.forEach(function(a){b.options._ddSeriesId===a.lowerSeriesOptions._ddSeriesId&&(e=a.shapeArgs,k||(e.fill=a.color))}),e.x+=w(h.oldPos,h.pos)-h.pos,this.points.forEach(function(a){var c=
a.shapeArgs;k||(c.fill=a.color);a.graphic&&a.graphic.attr(e).animate(u(a.shapeArgs,{fill:a.color||b.color}),f);a.dataLabel&&a.dataLabel.fadeIn(f)}),delete this.animate)};t.prototype.animateDrillupFrom=function(a){var b=C(this.chart.options.drilldown.animation),c=this.group,d=c!==this.chart.columnGroup,e=this;e.trackerGroups.forEach(function(a){if(e[a])e[a].on("mouseover")});d&&delete this.group;this.points.forEach(function(f){var h=f.graphic,k=a.shapeArgs,g=function(){h.destroy();c&&d&&(c=c.destroy())};
h&&(delete f.graphic,e.chart.styledMode||(k.fill=a.color),b.duration?h.animate(k,v(b,{complete:g})):(h.attr(k),g()))})};E&&u(E.prototype,{animateDrillupTo:t.prototype.animateDrillupTo,animateDrillupFrom:t.prototype.animateDrillupFrom,animateDrilldown:function(a){var b=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],c=this.chart.options.drilldown.animation,d=b.shapeArgs,e=d.start,f=(d.end-e)/this.points.length,h=this.chart.styledMode;a||(this.points.forEach(function(a,g){var k=a.shapeArgs;
h||(d.fill=b.color,k.fill=a.color);if(a.graphic)a.graphic.attr(v(d,{start:e+g*f,end:e+(g+1)*f}))[c?"animate":"attr"](k,c)}),delete this.animate)}});n.prototype.doDrilldown=function(a,b,c){var d=this.series.chart,e=d.options.drilldown,f=(e.series||[]).length;d.ddDupes||(d.ddDupes=[]);for(;f--&&!h;)if(e.series[f].id===this.drilldown&&-1===d.ddDupes.indexOf(this.drilldown)){var h=e.series[f];d.ddDupes.push(this.drilldown)}x(d,"drilldown",{point:this,seriesOptions:h,category:b,originalEvent:c,points:"undefined"!==
typeof b&&this.series.xAxis.getDDPoints(b).slice(0)},function(b){var c=b.point.series&&b.point.series.chart,d=b.seriesOptions;c&&d&&(a?c.addSingleSeriesAsDrilldown(b.point,d):c.addSeriesAsDrilldown(b.point,d))})};p.Axis.prototype.drilldownCategory=function(a,b){D(this.getDDPoints(a),function(c){c&&c.series&&c.series.visible&&c.doDrilldown&&c.doDrilldown(!0,a,b)});this.chart.applyDrilldown()};p.Axis.prototype.getDDPoints=function(a){return this.ddPoints&&this.ddPoints[a]};B.prototype.drillable=function(){var a=
this.pos,b=this.label,c=this.axis,d="xAxis"===c.coll&&c.getDDPoints,e=d&&c.getDDPoints(a),f=c.chart.styledMode;d&&(b&&e&&e.length?(b.drillable=!0,b.basicStyles||f||(b.basicStyles=v(b.styles)),b.addClass("highcharts-drilldown-axis-label"),b.removeOnDrillableClick&&G(b.element,"click"),b.removeOnDrillableClick=q(b.element,"click",function(b){b.preventDefault();c.drilldownCategory(a,b)}),f||b.css(c.chart.options.drilldown.activeAxisLabelStyle)):b&&b.drillable&&b.removeOnDrillableClick&&(f||(b.styles=
{},b.css(b.basicStyles)),b.removeOnDrillableClick(),b.removeClass("highcharts-drilldown-axis-label")))};q(n,"afterInit",function(){var a=this,b=a.series;a.drilldown&&q(a,"click",function(c){b.xAxis&&!1===b.chart.options.drilldown.allowPointDrilldown?b.xAxis.drilldownCategory(a.x,c):a.doDrilldown(void 0,void 0,c)});return a});q(p.Series,"afterDrawDataLabels",function(){var a=this.chart.options.drilldown.activeDataLabelStyle,b=this.chart.renderer,c=this.chart.styledMode;this.points.forEach(function(d){var e=
d.options.dataLabels,f=w(d.dlOptions,e&&e.style,{});d.drilldown&&d.dataLabel&&("contrast"!==a.color||c||(f.color=b.getContrast(d.color||this.color)),e&&e.color&&(f.color=e.color),d.dataLabel.addClass("highcharts-drilldown-data-label"),c||d.dataLabel.css(a).css(f))},this)});var A=function(a,b,c,d){a[c?"addClass":"removeClass"]("highcharts-drilldown-point");d||a.css({cursor:b})};q(p.Series,"afterDrawTracker",function(){var a=this.chart.styledMode;this.points.forEach(function(b){b.drilldown&&b.graphic&&
A(b.graphic,"pointer",!0,a)})});q(n,"afterSetState",function(){var a=this.series.chart.styledMode;this.drilldown&&this.series.halo&&"hover"===this.state?A(this.series.halo,"pointer",!0,a):this.series.halo&&A(this.series.halo,"auto",!1,a)})});n(g,"masters/modules/drilldown.src.js",[],function(){})});
//# sourceMappingURL=drilldown.js.map