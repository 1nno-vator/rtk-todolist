import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './AddModal.scss';

import { ADD_TODO, MODAL_TOGGLE } from '../../feature/todolist';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

const InnerModalConatiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    textarea {
        margin-top: 20px;
        width: 98%;
        resize: none;
    }
`

const ButtonContainer = styled.div`
    margin-top: 30px;

    button {
        margin-left: 15px;
        padding: 15px;
        border: none;
        cursor: pointer;
    }
`

function AddModal(props) {
    const isModalOpen = useSelector((state) => state.todo.isModalOpen);
    const dispatch = useDispatch();

    const [todoTitle, setTodoTitle] = useState('');
    const [todoContent, setTodoContent] = useState('');

    const onChangeTodoTitle = (e) => {
        setTodoTitle(e.target.value);
    }

    const onChangeTodoContent = (e) => {
        setTodoContent(e.target.value);
    }

    const addTodoDispatcher = (_data) => {
        
        if (todoTitle === '') {
            return alert('TODO TITLE IS EMPTY')
        }
        
        dispatch(ADD_TODO(_data));
        modalToggleDispatcher();
    }

    const modalToggleDispatcher = () => {
        setTodoTitle('');
        setTodoContent('');
        dispatch((MODAL_TOGGLE()))
    }

    return (
        <Modal
            isOpen={isModalOpen}
            style={
                {
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.4)'
                    },
                    content: {
                      position: 'absolute',
                      top: '80px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      padding: '20px',
                      maxHeight: '450px'
                    }
                  }
            }
        >
            {/* contents */}

            <InnerModalConatiner>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Name" name="name" id='name' value={todoTitle} onChange={onChangeTodoTitle}/>
                    <label htmlFor="name" className="form__label">What To Do?</label>

                    <textarea placeholder='내용' rows={15} value={todoContent} onChange={onChangeTodoContent}/>
                </div>

                <ButtonContainer>
                    <button onClick={() => { addTodoDispatcher({ title: todoTitle, content: todoContent })} }>ADD TODO</button>
                    <button onClick={() => { modalToggleDispatcher() }}>CLOSE</button>
                </ButtonContainer>

            {/* contents */}
            </InnerModalConatiner>
        </Modal>
    )
}

export default AddModal;
