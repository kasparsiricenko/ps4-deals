// import styled from '@emotion/styled'
// import { useState } from 'react'

// const FieldRoot = styled.input({
//   display: 'flex',
//   width: '80%',
//   height: '100%',
//   alignItems: 'center',
// })

/** @jsxImportSource @emotion/react */

const Field = ({ label, value, onChange, ...props }) => {
  return (
    <label css={{ display: 'flex', justifyContent: 'flex-end' }} {...props}>
      {label}:
      <input
        css={{ marginLeft: 16 }}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default Field
