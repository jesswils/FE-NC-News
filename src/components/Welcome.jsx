import logo from '../assets/homepage.png'
import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <div>
            <h1 className='homepage-header'>Welcome!</h1>
            <h2 className='homepage-tagline'> NC News is a social news website</h2>
            <div className='homepage'>
                <img src={logo} alt={"logo"} className='logo' />
                <img src={logo} alt={"logo"} className='logo' />
            </div>
            <p className='homepage-paragraph'>Look through a selection of articles or browse via topics</p>
            <div className='button-wrapper'>
                <Link to="/articles" className='homepage-button'>Articles</Link >
                <Link to="/topics" className='homepage-button'>Topics</Link>
                <br>
                </br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}
