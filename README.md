## 演示
![演示](https://zzerx.cn/download/qingwuxiangdi.jpg)

## 开始
```javascript
//导入
import { FengShuiCompass,CompassData } from "./src/compass-main";

//定义线条宽度 边框宽度 字体宽度
var [_lineWidth, _borderWidth, _fontSpace] = [3, 3, 5];
//矫正角度
var correctionAngle = -90;
var canvas = document.getElementById('canvas');
var body = document.body;

canvas.width = body.clientWidth;
canvas.height = body.clientHeight;
//height * dpr
var ctx = canvas.getContext('2d');
var screenWidth = body.clientWidth ;//screen.availWidth;
var screenHeight = body.clientHeight ;//screen.availHeight;
//创建罗盘对象
const fs =  new FengShuiCompass();
//设定中心点位置
var centralPoint = {
    x: screenWidth/2 , y: screenHeight/2 ,
  };
//罗盘数据
 let cpData = new CompassData().getAllData();

fs.setCenterPoint(centralPoint.x,centralPoint.y)
  .setRadius(centralPoint.x)
  .setLatticeFill([[3,3,'red'],[4,3,'blue']])
  .setLayerFill([[3,'green']])
   .setCompassData(cpData)
  // .setCompassData(cdata)
  .draw(ctx)
```
