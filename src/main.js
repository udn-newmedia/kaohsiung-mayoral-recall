import Vue from 'vue';

Vue.config.productionTip = false;
window.Promise = Promise;

import Choropleth from './components/Choropleth.vue';

new Vue({
  el: '#recall-han',
  components: {
    Choropleth
  },
});