import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
  return (
    <div>The error is {err.status}</div>
  )
}

export default Error