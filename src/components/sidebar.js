import React from 'react';
import styles from './SideBar.module.css';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import  {namesExtractor, valuesExtractor, locationExtractor} from './dataParser';



const SideBar = () => {
    // these variables are used to call the extracted data from dataParser.js
    var skillNames = namesExtractor();
    var locationNames = locationExtractor();
    // the following const allows us to set the minimum and maximum for the slider values.
    const [value, setValue] = React.useState([35000, 300000]);
    //this function allows us to add the dollar sign in front of the minimum and maximum values for the slider.
    function valuetext(value) {
        return `${value}$`;
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // this displays all of our components.
    return (
        <div>
            {/* container for the sidebar components */}
            <div className={styles.SideBarContainer}>
                <div xs={12} className={styles.filtersTitle}>
                    {/* filters label */}
                    <label>
                        FILTERS
                    </label>
                </div>
                
                {/* This is the container for the checkbox filters */}
                <div className={styles.checkBoxContainer}>
                    {/* contains the checkbox and the labels for the checkbox */}
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

                {/*this is the container for the slider filter for salary.*/}
                <div className={styles.Slider}>
                    <div>
                        {/* Salary label on top of the slider */}
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

                {/*this is the container for the filter boxes*/}
                <div className={styles.filterBoxContainer}>
                    <Autocomplete 
                        className={styles.filterBox}
                        disablePortal
                        id="locationsAvailable"
                        options={locationNames}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Location" />}
                    />
                    <Autocomplete 
                        className={styles.filterBox}
                        disablePortal
                        id="codingLanguagesAvailable"
                        options={skillNames}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Skills" />}
                    />
                    {/* combining the skills with coding languages dropdown*/}
                    {/* <Autocomplete 
                        className={styles.Searchbox}
                        disablePortal
                        id="skillsAvailable"
                        options={['Node.js', 'Microsoft office', 'React', 'React Native', 'SQL', 'Firebase', 'Figma', 'AWS']}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Skills" />}
                    /> */}
                </div>
            </div>
        </div >
    );
}

export default SideBar;