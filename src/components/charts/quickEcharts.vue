<template>
	<div class="quick-echarts" @click="$emit('nodeClick', chartParams)"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
	name: 'quickEcharts',
	props: {
		// Echarts图表option配置
		chartOption: {
			type: Object,
			required: true,
			validator(object) {
				return Object.keys(object).length > 0;
			}
		}
	},
	data() {
		return {
			// Echarts实例对象
			myChart: null,
			// 点击处返回的数据
			chartParams: null
		};
	},
	watch: {
		chartOption: {
			deep: true,
			handler: function(newval, oldVal) {
				this.updateChart();
			}
		}
	},
	methods: {
		// 更新图表视图
		updateChart() {
			if (!this.myChart) return;
			this.myChart.setOption(this.chartOption);
		},
		// 自适应容器大小
		handleWindowResize() {
			if (!this.myChart) return;
			this.myChart.resize();
		},
		// 监听图表节点点击
		handleClickNode() {
			let self = this;
			if (!this.myChart) return;
			this.myChart.on('click', function(params) {
				self.chartParams = params;
			});
		},
		// 监听图表空白处点击
		handleClickZr() {
			let self = this;
			if (!this.myChart) return;
			this.myChart.getZr().on('click', function(event) {
				// 没有 target 意味着鼠标/指针不在任何一个图形元素上，它是从“空白处”触发的
				if (!event.target) {
					self.chartParams = null;
				}
			});
		}
	},
	mounted() {
		this.myChart = echarts.init(this.$el);
		this.updateChart();
		window.addEventListener('resize', this.handleWindowResize);
		this.handleClickNode();
		this.handleClickZr();
	},
	beforeDestroy() {
		window.addEventListener('resize', this.handleWindowResize);
	}
};
</script>

<style lang="less" scoped="scoped">
.quick-echarts {
	width: 100%;
	height: 100%;
}
</style>
