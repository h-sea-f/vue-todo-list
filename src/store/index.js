import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import getters from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [],
        status: 0
    },
    getters,
    mutations
})