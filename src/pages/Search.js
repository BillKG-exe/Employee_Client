import './search.css';
import Navbar from '../comps/Navbar';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Search = () => {
    const navigate = useNavigate();
    const [identification, setIdentification] = useState(0)

    const handleChange = e => {
        setIdentification(e.target.value)
    }
    
    const handleSearch = async e => {
        const response = await axios.get(`/${identification}`)

        const found = response.data.success

        if(found) {
            navigate(`/employee/${identification}`)
        } else {
            alert('Employee was not found using the id entered')
        }        
    }

    return (
        <div className='search-page'>
            <Navbar />
            <div className='search-block'>
                <div className='search-component'>
                    <div className='input-text'>
                        <input type='number' placeholder='identification #' onChange={handleChange} />
                    </div>
                    <div className='search-button' onClick={handleSearch}>SEARCH</div>
                </div>
            </div>
        </div>
    );
}
 
export default Search;