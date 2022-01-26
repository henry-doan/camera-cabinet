import { useEffect, useState } from 'react';
import { GearConsumer } from '../../providers/GearProvider';
import GearList from './GearList';
import { Button } from 'react-bootstrap';
import GearForm from './GearForm';
import { useParams } from 'react-router-dom';

const Gears = ({ gears, getAllGears, addGear }) => {
  const [adding, setAdd] = useState(false);

  const params = useParams()

  useEffect( () => {
    getAllGears(params.kitId)
  }, [])

  return (
    <>
			<h1>New Gear</h1>
			{ adding ?
					<>
						<GearForm 
							addGear={addGear} 
							kitId={params.kitId} 
							setAdd={setAdd}
						/>
						<Button variant="info" onClick={() => setAdd(false)}>Cancel</Button>    
					</>
						:
						<Button variant="info" onClick={() => setAdd(true)}>+</Button>
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