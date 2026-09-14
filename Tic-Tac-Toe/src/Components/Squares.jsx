import './style.css';

export function Squares({value, onClick, disable}){
    return (
        <div className="square">
            <button
            onClick={onClick}
            disabled={disable}
            >{value}</button>
        </div>
    )
}