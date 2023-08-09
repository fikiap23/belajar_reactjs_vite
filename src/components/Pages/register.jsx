import AuthLayout from '../Layouts/AuthLayouts'
import FormRegister from '../Fragments/FormRegister'
import { Link } from 'react-router-dom'
const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-4 text-center">
        {`Have a account?`}
        <Link to="/login" className="text-blue-600 font-bold ml-1">
          Login
        </Link>
      </p>
    </AuthLayout>
  )
}

export default RegisterPage
