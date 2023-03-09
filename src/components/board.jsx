import { useState } from "react"
import { TURNS } from "../constants"
import { validateFinishGame, validateWinner } from "../logic/validateWinner"
import ResetButton from "./resetButton"
import Square from "./square"
import Turns from "./turns"
import WinnerModal from "./winnerModal"

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // Validate value square in board
    if (board[index] || winner) return

    // Update board with each turn
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Update turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Validate posible winner or tie
    const newWinner = validateWinner(newBoard)
    const endGame = validateFinishGame(newBoard)

    if (newWinner) {
      setWinner(newWinner)
    } else if (endGame) {
      setWinner(false)
    }
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="main">
      <section className="board">
        {board.map((square, index) => (
          <Square
            key={index}
            updateBoard={updateBoard}
            index={index}
          >
            {square}
          </Square>
        ))}
      </section>
      <Turns turn={turn}/>
      <ResetButton resetBoard={resetBoard}/>
      <WinnerModal winner={winner} resetBoard={resetBoard}/>
    </main>
  )
}

export default Board
