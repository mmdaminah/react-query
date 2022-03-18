import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Users } from './components/Users';
import './App.css';
import Navbar from './components/navbar/Navbar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Navbar />

        <Users />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
