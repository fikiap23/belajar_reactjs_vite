import Button from '../Elements/Button'
import InputForm from '../Elements/Input'
const FromLogin = () => {
  return (
    <form action="">
      <div className="mb-6">
        <InputForm
          label="Email"
          placeholder="example@ex.com"
          type="email"
          id="email"
          name="email"
          htmlfor="email"
        />
        <InputForm
          label="Password"
          placeholder="password"
          type="password"
          id="password"
          name="password"
          htmlfor="password"
        />
      </div>
      <Button classname="bg-blue-600 w-full">Login</Button>
    </form>
  )
}

export default FromLogin
