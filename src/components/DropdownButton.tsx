import { Menu } from '@headlessui/react'
import React, { PropsWithChildren } from 'react'

export enum buttonType {
  'submit' = 'submit',
  'button' = 'button',
  'reset' = 'reset',
}

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  type?: buttonType
}

export default function DropdownButton({
  children,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
            active ? 'bg-gray-100' : ''
          } focus:outline-none transition duration-150 ease-in-out`}
          {...props}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  )
}
