/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// function komponen
// eslint-disable-next-line no-unused-vars
const Button = (props) => {
  const { children = 'ini tombol', bgcolor = 'bg-slate-700' } = props
  return (
    <button className={`${bgcolor} text-white py-2 px-4 rounded`} type="submit">
      {children}
    </button>
  )
}

export default Button