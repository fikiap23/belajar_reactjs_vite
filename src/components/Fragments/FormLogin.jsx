import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { login } from '../../services/auth.service'
import Button from '../Elements/Button'
import InputForm from '../Elements/Input'
const FromLogin = () => {
  const [loginFailed, setLoginFailed] = useState('')
  const handlerLogin = (even) => {
    even.preventDefault()
    // localStorage.setItem('username', even.target.username.value)
    // localStorage.setItem('password', even.target.password.value)
    // console.log(even.target.username.value)
    // console.log(even.target.password.value)
    // console.log('login')
    // window.location.href = '/products'
    const data = {
      username: even.target.username.value,
      password: even.target.password.value,
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res)
        window.location.href = '/products'
      } else {
        setLoginFailed(res.response.data)
        console.log(res.response.data)
      }
    })
  }

  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current.focus()
  }, [])
  return (
    <form onSubmit={handlerLogin}>
      <div className="mb-6">
        <InputForm
          label="Username"
          placeholder="user123"
          type="text"
          id="username"
          name="username"
          htmlfor="username"
          ref={usernameRef}
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
      {loginFailed && (
        <p className="text-red-600 text-center mt-5">{loginFailed}</p>
      )}
    </form>
  )
}

export default FromLogin
