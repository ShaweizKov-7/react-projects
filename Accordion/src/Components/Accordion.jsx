import './styles.css';
import { data } from './data';
import { useState } from 'react';



export function Accordion(){
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState({});

    function handleMultiSelection(itemId){
        setMultiple((prev) => ({
            ...prev,
            [itemId]: !prev[itemId]
    }))
    }

    return (
        <div className='container'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi-Selection</button>
            {
                data.length && data.map((item) => {
                    return (
                        <div  
                        className='accordion' 
                        key={item.id}
                        >
                            <div className='question'
                                onClick={() => enableMultiSelection ? handleMultiSelection(item.id) : setSelected( (selected === item.id ) ? 
                                null : item.id
                                )}
                            >
                                <h3>{item.question}</h3>
                                <span>+</span>
                            </div>

                            {
                               (enableMultiSelection ? multiple[item.id] : selected === item.id ) && (
                                    <div className='answer'>
                                        {item.answer}
                                    </div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}