import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { ADD_TODO, MODAL_TOGGLE } from '../../feature/todolist';
import AddModal from '../AddModal/AddModal';

import Modal from 'react-modal';
import {useState} from "react";

const HeaderText = styled.h1`
    font-weight: bold;
    font-size: 32px;
    padding-bottom: 15px;
    border-bottom: 1px solid #c1c1c1;
`

function Header() {
    // const [isModalOpen, setModalOpen] = useState(false);
    const isModalOpen = useSelector((state) => {
        console.log(state);
        return state.todo.isModalOpen
    });
    const dispatch = useDispatch();

    console.log('redux isModalOpen');
    console.log(isModalOpen);

    return (
        <>
            <HeaderText>
                할 일
                <button onClick={() => dispatch((MODAL_TOGGLE()))}>INSERT</button>
                <AddModal isModalOpen={isModalOpen}/>
            </HeaderText>
        </>
    )
}

export default Header;
