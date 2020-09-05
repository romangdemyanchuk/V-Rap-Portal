/* eslint-disable */
import React from 'react'
import Multiselect from 'react-widgets/lib/Multiselect'

export const Input = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;
  return (
    <div >
      <div>
        <input style={{ border: hasError && "2px solid red"}} {...input} {...props}/>
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const InputSelectProfession = ({ input, meta, data, valueField, textField }) => {
  const hasError = meta.touched && meta.error;
  return (
    <Multiselect {...input}
                 style={{ border: hasError && "2px solid red"}}
                 onBlur={() => input.onBlur()}
                 value={input.value || []} // requires value to be an array
                 data={data}
                 valueField={valueField}
                 textField={textField}
    />
  )
}

export const InputSelectHeadset = ({ input, meta, data, valueField, textField }) => {
  const hasError = meta.touched && meta.error;
  return (
    <Multiselect {...input}
                 style={{ border: hasError && "2px solid red"}}
                 onBlur={() => input.onBlur()}
                 value={input.value || []} // requires value to be an array
                 data={data}
                 valueField={valueField}
                 textField={textField}
    />
  )
}

export const InputSelectLocation = ({ input, meta, data, valueField, textField }) => {
  const hasError = meta.touched && meta.error;
  return (
    <Multiselect {...input}
                 style={{ border: hasError && "2px solid red"}}
                 onBlur={() => input.onBlur()}
                 value={input.value || []} // requires value to be an array
                 data={data}
                 valueField={valueField}
                 textField={textField}
    />
  )
}
