<template>
	<!-- 测试文件 -->
	<div class="fx67ll-box"><quick-echarts ref="qe" :chartOption="chartOption"></quick-echarts></div>
</template>

<script>
export default {
	name: 'fx67llIndex',
	data() {
		return {
			chartOption: {
				tooltip: {
					trigger: 'item'
				},
				legend: {
					top: '5%',
					left: 'center'
				},
				series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: ['40%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '40',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [
							{ value: 1048, name: '搜索引擎' },
							{ value: 735, name: '直接访问' },
							{ value: 580, name: '邮件营销' },
							{ value: 484, name: '联盟广告' },
							{ value: 300, name: '视频广告' }
						]
					}
				]
			}
		};
	},
	mounted() {
		var self = this;
		setTimeout(function() {
			self.$refs.qe.setHLByDataIndex([0, 1]);
		}, 1000);
		setTimeout(function() {
			self.$refs.qe.setDPByDataIndex(1);
		}, 2000);
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
