import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { DELETE_TODO } from '../../feature/todolist';

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
    background: rgba(227, 227, 227, 0.4);
    margin-top: 20px;
    line-height: 40px;
`

const ItemTitle = styled.div`
    flex-grow: 8;
    text-align: center;
    cursor: pointer;
`

const ItemButton = styled.div`
    flex-grow: 1;
    cursor: pointer;

    button {
        width: 80%;
        cursor: pointer;
    }
`

function Item(props) {
    console.log(props);
    const dispatch = useDispatch();

    return (
        <ItemContainer>
            <ItemTitle onClick={() => alert(props.content)}>{props.title}</ItemTitle>
            <ItemButton><button>DONE</button></ItemButton>
            <ItemButton><button onClick={() => dispatch(DELETE_TODO(props.idx))}>DELETE</button></ItemButton>
        </ItemContainer>
    )
}

export default Item;
