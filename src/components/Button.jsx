import React from 'react'

const Button = ({btns}) => {
  return (
    <div className="inline-flex gap-2 ">
        {btns.map((name, index)=>(
            <button key={index}
            className='px-4 py-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-300 '
            >{name}</button>
        ))}
    </div>
  )
}

export default Button
