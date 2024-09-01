import { RecoilRoot } from "recoil"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { ThemeProvider } from "styled-components"

import Navigator from "@routes/Navigator"

import theme from "@styles/theme"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 3,
      staleTime: 1000 * 60,
    },
    mutations: {
      gcTime: 1000 * 60 * 3,
    },
  },
})

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <Navigator />
          </RecoilRoot>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
