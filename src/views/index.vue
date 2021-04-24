<template>
	<div class="fx67ll-box">
		<quick-echarts :chartOption="chartOptionA" @nodeClick="nodeClickA"></quick-echarts>
		<quick-echarts :chartOption="chartOptionB" @nodeClick="nodeClickB"></quick-echarts>
	</div>
</template>

<script>
export default {
	name: 'fx67llIndex',
	data() {
		return {
			chartOptionA: {
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
			},
			chartOptionB: {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						data: [1590, 230, 2264, 218, 1355, 147, 2604],
						type: 'line'
					}
				]
			}
		};
	},
	methods: {
		nodeClickA(chartParams) {
			console.log(chartParams);
		},
		nodeClickB(chartParams) {
			console.log(chartParams);
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.fx67ll-box {
	width: 100%;
	height: 100%;
	.ban-user-select();
}
</style>