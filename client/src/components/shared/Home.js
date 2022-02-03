import { RedBackground, Header1, ContentContainer } from '../../styles/homePageStyles';

const Home = ({}) => (
  <>
    <RedBackground>
      <Header1>
        Welcome!
      </Header1>
      <ContentContainer>
        <img src='/assets/images/1.png' alt="logo" width='700px'/>
      </ContentContainer>
    </RedBackground>
  </>
)

export default Home;