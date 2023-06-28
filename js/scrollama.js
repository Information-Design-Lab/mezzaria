/* CLARA SCROLLAMA */
//capire come fare versione mobile + fade in/out con prima/ultima dataviz

// using d3 for convenience
var main = d3.select(".main-clara");
var scrolly = main.select("#scrolly-clara");
var figure = scrolly.select(".figure-clara");
var article = scrolly.select(".article-clara");
var step = article.selectAll(".article-clara .step");



// initialize the scrollama
var scroller = scrollama();

// generic window resize listener event
function handleResize() {
  // 1. update height of step elements
  var stepH = Math.floor(window.innerHeight + 2 +"%vh"); // * 0.75
  step.style("height", stepH + "px");

  var figureHeight = window.innerHeight;
  // var figureMarginTop = (window.innerHeight - figureHeight) / 2;
  var figureMarginTop = 0;

  figure
	.style("height", figureHeight + "px")
	.style("top", figureMarginTop + "px");

  // CODICE ORIGINALE
  // var figureHeight = window.innerHeight / 2;
  // var figureMarginTop = (window.innerHeight - figureHeight) / 2;
  // figure
	// .style("height", figureHeight + "px")
	// .style("top", figureMarginTop + "px");

  // 3. tell scrollama to update new element dimensions
  scroller.resize();
}

// scrollama event handlers
function handleStepEnter(response) {
  console.log(response);
  // response = { element, direction, index }

  // add color to current step only
  step.classed("is-active", function(d, i) {
	return i === response.index;
  });

  // update graphic based on step
  // figure.select("p").text(response.index + 1);
  jQuery(".figure-clara .dataviz").removeClass("active");
  jQuery(".figure-clara .dataviz#dataviz-" + response.index).addClass("active");
}

function setupStickyfill() {
  d3.selectAll(".sticky").each(function() {
	Stickyfill.add(this);
  });
}

function init() {
  setupStickyfill();

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResize();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
	.setup({
	  step: "#scrolly-clara article .step",
	  offset: 0.33, //DEVO CAMBIARE OFFSET PER MODIFICARE IL PUNTO DI TRIGGER
	  debug: false //SETTARE SU FALSE PER ELIMINARE DEBUGGER
	})
	.onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", handleResize);
}

// kick things off
init();





/* AIR SCROLLAMA */

// using d3 for convenience
var mainair = d3.select(".main-air");
var scrollyair = mainair.select("#scrolly-air");
var figureair = scrollyair.select(".figure-air");
var articleair = scrollyair.select(".article-air");
var stepair = articleair.selectAll(".article-air .step");

// initialize the scrollama
var scrollerair = scrollama();

// generic window resize listener event
function handleResizeAir() {
  // 1. update height of step elements
  var stepHair = Math.floor(window.innerHeight + 2 +"%vh"); // * 0.75
  stepair.style("height", stepHair + "px");

  var figureHeightair = window.innerHeight;
  var figureMarginTopair = 0;

  figureair
	.style("height", figureHeightair + "px")
	.style("top", figureMarginTopair + "px");

  // CODICE ORIGINALE
  // var figureHeight = window.innerHeight / 2;
  // var figureMarginTop = (window.innerHeight - figureHeight) / 2;
  // figure
	// .style("height", figureHeight + "px")
	// .style("top", figureMarginTop + "px");

  // 3. tell scrollama to update new element dimensions
  scrollerair.resize();
}

// scrollama event handlers
function handleStepEnterAir(responseair) {
  console.log(responseair);
  // response = { element, direction, index }

  // add color to current step only
  stepair.classed("is-active", function(d, i) {
	return i === responseair.index;
  });

  // update graphic based on step
  // figure.select("p").text(response.index + 1);
  jQuery(".figure-air .dataviz").removeClass("active");
  jQuery(".figure-air .dataviz#dataviz-" + responseair.index).addClass("active");
}

function setupStickyfillAir() {
  d3.selectAll(".sticky").each(function() {
	Stickyfillair.add(this);
  });
}

function initair() {
  setupStickyfillAir();

  // 1. force a resize on load to ensure proper dimensions are sent to scrollama
  handleResizeAir();

  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scrollerair
	.setup({
	  step: "#scrolly-air article .step",
	  offset: 0.33, //DEVO CAMBIARE OFFSET PER MODIFICARE IL PUNTO DI TRIGGER
	  debug: false //SETTARE SU FALSE PER ELIMINARE DEBUGGER
	})
	.onStepEnter(handleStepEnterAir);

  // setup resize event
  window.addEventListener("resize", handleResizeAir);
}

// kick things off
initair();