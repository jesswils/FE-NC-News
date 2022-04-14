import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div>
            <ul className='nav'>
                <header className="app-header">NC News</header>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>

            </ul>
        </div>
    )
}