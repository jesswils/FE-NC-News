import { fetchArticles } from "../../utils/api"

export const SortBy = ({ articles, setArticles }) => {

    const handleClick = (sort) => {
        fetchArticles(sort).then((res) => {
            setArticles(res)
        })
    }

    return (
        <div><label>
            Sort by:
            <select name="Sort By" onChange={(e) => {
                handleClick(e.target.value)
            }}>
                <option value="created_at">Most recent</option>
                <option valueomme="votes">Votes</option>
                <option value="comment_count">Comment count</option>
            </select>
        </label>
        </div>
    )
}