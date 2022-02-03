import { Background, Header1, ContentContainer, ContentContainer2, Para } from '../../styles/homePageStyles';

const Home = ({}) => (
  <>
    <Background>
      <Header1> Camera Cabinet </Header1>
      <Para>Make sure you know what gear you have so <br /> you don't forget the essentials at your next <br />shoot. Sign up today, it's free!</Para>
      <ContentContainer>
        <img src='/assets/images/camcab.jpeg' alt="logo" width='450px'/>
      </ContentContainer>
      <ContentContainer2>
        <img src='/assets/images/2.png' alt="logo" width='150px'/>
      </ContentContainer2>
    </Background>
  </>
)

export default Home;