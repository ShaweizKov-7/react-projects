import { MenuList } from "./MenuList"

export function MenuView({menu = []}){
    return (
        <div className="container">
        <MenuList list={menu}/>
        </div>
    )
}