import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { LifeInsurance } from '@/pages/LifeInsurance'
import { Retirement } from '@/pages/Retirement'
import { Investments } from '@/pages/Investments'
import { Medical } from '@/pages/Medical'
import { Compliance } from '@/pages/Compliance'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
})

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="life-insurance" element={<LifeInsurance />} />
              <Route path="retirement" element={<Retirement />} />
              <Route path="investments" element={<Investments />} />
              <Route path="medical" element={<Medical />} />
              <Route path="compliance" element={<Compliance />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  )
}
