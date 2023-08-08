import Button from '../Elements/Button'
import InputForm from '../Elements/Input'
const FromRegister = () => {
  return (
    <form action="">
      <div className="mb-6">
        <InputForm
          label="Full Name"
          placeholder="insert your name..."
          type="text"
          id="full-name"
          name="full-name"
          htmlfor="full-name"
        />
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
        <InputForm
          label="Password"
          placeholder="confirm password"
          type="password"
          id="confirm-password"
          name="confirm-password"
          htmlfor="confirm-password"
        />
      </div>
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  )
}

export default FromRegister
