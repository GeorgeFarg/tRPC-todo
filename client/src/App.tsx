/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';
import Tasks from './components/Tasks';
import Login from './components/Login';
import { Routes, Route, Navigate } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from '../utils/trpc';


function App() {

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient} >
        <div className="h-full">
          <Routes>
            <Route path='/' element={<Navigate to={"/login"} replace />} />
            <Route path='/login' element={<Login />} />
            <Route path='/tasks' element={<Tasks />} />
          </Routes>
        </div>     
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App;
