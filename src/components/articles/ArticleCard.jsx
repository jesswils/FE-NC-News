import * as api from '../../utils/api'
import { useEffect, useState } from 'react'

export const ArticleCard = ({ articles, setArticles }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        api.fetchArticles().then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <p>loading..</p>;
    return (
        <div>
            {articles.map((article) => {
                return (
                    <div className="article-card" key={article.article_id}>
                        <h2>{article.title}</h2>
                        <p className='article-votes'>Votes: {article.votes}</p>
                        <p>{article.comment_count}</p>
                    </div>
                )
            })}
        </div>
    )
}