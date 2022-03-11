import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <p>Oops! Status: 404 - Not Found</p>
            <Link to='/'>Let's go home</Link>
        </>
    )
}
