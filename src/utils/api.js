import axios from 'axios';

const api = axios.create({ baseURL: 'https://nc-news-example-seminar-3-8.herokuapp.com/' })

export const fetchArticles = () => {
    return api.get('/api/articles').then((res) => {
        return res.data.articles
    })
}

export const articlesQueries = (sort) => {
    return api.get(`/api/articles?sort_by=${sort}`).then((res) => {
        return res.data.articles
    })
}

export const fetchTopics = () => {
    return api.get('/api/topics').then((res) => {
        return res.data.topics
    })
}

export const fetchArticlesByTopic = (topic) => {
    return api.get(`/api/articles?topic=${topic}`).then((res) => {
        console.log(res.data)
        return res.data.articles
    })
}