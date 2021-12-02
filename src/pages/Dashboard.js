import React from 'react';
import SideBar from '../components/SideBar';
import ContactUs from './ContactUs';
import MostImportantSkills from '../components/MostImportantSkills';
import styles from './Dashboard.module.css'

function Dashboard(){
    return (
        <div className={styles.DashboardHomepage}>
            <SideBar />
            <MostImportantSkills />
        </div> 
    )
}

export default Dashboard