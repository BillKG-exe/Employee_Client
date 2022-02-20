import './info.css'
import Navbar from '../comps/Navbar';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';


const Info = () => {
    const { search } = useParams();
    const [employee, setEmployee] = useState({}) 

    const getEmployee = async () => {
        const response = await axios.get(`/${search}`)
        setEmployee(response.data.employee)
    }   

    useEffect(() => {
        getEmployee()
    }, [])

    return (
        <div className='info-page'>
            <Navbar />
            <div className='information'>
                <div className='info-container'>
                    <div className='display'>
                        <label>First Name: </label>
                        <div>{employee.prenom}</div>
                    </div>
                    <div className='display'>
                        <label>Last Name: </label>
                        <div>{employee.nom}</div>
                    </div>
                    <div className='display'>
                        <label>Company: </label>
                        <div>{employee.company}</div>
                    </div>
                    <div className='display'>
                        <label>Title: </label>
                        <div>{employee.titre}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Info;