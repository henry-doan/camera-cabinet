import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';



const CategoryShow = ({ filter, setFilter }) => {
    
    return (
        <div>
            { ['Camera', 'Audio', 'Lens', 'Light'].map( f => filterLink(filter, f, setFilter))}
        </div>
    )
}
 

const filterLink = ( current, category, setFilter) => {
    if (current === category) {
        return <span>{category}</span>
    }
    else {
    /*style this line*/    return <span style={styles.link} onClick={() => setFilter(category)}>{category}</span>
    }
}
const styles = {
    link: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: 'red',
        margin: ' 0 8px',
    }
}



export default CategoryShow;