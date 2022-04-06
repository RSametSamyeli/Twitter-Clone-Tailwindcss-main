import React from 'react'
import {
  Imgİcon,
  Gifİcon,
  Anketİcon,
  Emojiİcon,
  Calendarİcon,
} from '../icons/İcons'

const TweetBox = () => {
  return (
    <div className="flex flex-col flex-1 mt-2 p-2">
      <textarea
        name=""
        className=" text-xl font-light placeholder-gray-dark  overflow-hidden resize-none bg-transparent outline-none"
        id=""
        placeholder="What's Happyning"
      ></textarea>
      <div className="flex item-center justify-between">
        <div className="flex -m-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <Imgİcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <Gifİcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <Anketİcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <Emojiİcon />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <Calendarİcon />
          </div>
        </div>

        <button className="bg-primary-base text-white py-2 px-8 rounded-full font-medium">
          Tweet
        </button>
      </div>
    </div>
  )
}

export default TweetBox
