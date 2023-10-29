import {Link} from 'react-router-dom'
import React from 'react'
export default function Sidebar(){
    const [fix, setFix] = React.useState(true)
    const handleStyle = () => {
        setFix(fix => !fix)
    }
    return(
        <div>
            <i className='fa fa-bars icon-sidebar' onClick={handleStyle}></i>
            <div className={fix ? 'sidebar': 'sidebar-extend'}>
                <Link className='remove-underline sidebar-content'>Fetched</Link>
                <Link className='remove-underline sidebar-content'>Published</Link>
                <Link className='remove-underline sidebar-content settings-button'>Setting</Link>
            </div>
        </div>
    )
}