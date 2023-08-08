import React from 'react'

// class komponen
class Button extends React.Component {
  render() {
    return (
      <button
        className="h-10 px-6 font-semibold rounded-md bg-green-500 text-white"
        type="submit"
      >
        Buy now
      </button>
    )
  }
}

// function komponen
function ButtonBlack() {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      type="submit"
    >
      Buy now
    </button>
  )
}

const ButtonRed = () => {
  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
      type="submit"
    >
      Buy now
    </button>
  )
}

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button />
        <Button />
        <Button />
        <Button></Button>
        <ButtonBlack />
        <ButtonRed />
      </div>
    </div>
  )
}

export default App
