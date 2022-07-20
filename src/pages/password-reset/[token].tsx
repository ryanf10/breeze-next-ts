import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/auth'
import React, { useEffect, useState } from 'react'
import GuestLayout from '../../components/layouts/GuestLayout'
import AuthCard from '../../components/AuthCard'
import Link from 'next/link'
import ApplicationLogo from '../../components/ApplicationLogo'
import AuthSessionStatus from '../../components/AuthSessionStatus'
import AuthValidationErrors from '../../components/AuthValidationErrors'
import Label from '../../components/Label'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function PasswordReset() {
  const router = useRouter()

  const { resetPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState<string | string[]>('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState<string[]>([])
  const [status, setStatus] = useState<string | null>(null)

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault()

    resetPassword({
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
      setStatus,
    })
  }

  useEffect(() => {
    setEmail(router.query.email || '')
  }, [router.query.email])

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
            <Button>Reset Password</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}
