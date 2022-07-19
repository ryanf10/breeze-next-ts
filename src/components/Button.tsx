import React, { PropsWithChildren } from 'react'

export enum buttonType {
  'submit' = 'submit',
  'button' = 'button',
  'reset' = 'reset',
}

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  type?: buttonType
}

export default function Button({
  type,
  className,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      type={type}
      className={`${className} inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`}
      {...props}
    >
      {props.children}
    </button>
  )
}
