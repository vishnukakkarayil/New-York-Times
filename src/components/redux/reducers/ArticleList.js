const initialState = {
    data:[]
}

const ArticleList = (state = initialState,action) => {
    switch(action.type){
        case 'LIST_ARTICLE':
            return{
                ...state,
                data:action.payload
            }
            // case 'SINGLE_ARTICLE':
            // return{
            //     ...state,
            //     data:action.payload
            // }
        default:
            return state
    }
};

export default ArticleList;