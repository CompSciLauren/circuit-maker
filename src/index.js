import Konva from 'konva';

const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'app',   // id of container <div>
  width: innerWidth,
  height: innerHeight,
});

// then create layer
const layer = new Konva.Layer();

function addGate(x, y) {
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
  group.add(rect);
  group.add(text);
  layer.add(group);
};

addGate(200, 200);

// add the layer to the stage
stage.add(layer);
