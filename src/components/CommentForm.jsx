import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { postCommentById } from '../utils/api'

export default function CommentForm() {
    const { article_id } = useParams();

    const [comment, setComment] = useState('')
    const [postSuccess, setPostSuccess] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(false)

    const handleInput = (e) => {
        e.target.value.length > 10 ? setDisableSubmit(false) : setDisableSubmit(true)
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        setDisableSubmit(true)
        e.preventDefault();
        postCommentById(article_id, comment).then((res) => {
            setComment((prevComment) => [res, ...prevComment])

        })
        setPostSuccess(true)
        setComment('')
    }


    return (
        <div className='form-box'>
            <form onSubmit={handleSubmit}>
                <label>
                    Post a comment
                </label>
                <h6>You are logged in as cooljmessy</h6>
                <input type="text" name="comment" value={comment} onChange={handleInput} />
                <button disabled={disableSubmit} type="
                submit" className='submit-button'>Send</button>
                {postSuccess && <p className='posted-comment'>Comment posted!</p>}
            </form>
        </div>
    )
}
