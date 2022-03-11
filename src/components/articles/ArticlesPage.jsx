import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchArticlesById, patchVote } from '../../utils/api'
import NotFound from '../errors/NotFound'

export default function ArticlesPage() {
    let { article_id } = useParams()
    const [article, setArticle] = useState()
    const [vote, setVote] = useState(0)
    const [userVoted, setUserVoted] = useState(false)
    const [errorPage, setErrorPage] = useState(false)

    function crementVote(vote) {
        setVote(prevVote => prevVote + vote)
        patchVote(article_id, { inc_votes: vote }).catch(() => {
            setVote(-vote)
        })
    }

    useEffect(() => {
        fetchArticlesById(article_id).then((article) => {
            setArticle(article)
        }).catch(() => {
            setErrorPage(true)
        })
    }, [])

    if (errorPage) {
        return <NotFound />
    }

    return (
        <dl>
            <h3 className='single-article-title'>{article?.title}</h3>
            <h4 className='single-article-author'>{article?.author}</h4>
            <dt className='single-article-body'>{article?.body}</dt>
            <dt>{article?.comment_count}</dt>
            <dt>
                Votes:   {article?.votes + vote}
            </dt>
            <dt>
                <button disabled={vote === 1} onClick={() => { crementVote(1) }}>👍</button>
                <button disabled={vote === -1} onClick={() => { crementVote(-1) }}>👎</button>
            </dt>
        </dl>
    )
}
