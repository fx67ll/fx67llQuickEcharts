# fx67llQuickEcharts
A tool to help you use Echarts quickly!  

[npm](https://www.npmjs.com/package/fx67ll-quick-echarts "npm")  

### 使用步骤
1. 安装 -> `npm install fx67ll-quick-echarts --save`
2. 注册 -> `main.js`
```
import fx67llQuickEcharts from 'fx67ll-quick-echarts'
Vue.use(fx67llQuickEcharts)
```
3. 使用 -> `.vue`
```
// chartOption，echarts option
<quick-echarts :chartOption="chartOption"></quick-echarts>
```

### 简易示例
```
<template>
	<quick-chart :chartOption="option"></quick-chart>
</template>

<script>
export default {
	data() {
		return {
			option: {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'line'
					}
				]
			}
		};
	}
};
</script>
```

### 好用之处
1. 新手能非常快速的上手Echarts，只需要去官网查找需要的option即可，三步即可使用
2. 对于不需要过多复杂操作，仅做展示的图表，可以直接使用，只需要组装好需要的option传入即可
3. 封装了自动监听数据变化和图表大小变化自动适应

### 不足之处
1. 目前只有一个最基础的echarts使用组件，对于需要点击图标的一些复杂操作等等，都没有封装，未来会逐步添加
2. 对于一些特定组件的封装程度不够，常用的线图柱图饼图会优先做出一定封装，并允许添加复合的样式
3. 目前是整体组件引用，后续会添加按需加载的支持，提升项目性能


## 0.1.3.20210423
* delete 'empty data'

## 0.1.2.20210422
* watch props -> chartOption

## 0.1.1.20210421
* change nodename base-echarts -> quick-echarts

## 0.1.0.20210421
* finish baseEcharts single version
* copy the option from ['echarts'](https://echarts.apache.org/zh/index.html "echarts")