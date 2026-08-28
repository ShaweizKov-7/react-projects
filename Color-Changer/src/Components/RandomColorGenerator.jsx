
import { useState } from 'react';
import './styles.css';

export function RandomColorGenerator() {
    const [color, setColor] = useState('#000000');
    const [mode, setMode] = useState('hex')

    function utility(length) {
        return Math.floor(Math.random() * length);
    }

    function generateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let randomHexValue = '';
        for (let i = 0; i < 6; i++) {
            randomHexValue += hex[utility(hex.length)];
        }
        setColor(`#${randomHexValue}`);
    }


    function generateRandomRgbColor(){
        let r = utility(256);
        let g = utility(256);
        let b = utility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    return (
        <div className='container' style={{ background: color }}>
            <div className='btn-container'>
                <button 
                onClick={() => mode === 'rgb' ? generateRandomRgbColor() : generateRandomHexColor()}
                >Generate Random Color</button>
                <button
                onClick={() => {
                    setMode('hex')
                    generateRandomHexColor();
                    }
                }
                >Generate Random Hex Color</button>
                <button
                onClick={() => {
                    setMode('rgb');
                    generateRandomRgbColor();
                    }
                }
                >Generate Random RGB Color</button>
            </div>

            <div className='color-text'>
               Color : {color}
            </div>
        </div>
    )
}