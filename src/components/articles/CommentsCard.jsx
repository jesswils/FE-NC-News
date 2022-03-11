import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchCommentsById } from '../../utils/api'

export default function CommentsCard() {

    let { article_id } = useParams()
    const [comment, setComment] = useState()

    useEffect(() => {
        fetchCommentsById(article_id).then((comment) => {
            console.log(comment)
            setComment(comment)
        }).catch(() => {
        })
    }, [])

    return (<>
        {comment.map((comments) => {
            return (
                <div key={comments?.comment_id} className='comments'>
                    <p className='comment-page-author'>{comments?.author}</p>
                    <p className='comment-page-body'>{comments?.body}</p>
                    <p className='comment-page-votes'>votes: {comments?.votes}</p>
                </div>

            )
        })}
    </>
    )
}
