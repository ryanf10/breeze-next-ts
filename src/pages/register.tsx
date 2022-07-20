import GuestLayout from '../components/layouts/GuestLayout'
import Button from '../components/Button'
import Input from '../components/Input'
import AuthCard from '../components/AuthCard'
import Link from 'next/link'
import ApplicationLogo from '../components/ApplicationLogo'
import AuthValidationErrors from '../components/AuthValidationErrors'
import React, { useState } from 'react'
import Label from '../components/Label'
import { useAuth } from '../hooks/auth'

export default function Register() {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault()

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    })
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
        {/* Validation Errors */}
        <AuthValidationErrors className="mb-4" errors={errors} />

        <form onSubmit={submitForm}>
          {/* Name */}
          <div>
            <Label htmlFor="name">Name</Label>

            <Input
              id="name"
              type="text"
              value={name}
              className="block mt-1 w-full"
              onChange={(event) => {
                setName((event.target as HTMLInputElement).value)
              }}
              required
              autoFocus
            />
          </div>

          {/* Email Address */}
          <div className="mt-4">
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
              autoComplete="new-password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-4">
            <Label htmlFor="passwordConfirmation">Confirm Password</Label>

            <Input
              id="passwordConfirmation"
              type="password"
              value={passwordConfirmation}
              className="block mt-1 w-full"
              onChange={(event) =>
                setPasswordConfirmation(
                  (event.target as HTMLInputElement).value
                )
              }
              required
            />
          </div>

          <div className="flex items-center justify-end mt-4">
            <Link href="/login">
              <a className="underline text-sm text-gray-600 hover:text-gray-900">
                Already registered?
              </a>
            </Link>

            <Button className="ml-4">Register</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}
