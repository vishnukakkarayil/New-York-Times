// import { api } from '../../../apis/Api'
// console.log(api)
import axios from 'axios'
export const ListAction = () =>
    (dispatch,getState)=>{
        dispatch({type:'LIST_ARTICLE'})
        axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=y0pGKNASy3k8cP39dmvdwjPGaPG8dLhk')
        .then((res)=> dispatch({type:'LIST_ARTICLE',payload:res.data.results}))
        .catch(err=> dispatch({type:'LIST_ARTICLE',payload:err}))
}
