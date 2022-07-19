import Head from 'next/head'
import * as React from 'react'

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Head>
        <title>Laravel</title>
      </Head>
      <div className="font-sans text-gray-900 antialiased">{children}</div>
    </div>
  )
}
