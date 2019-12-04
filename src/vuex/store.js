export default {
    state:{
        showHeader:true,
        aa:1
    },
    getters:{
        isShowHeader(state) {
            return state.showHeader;
        }
    },
    mutations:{
        changeHeader(state,payload) {
            state.showHeader = payload;
        }
    },
    actions:{
        aa() {
            console.log(111)
        }
    }
}