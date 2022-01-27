import { useEffect, useState } from 'react';
import { KitConsumer } from '../../providers/KitProvider';
import KitList from './KitList';
import { Button } from 'react-bootstrap';
import KitForm from './KitForm';
import { Header1, Para1, Font } from '../../styles/kitStyles.js';

const Kits = ({ kits, getAllKits, addKit }) => {
    const [adding, setAdding] = useState(false)

    useEffect( () => {
        getAllKits()
    }, [])

    return (
        <>
					<Header1>
						<Font>
          		Your Kits
						</Font>
        	</Header1>
					<Para1>
						<Font>
							The easy way to remember what you will take to your adventures.
						</Font>
					</Para1>
        {/* { adding ?
            <>
            <KitForm addKit={addKit} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>    
            </>
            :
            <Button variant="info" style={{ backgroundColor: "#8B0000"}}onClick={() => setAdding(true)}>Add Kit</Button>
        } */}
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