import React from 'react';
import SideBar from '../components/SideBar';
import ContactUs from './ContactUs';
import MostImportantSkills from '../components/MostImportantSkills';
import styles from './Dashboard.module.css'
import Dropdown from '../components/Dropdown'

function Dashboard(){
    return (
        <div className={styles.DashboardHomepage}>
            <SideBar />
            <MostImportantSkills />
            <Dropdown/>
            <Dropdown/>
        </div> 
    )
}

export default Dashboard