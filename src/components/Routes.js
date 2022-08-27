import React from 'react';
import Results from './Results'
import {Routes, Route, Navigate } from 'react-router-dom';

export default function Routess() {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />

        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
          
      </Routes>
    </div>
  )
}

