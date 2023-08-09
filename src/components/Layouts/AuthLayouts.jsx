import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const AuthLayout = (props) => {
  const { children, title, type } = props
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-sm mt-4 text-center">
          {type === 'login'
            ? "Don't have an account? "
            : 'Already have an account? '}
          {type === 'login' && (
            <Link to="/register" className="text-blue-600 font-bold ml-1">
              Register
            </Link>
          )}
          {type === 'register' && (
            <Link to="/Login" className="text-blue-600 font-bold ml-1">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  )
}

export default AuthLayout
