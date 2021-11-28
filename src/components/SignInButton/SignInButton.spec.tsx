import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/client'
import { mocked } from 'ts-jest/utils'
import { SinginButton } from '.'

jest.mock('next-auth/client')

describe('SignIn component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([null, false])
    render(<SinginButton />)

    expect(screen.getByText('Sign In with GitHub')).toBeInTheDocument()
  })

  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)
    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: 'John Doe',
          email: 'doe@example.com',
        },
        expires: 'fake',
      },
      false,
    ])
    render(<SinginButton />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
