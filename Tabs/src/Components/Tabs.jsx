import { useState } from "react"
import './styles.css';


export function Tabs({tabs}){

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleClick(index){
        setCurrentTabIndex(index);
    }

    return (
        <div className="container">
            <div className="tabs-container">
            {   
                tabs && tabs.length ? 
                tabs.map((tab, index) => {
                 return (  
                     <div className={`tab ${currentTabIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}> 
                        {tab.label}
                    </div> 
                    )
                }) : <div>There is no data !</div>
            }
            </div>

            <div className="tab-content">
                {
                    tabs[currentTabIndex] && tabs[currentTabIndex].content
                }
            </div>
        </div>
    )
}