import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';


const QuizContent = styled.div`
  width:100%;
  max-width: 350px;
  padding-top: 10%;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;
const Home = () =>  {
  return (
    <QuizBackground backgroundImage={db.bg}> 
      <QuizContent>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p> Lorem ipsum dolor sit amet.....</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>The legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p> Lorem ipsum dolor sit amet.....</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContent>
      <GitHubCorner projectUrl="https://github.com/cleones" />
    </QuizBackground>
  )
}

export default Home
