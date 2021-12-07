import react from 'react';
import styles from './Dropdown.module.css'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';



const Dropdown = () => {

    return (
        <div className={styles.DropdownContainer}>
            <Autocomplete
                // onchange
                className={styles.ComparisonList}
                disablePortal
                id="Comparison List"
                options={['New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Seattle, WA', 'San Francisco, CA', 'Austin, TX', 'Las Vegas, NV', 'C++', 'Python','Java','Javascript', 'C#','Ruby', 'Node.js', 'Microsoft office', 'React', 'React Native', 'SQL', 'Firebase', 'Figma', 'AWS']}
                sx={{ width: 300 }}
                renderInput={(params) => 
                <TextField 
                {...params} 
                label="Comparison"
                // inputProps={{style: {fontSize:20}}} 
                // InputLabelProps={{style: {fontSize: 20}}}
                />}
            />
        </div >
    );
}

export default Dropdown;