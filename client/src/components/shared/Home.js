import { RedBackground, Header1, ContentContainer, Para } from '../../styles/homePageStyles';

const Home = ({}) => (
  <>
    <RedBackground>
      <Header1> Hello! </Header1>
      <Para>We are Camera Cabinet. Build virtual camera kits and ease the burden of organizing.</Para>
      <ContentContainer>
        <img src='/assets/images/1.png' alt="logo" width='700px'/>
      </ContentContainer>
    </RedBackground>
  </>
)

export default Home;