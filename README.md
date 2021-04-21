# fx67llQuickEcharts
A tool to help you use Echarts quickly!  

[npm](https://www.npmjs.com/package/fx67ll-quick-echarts "npm")

### 使用步骤
+ `npm install fx67ll-quick-echarts --save`
+ 在`main.js`中注册组件
```
import fx67llQuickEcharts from 'fx67ll-quick-echarts'
Vue.use(fx67llQuickEcharts)
```
+ 在需要的地方直接使用
```
// chartOption，echarts option
<base-echarts :chartOption="chartOption"></base-echarts>
```

## 0.1.0.20210421
* finish baseEcharts single version
* copy the option from ['echarts'](https://echarts.apache.org/zh/index.html "echarts")