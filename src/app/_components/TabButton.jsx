import React from 'react'

const TabButton = ({active,selectTab, children}) => {
    const buttonClasses = active?'text-white border-b border-[#00c6ff]':'text-[#adb7be] '
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}  </p></button>
  )
}

export default TabButton
