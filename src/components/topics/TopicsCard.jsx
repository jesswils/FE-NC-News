import * as api from '../../utils/api'
import { useEffect, useState } from 'react'
import { fetchArticlesByTopic } from '../../utils/api'
import { Link } from 'react-router-dom'

const TopicsCard = () => {
    const [topics, setTopics] = useState([])
    useEffect(() => {
        api.fetchTopics().then((topics) => {
            setTopics(topics);
        });
    }, []);

    return (
        <div>

            {topics.map((topic) => {
                return (
                    <div key={topic.slug}>
                        <Link to={`/topics/${topic.slug}`}> <p>{topic.slug}</p> </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default TopicsCard;
