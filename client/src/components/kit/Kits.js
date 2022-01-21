import { useEffect, useState } from 'react';
import { KitConsumer } from '../../providers/KitProvider';
import KitList from './KitList';
import { Button } from 'react-bootstrap';
import KitForm from './KitForm';


const Kits = ({ kits, getAllKits, addKit }) => {
    const [adding, setAdding] = useState(false)

    useEffect( () => {
        getAllKits()
    }, [])

    return (
        <>
        <h1>Kits</h1>
        { adding ?
            <>
            <KitForm addKit={addKit} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>    
            </>
            :
            <Button variant="info" onClick={() => setAdding(true)}>+</Button>
        }
        <KitList kits={kits} />
        </>
    )
}

const ConnectedKit = (props) => (
    <KitConsumer>
        { value => <Kits {...props} {...value} />}
    </KitConsumer>
)

export default ConnectedKit;