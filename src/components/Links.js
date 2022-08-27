import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/image', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

export default function Links() {

  return (
    <div className="flex sm:justify-around justify-between items-center mt-4 space-x-6">
      {
        links.map(({url, text}, index)=> {
        return <NavLink key={index} to={url} className={({isActive})=> (isActive ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-300 pb-2" : 'none')} >
        {text}
        </NavLink>
      })
      }
    </div>
  )
}
