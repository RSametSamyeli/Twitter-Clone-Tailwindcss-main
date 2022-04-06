import React from 'react'
import { SearchIcon } from '../icons/İcons'
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
  return (
    <aside className=" w-80  h-screen sticky top-0 ">
      <div className="   flex items-center space-x-2 p-3 m-3 bg-gray-200 rounded-full text-gray-dark  focus-within:bg-white focus-within:ring-1  focus-within:ring-primary-base focus-within:text-primary-base ">
        <SearchIcon className="w-5 h-5 sticky top-0 " />
        <input
          type="text"
          placeholder="Search Twitter"
          className="placeholder-gray-dark bg-transparent outline-none w-full text-sm"
        />
      </div>
      <div className="mt-5 sticky top-14 ">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'ahmetaktass',
          }}
          options={{
            height: '100vh',
          }}
        />
      </div>
    </aside>
  )
}

export default Widgets
