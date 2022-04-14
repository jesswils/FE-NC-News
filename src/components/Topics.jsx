import { Link } from 'react-router-dom'
import coding from '../assets/coding.png'
import cooking from '../assets/cooking.png'
import football from '../assets/football.png'

export const Topics = () => {
    return (
        <div><h1 className='topics-header'>Topics:</h1>
            <div className='topic-links-outer'>
                <div className='topic-links-inner'>
                    <Link to="/topics/coding" className='topic-links'>Coding</Link>
                    <br></br>
                    <br></br>
                    <img src={coding} alt={"coding-icon"} className='topic-icon' />
                    <Link to="/topics/cooking" className='topic-links'>Cooking</Link>
                    <br></br>
                    <br></br>
                    <img src={cooking} alt={"cooking-icon"} className='topic-icon' />
                    <Link to="/topics/football" className='topic-links'>Football</Link>
                    <br></br>
                    <br></br>
                    <img src={football} alt={"cooking-icon"} className='topic-icon' />
                </div>
            </div>
        </div>
    )
}
