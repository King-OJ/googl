import React from 'react';
import {Rings} from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <Rings type="puff" color='#00BFFF' height={550} width={80} />
    </div>
  )
}
