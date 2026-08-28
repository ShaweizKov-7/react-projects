import { useEffect, useState } from 'react'
import './styles.css'

export function LoadMoreProducts({url}){

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const disableBtn = products.length >= 100;

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);

            try{
                 const response = await fetch(`${url}?limit=20&skip=${count === 0 ? 0 : count * 20}`);
                const data = await response.json();
                setProducts((prev) => [
                    ...prev,
                    ...data.products
                ]);
                setLoading(false);
            } catch(e){
                setError(e);
            }
          
        }
           loadProducts();
    }, [count]);


  

   function loadMore(){
    setCount(count => count + 1);
   }

    console.log(products);
    if(loading) return <div>Loading Products...</div>
    if(error !== null) return <div>Error Occured:{error}</div>


    return (
        <div className='container'>

        <div className='products-grid'>
            {
                products && products.length ? 
                products.map((product) => {
                    return (
                        <div className='product-container'>
                            <div className='product-image'>
                            <img src={product.thumbnail} alt="" />
                            </div>

                            <div className='title'>{product.title}</div>
                        </div>
                    ) 
                })
                : null 
            } 

            
        </div>

            <button 
            onClick={loadMore}
            disabled={disableBtn}
            >Load More Products</button>
            {
        disableBtn && <p style={{textAlign: 'center'}}>You Have Reached the Limit</p>
            }

         </div>

    )
}