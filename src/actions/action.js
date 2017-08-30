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
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    put: (url, body) => 
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
    del: url => 
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody)
}

const limit = (count, p) => `limit=${count}&offset=${p?p*count:0}`

const Articles = {
    all: page =>
        request.get(`articles?${limit(10, page)}`),
    get: id => 
        request.get(`articles/${id}`),
    byAuthor: (username, page) => 
        request.get(`articles?author=${username}&${limit(5, page)}`),
    byTag: (tag, page) =>
        request.get(`articles?tag=${tag}&${limit(10, page)}`),
    create: (article) => 
        request.post('articles', {article})
    
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
        request.get(`profiles/${username}`),
    register: (username, email, password) =>
        request.post('users', { user: { username, email, password } }),
    login: (email, password) => 
        request.post(`users/login`, { user: { email, password }}),
    info: () => 
        request.get('user'),
    settings: (user) => 
        request.put('user', {user}) 
}

export default {
    Articles,
    Comments,
    Profile,
    Tags,
    setToken: (accessToken) => {token = accessToken}
}