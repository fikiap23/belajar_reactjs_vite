/* eslint-disable react/prop-types */
import Label from './Label'
import Input from './Input'
const InputForm = (props) => {
  const {
    label,
    type = 'text',
    placeholder = '',
    id = '',
    name = '',
    htmlfor,
  } = props
  return (
    <div className="mb-6">
      <Label htmlfor={htmlfor}>{label}</Label>
      <Input type={type} placeholder={placeholder} id={id} name={name} />
    </div>
  )
}

export default InputForm
