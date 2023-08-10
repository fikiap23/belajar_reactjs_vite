import Button from '../Elements/Button'
import InputForm from '../Elements/Input'
const FromLogin = () => {
  const handlerLogin = (even) => {
    even.preventDefault()
    localStorage.setItem('email', even.target.email.value)
    localStorage.setItem('password', even.target.password.value)
    console.log(even.target.email.value)
    console.log(even.target.password.value)
    console.log('login')
    window.location.href = '/products'
  }
  return (
    <form onSubmit={handlerLogin}>
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
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  )
}

export default FromLogin
