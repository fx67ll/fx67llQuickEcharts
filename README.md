# fx67llQuickEcharts
A tool to help you use Echarts quickly!  

[npm](https://www.npmjs.com/package/fx67ll-quick-echarts "npm")  

### 组件说明
1. 这本来是一个测试如何发布Vue组件至npm库的测试项目  
2. 做完之后发现很有意思，就稍微完善了一下成为一个简易快速构建Echarts图表的组件  
3. 基本上消灭了我之前关于Echarts渲染DOM的一堆冗余代码  
4. 功能不多后续有想法的话再考虑继续封装，github源码地址在底部，各位自行取用

### 使用步骤
1. 安装 -> `npm install fx67ll-quick-echarts --save`
2. 注册 -> `main.js`
```JavaScript
import fx67llQuickEcharts from 'fx67ll-quick-echarts'
Vue.use(fx67llQuickEcharts)
```
3. 使用 -> `.vue`，可在 [Echarts官网](https://echarts.apache.org/examples/zh/index.html) 查询相关option配置
```
// 属性 chartOption: Echarts option 图表配置项
// 事件 @nodeClick: 图表中节点的点击事件，返回值 chartParams 当前节点的具体信息
// 事件 @nodeClick: 如果没有点击到节点，返回值为null，可以用来判断是否点击到空白处了
// 方法 setHLByDataIndex(dataIndex)：指定图表节点高亮的方法，传入参数 dataIndex 需要高亮的节点下标或下标数组，number/number[]
// 方法 setDPByDataIndex(dataIndex)：指定图表节点取消高亮的方法，传入参数 dataIndex 需要取消高亮的节点下标或下标数组，number/number[]
<quick-echarts ref="qe" :chartOption="chartOption" @nodeClick="nodeClick"></quick-echarts>
methods{
	this.$refs.qe.setHLByDataIndex([0, 1]);
	this.$refs.qe.setDPByDataIndex([0, 1]);
}
```
```JavaScript
// 返回值 chartParams 的各项属性详细说明
{
    // 当前点击的图形元素所属的组件名称，
    // 其值如 'series'、'markLine'、'markPoint'、'timeLine' 等。
    componentType: string,
    // 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义。
    seriesType: string,
    // 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义。
    seriesIndex: number,
    // 系列名称。当 componentType 为 'series' 时有意义。
    seriesName: string,
    // 数据名，类目名
    name: string,
    // 数据在传入的 data 数组中的 index
    dataIndex: number,
    // 传入的原始数据项
    data: Object,
    // sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，
    // dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。
    // 其他大部分图表中只有一种 data，dataType 无意义。
    dataType: string,
    // 传入的数据值
    value: number|Array,
    // 数据图形的颜色。当 componentType 为 'series' 时有意义。
    color: string,
    // 用户自定义的数据。只在 graphic component 和自定义系列（custom series）
    // 中生效，如果节点定义上设置了如：{type: 'circle', info: {some: 123}}。
    info: *
}
```

### 简易示例
```Vue
<template>
	<quick-chart :chartOption="option" @nodeClick="nodeClick"></quick-chart>
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
	},
	methods: {
		nodeClick(chartParams) {
			console.log(chartParams);
		}
	}
};
</script>
```

### 好用之处
1. 新手能非常快速的上手Echarts，只需要去[echarts官网](https://echarts.apache.org/examples/zh/index.html)查找需要的option即可，三步即可使用
2. 对于不需要过多复杂操作，仅做展示的图表，可以直接使用，只需要组装好需要的option传入即可
3. 封装了自动监听数据变化，图表大小变化自动适应，以及监听了图表点击事件，可用于相关的联动交互

### 不足之处
1. 目前只有一个最基础的Echarts使用组件，对于一些复杂的图表交互操作和事件监听没有封装，未来会逐步添加
2. 对于一些特定复杂样式没有作出封装，常用的线图柱图饼图会优先做出一定封装，并允许添加复合的样式
3. 目前是整体组件引用，后续会添加按需加载的支持，提升项目性能

### 使用版本
`Vue2.6 + Echarts5.1`

我是 [fx67ll.com](https://fx67ll.com)，如果您发现本文有什么错误，欢迎在评论区讨论指正，感谢您的阅读！  
如果您喜欢这篇文章，欢迎访问我的 [本文github仓库地址](https://github.com/fx67ll/fx67llQuickEcharts)，为我点一颗Star，Thanks~ :)  
***转发请注明参考文章地址，非常感谢！！！***

## 0.1.8.20211028
# fix code type

## 0.1.7.20211027
* add blog title -- '基于Vue简易封装的快速构建Echarts组件 -- fx67llQuickEcharts'  
* add more description  

## 0.1.6.20210607
* add setHLByDataIndex(dataIndex) for action highlight
* add setDPByDataIndex(dataIndex) for action downplay

## 0.1.5.20210425
* clear index.vue for fix bugs

## 0.1.4.20210424
* add @nodeclick(chartParams)

## 0.1.3.20210423
* delete 'empty data'

## 0.1.2.20210422
* watch props -> chartOption

## 0.1.1.20210421
* change nodename base-echarts -> quick-echarts

## 0.1.0.20210421
* finish baseEcharts single version
* copy the option from ['echarts'](https://echarts.apache.org/zh/index.html "echarts")
