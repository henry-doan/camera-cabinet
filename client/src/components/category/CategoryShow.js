import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


import { render } from 'react-dom';



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
    /*style this line*/    return (
        <div>
        <span  style={styles.link} onClick={() => setFilter(category)}>{category}</span>
            <img   src="https://images.unsplash.com/photo-1611738748631-fa2022745f93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" height="700" width="300"  />
        
        </div>
    );

    }
 
 
   

    
}



const styles = {
    link: {
        cursor: 'pointer',
        // textDecoration: 'underline',
        color: 'red',
        margin: ' 0 8px',
    }
}



export default CategoryShow;