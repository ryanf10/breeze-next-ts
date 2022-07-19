import React, { PropsWithChildren } from 'react'

export default function Label({
  className = '',
  children,
  ...props
}: PropsWithChildren<React.HTMLProps<HTMLLabelElement>>) {
  return (
    <label
      className={`${className} block font-medium text-sm text-gray-700`}
      {...props}
    >
      {children}
    </label>
  )
}
