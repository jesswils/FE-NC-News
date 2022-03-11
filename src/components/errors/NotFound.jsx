import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='error-nf'>
            <div className='not-found'>
                <p>Oops! Status: 404 - Not Found</p>
                <Link to='/'>Let's go home</Link>
            </div>
        </div>
    )
}
