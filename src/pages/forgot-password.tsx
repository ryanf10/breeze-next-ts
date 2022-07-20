import { useAuth } from '../hooks/auth'
import React, { useState } from 'react'
import GuestLayout from '../components/layouts/GuestLayout'
import AuthCard from '../components/AuthCard'
import Link from 'next/link'
import ApplicationLogo from '../components/ApplicationLogo'
import AuthSessionStatus from '../components/AuthSessionStatus'
import AuthValidationErrors from '../components/AuthValidationErrors'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'

export default function ForgotPassword() {
  const { forgotPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState<string>('')
  const [errors, setErrors] = useState<string[]>([])
  const [status, setStatus] = useState<string | null>(null)

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault()

    forgotPassword({ email, setErrors, setStatus })
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
        <div className="mb-4 text-sm text-gray-600">
          Forgot your password? No problem. Just let us know your email address
          and we will email you a password reset link that will allow you to
          choose a new one.
        </div>

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
              name="email"
              value={email}
              className="block mt-1 w-full"
              onChange={(event) =>
                setEmail((event.target as HTMLInputElement).value)
              }
              required
              autoFocus
            />
          </div>

          <div className="flex items-center justify-end mt-4">
            <Button>Email Password Reset Link</Button>
          </div>
        </form>
      </AuthCard>
    </GuestLayout>
  )
}
