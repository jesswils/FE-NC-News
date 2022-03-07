export const SortBy = () => {
    return (
        <div><label>
            Sort by:
            <select name="Sort By" >
                <option value="date">Date</option>
                <option value="comment-count">Comment count</option>
                <option value="votes">Votes</option>
                <option value="order">Order</option>
            </select>
        </label>
        </div>
    )
}