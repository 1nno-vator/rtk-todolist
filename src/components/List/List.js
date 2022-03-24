import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Item from '../Item/Item';

function List() {

    const listData = useSelector((state) => state.todo.data);

    console.log(listData);

    return (
            listData.map((v,i) =>
                    <Item key={i}
                        idx={v.idx}
                        title={v.title}
                        content={v.content}
                        isDone={v.isDone}
                    />
            )
    )

}

export default List;
