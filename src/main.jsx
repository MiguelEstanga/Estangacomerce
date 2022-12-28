import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/useContex'
import { QueryClient, QueryClientProvider } from "react-query"


const QueryClients = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>

      <QueryClientProvider client={QueryClients}>


        <BrowserRouter>
          <App />

        </BrowserRouter>
      </QueryClientProvider>
    </Context>
  </React.StrictMode>
)
