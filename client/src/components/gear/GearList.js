import { Row, Col, Card, Button, Container, ListGroup } from 'react-bootstrap';
import { Font } from '../../styles/gearStyles';
import { Link } from 'react-router-dom';

const GearList = ({ gears, kitId }) => {
    return(
        <>
          <Container>
            <Font>
            { gears.map( g =>
                <Link to={`/${kitId}/gears/${g.id}`} style={{ color: "#fe2712", textDecoration: 'none'}}>
                  <p>{g.name}</p>
                  {/* <img src={g.image} style={{ width: '200px'}}></img> */}
                </Link>
            )}
            </Font>
          </Container>
          {/* <Container>
            <Row xs={1} md={3}>
            { gears.map( g => 
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={g.image} />
                    <Card.Body>
                      <Card.Title>
												{g.name}
											</Card.Title>
                      <Card.Text>
                         Description: {g.desc}
                      </Card.Text>
                        <Link to={`/kits/${kitId}/gears/${g.id}`}>
                          <Button type="submit" variant="primary">Show</Button>
                        </Link>
                    </Card.Body>
                  </Card>
                </Col> */}
                {/* )
              }
            </Row> */}
          {/* </Container> */}
     </>
    )
}

export default GearList;