import baseEcharts from './charts/baseEcharts.vue';
baseEcharts.install = function(Vue) {
    Vue.component(baseEcharts.name, baseEcharts);
};
export default baseEcharts;