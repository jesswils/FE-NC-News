import { useState } from 'react'

export const SortBy = ({ setSort, setOrder }) => {

    const [currentValue, setCurrentValue] = useState()

    const handleClick = (sort) => {
        const [sortBy, order] = sort.split(' ')
        setSort(sortBy)
        setOrder(order)
        setCurrentValue(sort)
    };

    return (
        <div>
            <label>
                Sort by:
                <select
                    name='Sort By'
                    value={currentValue}
                    onChange={(e) => {
                        handleClick(e.target.value);
                    }}
                >
                    <option value='created_at asc'>Oldest</option>
                    <option value='created_at desc'>Most recent</option>
                    <option value='votes asc'>Least votes</option>
                    <option value='votes desc'>Most votes</option>
                    <option value='comment_count asc'>Least comments</option>
                    <option value='comment_count desc'>Most comment</option>
                </select>
            </label>
        </div>
    );
};
