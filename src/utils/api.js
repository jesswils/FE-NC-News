import axios from 'axios';

const api = axios.create({ baseURL: 'https://nc-news-example-seminar-3-8.herokuapp.com/' })

export const fetchArticles = (sort, topic) => {
    return api.get('/api/articles', {
        params: { sort_by: sort, topic: topic }
    }).then((res) => {
        return res.data.articles
    })
}

export const fetchTopics = () => {
    return api.get('/api/topics').then((res) => {
        return res.data.topics
    })
}

export const fetchArticlesById = (id) => {
    return api.get(`/api/articles/${id}`).then((res) => {
        return res.data.article
    })
}

export const patchVote = (id, obj) => {
    return api.patch(`/api/articles/${id}`, obj).then((res) => {
        return res
    })
}

export const fetchCommentsById = (id, sort, order) => {
    return api.get(`/api/articles/${id}/comments`, {
        params: { sort_by: sort, order: order }
    }).then((res) => {
        return res.data.comments
    })
}

export const postCommentById = (id, comment) => {
    return api.post(`/api/articles/${id}/comments`, {
        body: comment, username: 'cooljmessy'
    }).then((res) => {
        return console.log(res)
    })
}