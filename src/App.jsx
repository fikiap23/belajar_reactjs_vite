/* eslint-disable react/prop-types */
// function komponen
const Button = (props) => {
  const { children = 'ini tombol', bgcolor = 'bg-slate-700' } = props
  return (
    <button className={`${bgcolor} text-white py-2 px-4 rounded`} type="submit">
      {children}
    </button>
  )
}

function App() {
  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button bgcolor="bg-red-500">Logout</Button>
        <Button bgcolor="bg-green-500">Register</Button>
        <Button bgcolor="bg-amber-500">Login</Button>
        <Button bgcolor="bg-pink-500">Profile</Button>
        <Button></Button>
      </div>
    </div>
  )
}

export default App
