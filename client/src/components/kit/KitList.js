import { Link } from 'react-router-dom';
import { Grid, Font, KitContainer, Item } from '../../styles/kitStyles';
import { Container } from 'react-bootstrap';

const KitList = ({ kits }) => {
    return(
			// <Container>
			// 	<Font>
			// 		<Grid>
			// 			{ kits.map( k =>
			// 				<Link to={`/kits/${k.id}`} style={{ color: "#fe2712", textDecoration: 'none'}}>
			// 					<img src={k.image} style={{ width: '400px'}}></img>
			// 					<p>{k.name}</p>
			// 				</Link>
			// 			)}
			// 		</Grid>
			// 	</Font>
			// </Container>
			<Container>
				<Font>
					<Grid>
						{ kits.map( k =>
							<Link to={`/kits/${k.id}`} style={{ color: "#fe2712", textDecoration: 'none'}}>
								<img src={k.image} style={{ width: '400px'}}></img>
								<p>{k.name}</p>
							</Link>
						)}
					</Grid>
				</Font>
			</Container>
    	)
		}

export default KitList;