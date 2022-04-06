import React from 'react'

const SideLink = ({ name, İcon }) => {
  return (
    <li className="group">
      <a href={name.toLowerCase()} className="cursor-pointer block text-xl">
        <div className="inline-block">
          <div className="flex items-center  pl-1 py-3 mt-2 group-hover:bg-primary-light group-hover:text-primary-base rounded-full">
            <İcon />
            <span className="ml-4 font-bold"> {name}</span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default SideLink
