import {Image,  Container, Row, Col } from 'react-bootstrap';
import { Header1, Header2 , Grid,  Bgcolor,Image1, Middle,Text, Iborder} from '../../styles/aboutStyles.js';
import React from 'react';

const About = ({}) => (
  <>
  <Grid>
    
    <Container class="container">
      <Image1>
    <Iborder>
    <Image className='img-fluid rounded-pill' src='https://media.istockphoto.com/photos/young-man-success-celebration-at-office-picture-id888751614?b=1&k=20&m=888751614&s=170667a&w=0&h=X1PBWU4cxcavqoa3zxdYMhVHbn5BPm7wyO_y_cTFqus=' 
    alt='landscape' width="500px" />
    </Iborder>
    <Header1>Dani Miletic</Header1>
    <Header2 class='text-left'>blah blah</Header2>
    </Image1>
    </Container>
    
    <Container class="container">
    <Image1>
    <Image className='img-fluid rounded-pill' src='https://media.istockphoto.com/photos/young-man-success-celebration-at-office-picture-id888751614?b=1&k=20&m=888751614&s=170667a&w=0&h=X1PBWU4cxcavqoa3zxdYMhVHbn5BPm7wyO_y_cTFqus=' alt='landscape' width="500px" />
    <Header1>Danny Putnam</Header1>
    <Header2 class='text-left'>blah blah</Header2>
    </Image1>
    </Container>

    <Container class="container">
    <Image1>
    <Image  className='img-fluid rounded-pill' src='https://media.istockphoto.com/photos/young-man-success-celebration-at-office-picture-id888751614?b=1&k=20&m=888751614&s=170667a&w=0&h=X1PBWU4cxcavqoa3zxdYMhVHbn5BPm7wyO_y_cTFqus=' alt='landscape' width="500px" />
    <Header1>Daniel Williams</Header1>
    <Header2 class='text-left'>blah blah</Header2>
    </Image1>
    </Container>

    <Container class="container">
    <Image1>
    <Image className='img-fluid rounded-pill' src='https://media.istockphoto.com/photos/young-man-success-celebration-at-office-picture-id888751614?b=1&k=20&m=888751614&s=170667a&w=0&h=X1PBWU4cxcavqoa3zxdYMhVHbn5BPm7wyO_y_cTFqus=' alt='landscape' width="500px" />
    <Header1>Hailey Thompson</Header1>
    <Header2 class='text-left'>blah blah</Header2>
    </Image1>
    </Container>

    <Container class="container">
    <Image1>
    <Image className='img-fluid rounded-pill' src='https://media.istockphoto.com/photos/young-man-success-celebration-at-office-picture-id888751614?b=1&k=20&m=888751614&s=170667a&w=0&h=X1PBWU4cxcavqoa3zxdYMhVHbn5BPm7wyO_y_cTFqus=' alt='landscape' width="500px" />
    <Header1>Madeleine Whitley</Header1>
    <Header2 class='text-left'>blah blah</Header2>
    </Image1>
    </Container>
    
     
    </Grid>

  </>
)

export default About;