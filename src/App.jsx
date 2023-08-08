/* eslint-disable react/prop-types */
// function komponen
const Button = (props) => {
  return (
    <button
      className={`${props.bgcolor} text-white py-2 px-4 rounded`}
      type="submit"
    >
      {props.text}
    </button>
  )
}

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button bgcolor="bg-red-500" text="login" />
        <Button bgcolor="bg-green-500" text="register" />
        <Button bgcolor="bg-amber-500" text="logout" />
        <Button bgcolor="bg-pink-500" text="profile" />
      </div>
    </div>
  )
}

export default App
