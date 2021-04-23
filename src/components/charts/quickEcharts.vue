<template>
	<div class="quick-echarts"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
	name: 'quickEcharts',
	props: {
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
			myChart: null
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
		updateChart() {
			if (!this.myChart) return;
			this.myChart.setOption(this.chartOption);
		},
		handleWindowResize() {
			if (!this.myChart) return;
			this.myChart.resize();
		}
	},
	mounted() {
		this.myChart = echarts.init(this.$el);
		this.updateChart();
		window.addEventListener('resize', this.handleWindowResize);
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
