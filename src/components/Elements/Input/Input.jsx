/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, id, name } = props
  return (
    <input
      type={type}
      className="text-sm border rounded py-2 px-3 text-slate-700 w-full placeholder:opacity-50"
      placeholder={placeholder}
      id={id}
      name={name}
    />
  )
}

export default Input
