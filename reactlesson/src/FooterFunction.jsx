import React from 'react'

export default function FooterFunction(props) {
  console.log(props)
  return (
    <div>
      <hr />
        <h1 className="text-success">Footer</h1>
        <p>{props.foot}</p>
    </div>
  )
}
