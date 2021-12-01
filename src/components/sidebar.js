import React from 'react';
import styles from './SideBar.module.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



const SideBar = () => {

    const [value, setValue] = React.useState([35000, 300000]);
    function valuetext(value) {
        return `${value}$`;
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <div className={styles.SideBarContainer}>
                <div xs={12} className={styles.filtersTitle}>
                    <label>
                        FILTERS
                    </label>
                </div>
                {/* This is the container for the checkbox filters */}
                <div className={styles.checkBoxContainer}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Full Time" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Part Time" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Internship" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Entry Level" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Associate Level" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Junior Level" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Senior Level" />
                    </FormGroup>
                </div>

                {/*this is the container for the slider filter for salary*/}
                <div className={styles.Slider}>
                    <div>
                        <label>
                            Salary
                        </label>
                    </div>
                    <Slider
                        aria-label={'Salary'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min ={35000}
                        max={300000}
                    />
                </div>
            </div>
        </div >
    );
}

export default SideBar;