import useSWR from 'swr'
import { useRouter } from 'next/router'
import axios from '../lib/axios'
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react'

export interface RegisterProps {
  name?: string
  email: string
  password: string
  password_confirmation: string
  setErrors: Dispatch<SetStateAction<string[]>>
}

export interface LoginProps {
  email: string
  password: string
  setErrors: Dispatch<SetStateAction<string[]>>
  setStatus: Dispatch<SetStateAction<string | null>>
}

export interface AuthParam {
  middleware?: string
  redirectIfAuthenticated?: string
}
export interface User {
  id?: number
  name?: string
  email?: string
  email_verified_at?: string
  created_at?: string
  updated_at?: string
}

export function useAuth(param?: AuthParam) {
  const { middleware, redirectIfAuthenticated } = param || {}
  const router = useRouter()

  const {
    data: user,
    error,
    mutate,
  } = useSWR<User>('/api/user', () =>
    axios
      .get('/api/user')
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error
        router.push('/verify-email')
      })
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const register = async ({ setErrors, ...props }: RegisterProps) => {
    await csrf()

    setErrors([])

    axios
      .post('/register', props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error
        const errors = []
        for (const key in error.response.data.errors) {
          errors.push(error.response.data.errors[key])
        }
        setErrors(errors)
      })
  }

  const login = async ({ setErrors, setStatus, ...props }: LoginProps) => {
    await csrf()

    setErrors([])
    setStatus(null)

    axios
      .post('/login', props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error
        const errors = []
        for (const key in error.response.data.errors) {
          errors.push(error.response.data.errors[key])
        }
        setErrors(errors)
      })
  }

  const logout = useCallback(async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate())
    }

    window.location.pathname = '/login'
  }, [error, mutate])

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user)
      router.push(redirectIfAuthenticated)
    if (middleware === 'auth' && error) logout()
  }, [middleware, redirectIfAuthenticated, logout, router, user, error])

  return {
    user,
    register,
    login,
    logout,
  }
}
