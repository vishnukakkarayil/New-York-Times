const initialState = {
    data:[]
}
const SearchList = (state = initialState, action) => {
    switch(action.type){
        case 'SEARCH_RESULT':
            // console.log(action.results)
            return{
            ...state,
            data : action.results
            }
            default:
            return state
    }
};

export default SearchList;