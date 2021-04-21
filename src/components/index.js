import quickEcharts from './charts/quickEcharts.vue';
quickEcharts.install = function(Vue) {
    Vue.component(quickEcharts.name, quickEcharts);
};
export default quickEcharts;