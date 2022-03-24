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

const ListContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`

function App() {

  return (
    <Background>
      <Container>
        <Header/>
        <ListContainer>
          <List />
        </ListContainer>
      </Container>
    </Background>
  );
}

Modal.setAppElement('#root')

export default App;
