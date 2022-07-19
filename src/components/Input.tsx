import React from 'react'

export default function Input({
  className,
  ...props
}: React.HTMLProps<HTMLInputElement>) {
  return (
    <input
      className={`${className} rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
      {...props}
    />
  )
}
