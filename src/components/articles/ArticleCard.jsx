import * as api from '../../utils/api'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SortBy } from './SortBy';

export const ArticleCard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])

    const { topic } = useParams();

    useEffect(() => {
        setIsLoading(true);
        api.fetchArticles(undefined, topic).then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <p>loading..</p>;
    return (
        <div>
            <SortBy articles={articles} setArticles={setArticles} />
            {articles.map((article) => {
                return (
                    <div className="article-card" key={article.article_id}>
                        <Link to={`/articles/${article.article_id}`}><h2>{article.title}</h2></Link>
                        <div className='votes-comments-articles'><p className='article-votes'>Votes: {article.votes}</p>
                            <p className='articles-comments'>Comments: {article.comment_count}</p>
                        </div>
                        <p className='articles-body'>{article.body.slice(0, 100)} ...</p>
                    </div>
                )
            })}
        </div>
    )
}