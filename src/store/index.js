import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import getters from './getter'
import actions from './action'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        items: [],
        status: 0
    },
    getters,
    mutations,
    actions
})