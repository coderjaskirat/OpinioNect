import Navbar from './components/navbar.js'
// import Blogs from './blogs/Blogs.js';
// import Login from './pages/login.js';
import Signup from './signup/signup-button.js';
import Tagline from './signup/Tagline.js';
import Contact from './navbarComponents/Contact-button.js';
import About from './navbarComponents/About-button.js';
import {Link} from 'react-router-dom'
export default function App(){
    const connect =async ()=> {
        if (typeof window.ethereum !== "undefined"){
            await window.ethereum.request({method:"eth_requestAccounts"});
        }
    }
    return(
        <>
        <div className='nav-colum'>
            <Navbar/>
            <About/>
            <Contact/>
            <Signup/>
        </div>
        <Tagline/>
        <div className='left-home'>
            {/* <div><Blogs condition= {true}/></div>           
            <div><Login/></div> */}
            <div><h1 className='heading'>OPINIONECT...</h1>
                <h2 className='tagline'>LET'S GET YOUR VIEWS TO THE WORLD</h2>
                <Link to={connect.length? "/Index": "/"} >
                    <h3 className='get-started' onClick={connect}>Get Started...</h3>
                </Link>
            </div>
            <div>
                <img className="graphic" src='../images/Decentraclasses-60a91ae3.webp'></img>
            </div>
        </div>
        <footer></footer>
        </>
    )
}