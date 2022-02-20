import './navbar.css'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

const Navbar = () => {
    return (
        <div className='header'>
            <div className='logo'>emPleSearch</div>
            <div className='media'><AiOutlineTwitter /></div>
            <div className='media'><GrFacebookOption /></div>
            <div className='media'><AiFillYoutube /></div>
        </div>
    );
}
 
export default Navbar;