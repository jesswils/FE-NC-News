import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentsById, deleteCommentById } from '../../utils/api';
import PostComment from './PostComment';

export default function CommentsCard() {
    let { article_id } = useParams();
    const [comment, setComment] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchCommentsById(article_id)
            .then((comment) => {
                setComment(comment);
                setIsLoading(false);
            })
            .catch(() => { });
    }, [article_id]);

    const handleDelete = (e) => {
        e.preventDefault();
        const id = e.target.value;
        setComment(() => {
            const updatedComments = comment.filter((comment) => {
                return comment.comment_id !== parseInt(id);
            });
            return updatedComments;
        });
        deleteCommentById(id);
        setDeleteSuccess(true);
    };

    if (isLoading) return <p>loading..</p>;
    return (
        <>
            <PostComment />
            {deleteSuccess && <p>Comment deleted!</p>}
            {comment.map((comments) => {
                return (
                    <section key={comments.comment_id} className='comments'>
                        <h2 className='comment-page-author'>{comments.author}</h2>
                        <p className='comment-page-body'>{comments.body}</p>
                        {comments.author === 'cooljmessy' && (
                            <button
                                className='delete-comment'
                                value={comments.comment_id}
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        )}
                        <p className='comment-page-votes'>votes: {comments.votes}</p>
                    </section>
                );
            })}
        </>
    );
}
