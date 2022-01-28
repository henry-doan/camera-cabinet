import CategoryShow from './CategoryShow';
import { useEffect, useState } from 'react';
// import { KitConsumer } from '../../providers/KitProvider';
import { GearConsumer } from '../../providers/GearProvider';





const Categories = ({ gears, getAllGears}) => { 
	const [filter, setFilter] = useState('All')
	
	const [filterKits, setFilterKits ] = useState([])

	useEffect( () => {
			getAllGears()
	}, [])

   
const	visibleItems = () => {

    
    switch(filter) {
			case 'Camera':
				setFilterKits( gears.filter( g => g.category == 'Camera' ))
			case 'Audio':
				setFilterKits( gears.filter( g => g.category == 'Audio' ))
			case 'Lens':
				setFilterKits( gears.filter( g => g.category == 'Lens' ))
			case 'Light':
				setFilterKits( gears.filter( g => g.category == 'Light' ))
			default:
				setFilterKits( gears)
    }
	}
    
	return (
		<>
			<h1>Categories</h1>
			<CategoryShow filter={filter} setFilter={setFilter} />
		</>
	)
}


const ConnectedCategory = (props) => (
	<GearConsumer>
		{ value => <Categories {...props} {...value} />}
	</GearConsumer>
)

export default ConnectedCategory;
