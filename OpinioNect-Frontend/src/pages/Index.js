import SignOutButton from '../components/signout-button'
import Navbar from '../components/navbar.js'
import LastPost from '../index_page/LastPost.js'
import NewestPosts from '../index_page/NewestPosts.js'
import Comments from '../components/Comments.js'
import Sidebar from '../components/Sidebar.js'
export default function Index(){
    return(
        <div>
            <div className='nav-colum nav-signout'>
                <Navbar/>
                <SignOutButton/>
            </div>
            <div className='index-mainbody'>
                <Sidebar/>
                <div>
                    <LastPost/>
                    <Comments/>
                </div>
                <NewestPosts/>
            </div>
        </div>
    )
}