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

  useEffect( () => {
    getAllGears(params.kitId)
  }, [])

  return (
    <>
			<Font>
				<h1 style={{color: "white"}}>All Gear</h1>
			</Font>

			<GearList gears={gears} kitId={params.kitId} />

			{ adding ?
					<>
						<GearForm 
							addGear={addGear} 
							kitId={params.kitId} 
							setAdd={setAdd}
						/>
						<Button variant="outline-light" onClick={() => setAdd(false)}>Cancel</Button>    
					</>
						:
						<Button variant="outline-light" onClick={() => setAdd(true)}>Add Gear</Button>
			}
      </>
    )
}

const ConnectedGears = (props) => (
  <GearConsumer>
    { value => <Gears {...props} {...value} />}
  </GearConsumer>
)

export default ConnectedGears;