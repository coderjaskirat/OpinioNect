import React from "react"

export default function Blog(props){
    const [isShown, setisShown] = React.useState(false);
    function visibility(){
        setisShown(prev => !prev)
    }
    return(
        <div className='blog-content'>
            <a  href="#" onClick={visibility} className="blog-headline">{props.headline}</a>
            <p className="blog-data">{isShown && props.data}</p>
        </div>
    )
}