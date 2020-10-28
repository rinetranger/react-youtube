import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/">VideoTube</Link>
            <div>
                <form>
                    <input type="text" placeholder="search" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header
