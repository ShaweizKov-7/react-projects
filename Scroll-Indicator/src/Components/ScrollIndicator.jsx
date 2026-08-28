import { useEffect, useState } from 'react'
import './styles.css'

export function ScrollIndicator({url}){

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                const data = await response.json();
                if(data && data.products && data.products.length){
                setProducts(data.products);
                setLoading(false);
                }
            }catch(e) {
                console.log(e);
                setErrorMessage(e.message);
                setLoading(false);
            }
        }

        loadProducts();

    }, [url]);

        function  handleScroll() {
            console.log(
                
                document.documentElement.scrollHeight,
                document.documentElement.scrollTop,
                document.documentElement.clientHeight,
            );


            let visibleScrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            || document.documentElement.scrollHeight;

            let scrollPercentage = ((document.documentElement.scrollTop / visibleScrollableHeight) * 100);

            setPercentage(scrollPercentage);
        }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      }
    }, [])

    if(loading) return <div>Loading...</div>
    if(errorMessage !== null) return <div>Error Occurred : {errorMessage}</div>

    


    return (
        
        <div className='container'>
            <div className='scroll-bar' style={{width: `${percentage}%`}}>
               
            </div>
            {
                products && products.length ? 
                products.map((product) => {
                    return (
                        <div className='title' style={{marginTop: `${percentage}`}}>
                            {product.title }
                        </div>
                    )
                }) : null
            }
        </div>
        
    )
}