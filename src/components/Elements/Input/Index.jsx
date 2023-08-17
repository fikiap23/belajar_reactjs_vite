/* eslint-disable react/prop-types */
import Label from './Label'
import Input from './Input'
import { forwardRef } from 'react'
const InputForm = forwardRef((props, ref) => {
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
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        ref={ref}
      />
    </div>
  )
})
InputForm.displayName = 'InputForm' // Add this line to set the display name of the component

export default InputForm
