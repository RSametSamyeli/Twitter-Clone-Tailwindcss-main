import React from 'react'
import UserShare from '../components/UserShare'

import twitterLogo from '../images/twitter.svg'

import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
  UserIcon,
} from '../icons/İcons'
import SideLink from '../components/SideLink'

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Explore',
    icon: ExploreIcon,
  },
  {
    name: 'Notifications',
    icon: NotificationsIcon,
  },
  {
    name: 'Messages',
    icon: MessagesIcon,
  },
  {
    name: 'Bookmarks',
    icon: BookmarksIcon,
  },
  {
    name: 'Lists',
    icon: ListsIcon,
  },
  {
    name: 'Profile',
    icon: ProfileIcon,
  },
  {
    name: 'More',
    icon: MoreIcon,
  },
]

const Sidebar = () => {
  return (
    <div className=" w-72 h-screen sticky top-0	  bg-white flex flex-col justify-between px-2">
      <div>
        <img src={twitterLogo} alt="Twitter Logo" className="w-9 h-9"></img>
        <nav className="mb-4">
          <ul>
            {sideLinks.map(({ name, icon }) => (
              <SideLink key={name} name={name} İcon={icon} />
            ))}
          </ul>
        </nav>
        <button className="bg-primary-base hover:bg-primary-dark text-white px-8 py-3 w-11/12 rounded-full shadow-lg transform transition-colors duration-200">
          Tweet
        </button>
      </div>
      <div className="">
        <UserShare />
      </div>
    </div>
  )
}

export default Sidebar
