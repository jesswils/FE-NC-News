import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchArticlesById } from '../../utils/api'

export default function ArticlesPage() {
    let { article_id } = useParams()
    const [article, setArticle] = useState()

    useEffect(() => {
        fetchArticlesById(article_id).then((article) => {
            console.log(article)
            setArticle(article)
        })
    }, [])

    return (
        <dl>
            <h3 className='single-article-title'>{article?.title}</h3>
            <h4 className='single-article-author'>{article?.author}</h4>
            <dt className='single-article-body'>{article?.body}</dt>
            <dt>{article?.comment_count}</dt>
            <dt>
                Votes:   {article?.votes}
            </dt>
        </dl>
    )
}
