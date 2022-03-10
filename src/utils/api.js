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
    }).catch((error) => {
        console.log(error)
    })
}