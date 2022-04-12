import { Link } from 'react-router-dom'

export const TopicsCard = () => {
    return (
        <div><h1 className='topics-header'>Topics:</h1>
            <div className='topic-links-outer'>
                <div className='topic-links-inner'>
                    <Link to="/topics/coding" className='coding-link'>Coding</Link>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link to="/topics/cooking" className='cooking-link'>Cooking</Link>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Link to="/topics/football" className='football-link'>Football</Link>
                </div>
            </div>
        </div>
    )
}
