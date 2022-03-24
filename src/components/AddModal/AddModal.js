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

function AddModal(props) {
    const isModalOpen = useSelector((state) => state.todo.isModalOpen);
    const dispatch = useDispatch();

    const [todoTitle, setTodoTitle] = useState('');

    const onChangeTodoTitle = (e) => {
        console.log(e);
        setTodoTitle(e.target.value);
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
                      top: '40px',
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
                <label htmlFor="name" className="form__label">To-Do</label>

                <textarea placeholder='What To Do?' rows={15}/>
            </div>

                <button onClick={() => dispatch((ADD_TODO()))}>ADD TODO</button>
                <button onClick={() => dispatch((MODAL_TOGGLE()))}>CLOSE</button>

            {/* contents */}
            </InnerModalConatiner>
        </Modal>
    )
}

export default AddModal;
