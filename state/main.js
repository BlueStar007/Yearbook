import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state: {
        nihao: 'nihao',
        test: '测试'
    }
})
export default store;