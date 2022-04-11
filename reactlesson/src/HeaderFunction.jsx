import React from 'react'

export default function HeaderFunction(props) {
  console.log(props)
  return (
    <div>
     
        <h1 className="text-primary">Header</h1>
        <p>{props.head}</p>
       <hr />
    </div>
  )
}
