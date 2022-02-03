import CategoryShow from './CategoryShow';
import { useEffect, useState } from 'react';
// import { KitConsumer } from '../../providers/KitProvider';
import { GearConsumer } from '../../providers/GearProvider';
import { Header67 } from '../../styles/CategoryStyles';




const Categories = ({ gears, getAllGears}) => { 
  const [filter, setFilter] = useState('All')
  
  const [filterKits, setFilterKits ] = useState([])

  useEffect( () => {
      getAllGears()
      visibleItems()
  }, [])

   
const visibleItems = () => {

    
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
      
      <Header67>
            
              Categories
            
            </Header67>
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


