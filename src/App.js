import styled from 'styled-components';
import Modal from 'react-modal';

import List from './components/List/List'
import Header from './components/Header/Header';

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2D7B86;
    min-width: 100vh;
    min-height: 100vh;
  `

  const Container = styled.div`
      background: white;    
      width: 50vh;
      height: 75vh;
      border-radius: 5px;
      padding: 25px;
  `

function App() {

  return (
    <Background>
      <Container>
        <Header/>
        <List />
      </Container>
    </Background>
  );
}

Modal.setAppElement('#root')

export default App;
