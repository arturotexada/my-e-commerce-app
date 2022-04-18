import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsThunk } from '../redux/actions';


const Home = () => {

    const items = useSelector(state => state.items);    

const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemsThunk());
    }, [])
    
  return (
    <div>
        <h1>Home</h1>
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>
                        {item.data.products.title}
                    </li>
                ))
            }
        </ul>
    </div>
  );
};

export default Home;