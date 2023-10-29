import react from 'react-dom'

export default function Comment(props){
    return (
        <div>
            <h2 className='user_hash'>{props.user}</h2>
            <p className='user_comment'>{props.data}</p><br></br>
        </div>
    )
}
