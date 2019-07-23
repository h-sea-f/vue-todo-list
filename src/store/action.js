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
    updateItem({dispatch},item){
      axios.patch(url+'/'+item.id,item).then(response => {
          console.log(response.data);
          dispatch('getItems')});
    },
    deleteItem({dispatch},id){
        axios.delete(url+'/'+id).then(response => dispatch('getItems'))
    }
}