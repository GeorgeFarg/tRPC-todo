/* eslint-disable @typescript-eslint/no-misused-promises */
import Home from './components/Home';
import Tasks from './components/Tasks';
import Login from './components/login';
import { Routes, Route, redirect, Navigate } from 'react-router-dom';


function App() {

  return (
    <div className="h-full">
      <Routes>
        <Route path='/' element={<Navigate to={"/login"} replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/tasks' element={<Tasks />} />
      </Routes>
    </div>     
  )
}

export default App;
