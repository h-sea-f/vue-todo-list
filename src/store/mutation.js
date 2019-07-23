export default {
    addItem(state, item) {
        state.items.push(item);
    },
    updateItem(state, updateItem) {
        state.items.filter((i) => {return i.id === parseInt(updateItem.id)})[0].content = updateItem.content;
    },
    updateStatus(state,status){
        state.status = status;
    },
    loadItems(state,itemList) {
        state.items = itemList;
    }
}