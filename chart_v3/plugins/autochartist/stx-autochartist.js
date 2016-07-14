STX.Autochartist=function(container){
	this.container=container;
	this.wrapper=$$$(".stx-autochartist-wrapper", container);
	this.ol=$$$("ol", this.wrapper);
};

//variable id for auto chartist
var injectId;

//auto chartist event listener that will be execute upon a click in 
//the auto chartist plugin widget
window.addEventListener("message", function (event) {
if (event.origin === 'http://bo.autochartist.com') {
    if(injectId){
    	stxx.removeInjection(injectId);
    }
    var data = JSON.parse(event.data);
    if (data.type === 'result:select') {
        var result = data.value;
        //console.log(result); // see the console for the full structure of the result object
        //console.log(result.symbol + ":" + result.level);

        stxx.resultLevel = result.level;
        stxx.forecast = result.forecast;
        stxx.identified = result.identified;
        stxx.startDate = result.start;
        stxx.price = result.price;
        
        injectId = stxx.append("draw", injectAutoChartist);
        stxx.setPeriodicityV2(1, result.interval);
        stxx.chart.autoChartistClick = true;
        stxx.newChart(result.symbol, null, null, finishedLoadingNewChart(stxx.chart.symbol, result.symbol));
    }
}
}, false);

function createIFrame(url) {
	var newIFrame = document.createElement("iframe");
	newIFrame.setAttribute("id", "autochartist");
	newIFrame.setAttribute("width", "98%");
	newIFrame.setAttribute("height", "100%");
	newIFrame.setAttribute("scrolling", "yes");
	newIFrame.setAttribute("frameborder", "no");
	newIFrame.setAttribute("src", url);
	
	var divTest = document.getElementById("autoChartistWidget");
	divTest.appendChild(newIFrame);
}

function createIFrameUrl(){
    // old url
    //var url = "http://bo.autochartist.com/boV3/index.jsp?delay=n&interval=1,2,5&rowLimit=9&locale=en&tz=GMT%2B2&width=265&&b=430&u=ChartIQ&logintoken=8e3bb3b23b07554f2080d3af1d5a7a16&css=examples/widget.css&groups=0#results";
    
    // new url
    // mandatory parameters (b, u, delay, logintoken), all others optional
    var url = "http://bo.autochartist.com/boV3/?p=chartiq&b=1&u=example&rowLimit=50&locale=en&tz=GMT%2B2&width=245&groups=0&delay=n&css=examples/widget.css&logintoken=54461a7a6c0bd9f14e82f2a5af5d9a52#results";
    
    // create new autochartist url with username and logintoken and then pass the url to createIFrame function
    createIFrame(url);
}

createIFrameUrl();

/**
* function to draw auto chartist value onto the chart
*/
function injectAutoChartist(){

if (stxx.chart.dataSet.length){
	
    var color = "green";
    var type = "segment";
    var lineWidth = 2;

    var solidParameters={
        pattern: "solid",
        lineWidth: lineWidth
    };
    
    var dottedParameters={
    	pattern: "dotted",
        lineWidth: lineWidth
    };
    
    var arrowParameters={
    	lineWidth: lineWidth,
    	color: color
    };
    
    // modify date for x-axis match
    var milliseconds = Date.parse(stxx.identified);
    var date = new Date(milliseconds);
    
    // add leading zeros to account for single digits, take only last two digits regardless if there is a zero in front
    var dateTime = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    
    // get the start date
    var newStartDate = new Date(stxx.startDate);
    var startPoint = stxx.pixelFromDate(newStartDate, stxx.chart);
    
    // get the location of the identified(last) and forecast date
    var newIdentDate = new Date(stxx.identified);
    var foreCastDate = stxx.pixelFromDate(date, stxx.chart);

    /**************** last price line *****************/
    var panel = stxx.chart.panel;
    var price = stxx.chart.dataSet[stxx.chart.dataSet.length-1].Close;
    var low = stxx.chart.dataSet[stxx.chart.dataSet.length-1].Low;
    
    // get the tick for the identified date 
    var tickX = stxx.tickFromDate(newIdentDate, stxx.chart);
    
    // get the pixel point for the identifed tick mark
    var pixelX = stxx.pixelFromTick(tickX, stxx.chart);
    
    // get the pixel point for the identified date
    var dateX = stxx.pixelFromDate(newIdentDate, stxx.chart);
    
    // get the quote data for the identified date
    var datapointXClose;
    
    if(stxx.price){
	datapointXClose = stxx.price;
    }
    // hack to account for recent data under a minute old has no closing value, need to think more on this
    else if(stxx.chart.dataSet[tickX]){
   	datapointXClose = stxx.chart.dataSet[tickX];
    }
    else{
    	datapointXClose = price;
    }
    
    // get the location of last closing quote
    var datapointY = stxx.pixelFromPrice(datapointXClose, panel);
    
    // get the location of the level price
    var y=stxx.pixelFromPrice(stxx.resultLevel, panel);
    
    // get the location of the forecast price
    var forecastY = stxx.pixelFromPrice(stxx.forecast, panel);

    stxx.startClip(panel.panelName);
    // level line
    stxx.plotLine(startPoint, stxx.chart.width, y, y, color, type, stxx.chart.context, true, solidParameters);
    // identified line
    stxx.plotLine(pixelX, pixelX, low, low-1, color, "vertical", stxx.chart.context, true, dottedParameters);
    // forecast line
    stxx.plotLine(foreCastDate, stxx.chart.width, forecastY, forecastY-1, color, type, stxx.chart.context, true, dottedParameters);
    // closing line for last identifed quote
    stxx.plotLine(dateX, stxx.chart.width, datapointY, datapointY-1, color, type, stxx.chart.context, true, dottedParameters);
    // draw arrow between last closing and forecast
    canvas_arrow(stxx.chart.context, arrowParameters, dateX, dateX+50, datapointY, forecastY);
    stxx.endClip();
    
    // draw labels, don't put between clip segments as it will not show the labels
    stxx.createYAxisLabel(panel, stxx.formatYAxisPrice(stxx.resultLevel, panel), y, color);
    stxx.createXAxisLabel(panel, dateTime, pixelX, color);
    stxx.createYAxisLabel(panel, stxx.formatYAxisPrice(stxx.forecast, panel), forecastY, color);
    stxx.createYAxisLabel(panel, stxx.formatYAxisPrice(datapointXClose, panel), datapointY, color);
 }
}

/**
 * function to draw arrow onto the chart
 */
function canvas_arrow(context, parameters, x0, x1, y0, y1){
    var headlen = 30;   // length of head in pixels
    var angle = Math.atan2(y1-y0,x1-x0);
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x1-headlen*Math.cos(angle-Math.PI/6),y1-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(x1, y1);
    context.lineTo(x1-headlen*Math.cos(angle+Math.PI/6),y1-headlen*Math.sin(angle+Math.PI/6));
    
    context.strokeStyle = parameters.color;
    context.lineWidth = parameters.lineWidth;
    context.stroke();
}