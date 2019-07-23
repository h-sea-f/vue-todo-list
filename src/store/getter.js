export default {
    getShowList: (state)  => {
        if (state.status === 0) {
            return state.items;
        } else if (state.status === 1) {
            return state.items.filter((item) => !item.completed)
        }else{
            return state.items.filter((item) => item.completed)
        }
    }
}