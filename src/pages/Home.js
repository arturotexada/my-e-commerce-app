import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsThunk, getCategoriesThunk, filterCategoriesThunk } from '../redux/actions';
import { filterHeadlineThunk } from './../redux/actions';


const Home = () => {

    const dispatch = useDispatch();
    const [ headline, setHeadline ] = useState("");
    const items = useSelector(state => state.items);    
    const categories = useSelector(state => state.categories);  

    useEffect(() => {
        dispatch(getItemsThunk());
        dispatch(getCategoriesThunk());
    }, []);
    
    const searchItems = (e) => {
        e.preventDefault();
        dispatch(filterHeadlineThunk(headline));
    }


  return (
    <div>
        <h1>Home</h1>
        

            <form onSubmit={searchItems}>
                <input 
                    type="text" 
                    placeholder='search products by headline' 
                    value={headline} 
                    onChange={e => setHeadline(e.target.value)} 
                    />   
                <button>Search</button>
            </form>

        {
            categories.map(categoria => (
                <button 
                    key={categoria.category.id} 
                    onClick={() => dispatch(filterCategoriesThunk(categoria.category.id))}
                >
                    {categoria.category.name}
                </button>
            ))
        }

        <ul className= 'items-list'>
            {
                items.length === 0 ? (
                    <p>We didn't found items using this filter</p>
                ) : (
                    items.map(item => (
                        <li key={item.id}>
                            <strong>{item.headline}</strong>
                             {item.title}    
                            <img src={item.productImgs} alt="" /> 
                            
                        </li>
                    ))
                )
            }
            {
                
            }
        </ul>
    </div>
  );
};

export default Home;