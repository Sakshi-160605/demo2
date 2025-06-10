import react from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/admission'>Admission</Link>
                <button type="button">Apply now</button>
            </nav>
        </header>
    )
}
export default Header