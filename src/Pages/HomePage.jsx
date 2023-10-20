import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const HomePage = () => {
    
    const url = "https://fakestoreapi.com/products";

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchData(){
        setLoading(true);
        try{
            const result = await fetch(url);
            const data = await result.json();
            setPosts(data);
        } catch(error){
            console.log("Error occured while calling api");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchData();
    },[]);

  return (
    <div>
        {
            loading ? <Spinner/> :
            posts.length > 0 ?
            (<div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10'>
                {
                    posts.map( (post) => (<Product key={post.id} post={post}/>))     
                } 
            </div>) :
            (<div className='flex justify-center items-center'>
                <p>No Data Found</p>
            </div>)   
        }
    </div>
  )
}

export default HomePage
