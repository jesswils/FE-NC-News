import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchArticlesById, patchVote } from '../../utils/api'
import NotFound from '../errors/NotFound'
import BadRequest from '../errors/BadRequest'

export default function ArticlesPage() {
    let { article_id } = useParams()
    const [article, setArticle] = useState()
    const [vote, setVote] = useState(0)
    const [errorPage, setErrorPage] = useState(false)
    const [requestFail, setRequestFail] = useState(false)


    function crementVote(vote) {
        setVote(prevVote => prevVote + vote)
        patchVote(article_id, { inc_votes: vote }).catch(() => {
            setVote(-vote)
            setRequestFail(true)
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
            <dt>
                Votes:   {article?.votes + vote}
            </dt>
            <dt>
                <button disabled={vote === 1} onClick={() => { crementVote(1) }}>👍</button>
                <button disabled={vote === -1} onClick={() => { crementVote(-1) }}>👎</button>
            </dt>
            {requestFail ? <BadRequest /> : null}
            <dt><Link to={`/articles/${article_id}/comments`}>{article?.comment_count} comments</Link></dt>
        </dl>
    )
}
