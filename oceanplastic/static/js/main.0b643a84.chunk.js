(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,a,e){t.exports=e(17)},16:function(t,a,e){},17:function(t,a,e){"use strict";e.r(a);var i=e(1),r=e.n(i),n=e(9),s=e.n(n),l=(e(16),e(2)),o=e(3),d=e(6),c=e(4),h=e(5),m=e(0),p=[{year:1980,waste_total:7e7,"waste_mismanadged_%":"100,00",waste_mismanadged:7e7},{year:1981,waste_total:72e6,"waste_mismanadged_%":"98,30",waste_mismanadged:70776e3},{year:1982,waste_total:73e6,"waste_mismanadged_%":"97,60",waste_mismanadged:71248e3},{year:1983,waste_total:8e7,"waste_mismanadged_%":"96,90",waste_mismanadged:7752e4},{year:1984,waste_total:86e6,"waste_mismanadged_%":"96,20",waste_mismanadged:82732e3},{year:1985,waste_total:9e7,"waste_mismanadged_%":"95,50",waste_mismanadged:8595e4},{year:1986,waste_total:96e6,"waste_mismanadged_%":"94,80",waste_mismanadged:91008e3},{year:1987,waste_total:104e6,"waste_mismanadged_%":"94,10",waste_mismanadged:97864e3},{year:1988,waste_total:11e7,"waste_mismanadged_%":"92,80",waste_mismanadged:10208e4},{year:1989,waste_total:114e6,"waste_mismanadged_%":"91,40",waste_mismanadged:104196e3},{year:1990,waste_total:12e7,"waste_mismanadged_%":"90,00",waste_mismanadged:108e6},{year:1991,waste_total:124e6,"waste_mismanadged_%":"88,60",waste_mismanadged:109864e3},{year:1992,waste_total:132e6,"waste_mismanadged_%":"87,20",waste_mismanadged:115104e3},{year:1993,waste_total:137e6,"waste_mismanadged_%":"85,80",waste_mismanadged:117546e3},{year:1994,waste_total:151e6,"waste_mismanadged_%":"84,40",waste_mismanadged:127444e3},{year:1995,waste_total:156e6,"waste_mismanadged_%":"83,00",waste_mismanadged:12948e4},{year:1996,waste_total:168e6,"waste_mismanadged_%":"81,60",waste_mismanadged:137088e3},{year:1997,waste_total:18e7,"waste_mismanadged_%":"80,20",waste_mismanadged:14436e4},{year:1998,waste_total:188e6,"waste_mismanadged_%":"78,80",waste_mismanadged:148144e3},{year:1999,waste_total:202e6,"waste_mismanadged_%":"77,40",waste_mismanadged:156348e3},{year:2e3,waste_total:213e6,"waste_mismanadged_%":"76,00",waste_mismanadged:16188e4},{year:2001,waste_total:218e6,"waste_mismanadged_%":"74,60",waste_mismanadged:162628e3},{year:2002,waste_total:231e6,"waste_mismanadged_%":"73,20",waste_mismanadged:169092e3},{year:2003,waste_total:241e6,"waste_mismanadged_%":"71,80",waste_mismanadged:173038e3},{year:2004,waste_total:256e6,"waste_mismanadged_%":"70,40",waste_mismanadged:180224e3},{year:2005,waste_total:263e6,"waste_mismanadged_%":"69,00",waste_mismanadged:18147e4},{year:2006,waste_total:28e7,"waste_mismanadged_%":"67,60",waste_mismanadged:18928e4},{year:2007,waste_total:295e6,"waste_mismanadged_%":"66,20",waste_mismanadged:19529e4},{year:2008,waste_total:281e6,"waste_mismanadged_%":"64,80",waste_mismanadged:182088e3},{year:2009,waste_total:288e6,"waste_mismanadged_%":"63,40",waste_mismanadged:182592e3},{year:2010,waste_total:313e6,"waste_mismanadged_%":"62,00",waste_mismanadged:19406e4},{year:2011,waste_total:325e6,"waste_mismanadged_%":"60,60",waste_mismanadged:19695e4},{year:2012,waste_total:338e6,"waste_mismanadged_%":"59,20",waste_mismanadged:200096e3},{year:2013,waste_total:352e6,"waste_mismanadged_%":"57,80",waste_mismanadged:203456e3},{year:2014,waste_total:367e6,"waste_mismanadged_%":"56,40",waste_mismanadged:206988e3},{year:2015,waste_total:381e6,"waste_mismanadged_%":"55,00",waste_mismanadged:20955e4},{year:2025,waste_total:"","waste_mismanadged_%":"",waste_mismanadged:23517e4}],u=[{date:"2024-12-31",waste_mismanadged:23517e4},{date:"2025-01-01",waste_mismanadged:23517e4}],g=function(t){function a(){var t,e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=Object(d.a)(this,(t=Object(c.a)(a)).call.apply(t,[this].concat(r)))).state={width:0,height:0},e.initGraph=function(){var t=e.state,a=t.width,i=t.height,r=m.l("#basic-chart").append("svg").attr("id","main-svg-"+e.props.id).attr("viewBox",function(){return a<i?"0 0 100 "+100*i/a:"0 0 "+100*a/i+" 100"}).attr("class","svg-content"),n={top:5,right:5,bottom:10,left:10},s=r.append("g").attr("class","main-group").attr("transform","translate("+e.relativeWidth(0)+", "+e.relativeHeight(0)+")"),l=JSON.parse(JSON.stringify(p));l.map(function(t){return t.date=t.year+"-01-01",t.value=t.waste_mismanadged,t});var o=JSON.parse(JSON.stringify(l));o.pop(),o.forEach(function(t,a){return o[a].date=m.o("%Y-%m-%d")(t.date)});var d=JSON.parse(JSON.stringify(l));d.forEach(function(t,a){return d[a].date=m.o("%Y-%m-%d")(t.date)});var c=m.k().domain(m.g(d,function(t,a){return 0===a?m.p.offset(t.date,-1):a===d.length-1?m.p.offset(t.date,1):t.date})).range([e.relativeWidth(n.left),e.relativeWidth(100-n.right)]);s.append("g").attr("class","graph-axis graph-axis-x").attr("transform","translate(0,"+e.relativeHeight(100-n.bottom)+")").call(m.b(c).tickSize(0).ticks(10,m.m("%Y")));for(var h=[],u=0;u<6;u++)h.push(5e7*u);console.log(h);var g=m.j().domain([0,m.i(d,function(t){return t.value})+1e7]).range([e.relativeHeight(100-n.bottom),e.relativeHeight(n.top)]);s.append("g").attr("class","graph-axis graph-axis-y").attr("transform","translate("+e.relativeWidth(n.left)+",0)").call(m.c(g).tickSize(0).tickValues(h).tickFormat(function(t){return Math.round(t/1e6)})),s.append("clipPath").attr("id","main-clip-path").append("rect").attr("x",e.relativeWidth(n.left)+.5).attr("y",e.relativeHeight(n.top)+.5).attr("width",0).attr("height",e.relativeHeight(100)-e.relativeHeight(n.bottom)-e.relativeHeight(n.top)).transition().duration(1e4).ease(m.f).attr("width",e.relativeWidth(100)-e.relativeWidth(n.left)-e.relativeWidth(n.right)),s.append("clipPath").attr("id","grid-clip-path").append("rect").attr("x",e.relativeWidth(n.left)+.5).attr("y",e.relativeHeight(n.top)+.5).attr("height",e.relativeHeight(100)-e.relativeHeight(n.bottom)-e.relativeHeight(n.top)).attr("width",e.relativeWidth(100)-e.relativeWidth(n.left)-e.relativeWidth(n.right)),s.append("clipPath").attr("id","forecast-clip-path").append("rect").attr("x",.5+c(m.o("%Y-%m-%d")(o[o.length-1].date))).attr("y",e.relativeHeight(n.top)+.5).attr("width",.5+c(d[d.length-1].date)-c(m.o("%Y-%m-%d")(o[o.length-1].date))).attr("height",e.relativeHeight(100)-e.relativeHeight(n.bottom)-e.relativeHeight(n.top));var w=s.append("g").attr("clip-path","url(#main-clip-path)"),y=s.append("g").attr("class","grid-lines").attr("clip-path","url(#grid-clip-path"),f=y.append("g").attr("class","grid-x-lines"),v=y.append("g").attr("class","grid-y-lines");f.attr("transform","translate(0, "+i+")").call(m.b(c).ticks(10).tickSize(-i).tickFormat("")),v.call(m.c(g).tickValues(h).tickSize(-a).tickFormat(""));w.append("path").datum(d).attr("fill","none").attr("class","forecast-path").attr("stroke","white").attr("stroke-width","0.4px").attr("clip-path","url(#forecast-clip-path)").attr("stroke-dasharray","1, 1").attr("d",m.h().curve(m.d).x(function(t){return c(t.date)}).y(function(t){return g(t.value)}));w.append("path").datum(o).attr("fill","none").attr("class","now-path").attr("stroke","white").attr("stroke-width","0.4px").attr("d",m.h().curve(m.d).x(function(t){return c(t.date)}).y(function(t){return g(t.value)})),e.setState({data:l,mainGroup:s,linesGroup:w,margin:n,y:g,x:c,svg:r},e.drawHistoryPoints)},e.relativeHeight=function(t){return e.state.width<e.state.height?t*e.state.height/e.state.width:t},e.relativeWidth=function(t){return e.state.width<e.state.height?t:t*e.state.width/e.state.height},e.drawHistoryPoints=function(){var t=e.state.mainGroup.append("g").attr("class","points-group"),a=t.append("g").attr("transform","translate("+e.state.x(m.o("%Y-%m-%d")(e.state.data[0].date))+", "+e.state.y(e.state.data[0].value)+")");a.append("circle").attr("class","point-circle").attr("cx",0).attr("cy",0).attr("fill","black").attr("r",0).transition().duration(500).delay(1e3).attr("r",1),a.append("rect").attr("x",-.2).attr("y",-2).attr("width",.4).attr("height",0).attr("fill","white").transition().duration(500).delay(1500).attr("height",18).attr("y",-20),a.append("text").attr("fill","white").attr("x",0).attr("y",-17).text("1980").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(2e3).attr("opacity",1).attr("x",1),a.append("text").attr("fill","white").attr("x",0).attr("y",-13.5).text("Plastic starts").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(2500).attr("opacity",1).attr("x",1),a.append("text").attr("fill","white").attr("x",0).attr("y",-10.5).text("being recycled").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(2500).attr("opacity",1).attr("x",1);var i=t.append("g").attr("transform","translate("+e.state.x(m.o("%Y-%m-%d")("2008-01-01"))+", "+e.state.y(182088e3)+")");i.append("circle").attr("class","point-circle").attr("cx",0).attr("cy",0).attr("fill","black").attr("r",0).transition().duration(500).delay(7e3).attr("r",1),i.append("rect").attr("x",-.2).attr("y",2).attr("width",.4).attr("height",0).attr("fill","white").transition().duration(500).delay(7500).attr("height",18),i.append("text").attr("fill","white").attr("x",0).attr("y",19.5).text("2008").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(8e3).attr("opacity",1).attr("x",1),i.append("text").attr("fill","white").attr("x",0).attr("y",16).text("Economic crisis").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(8500).attr("opacity",1).attr("x",1);var r=t.append("g").attr("transform","translate("+e.state.x(m.o("%Y-%m-%d")("2025-01-01"))+", "+e.state.y(23517e4)+")");r.append("circle").attr("class","point-circle").attr("cx",0).attr("cy",0).attr("fill","black").attr("r",0).transition().duration(500).delay(1e4).attr("r",1),r.append("rect").attr("x",-.2).attr("y",2).attr("width",.4).attr("height",0).attr("fill","white").transition().duration(500).delay(10500).attr("height",18),r.append("text").attr("fill","white").attr("x",0).attr("y",19.5).text("2025").attr("text-anchor","end").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(11e3).attr("opacity",1).attr("x",-1),r.append("text").attr("fill","white").attr("x",0).attr("y",16).text("Forecast").attr("text-anchor","end").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(11500).attr("opacity",1).attr("x",-1)},e.splitLines=function(){var t=e.state.mainGroup.select(".forecast-path").clone(),a=t.datum();m.o("%Y-%m-%d")("2025-01-01");a[a.length-1].value-=11.5,console.log(a),t.datum(a).transition().duration(1e3).attr("d",m.h().curve(m.e).x(function(t){return e.state.x(t.date)}).y(function(t){return e.state.y(t.value)}))},e}return Object(h.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"graph-container",id:"basic-chart",style:{width:"60vw",height:"48vh"}},r.a.createElement("div",{className:"graph-title"},"Every year mismanaged plastic waste that may end up in the ocean (in millions of tons)")))}},{key:"componentDidMount",value:function(){var t=document.getElementById("basic-chart").clientWidth,a=document.getElementById("basic-chart").clientHeight;this.setState({width:t,height:a},this.initGraph)}},{key:"componentWillReceiveProps",value:function(t){t.showZoomedGraph&&(document.getElementById("basic-chart").style.marginTop="0px",this.state.mainGroup.append("rect").attr("fill","rgb(182, 182, 2)").attr("width",0).attr("height","0.7px").attr("x",this.relativeWidth(100-this.state.margin.right)-3).attr("y",this.state.y(this.state.data[this.state.data.length-1].value)).transition().duration(200).attr("width",this.relativeWidth(this.state.margin.right)-1),this.state.mainGroup.append("rect").attr("fill","rgb(182, 182, 2)").attr("width","0.7px").attr("height",0).attr("x",this.relativeWidth(100)-4).attr("y",this.state.y(this.state.data[this.state.data.length-1].value)).transition().duration(500).delay(200).attr("height",this.relativeHeight(100)))}}]),a}(i.Component),w=e(7),y=function(t){function a(){var t,e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=Object(d.a)(this,(t=Object(c.a)(a)).call.apply(t,[this].concat(r)))).state={width:0,height:0},e.initGraph=function(){var t=e.state,a=t.width,i=t.height,r=m.l("#zoomed-chart").append("svg").attr("id","main-svg-"+e.props.id).attr("viewBox",function(){return a<i?"0 0 100 "+100*i/a:"0 0 "+100*a/i+" 100"}).attr("class","svg-content"),n={top:5,right:5,bottom:10,left:15},s=r.append("g").attr("class","main-group").attr("transform","translate("+e.relativeWidth(0)+", "+e.relativeHeight(0)+")"),l=JSON.parse(JSON.stringify(u));l.map(function(t){return t.value=t.waste_mismanadged,t}),console.log(l);var o=JSON.parse(JSON.stringify(l));o.forEach(function(t,a){return o[a].date=m.o("%Y-%m-%d")(t.date)}),console.log(o);var d=m.k().domain(m.g(o,function(t,a){return a===o.length-1?m.n.offset(t.date,6):t.date})).range([e.relativeWidth(n.left),e.relativeWidth(100-n.right)]);s.append("g").attr("class","graph-axis graph-axis-x").attr("transform","translate(0,"+e.relativeHeight(100-n.bottom)+")").call(m.b(d).tickSize(0).ticks(1,m.m("%b %d %Y")));var c=m.j().domain([235169999.9,235170000.1]).range([e.relativeHeight(100-n.bottom),e.relativeHeight(n.top)]);s.append("g").attr("class","graph-axis graph-axis-y").attr("transform","translate("+e.relativeWidth(n.left)+",0)").call(m.c(c).tickSize(0).ticks(3)),s.append("clipPath").attr("id","main-clip-path-small").append("rect").attr("id","main-clip-path-small-rect").attr("x",e.relativeWidth(n.left)+.5).attr("y",e.relativeHeight(n.top)+.5).attr("width",0).attr("height",e.relativeHeight(100)-e.relativeHeight(n.bottom)-e.relativeHeight(n.top)),s.append("clipPath").attr("id","grid-clip-path").append("rect").attr("x",e.relativeWidth(n.left)+.5).attr("y",e.relativeHeight(n.top)+.5).attr("height",e.relativeHeight(100)-e.relativeHeight(n.bottom)-e.relativeHeight(n.top)).attr("width",e.relativeWidth(100)-e.relativeWidth(n.left)-e.relativeWidth(n.right));var h=s.append("g").attr("clip-path","url(#main-clip-path-small)"),p=s.append("g").attr("class","grid-lines").attr("clip-path","url(#grid-clip-path"),g=p.append("g").attr("class","grid-x-lines"),w=p.append("g").attr("class","grid-y-lines");g.attr("transform","translate(0, "+i+")").call(m.b(d).ticks(10).tickSize(-i).tickFormat("")),w.attr("transform","translate("+e.relativeWidth(n.left)+", 0)").call(m.c(c).tickSize(-a).tickFormat("")),console.log(o),h.append("path").datum(o).attr("fill","none").attr("class","now-path").attr("stroke","white").attr("stroke-width","0.4px").attr("d",m.h().curve(m.d).x(function(t){return d(t.date)}).y(function(t){return c(t.value)})),e.setState({data:l,mainGroup:s,linesGroup:h,margin:n,y:c,x:d,svg:r,gridYGroup:w})},e.relativeHeight=function(t){return e.state.width<e.state.height?t*e.state.height/e.state.width:t},e.relativeWidth=function(t){return e.state.width<e.state.height?t:t*e.state.width/e.state.height},e.drawHistoryPoints=function(){var t=e.state.mainGroup.append("g").attr("class","points-group").append("g").attr("class","first-points-group").attr("transform","translate("+e.state.x(m.o("%Y-%m-%d")(e.state.data[e.state.data.length-1].date))+", "+e.state.y(e.state.data[e.state.data.length-1].value)+")");t.append("circle").attr("class","point-circle").attr("cx",0).attr("cy",0).attr("fill","black").attr("r",0).transition().duration(500).delay(2e3).attr("r",1),t.append("rect").attr("x",-.2).attr("y",-2).attr("width",.4).attr("height",0).attr("fill","white").transition().duration(500).delay(2500).attr("height",18).attr("y",-20),t.append("text").attr("fill","white").attr("x",0).attr("y",-18).text("2025").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(3e3).attr("opacity",1).attr("x",1),t.append("text").attr("fill","white").attr("x",0).attr("y",-14).text("Mismanaged plastic").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(3500).attr("opacity",1).attr("x",1),t.append("text").attr("fill","white").attr("x",0).attr("y",-10.5).text("in the ocean forecast").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(3500).attr("opacity",1).attr("x",1).on("end",e.splitLines.bind(Object(w.a)(e),.0115))},e.splitLines=function(t){var a=e.state.x,i=e.state.y,r=t,n=e.state.mainGroup.select(".now-path").clone(),s=n.datum();s[0].value2=s[0].value-r,s[1].value2=s[1].value-r,console.log(s),n.datum(s).attr("class","path-clone").transition().duration(1e3).attr("d",m.h().curve(m.e).x(function(t){return a(t.date)}).y(function(t){return i(t.value2)})),e.state.mainGroup.select(".now-path").transition().duration(1e3).style("stroke","lightgrey");var l=m.a().curve(m.e).x(function(t){return a(t.date)}).y0(function(t){return i(t.value)}).y1(function(t){return i(t.value2)});e.state.linesGroup.append("path").datum(s).style("fill","white").style("fill-opacity",0).style("stroke","none").attr("class","area").attr("d",l).transition().duration(1e3).delay(1e3).style("fill-opacity",.3);var o=e.state.mainGroup.select(".points-group");e.state.mainGroup.select(".second-points-group").remove();var d=o.append("g").attr("class","second-points-group").attr("transform","translate("+e.relativeWidth(50)+", "+e.relativeHeight(50)+")");d.append("circle").attr("class","point-circle").attr("cx",0).attr("cy",0).attr("fill","black").attr("r",0).style("stroke","rgb(182, 182, 2)").transition().duration(500).delay(1e3).attr("r",1),d.append("rect").attr("class","wasted-rect").attr("x",-.2).attr("y",-2).attr("width",.4).attr("height",0).attr("fill","rgb(182, 182, 2)").transition().duration(500).delay(1500).attr("height",18).attr("y",-20),d.append("text").attr("class","wasted-impact-text").attr("fill","rgb(182, 182, 2)").attr("x",0).attr("y",-18).text("Your Impact").style("font-size","4px").attr("opacity",0).transition().duration(500).delay(2e3).attr("opacity",1).attr("x",1),d.append("text").attr("class","wasted-text").attr("fill","white").attr("x",0).attr("y",-14).text(1e3*t+"kg not wasted").style("font-size","3px").attr("opacity",0).transition().duration(500).delay(2e3).attr("opacity",1).attr("x",1)},e.subtractMore=function(t,a){var i=e.state.x,r=e.state.y;console.log(r.domain),console.log(t);var n=e.state.mainGroup.select(".path-clone").datum();n[0].value2=n[0].value2-t,n[1].value2=n[1].value2-t,console.log(n),r.domain([n[1].value2-3*t,n[1].value+4*t]),2===a&&r.domain([n[1].value2-t,n[1].value+2*t]),e.state.mainGroup.select(".graph-axis-y").transition().duration(1e3).call(m.c(r).tickSize(0).ticks(3)),e.state.gridYGroup.transition().duration(1e3).call(m.c(r).tickSize(-e.state.width).tickFormat("")),e.state.mainGroup.select(".now-path").transition().duration(1e3).attr("d",m.h().curve(m.d).x(function(t){return i(t.date)}).y(function(t){return r(t.value)})),e.state.mainGroup.select(".first-points-group").transition().duration(1e3).attr("transform","translate("+i(m.o("%Y-%m-%d")(e.state.data[e.state.data.length-1].date))+", "+r(e.state.data[e.state.data.length-1].value)+")"),e.state.mainGroup.select(".wasted-text").text(1e3*t+"kg not wasted"),e.state.mainGroup.select(".path-clone").transition().duration(1e3).attr("d",m.h().curve(m.e).x(function(t){return i(t.date)}).y(function(t){return r(t.value2)}));var s=m.a().curve(m.e).x(function(t){return i(t.date)}).y0(function(t){return r(t.value)}).y1(function(t){return r(t.value2)});e.state.mainGroup.select(".area").transition().duration(1e3).attr("d",s).transition().duration(1e3).delay(1e3).style("fill-opacity",.3)},e}return Object(h.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"graph-container",id:"zoomed-chart",style:{width:"60vw",height:"48vh"}},r.a.createElement("div",{className:"graph-title-zoomed"},"See your zoomed in impact")))}},{key:"componentDidMount",value:function(){var t=document.getElementById("zoomed-chart").clientWidth,a=document.getElementById("zoomed-chart").clientHeight;this.setState({width:t,height:a},this.initGraph)}},{key:"componentWillReceiveProps",value:function(t){t.showZoomedGraph&&!t.clickedFriend&&(console.log(t),document.getElementById("zoomed-chart").style.position="relative",document.getElementById("zoomed-chart").style.marginTop="-1px",document.getElementById("zoomed-chart").style.opacity="1",m.l("#main-clip-path-small-rect").transition().duration(1e3).ease(m.f).delay(1e3).attr("width",this.relativeWidth(100)-this.relativeWidth(this.state.margin.left)-this.relativeWidth(this.state.margin.right)),this.drawHistoryPoints()),t.clickedFriend&&!t.clickedFnf&&this.subtractMore(.115,1),t.clickedFnf&&this.subtractMore(11.5,2)}}]),a}(i.Component),f=function(t){function a(){var t;return Object(l.a)(this,a),(t=Object(d.a)(this,Object(c.a)(a).call(this))).state={reuseStatus:"active",friendStatus:"lock",fnfStatus:"lock"},t.handleClickReuse=t.handleClickReuse.bind(Object(w.a)(t)),t.handleClickFriend=t.handleClickFriend.bind(Object(w.a)(t)),t.handleClickFnf=t.handleClickFnf.bind(Object(w.a)(t)),t}return Object(h.a)(a,t),Object(o.a)(a,[{key:"handleClickReuse",value:function(){var t=this;if(console.log("click reuse"),"active"!==this.state.reuseStatus)return null;setTimeout(function(){return t.setState({friendStatus:"active"})},6500),this.setState({reuseStatus:"complete"},this.props.handleClick("reuse"))}},{key:"handleClickFriend",value:function(){var t=this;if("active"!==this.state.friendStatus)return null;setTimeout(function(){return t.setState({fnfStatus:"active"})},1500),this.setState({friendStatus:"complete"},this.props.handleClick("friend"))}},{key:"handleClickFnf",value:function(){if("active"!==this.state.fnfStatus)return null;this.setState({fnfStatus:"complete"},this.props.handleClick("fnf"))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-subtitle"},"Click to see the effect of your actions"),r.a.createElement("ul",{className:"progress-indicator stepped stacked"},r.a.createElement("li",{className:this.state.reuseStatus},r.a.createElement("span",{onClick:this.handleClickReuse,className:"bubble reuse"}),r.a.createElement("div",{className:"stacked-text"},r.a.createElement("div",{className:"title"},"1. Using Reusable Packaging"),r.a.createElement("div",{className:"content"},"Try to not use single-use plastic packaging in your daily life."))),r.a.createElement("li",{className:this.state.friendStatus},r.a.createElement("span",{onClick:this.handleClickFriend,className:"bubble friend"}),r.a.createElement("div",{className:"stacked-text"},r.a.createElement("div",{className:"title"},"2. Share the idea with friends"),r.a.createElement("div",{className:"content"},"You're using less plastic packaging now, the next step is persuading your frineds also use reusable packaging."))),r.a.createElement("li",{className:this.state.fnfStatus},r.a.createElement("span",{onClick:this.handleClickFnf,className:"bubble fnf"}),r.a.createElement("div",{className:"stacked-text"},r.a.createElement("div",{className:"title"},"3. Communication"),r.a.createElement("div",{className:"content"},"Try to share this idea to more people. You can write blogs, make some videos, post on social media, and help your frind to share the idea to their friends easily.")))))}}]),a}(r.a.Component),v=function(t){function a(){var t,e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=Object(d.a)(this,(t=Object(c.a)(a)).call.apply(t,[this].concat(r)))).state={showZoomedGraph:!1,clickedFriend:!1,clickedFnf:!1},e.handleClick=function(t){e.state.showZoomedGraph||e.setState({showZoomedGraph:!0}),"friend"===t&&e.setState({clickedFriend:!0}),"fnf"===t&&e.setState({clickedFnf:!0})},e}return Object(h.a)(a,t),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{handleClick:this.handleClick}),r.a.createElement("div",{className:"chart-container"},r.a.createElement(g,{id:1,showZoomedGraph:this.state.showZoomedGraph}),r.a.createElement(y,{id:2,className:"graph-zoom",showZoomedGraph:this.state.showZoomedGraph,clickedFriend:this.state.clickedFriend,clickedFnf:this.state.clickedFnf})),r.a.createElement("span",null),r.a.createElement("div",{className:"footer"},"@2019 Made by ",r.a.createElement("span",{onClick:function(){return window.open("https://www.guillaumemeigniez.me","_blank")},className:"author"},"Guillaume")," and ",r.a.createElement("span",{onClick:function(){return window.open("https://www.linkedin.com/in/zachchang/","_blank")},className:"author"},"Zach"),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.freepik.com/",title:"Freepik"},"Freepik")," and ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/prosymbols",title:"Prosymbols"},"Prosymbols")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"},"CC 3.0 BY"))))}}]),a}(i.Component);var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.0b643a84.chunk.js.map