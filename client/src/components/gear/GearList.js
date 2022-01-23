import { Row, Col, Card, Button, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GearList = ({ gears, kitId }) => {
    return(
        <>
        {/* <ListGroup>
            { gears.map( g =>
                <Link to={`/${kitId}/gears/${g.id}`}>
                    <ListGroup.Item>{g.name}</ListGroup.Item>
                </Link>
            )}
        </ListGroup> */}
          <Container>
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
                        <Link to={`/${kitId}/gears/${g.id}`}>
                          <Button type="submit" variant="primary">Show</Button>
                        </Link>
                    </Card.Body>
                  </Card>
                </Col>
                )
              }
            </Row>
          </Container>
     </>
    )
}

export default GearList;