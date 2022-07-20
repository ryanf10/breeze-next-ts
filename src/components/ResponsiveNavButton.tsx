import React, { PropsWithChildren } from 'react'

export enum buttonType {
  'submit' = 'submit',
  'button' = 'button',
  'reset' = 'reset',
}

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  type?: buttonType
}

export default function ResponsiveNavButton(props: PropsWithChildren<Props>) {
  return (
    <button
      className="block w-full pl-3 pr-4 py-2 border-l-4 text-left text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
      {...props}
    />
  )
}
