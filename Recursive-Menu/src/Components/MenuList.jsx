import { MenuItem } from "./MenuItem";
import './styles.css';

export function MenuList({list = []}){
    return (
        
        <ul className="list-container">
            {
                list && list.length ? 
                list.map((listItem) => {
               return (   
                <div className="menu-list">
                     <MenuItem listItem={listItem}/>
                </div> 
                        
                      )
                })
                : <div>There is no data...</div>
            }
        </ul>
        
    )
}