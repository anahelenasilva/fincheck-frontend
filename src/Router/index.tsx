import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout } from '../view/layouts/AuthLayout';
import { Dashboard } from '../view/pages/Dashboard';
import { Login } from '../view/pages/Login';
import { SignUp } from '../view/pages/SignUp';
import { AuthGuard } from './AuthGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AuthGuard isPrivate={false} />}>

          {/* Public Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Route>

        {/* Private Routes */}
        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
