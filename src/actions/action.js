import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise)

const API_ROOT = 'https://conduit.productionready.io/api/'

const responseBody = res => res.body

let token = null
const tokenPlugin = req => {
    if(token) {
        req.set('authorization', `Token ${token}`)
    }
}

const request = {
    get: url => 
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
}

const limit = (count, p) => `limit=${count}&offset=${p?p*count:0}`

const Articles = {
    all: page =>
        request.get(`articles?${limit(10, page)}`),
    get: id => 
        request.get(`articles/${id}`),
    byAuthor: (username, page) => 
        request.get(`articles?author=${username}&${limit(5, page)}`)
    
}

const Tags = {
    get: () => 
        request.get(`tags`),
}

const Comments = {
    get: id => 
        request.get(`articles/${id}/comments`),
}

const Profile = {
    get: username => 
        request.get(`profiles/${username}`)
}

export default {
    Articles,
    Comments,
    Profile,
    Tags
}