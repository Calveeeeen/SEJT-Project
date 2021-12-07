import React from 'react';
import styles from './SideBar.module.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




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
                        valueLabelFormat = {sliderLabel => <div> {'$'} {sliderLabel} </div>}
                        aria-label={'Salary'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={35000}
                        max={300000}
                    />
                </div>

                {/*this is the div for the visa sponsorship checkbox. will have the same css as the other checkbox containers*/}
                <div className={styles.checkBoxContainer}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Visa Sponsorship" />
                    </FormGroup>
                </div>

                {/*this is the container for the search boxes*/}
                <div className={styles.SearchboxContainer}>
                    <Autocomplete 
                        className={styles.Searchbox}
                        disablePortal
                        id="locationsAvailable"
                        options={['New York, NY', 'Los Angeles, CA','Chicago, IL','Seattle, WA', 'San Francisco, CA', 'Austin, TX', 'Las Vegas, NV' ]}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Location" />}
                    />
                    <Autocomplete 
                        className={styles.Searchbox}
                        disablePortal
                        id="codingLanguagesAvailable"
                        options={['C++', 'Python','Java','Javascript', 'C#','Ruby']}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Coding languages" />}
                    />
                    <Autocomplete 
                        className={styles.Searchbox}
                        disablePortal
                        id="skillsAvailable"
                        options={['Node.js', 'Microsoft office', 'React', 'React Native', 'SQL', 'Firebase', 'Figma', 'AWS']}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Skills" />}
                    />
                </div>
            </div>
        </div >
    );
}

export default SideBar;