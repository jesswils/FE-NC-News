import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { postCommentById } from '../../utils/api'

export default function PostComment() {
    const { article_id } = useParams();

    const [comment, setComment] = useState('')

    const handleInput = (e) => {
        setComment(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        postCommentById(article_id, comment).then((res) => {
            setComment((prevComment) => [res, ...prevComment])
        })
        setComment('')
    }

    return (<div>
        <h4>You are logged in as cooljmessy</h4>
        <div className='comment-form'>
            <form onSubmit={handleSubmit}>
                <div className='comment-form-child'>
                    <label>
                        Post a comment:
                        <br></br>
                        <input type="text" name="comment" value={comment} onChange={handleInput} />
                    </label>
                    <button type="
                submit">Send</button>
                </div>
            </form>
        </div>
    </div>
    )
}
