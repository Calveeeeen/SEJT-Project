import react from 'react';
import styles from './Dropdown.module.css'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import  {namesExtractor, valuesExtractor, locationExtractor} from './dataParser';

// created constants to store the array extracted from the following functions.
const skillNames=namesExtractor();
const locationNames = locationExtractor();
//combined the two arrays into 1 larger array to be used in the dropdown component.
const allDataNames = [].concat(skillNames, locationNames);
//dropdown function.
const Dropdown = () => {

    return (
        <div className={styles.DropdownContainer}>
            <Autocomplete
                // onchange
                className={styles.ComparisonList}
                disablePortal
                id="Comparison List"
                options={allDataNames}
                sx={{ width: 300 }}
                renderInput={(params) => 
                <TextField 
                {...params} 
                label="Comparison"
                //not using the styling on the bottom because it's causing more problems.
                // inputProps={{style: {fontSize:20}}} 
                // InputLabelProps={{style: {fontSize: 20}}}
                />}
            />
        </div >
    );
}

export default Dropdown;