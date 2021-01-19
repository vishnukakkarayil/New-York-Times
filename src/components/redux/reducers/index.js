import { combineReducers } from 'redux'
import SearchList from './SearchList'
import ArticleList from './ArticleList'

const RootReducer = combineReducers({
    articleList : ArticleList,
    updatedSearchList : SearchList
})
export default RootReducer
