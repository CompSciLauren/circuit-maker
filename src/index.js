import Konva from 'konva';

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

const gateArray = [];
const gateWidth = 100;
const gateHeight = 100;

const stage = new Konva.Stage({
  container: 'canvas',
  width: innerWidth,
  height: innerHeight,
});

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
    fill: 'gray',
    stroke: 'black',
    strokeWidth: 4,
  });

  group.on("dragend", function (e) {
    const listOfCollisions = gateArray.map((gate) => {
        const gatePos = gate.getAbsolutePosition();
        const connectorX = group.getAbsolutePosition().x;
        const connectorY = group.getAbsolutePosition().y;
        const gateX = gatePos.x;
        const gateY = gatePos.y;
        return detectRectangleCollision(gateX, gateY, gateWidth, gateHeight, connectorX, connectorY, rectWidth, rectHeight);
      },
    );

    console.log(listOfCollisions);

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
