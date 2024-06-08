import React from 'react'
import Form from 'react-bootstrap/Form';

export default function InputFieldErrorMsg() {
  return (
    <Form.Control.Feedback type="invalid">
      This field can't be empty.
    </Form.Control.Feedback>
  )
}
