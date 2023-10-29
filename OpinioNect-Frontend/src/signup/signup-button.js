import {Link} from "react-router-dom"
export default function Signup(){
    const connect =async ()=> {
        if (typeof window.ethereum !== "undefined"){
            await window.ethereum.request({ method:"eth_requestAccounts" });
        }
    }
//    const execute = () => {
        
//    }

//    module.exports = {
//         connect, 
//         execute,
//    };
    return (
        <Link to="/Index" className="remove-underline">
            <div className='button-signup' onClick={connect}>
                Connect Wallet
            </div>
        </Link>
    )
}