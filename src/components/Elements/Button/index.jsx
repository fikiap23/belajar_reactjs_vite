/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// function komponen
// eslint-disable-next-line no-unused-vars
const Button = (props) => {
  const {
    children = 'ini tombol',
    classname = 'bg-slate-700',
    onClick = () => {},
    type = 'button',
  } = props
  return (
    <button
      className={`${classname} text-white py-2 px-4 rounded`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
