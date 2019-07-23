import axios from 'axios'
const url ="http://localhost:3001/todos";
export default {

    getItems({commit}) {
        axios.get(url).then((response) => commit('loadItems',response.data))
            .catch((error) => console.log(error))
    },
    addItem(context,item){
        axios.post(url,item).then(response => context.commit('addItem',response.data))
            .catch((error) => console.log(error));
    },
    updateItem(context,item){
      axios.put(url+'/'+item.id,item).then(response => context.commit('updateItem',response.data));
    }
}