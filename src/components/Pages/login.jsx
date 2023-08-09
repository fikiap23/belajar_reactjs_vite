import AuthLayout from '../Layouts/AuthLayouts'
import FormLogin from '../Fragments/FormLogin'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-4 text-center">
        {`Dont't have a account?`}{' '}
        <Link to="/register" className="text-blue-600 font-bold ml-1">
          Register
        </Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage
