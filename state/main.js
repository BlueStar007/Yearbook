import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state: {
        isShow: false,

    },
    mutations: {
        show(state) {
            state.isShow = !state.isShow
        }
    }
})
export default store;