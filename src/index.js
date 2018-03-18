import Konva from 'konva';

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

let truePos, falsePos;
let andPos, orPos;
let connectorPos;

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'canvas',   // id of container <div>
  width: innerWidth,
  height: innerHeight,
});

// then create layer
const layer = new Konva.Layer();

function addTrueButton(x, y) {
  const group = new Konva.Group({
    draggable: true,
  });
  const circleWidth = 100;
  const circleHeight = 50;
  const circle = new Konva.Circle({
    x: x,
    y: y,
    width: circleWidth,
    height: circleHeight,
    fill: 'orange',
    stroke: 'black',
    strokeWidth: 4,
  });

  const text = new Konva.Text({
    x: x - 10,
    y: y + circleHeight - 65,
    text: 'T',
    fontSize: 30,
    fontFamily: 'Comic Sans',
    fill: 'black',
  });
  group.on("dragend", function(e){
    truePos = circle.getAbsolutePosition();
  });

  group.add(circle);
  group.add(text);
  layer.add(group);
};

function addFalseButton(x, y) {
  const group = new Konva.Group({
    draggable: true,
  });
  const circleWidth = 100;
  const circleHeight = 50;
  const circle = new Konva.Circle({
    x: x,
    y: y,
    width: circleWidth,
    height: circleHeight,
    fill: 'orange',
    stroke: 'black',
    strokeWidth: 4,
  });

  const text = new Konva.Text({
    x: x - 10,
    y: y + circleHeight - 65,
    text: 'F',
    fontSize: 30,
    fontFamily: 'Comic Sans',
    fill: 'black',
  });
  group.on("dragend", function(e){
    falsePos = circle.getAbsolutePosition();
  });

  group.add(circle);
  group.add(text);
  layer.add(group);
};

function addAndGate(x, y) {
  const group = new Konva.Group({
    draggable: true,
  });
  const rectWidth = 100;
  const rectHeight = 50;
  const rect = new Konva.Rect({
    x: x,
    y: y,
    width: rectWidth,
    height: rectHeight,
    fill: 'orange',
    stroke: 'black',
    strokeWidth: 4,
  });

  const text = new Konva.Text({
    x: x + 15,
    y: y + rectHeight / 4,
    text: 'AND',
    fontSize: 30,
    fontFamily: 'Comic Sans',
    fill: 'black',
  });
  group.on("dragend", function(e){
    andPos = rect.getAbsolutePosition();
  });

  group.add(rect);
  group.add(text);
  layer.add(group);
};

function addOrGate(x, y) {
  const group = new Konva.Group({
    draggable: true,
  });
  const rectWidth = 100;
  const rectHeight = 50;
  const rect = new Konva.Rect({
    x: x,
    y: y,
    width: rectWidth,
    height: rectHeight,
    fill: 'orange',
    stroke: 'black',
    strokeWidth: 4,
  });

  const text = new Konva.Text({
    x: x + 30,
    y: y + rectHeight / 4,
    text: 'OR',
    fontSize: 30,
    fontFamily: 'Comic Sans',
    fill: 'black',
  });
  group.on("dragend", function(e){
    orPos = rect.getAbsolutePosition();
  });

  group.add(rect);
  group.add(text);
  layer.add(group);
};

function addConnectorButton(x, y) {
  const group = new Konva.Group({
    draggable: true,
  });
  const rectWidth = 150;
  const rectHeight = 10;
  const rect = new Konva.Rect({
    x: x,
    y: y,
    width: rectWidth,
    height: rectHeight,
    fill: 'orange',
    stroke: 'black',
    strokeWidth: 4,
  });

  group.on("dragend", function(e){
    connectorPos = rect.getAbsolutePosition();

    if (connectorPos.x >= andPos.x && connectorPos.x <= andPos.x+100) {
      const groupConnected = new Konva.Group();
      console.log("Connector and And Gate connected",groupConnected);
    }
  });

  group.add(rect);
  layer.add(group);
}

function trueButtonClick() {
  addTrueButton(0, 0);
  stage.add(layer);
}

function falseButtonClick() {
  addFalseButton(0, 0);
  stage.add(layer);
}

function andGateButtonClick() {
  addAndGate(0, 0);
  stage.add(layer);
}

function orGateButtonClick() {
  addOrGate(0, 0);
  stage.add(layer);
  console.log(connectorX, connectorY);
}

function connectorButtonClick() {
  addConnectorButton(0, 0);
  stage.add(layer);
}

window.trueButtonClick = trueButtonClick;
window.falseButtonClick = falseButtonClick;
window.andGateButtonClick = andGateButtonClick;
window.orGateButtonClick = orGateButtonClick;
window.connectorButtonClick = connectorButtonClick;
