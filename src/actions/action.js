const API_ROOT = 'https://conduit.productionready.io/api/'

let token = null

const tokenPlugin = token => {
    return {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'authorization': token?`Token ${token}`:null
    }
}

const callBack = respone => {
    return respone.json().then(json => json)
}

const request = {
    get: url => 
        fetch(`${API_ROOT}${url}`, {method: 'GET', headers: tokenPlugin(token)}).then(response => callBack(response)),
    post: (url, body) =>
        fetch(`${API_ROOT}${url}`, {method: 'POST', body: JSON.stringify(body), headers: tokenPlugin(token)}).then(response => callBack(response)),
    put: (url, body) => 
        fetch(`${API_ROOT}${url}`, {method: 'PUT', body: JSON.stringify(body), headers: tokenPlugin(token)}).then(response => callBack(response)),
    del: url => 
        fetch(`${API_ROOT}${url}`, {method: 'DEL', headers: tokenPlugin(token)}).then(response => callBack(response))
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
        request.post('articles', {article}),
    update: (article) =>
        request.put(`articles/${article.slug}`, {article: {...article, slug: undefined}})
    
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