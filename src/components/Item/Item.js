import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { DELETE_TODO, DONE_TASK } from '../../feature/todolist';

import { MdUndo, MdOutlineFileDownloadDone, MdDelete } from 'react-icons/md'

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
    width: 75%;
    text-align: center;
    cursor: pointer;
    text-decoration: ${ ({ isDone }) => isDone ? 'line-through' : null }
`

const ItemButton = styled.div`
    width: 15%;
    cursor: pointer;
`

function Item(props) {
    console.log(props);
    const dispatch = useDispatch();

    return (
        <ItemContainer>
            <ItemTitle isDone={props.isDone} onClick={() => alert(props.content)}>{props.title}</ItemTitle>
            <ItemButton>
                {
                    props.isDone 
                        ?   <MdUndo 
                                onClick={() => dispatch(DONE_TASK(props.idx))}
                                style={ { fontSize: '26px', verticalAlign: 'middle' } }
                            />
                        :   <MdOutlineFileDownloadDone 
                                onClick={() => dispatch(DONE_TASK(props.idx))}
                                style={ { fontSize: '26px', verticalAlign: 'middle' } }
                            />
                }
                
            </ItemButton>
            <ItemButton>
                <MdDelete 
                    onClick={() => dispatch(DELETE_TODO(props.idx))}
                    style={ { fontSize: '26px', verticalAlign: 'middle' } }
                />
            </ItemButton>
        </ItemContainer>
    )
}

export default Item;
