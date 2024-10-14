import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/[locale]/page'
import { NextIntlClientProvider } from 'next-intl';
import messages from '../locales/en.json'

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn(),
    replace: jest.fn()
  }),
  useParams: () => ({ locale: 'en' }),
  useSelectedLayoutSegment: () => ({ locale: 'en' })
}));

describe('Home Page', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter')

  useRouter.mockImplementationOnce(() => ({
    query: { locale: 'en' },
  }))

  it('renders a heading', () => {
    render(
      <NextIntlClientProvider
        locale="en"
        messages={messages}
      >
        <Home />
      </NextIntlClientProvider>
    )
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})