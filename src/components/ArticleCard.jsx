import * as api from '../utils/api'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SortArticles } from './SortArticles';
import NotFound from './errors/NotFound';

export const ArticleCard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([])
    const [errorPage, setErrorPage] = useState(false)
    const [sort, setSort] = useState()
    const [order, setOrder] = useState()

    const { topic } = useParams();

    useEffect(() => {
        api.fetchArticles(sort, order, topic).then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        }).catch(() => {
            setErrorPage(true)
        })
    }, [sort, order, topic]);

    if (errorPage) {
        return <NotFound />
    }
    if (isLoading) return <p>loading..</p>;
    return (
        <div>
            <SortArticles setSort={setSort} setOrder={setOrder} />
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