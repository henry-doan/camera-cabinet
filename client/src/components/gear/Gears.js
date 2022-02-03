import { useEffect, useState } from 'react';
import { GearConsumer } from '../../providers/GearProvider';
import GearList from './GearList';
import { Button } from 'react-bootstrap';
import GearForm from './GearForm';
import { useParams } from 'react-router-dom';
import { Font } from '../../styles/gearStyles';

const Gears = ({ gears, getAllGears, addGear, kitId }) => {
  const [adding, setAdd] = useState(false)
  const params = useParams()
  const [setShow] = useState(false);
  
  return (
    <>

			{ adding ?
					<>
						<GearForm 
							addGear={addGear} 
							kitId={params.kitId} 
							setAdd={setAdd}
						/>

					</>
						:
            
						<Button variant="primary" onClick={() => setAdd(true)}>Add Gear</Button>
					
  }
			<GearList gears={gears} kitId={params.kitId} />
      </>
    )
}


const ConnectedGears = (props) => (
  <GearConsumer>
    { value => <Gears {...props} {...value} />}
  </GearConsumer>
)

export default ConnectedGears;