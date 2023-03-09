function ResetButton({ resetBoard }) {
  return (
    <button
      className="reset"
      onClick={resetBoard}
    >
      Reiniciar
    </button>
  )
}

export default ResetButton
