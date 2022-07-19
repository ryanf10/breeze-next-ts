import { PropsWithChildren, ReactNode } from 'react'

export interface Props {
  logo: ReactNode
}

export default function AuthCard(props: PropsWithChildren<Props>) {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
      <div>{props.logo}</div>

      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {props.children}
      </div>
    </div>
  )
}
