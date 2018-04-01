import Konva from 'konva';

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

const gateArray = [];
const booleanInputsArray = [];
const gateWidth = 100;
const gateHeight = 100;
const booleanInputWidth = 100;
const booleanInputHeight = 50;

const stage = new Konva.Stage({
  container: 'canvas',
  width: innerWidth,
  height: innerHeight,
});

const layer = new Konva.Layer();

function addTrueInput(x, y) {
  const group = new Konva.Group({
    draggable: true,
  });
  const circleWidth = booleanInputWidth;
  const circleHeight = booleanInputHeight;
  const circle = new Konva.Circle({
    x: x,
    y: y,
    width: circleWidth,
    height: circleHeight,
    fill: 'lightgreen',
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

  group.add(circle);
  group.add(text);
  layer.add(group);
  booleanInputsArray.push(group);
};

function addFalseInput(x, y) {
  const group = new Konva.Group({
    draggable: true,
  });
  const circleWidth = booleanInputWidth;
  const circleHeight = booleanInputHeight;
  const circle = new Konva.Circle({
    x: x,
    y: y,
    width: circleWidth,
    height: circleHeight,
    fill: 'lightgreen',
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

  group.add(circle);
  group.add(text);
  layer.add(group);
  booleanInputsArray.push(group);
};

function addAndGate(x, y) {
  const group = new Konva.Group({
    draggable: true,
  });
  const rectWidth = gateWidth;
  const rectHeight = gateHeight;
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

  group.add(rect);
  group.add(text);
  layer.add(group);
  gateArray.push(group);
};

function addOrGate(x, y) {
  const group = new Konva.Group({
    draggable: true,
  });
  const rectWidth = gateWidth;
  const rectHeight = gateHeight;
  const rect = new Konva.Rect({
    x: x,
    y: y,
    width: rectWidth,
    height: rectHeight,
    fill: 'skyblue',
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

  group.add(rect);
  group.add(text);
  layer.add(group);
  gateArray.push(group);
};

function addConnector(x, y) {
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
    fill: 'gray',
    stroke: 'black',
    strokeWidth: 4,
  });

  group.on("dragend", function (e) {
    const connectorX = group.getAbsolutePosition().x;
    const connectorY = group.getAbsolutePosition().y;
    const listOfGateCollisions = gateArray.map((gate) => {
      const gatePos = gate.getAbsolutePosition();
      const gateX = gatePos.x;
      const gateY = gatePos.y;
      return detectRectangleCollision(gateX, gateY, gateWidth, gateHeight, connectorX, connectorY, rectWidth, rectHeight);
    });

    const listOfBooleanInputCollisions = booleanInputsArray.map((input) => {
      const booleanInputPos = input.getAbsolutePosition();
      const booleanInputX = booleanInputPos.x;
      const booleanInputY = booleanInputPos.y;
      return detectRectangleCollision(booleanInputX, booleanInputY, booleanInputWidth, booleanInputHeight, connectorX, connectorY, rectWidth, rectHeight);
    });

    console.log(listOfGateCollisions);
    console.log(listOfBooleanInputCollisions);

    group.moveToBottom();
  });
  group.add(rect);
  layer.add(group);
}

function detectRectangleCollision(gatePosX, gatePosY, gateWidth, gateHeight, connectorPosX, connectorPosY, connectorWidth, connectorHeight) {
  return (gatePosX < connectorPosX + connectorWidth &&
    gatePosX + gateWidth > connectorPosX &&
    gatePosY < connectorPosY + connectorHeight &&
    gateHeight + gatePosY > connectorPosY);
}

function trueInputClick() {
  addTrueInput(0, 0);
  stage.add(layer);
}

function falseInputClick() {
  addFalseInput(0, 0);
  stage.add(layer);
}

function andGateClick() {
  addAndGate(0, 0);
  stage.add(layer);
}

function orGateClick() {
  addOrGate(0, 0);
  stage.add(layer);
  console.log(connectorX, connectorY);
}

function connectorClick() {
  addConnector(0, 0);
  stage.add(layer);
}

window.trueInputClick = trueInputClick;
window.falseInputClick = falseInputClick;
window.andGateClick = andGateClick;
window.orGateClick = orGateClick;
window.connectorClick = connectorClick;
