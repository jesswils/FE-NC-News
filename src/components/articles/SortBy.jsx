import { articlesQueries } from "../../utils/api"

export const SortBy = ({ articles, setArticles }) => {

    const handleClick = (sort) => {
        console.log(sort, "<<<<<SORT")
        articlesQueries(sort).then((res) => {
            console.log(res)
            setArticles(res.articles)
        })
    }

    return (
        <div><label>
            Sort by:
            <select name="Sort By" onChange={(e) => { handleClick(e.target.value) }}>
                <option value="created_at">Most recent</option>
                <option value="votes">Votes</option>
                <option value="comment_count">Comment count</option>
            </select>
        </label>
        </div>
    )
}