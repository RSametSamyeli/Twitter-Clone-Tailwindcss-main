import React from 'react'
import userİmg from '../images/userİmg.jpeg'
import { UserIcon } from '../icons/İcons'

const UserShare = () => {
  return (
    <div className="flex items-center p-2 bg-gray-extraLight rounded-full">
      <div className="profileIcon mr-2">
        <img
          src={userİmg}
          alt="Twitter Logo"
          className="w-10 h-10 rounded-full"
        ></img>
      </div>
      <div className="profileContent flex-1">
        <div className="profileName text-black font-bold">
          <h4>Ahmet Aktaş</h4>
        </div>
        <div className="profileNickName font-light">
          <h5>@ahmetaktass</h5>
        </div>
      </div>
      <div className="profileShareBtn">
        <UserIcon className="bg-gray-600 w-4 h-4" />
      </div>
    </div>
  )
}

export default UserShare
