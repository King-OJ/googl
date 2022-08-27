import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'

export default function Navbar({darkTheme, setDarkTheme}) {
  return (
    <div className="p-5 md:pb-0 flex justify-between md:justify-center items-center border-b border-gray-200 dark:border-gray-700">
      <div className="px-5 flex flex-col space-y-6 md:flex-row md:items-start md:space-y-0 justify-between items-center space-x-5 w-screen">
        <Link to='/'>
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">Googl🔎</p>
        </Link>
        <Search/>
        <button type="button" className="text-xl dark:bg-gray-500 dark:text-gray-200 rounded-full px-2 py-1 bg-white shadow-lg" onClick={()=> {setDarkTheme(!darkTheme)}}>{darkTheme ? '💡 Light' : '🌙 Dark'}</button>
      </div>
    </div>
  )
}
