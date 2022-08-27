import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useGlobalContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

export default function Results() {
  const location = useLocation();
  const {
    getResults,
    results,
    isLoading,
    searchTerm 
  } = useGlobalContext();

  useEffect(() => {
    if(searchTerm) {
      if(location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`)
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
  }, [searchTerm, location.pathname]);
  
  
  if (isLoading) {
    return <Loading />
  }

  switch (location.pathname) {
    case '/search':
      
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-5">
          {results?.map((result, index)=> {   
            const { title, link } = result; 
            return(      
            <div key={index} className="w-full md:w-2/5">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
              </a>
            </div> )
          })
          }
        </div>
      );
    case '/image':
      return(
        <div className="flex flex-wrap justify-center items-center">
          {results?.map(({image, link: { href, title: image_title }}, index )=> {
            return (
            <a key={index} href={href} className="sm:p-3 p-5" target="_blank" rel="noreferrer">
              <img src={image?.src} alt={image_title} loading="lazy" />
              <p className="w-36 break-words text-sm mt-2">{image_title}</p>
            </a>
            )
          })}
        </div>
      );
    case '/news':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-5 items-center">
          {results?.map((news, index)=> {   
            const { title, links, id, source } = news; 
            return(      
            <div key={index} className="w-full md:w-2/5">
              <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                <p className="text-lgdark:text-blue-300 text-blue-700">{title}</p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} target="_blank" rel="noreferrer">{source?.href}</a>
              </div>
            </div> )
          })
          }
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-wrap">
          {results.map((video, index) => {
            const { additional_links } = video
            return (
            <div key={index} className="p-2">
              {video?.additional_links?.[0]?.href &&<ReactPlayer url={additional_links?.[0].href} controls width="355px" height="200px" />}
            </div>
            )
              
          }  
          )}
        </div>
      );
    default:
      return 'ERROR';
  }



  
}
