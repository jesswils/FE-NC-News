import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { postCommentById } from '../../utils/api'

export default function PostComment() {
    const { article_id } = useParams();

    const [comment, setComment] = useState('')
    const [postSuccess, setPostSuccess] = useState(false)

    const handleInput = (e) => {
        setComment(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        postCommentById(article_id, comment).then((res) => {
            setComment((prevComment) => [res, ...prevComment])
        })
        setPostSuccess(true)
        setComment('')
    }

    return (
        <div className='comment-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Post a comment
                </label>
                <input type="text" name="comment" value={comment} onChange={handleInput} />
                <button type="
                submit">Send</button>
                {postSuccess && <p className='posted-comment'>Comment posted!</p>}
                <h6>You are logged in as cooljmessy</h6>
            </form>
        </div>
    )
}
