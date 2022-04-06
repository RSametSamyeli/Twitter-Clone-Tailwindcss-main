import React from 'react'
import Divider from '../components/Divider'
import TweetBox from '../components/TweetBox'
import { PopulerIcon } from '../icons/İcons'
import userİmg from '../images/userİmg.jpeg'

const Content = () => {
  return (
    <main className="flex-1 border flex-col border-r border-l border-gray-extraLight ">
      <header className=" sticky top-0 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon />
      </header>
      <div className="flex px-3 py-2 space-x-4">
        <img
          src={userİmg}
          alt="Twitter Logo"
          className="w-10 h-10 rounded-full"
        ></img>
        <TweetBox />
      </div>
      <Divider />
    </main>
  )
}

export default Content
