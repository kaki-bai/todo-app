import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import LoginComponent from './LoginComponent.jsx';
import TodoComponent from './TodoComponent.jsx';
import AuthProvider, { useAuth } from './security/AuthContext'

import "./TodoApp.css";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth()

  if (authContext.isAuthenticated)
    return children

  return <Navigate to="/" />
}

export default function TodoApp() {
  return (
    <div className="TodoApp">
      <AuthProvider>
        <BrowserRouter>
          <HeaderComponent />

          <Routes>
            <Route path='/' element={<LoginComponent />} />
            <Route path='/login' element={<LoginComponent />} />

            <Route path='/welcome/:username' element={
              <AuthenticatedRoute>
                <WelcomeComponent />
              </AuthenticatedRoute>
            } />

            <Route path='/todos' element={
              <AuthenticatedRoute>
                <ListTodosComponent />
              </AuthenticatedRoute>
            } />

            <Route path='/todo/:id' element={
              <AuthenticatedRoute>
                <TodoComponent />
              </AuthenticatedRoute>
            } />

            <Route path='/logout' element={
              <AuthenticatedRoute>
                <LogoutComponent />
              </AuthenticatedRoute>
            } />

            <Route path='*' element={<ErrorComponent />} />
          </Routes>

          {/* <FooterComponent /> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}