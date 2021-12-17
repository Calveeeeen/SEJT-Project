import React from 'react';
import styles from './MostImportantSkills.module.css';
import { namesExtractor, valuesExtractor } from './dataParser';
/*Function to create the list of skills*/

//use the following commented out code to generate the list from backened
// const numbers = props.numbers;
const skillNames = namesExtractor();
const jobNumber = valuesExtractor();
const combinedData = skillNames + ': ' + jobNumber;
// const skills = ['C++', 'Python', 'Java', 'Javascript', 'C#', 'Ruby', 'AWS']
const listItems = skillNames.map((skill, i) =>
    <li key={i.toString()/*.toString()*/}>
        {skill}
    </li>
);


//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );

const MostImportantSkills = () => {
    return (
        // this is the div for the container most important skills.
        <div className={styles.mostImportantSkillsContainer}>
            {/*This is the div for the Title for the most important skills*/}
            <div className={styles.Title}>
                <label>
                    Most Important Skills
                </label>
            </div>

            {/*This is the div for the list for the most important skills*/}
            <div className={styles.skillsList}>
                <ul>{listItems}</ul>
                {/* <ul>{combinedData}</ul> */}
            </div>

        </div>
    );
}

export default MostImportantSkills;