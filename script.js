//chart of year 2018
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
c.width = 1250;
c.height = 650;

let data18 = {
  "January-2018": 24,
  "February-2018": 31,
  "March-2018": 37,
  "April-2018": 44,
  "May-2018": 59,
  "June-2018": 61,
  "July-2018": 66,
  "August-2018": 73,
  "September-2018": 86,
  "October-2018": 78,
  "November-2018": 95,
  "December-2018": 98,
};

const entries = Object.entries(data18);

function blocks(count) {
  return count * 10;
}

function drawAxis() {
  spd = 0;
  yPlot = 54;
  ctx.beginPath();

  ctx.moveTo(blocks(5), blocks(54));
  ctx.lineTo(blocks(130), blocks(54));

  ctx.moveTo(blocks(5), blocks(54));

  for (let i = 0; i <= 4; i++) {
    ctx.strokeStyle = "black";
    ctx.strokeText(spd, blocks(1), blocks(yPlot));
    yPlot -= 12.5;
    spd += 25;
  }

  ctx.stroke();
}

function drawHLines() {
  yPos = 41.5;
  ctx.beginPath();
  ctx.moveTo(blocks(5), blocks(41.5));

  for (let i = 0; i <= 3; i++) {
    ctx.strokeStyle = "grey";
    ctx.lineWidth = "0.5";
    ctx.moveTo(blocks(5), blocks(yPos));
    ctx.lineTo(blocks(130), blocks(yPos));

    yPos -= 12.5;
  }
  ctx.stroke();
}

function listMonth() {
  xPos = 10;
  var monthList = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  ctx.font = "14px gracia";

  for (let i = 0; i <= 11; i++) {
    ctx.strokeText(monthList[i], blocks(xPos), blocks(57));
    xPos += 10;
  }
  ctx.stroke();
}

function drawChart() {
  var xPlot = 10;
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.lineWidth = "1.5";
  ctx.moveTo(blocks(xPlot), blocks(54 - entries[1] / 2));
  for (const [month, speed] of entries) {
    var speedInBlocks = speed / 2;
    ctx.lineTo(blocks(xPlot), blocks(54 - speedInBlocks));
    xPlot += 10;
  }
  ctx.stroke();
}

//chart of year 2019
let c1 = document.getElementById("myCanvas1");
let ctx1 = c1.getContext("2d");
c1.width = 1250;
c1.height = 650;

let data19 = {
  "January-2019": 34,
  "February-2019": 22,
  "March-2019": 37,
  "April-2019": 44,
  "May-2019": 59,
  "June-2019": 63,
  "July-2019": 68,
  "August-2019": 73,
  "September-2019": 82,
  "October-2019": 87,
  "November-2019": 95,
  "December-2019": 96,
};

const entries1 = Object.entries(data19);
function drawAxis1() {
  spd = 0;
  yPlot = 54;
  ctx1.beginPath();
  ctx1.moveTo(blocks(5), blocks(54));
  ctx1.lineTo(blocks(130), blocks(54));

  ctx1.moveTo(blocks(5), blocks(54));

  for (let i = 0; i <= 4; i++) {
    ctx2.strokeStyle = "black";
    ctx1.strokeText(spd, blocks(1), blocks(yPlot));
    yPlot -= 12.5;
    spd += 25;
  }
  ctx1.stroke();
}

function drawHLines1() {
  yPos = 41.5;
  ctx1.beginPath();
  ctx1.moveTo(blocks(5), blocks(41.5));

  for (let i = 0; i <= 3; i++) {
    ctx1.strokeStyle = "grey";
    ctx1.lineWidth = "0.5";
    ctx1.moveTo(blocks(5), blocks(yPos));
    ctx1.lineTo(blocks(130), blocks(yPos));
    yPos -= 12.5;
  }
  ctx1.stroke();
}

function listMonth1() {
  xPos = 10;
  var monthList = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  ctx1.font = "14px gracia";
  for (let i = 0; i <= 11; i++) {
    ctx1.strokeText(monthList[i], blocks(xPos), blocks(57));
    xPos += 10;
  }
  ctx1.stroke();
}

function drawChart1() {
  var xPlot = 10;
  ctx1.beginPath();
  ctx1.lineWidth = "1.5";
  ctx1.strokeStyle = "blue";
  ctx1.moveTo(blocks(xPlot), blocks(54 - entries1[1] / 2));
  for (const [month, speed] of entries1) {
    var speedInBlocks = speed / 2;
    ctx1.lineTo(blocks(xPlot), blocks(54 - speedInBlocks));
    xPlot += 10;
  }
  ctx1.stroke();
}
//chart for 2020
let c2 = document.getElementById("myCanvas2");
let ctx2 = c2.getContext("2d");
c2.width = 1250;
c2.height = 650;

let data20 = {
  "January-2020": 54,
  "February-2020": 34,
  "March-2020": 47,
  "April-2020": 24,
  "May-2020": 49,
  "June-2020": 11,
  "July-2020": 55,
  "August-2020": 63,
  "September-2020": 76,
  "October-2020": 87,
  "November-2020": 85,
  "December-2020": 95,
};
const entries2 = Object.entries(data20);

function drawAxis2() {
  spd = 0;
  yPlot = 54;
  ctx2.beginPath();
  ctx2.moveTo(blocks(5), blocks(54));
  ctx2.lineTo(blocks(130), blocks(54));

  ctx2.moveTo(blocks(5), blocks(54));
  for (let i = 0; i <= 4; i++) {
    ctx2.strokeStyle = "black";
    ctx2.strokeText(spd, blocks(1), blocks(yPlot));
    yPlot -= 12.5;
    spd += 25;
  }
  ctx2.stroke();
}

function drawHLines2() {
  yPos = 41.5;
  ctx2.beginPath();
  ctx2.moveTo(blocks(5), blocks(41.5));

  for (let i = 0; i <= 3; i++) {
    ctx2.strokeStyle = "grey";
    ctx2.lineWidth = "0.5";
    ctx2.moveTo(blocks(5), blocks(yPos));
    ctx2.lineTo(blocks(130), blocks(yPos));

    yPos -= 12.5;
  }
  ctx2.stroke();
}

function listMonth2() {
  xPos = 10;

  var monthList = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  ctx2.font = "14px gracia";

  for (let i = 0; i <= 11; i++) {
    ctx2.strokeText(monthList[i], blocks(xPos), blocks(57));
    xPos += 10;
  }
  ctx2.stroke();
}

function drawChart2() {
  var xPlot = 10;
  ctx2.beginPath();
  ctx2.strokeStyle = "blue";
  ctx2.lineWidth = "1.5";
  ctx2.moveTo(blocks(xPlot), blocks(54 - entries2[1] / 2));
  for (const [month, speed] of entries2) {
    var speedInBlocks = speed / 2;
    ctx2.lineTo(blocks(xPlot), blocks(54 - speedInBlocks));
    xPlot += 10;
  }
  ctx2.stroke();
}

//dropdown menu
var sel = document.getElementById("year");
sel.onchange = function () {
  var x = sel.value;
  if (x == "first") {
    c.classList.add("class", "vis");
    c1.classList.remove("class", "vis");
    c2.classList.remove("class", "vis");
  } else if (x == "second") {
    c.classList.remove("class", "vis");
    c1.classList.add("class", "vis");
    c2.classList.remove("class", "vis");
  } else if (x == "third") {
    c.classList.remove("class", "vis");
    c1.classList.remove("class", "vis");
    c2.classList.add("class", "vis");
  }
};
listMonth();
drawAxis();
drawHLines();
drawChart();

listMonth1();
drawAxis1();
drawHLines1();
drawChart1();

listMonth2();
drawAxis2();
drawHLines2();
drawChart2();

