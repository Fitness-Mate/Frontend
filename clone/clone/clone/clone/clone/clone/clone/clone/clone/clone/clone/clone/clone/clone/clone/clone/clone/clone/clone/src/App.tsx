import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { ThemeProvider } from "styled-components"

import Navigator from "@routes/Navigator"

import theme from "@styles/theme"

import { ReactQueryDevtools } from "../node_modules/@tanstack/react-query-devtools/src/index"

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

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <Navigator />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
