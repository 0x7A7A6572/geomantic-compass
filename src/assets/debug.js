import { FengShuiCompass,CompassData } from "./src/compass-main";
// import gg  from "./src/test";

gg.a();

var [_lineWidth, _borderWidth, _fontSpace] = [3, 3, 5];
var correctionAngle = -90;
var canvas = document.getElementById('canvas');
var body = document.body;
// const canvas = res[0].node
canvas.width = body.clientWidth;
canvas.height = body.clientHeight;
//height * dpr
var ctx = canvas.getContext('2d');
var screenWidth = body.clientWidth ;//screen.availWidth;
var screenHeight = body.clientHeight ;//screen.availHeight;
const fs =  new FengShuiCompass();

var centralPoint = {
    x: screenWidth/2 , y: screenHeight/2 ,
  };

 let cpData = new CompassData().getAllData();

fs.setCenterPoint(centralPoint.x,centralPoint.y)
  .setRadius(centralPoint.x)
  .setLatticeFill([[3,3,'red'],[4,3,'blue']])
  .setLayerFill([[3,'green']])
   .setCompassData(cpData)
  // .setCompassData(cdata)
  .draw(ctx)

  //setLatticeFill([[3,3,'red'],[3,4,'red']])


//   var colorss = ['#ff0000', '#4c17e2', '#1777e2', '#17cde2', '#3fc371', '#ffbc3a', '#b017e2'];
//   // var tongGong = 5
//   layerFill(7, colorss[3], false, null, null);
//   //单层填充
//   //layerFill(0,colorss[3],false,null,null)
//   //单层填充
//   var fills = [3, 4, 5, 9, 10, 11, 15, 16, 17, 21, 22, 23];
//   for (var i = 0; i < fills.length; i++) {
//    latticeFill(fills[i], 3, "#00ff0099");
//  }
//  latticeFill(3, 3, "red");
//   latticeFill(4, 3, "red");
//   latticeFill(2, 1, "orange");


  // console.info(`半径：${centralPoint.x}
  // 天池高度： ${fs.getTianChiRadiu()}
  // 平均层高： ${(centralPoint.x - fs.getTianChiRadiu()) / fs.getLayersLength() }
  // `
  // )
