import { useEffect, useState } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css';

export function ImageSlider({url, page, limit}){
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const showloading = () => {
            setLoading(true);
        }

        showloading();
       
                const loadImages = async (url) => {
            try {
                         const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const images = await response.json();
            setImages(images);
            setLoading(false);
            }
           
            catch(e){
                setError(e);
            } 
        }
        
         loadImages(url);
    
    }, [url, page, limit]);


    function handleLeft(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleRight(){
         setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    if(loading) return <div>Loading...</div>

    if(error !== null) return <div>Error Occurred : {error}</div>

    return (
        <div className='container'>
            <BsArrowLeftCircleFill onClick={handleLeft} className='left-arrow'/>
            {images && images.length ?  
            images.map((image, index) => {
                return (
                    <img 
                    src={image.download_url} 
                    alt={image.download_url} 
                    className={currentSlide === index ? 'current-image' : 'hide-image'}
                    />
                )
            })
            : null}

            <BsArrowRightCircleFill onClick={handleRight} className='right-arrow'/>

            <div className='circle-indicators'>
                {
                    images && images.length ? 
                    images.map((_, index) => {
                        return (
                            <button 
                            key={index}
                            className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive'}
                            onClick={() => setCurrentSlide(index)}
                            >
                                
                            </button>
                        )
                    })
                    : null
                }
            </div>
        </div>
    )

}