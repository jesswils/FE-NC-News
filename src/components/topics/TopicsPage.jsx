import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchArticlesByTopic } from '../../utils/api'

export const TopicsPage = () => {
    let { topic } = useParams()
    const [topicArticles, setTopicArticles] = useState([])

    useEffect(() => {
        fetchArticlesByTopic(topic).then((res) => {
            setTopicArticles(res)
            console.log(topicArticles)
        }).catch((err) => { console.log(err) })
    }, [])

    return (
        <div>
            {topicArticles.map((article) => {
                return (
                    <div className="article-card" key={article.article_id}>
                        <h2>{article.title}</h2>
                        <div className='votes-comments-articles'><p className='article-votes'>Votes: {article.votes}</p>
                            <p className='articles-comments'>Comments: {article.comment_count}</p>
                        </div>
                        <p className='articles-body'>{article.body.slice(0, 100)} ...</p>
                    </div>
                )
            })}
        </div>
    )
}
