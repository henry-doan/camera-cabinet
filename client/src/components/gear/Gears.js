import { useEffect, useState } from 'react';
import { GearConsumer } from '../../providers/GearProvider';
import GearList from './GearList';
import { Button } from 'react-bootstrap';
import GearForm from './GearForm';

const Gears = ({ gears, getAllGears, addGear }) => {
    const [adding, setAdding] = useState(false)

    useEffect( () => {
        getAllGears()
    }, [])

    return (
        <>
        <h1>Gears</h1>
        { adding ?
            <>
            <GearForm addGear={addGear} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>    
            </>
            :
            <Button variant="info" onClick={() => setAdding(true)}>+</Button>
        }
        <GearList gears={gears} />
        </>
    )
}

const ConnectedGears = (props) => (
    <GearConsumer>
        { value => <Gears {...props} {...value} />}
    </GearConsumer>
)

export default ConnectedGears;