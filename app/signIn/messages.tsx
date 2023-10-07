'use client'

import { useSearchParams } from 'next/navigation'

export default function Messages() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const message = searchParams.get('message')
  return (
    <>
      {error && (
        <p className="mt-4 p-4 bg-neutral-900 text-red-700 text-center">
          {error}
        </p>
      )}
      {message && (
        <p className="mt-4 p-4 bg-neutral-900 text-green-700 text-center">
          {message}
        </p>
      )}
    </>
  )
}
