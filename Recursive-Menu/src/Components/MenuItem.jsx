import { useState } from "react"
import { MenuList } from "./MenuList"

export function MenuItem({listItem = []}){

    const [displayCurrentChild, setDisplayCurrentChild] = useState({});

    function displayChild(label){
        setDisplayCurrentChild((prev) => ({
            ...prev,
            [label]: !prev[label]
        }));
    }

    return (
        
     <li >
        <div className="parent-container">
        <p>{listItem.label}</p>
        {
            listItem && listItem.childern && listItem.childern.length ? <span 
            onClick={() => displayChild(listItem.label)}>
                {
                    displayCurrentChild[listItem.label] ? '-' : '+'
                }
            </span> : null
        }
        </div>
        {
             listItem && listItem.childern && listItem.childern.length && displayCurrentChild[listItem.label] ?
            <MenuList list={listItem.childern} /> : null

        }
     </li>
    )
}