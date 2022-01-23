import { ListGroup, Row, Col, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const KitList = ({ kits }) => {
    return(
        <>
        {/* <ListGroup>
            { kits.map( k =>
            <Link to={`/kits/${k.id}`}>
                <ListGroup.Item>{k.name}</ListGroup.Item>
            </Link>
            )}
        </ListGroup> */}
          <Container>
            <Row xs={1} md={3}>
            { kits.map( k => 
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={k.image} />
                    <Card.Body>
                      <Card.Title>
												{k.name}
											</Card.Title>
                      <Link to={`/kits/${k.id}`}>
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

export default KitList;