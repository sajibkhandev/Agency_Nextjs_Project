import React from 'react'

export default function Container({children,className}) {
  return (
    <div className={`max-w-container mx-auto ${className}`}>{children}</div>
  )
}
