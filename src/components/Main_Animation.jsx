import React from 'react'

const Main_Animation = () => {
  return (
    <div>
      <div className="animate-spin-slow h-64 w-64">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          <path
            id="textPath"
            fill="none"
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
          <text fill="url(#gradient)">
            <textPath href="#textPath" startOffset="0%">
              Med.Ai
            </textPath>
          </text>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

export default Main_Animation