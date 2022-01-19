import { GearConsumer } from '../../providers/GearProvider'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GearShow = ({}) => {
    const params = useParams()
    const [gear, setGear] = useState({ name: '', desc:'',price: 0, model:'', condition:'',make:'', image: '', serial:''})

    useEffect(() =>{
        axios.get(`/api/kits/${params.kitId}/gears/${params.gearId}`)
    .then( res => setGear(res.data))
    .catch( err => console.log(err))
    }, [])

    const { name, desc, price, model, condition, make, image, serial} = gear
    return (
        <>
        <h1>{name}</h1>
        
        </>
    )
}

const ConnectedGearShow = (props) => (
    <GearConsumer>
        { value => <GearShow {...props} {...value} />}
    </GearConsumer>
)

export default ConnectedGearShow;