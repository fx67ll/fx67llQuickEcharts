<template>
	<div class="fx67ll-box"><quick-echarts :chartOption="chartOption"></quick-echarts></div>
</template>

<script>
export default {
	name: 'fx67llIndex',
	data() {
		return {
			chartOption: {
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
	methods: {}
};
</script>

<style lang="less" scoped="scoped">
.fx67ll-box {
	width: 100%;
	height: 100%;
	.ban-user-select();
}
</style>
