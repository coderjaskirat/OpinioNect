import commentsData from "../comments/commentsData.js"
import Comment from "../comments/Comment.js"
import React from "react"

export default function CreateNewPost(){
    // const comment = commentsData.map(data => {
    //     return(
    //         <Comment user={data.user} data={data.data}/>
    //     )
    // });
    const [user, setUser] = React.useState({username:"", data: "", hashID: ""});
    const [comments, setComments] = React.useState([]);

    const handleSubmit = () => {
        setComments([...comments, user]);
        setUser({ username:"", data:"", hashID:""});
    };

    const handleChange = (e) => {                                  
        setUser({...user, [e.target.name]: e.target.value});
        // console.log(user)
    }
    const newComment = comments.map(data => {
        return(
            <div>
                {console.log(user)}
                <Comment user={data.username} data={data.data}/>
            </div>
        )
    });
    // if (typeof web3 !== 'undefined') {
    //         web3 = new Web3(web3.currentProvider);
    // } else {
    //     // set the provider you want from Web3.providers
    //     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // }
    // web3.eth.defaultAccount = web3.eth.accounts[0];
    // const abi = require('../../blockchain-backend/OpinioNectAbi.json')
    // var OpinioNectContract = web3.eth.contract(abi);
    // var OpinioNect = OpinioNectContract.at('../OpinioNectAddress.bin');
    return(
        <div>
            <div>
                {newComment}
            </div>
            <div>
                <input className="form-element-input" onChange={handleChange} type="text" id="username" name="username" value={user.username} placeholder='Let others hear your view'/><br/>
                <button className="submit-button" onClick={handleSubmit}>Post</button>
            </div>
        </div>
    )
}