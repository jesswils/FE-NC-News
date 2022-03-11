import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCommentsById } from '../../utils/api'
import PostComment from './PostComment'

export default function CommentsCard() {

    let { article_id } = useParams()
    const [comment, setComment] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchCommentsById(article_id).then((comment) => {
            setComment(comment)
            setIsLoading(false)
        }).catch(() => {
        })
    }, [])

    if (isLoading) return <p>loading..</p>;
    return (<>
        <PostComment />
        {comment.map((comments) => {
            return (
                <div key={comments.comment_id} className='comments'>
                    <ul>
                        <li className='comment-page-author'>{comments.author}</li>
                        <li className='comment-page-body'>{comments.body}</li>
                        <li className='comment-page-votes'>votes: {comments.votes}</li>
                    </ul>
                </div>

            )
        })}
    </>
    )
}
