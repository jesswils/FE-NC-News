import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchArticlesById } from '../../utils/api'

export default function ArticlesPage() {
    let { article_id } = useParams()
    const [article, setArticle] = useState()
    const [vote, setVote] = useState(0)
    // const [showHide, setShowHide] = useState(true)

    function decrementVote() {
        setVote(prevVote => prevVote - 1)
    }

    function incrementVote() {
        setVote(prevVote => prevVote + 1)
    }

    function toggleClick() {
    }

    useEffect(() => {
        fetchArticlesById(article_id).then((article) => {
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
                Votes:   {article?.votes + vote}
            </dt>
            <button onClick={incrementVote}></button>
            <button onClick={decrementVote}></button>
        </dl>
    )
}
