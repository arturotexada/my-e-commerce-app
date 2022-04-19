import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsThunk, getCategoriesThunk } from '../redux/actions';


const Home = () => {

    const dispatch = useDispatch();

    const items = useSelector(state => state.items);    
    const categories = useSelector(state => state.categories);  

    useEffect(() => {
        dispatch(getItemsThunk());
        dispatch(getCategoriesThunk());
    }, [])
    
  return (
    <div>
        <h1>Home</h1>
        {
            categories.map(categoria => (
                <button key={categoria.category.id}>
                    {categoria.category.name}
                </button>
            ))
        }
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>
                        {/* {item.title}    */}
                        {item.category.name}
                    </li>
                ))
            }
        </ul>
    </div>
  );
};

export default Home;