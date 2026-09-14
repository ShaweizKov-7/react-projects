import { useState } from "react";
import { Squares } from "./Squares";
import './style.css';



export function TicTacToe(){
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [playAgainstCPU, setPlayAgainstCPU] = useState(false);




    function minMax(board, isMax){
        if(getWinner(board) === 'X') return -10;
        if(getWinner(board) === 'O') return 10;
        if(getEmptySquares(board).length === 0) return 0;

        if(isMax) {
       
            let bestScore = -Infinity;
            const emptySquares = getEmptySquares(board);

            for(let i = 0; i < emptySquares.length; i++){
                     let newBoard = [...board];

                newBoard[emptySquares[i]] = 'O'; 

                let score = minMax(newBoard, false);

                if(score > bestScore){
                    bestScore = score;
                }
            }

            return bestScore;
    
        } else {
        
            let bestScore = Infinity;
            const emptySquares = getEmptySquares(board);

            for(let i = 0; i < emptySquares.length; i++){
                    let newBoard = [...board];

                newBoard[emptySquares[i]] = 'X'; 

                let score = minMax(newBoard, true);

                if(score < bestScore){
                    bestScore = score;
                }
            }

            return bestScore;
        }
    }

    function getBestMove(board){

        let bestScore = -Infinity;
        let bestMove;
        const emptySquares = getEmptySquares(board);

        for(let i = 0; i < emptySquares.length; i++){

            let newBoard = [...board];

            newBoard[emptySquares[i]] = 'O';

            const score = minMax(newBoard, false);

            if(score > bestScore){
                bestScore = score;
                bestMove = emptySquares[i];
            }
            
        }

        return bestMove;
    }


    function getWinner(board){
        const winningCombination = winningCombinations.find(([a, b, c]) => {
            return board[a] &&
                   board[a] === board[b] &&
                   board[a] === board[c];
        })

        if(winningCombination){
            return board[winningCombination[0]];
        }
    }

    function getEmptySquares(board){
            return board.map((value, index) => {
              return value === null ? index : null
            }).filter(index => index !== null);

    }

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const isBoardFull = board.every(square => square !== null);

    function handleClick(index){
        setBoard((prev) => {
            if(!playAgainstCPU){
                const newBoard = [...prev];

                console.log([...prev]);

                newBoard[index] = currentPlayer;

                return newBoard;
            } else {
             
                const newBoard = [...prev];

                newBoard[index] = 'X';
                
              
                    const bestMove = getBestMove(newBoard);

                if(bestMove !== null) newBoard[bestMove] = 'O';

         

                   return newBoard;
                
            }

        
        });

            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    return (
        <div className="container">
            <div className="board">
                {
                    board && board.length ? board.map((_, index) => {
                    return (    <Squares 
                           value={board[index]}
                           key={index}
                           onClick={() => handleClick(index)}
                           disabled={board[index] !== null || getWinner(board) || isBoardFull}
                          /> )
                    }) : null
                }
              
            </div>

                <div className="text">
                    {
                      !getWinner(board)  && !isBoardFull && !playAgainstCPU ? <div>It's {currentPlayer} Turn</div> : null
                    }

                    {
                        getWinner(board) ? <div>{getWinner(board)}: Wins</div> : 
                        isBoardFull ? <div>It's a draw</div> : null
                    }
                </div>

              <div className="btns">
                      <button className="reset" onClick={() => {
                        setBoard(Array(9).fill(null))
                        setCurrentPlayer('X')
                        }}>Reset</button>
            <button className="play-human" onClick={() => setPlayAgainstCPU(false)}>Play Against a Human</button>
            <button className="play-cpu" onClick={() => setPlayAgainstCPU(true)}>Play Against CPU</button>
                </div>  
      
        </div>
    )
}