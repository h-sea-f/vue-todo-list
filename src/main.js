import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'


Vue.use(Vuex)

// const store = new Vuex.Store({
//     state: {
//         items: [],
//         status: 0
//     },
//     mutations: {
//         addItem(state, item) {
//             state.items.push(item);
//         },
//         updateItem(state, updateItem) {
//             state.items.filter((i) => {return i.id === parseInt(updateItem.id)})[0].content = updateItem.content;
//         },
//         updateStatus(state,status){
//             state.status = status;
//         }
//     },
//     getters: {
//         getShowList: (state)  => {
//             if (state.status === 0) {
//                 return state.items;
//             } else if (state.status === 1) {
//                 return state.items.filter((item) => !item.isChecked)
//             }else{
//                 return state.items.filter((item) => item.isChecked)
//             }
//         }
//     }
// })
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
