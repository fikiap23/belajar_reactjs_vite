import Button from './components/Elements/Button/index.jsx'

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
