import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchArticlesById, patchVote } from '../../utils/api'

export default function ArticlesPage() {
    let { article_id } = useParams()
    const [article, setArticle] = useState()
    const [vote, setVote] = useState(0)
    const [userVoted, setUserVoted] = useState(false)

    function incrementVote(id) {
        if (userVoted === false)
            setVote(prevVote => prevVote + 1)
        setUserVoted(true)
        patchVote(id, { inc_votes: 1 }).then((res) => {
            console.log(res)
            if (res.status !== 200) {
                setVote(+ 1)
            }
        })
    }

    function decrementVote(id) {
        if (userVoted === true)
            setVote(prevVote => prevVote - 1)
        setUserVoted(false)
        patchVote(id, { inc_votes: -1 }).then((res) => {
            console.log(res)
            if (res.status !== 200) {
                setVote(-1)
            }
        })
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
            <dt>
                <button disabled={userVoted === true} onClick={() => { incrementVote(article_id) }}>👍</button>
                <button disabled={userVoted === false} onClick={() => { decrementVote(article_id) }}>👎</button>
            </dt>
        </dl>
    )
}
