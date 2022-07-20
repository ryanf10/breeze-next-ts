import GuestLayout from '../components/layouts/GuestLayout'
import AuthCard from '../components/AuthCard'
import Link from 'next/link'
import ApplicationLogo from '../components/ApplicationLogo'
import AuthSessionStatus from '../components/AuthSessionStatus'
import AuthValidationErrors from '../components/AuthValidationErrors'
import Label from '../components/Label'
import Input from '../components/Input'
import React, { useState } from 'react'
import Button from '../components/Button'
import { useAuth } from '../hooks/auth'

export default function Login() {
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const [status, setStatus] = useState<string | null>(null)

  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    login({ email, password, setErrors, setStatus })
  }

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <Link href="/">
            <a>
              <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
            </a>
          </Link>
        }
      >
        {/* Session Status */}
        <AuthSessionStatus className="mb-4" status={status} />

        {/* Validation Errors */}
        <AuthValidationErrors className="mb-4" errors={errors} />

        <form onSubmit={submitForm}>
          {/* Email Address */}
          <div>
            <Label htmlFor="email">Email</Label>

            <Input
              id="email"
              type="email"
              value={email}
              className="block mt-1 w-full"
              onChange={(event) =>
                setEmail((event.target as HTMLInputElement).value)
              }
              required
              autoFocus
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>

            <Input
              id="password"
              type="password"
              value={password}
              className="block mt-1 w-full"
              onChange={(event) =>
                setPassword((event.target as HTMLInputElement).value)
              }
              required
              autoComplete="current-password"
            />
          </div>

          {/* Remember Me */}
          <div className="block mt-4">
            <label htmlFor="remember_me" className="inline-flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                name="remember"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />

              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div className="flex items-center justify-end mt-4">
            <Link href="/forgot-password">
              <a className="underline text-sm text-gray-600 hover:text-gray-900">
                Forgot your password?
              </a>
            </Link>

            <Button className="ml-3">Login</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}
