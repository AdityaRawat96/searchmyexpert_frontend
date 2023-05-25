import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RequireAuth, RequireAdminAuth } from './context/AuthContext';
import { FilterContextProvider } from './context/FilterContext';
import About from './pages/About';
import AdminLayout from './pages/Admin/AdminLayout';
import Advertisement from './pages/Admin/Advertisement';
import Auth from './pages/Auth/Auth';
import Passcode from './pages/Admin/Passcode';
import Subscriber from './pages/Admin/Subscriber';
import Data from './pages/Data';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';

import VendorLayout from './pages/Vendor/Layout/VendorLayout';
import VendorDashboard from './pages/Vendor/Dashboard/Dashboard';
import VendorReports from './pages/Vendor/Dashboard/Reports/Reports';
import VendorPayments from './pages/Vendor/Dashboard/Payments/Payments';
import VendorMeetings from './pages/Vendor/Dashboard/Meetings/Meetings';
import VendorFAQ from './pages/Vendor/FAQ/FAQ';
import VendorProfile from './pages/Vendor/Profile/Profile';
import VendorSupport from './pages/Vendor/Support/Support';
import VendorTicket from './pages/Vendor/Support/Ticket';

import Leads from './pages/Vendor/Leads/Leads';
import Portfolio from './pages/Vendor/Portfolio/Portfolio';
import Clients from './pages/Vendor/Clients/Clients';

import ClientLayout from './pages/Client/Layout/ClientLayout';
import ClientDashboard from './pages/Client/Dashboard/Dashboard';
import ClientReports from './pages/Client/Dashboard/Reports/Reports';
import ClientPayments from './pages/Client/Dashboard/Payments/Payments';
import ClientMeetings from './pages/Client/Dashboard/Meetings/Meetings';
import ClientFAQ from './pages/Client/FAQ/FAQ';
import ClientProfile from './pages/Client/Profile/Profile';
import ClientSupport from './pages/Client/Support/Support';
import ClientTicket from './pages/Client/Support/Ticket';
import Projects from './pages/Client/Projects/Projects';
import Project from './pages/Client/Projects/Project/Project';
import Client from './pages/Vendor/Clients/Client';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} errorElement={<ErrorPage />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/auth" element={<Auth />} errorElement={<ErrorPage />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
        </Route>

        <Route
          path="/vendor"
          element={<VendorLayout />}
          errorElement={<ErrorPage />}
        >
          <Route index element={<VendorDashboard />} />
          <Route path="dashboard" element={<VendorDashboard />} />
          <Route path="reports" element={<VendorReports />} />
          <Route path="meetings" element={<VendorMeetings />} />
          <Route path="payments" element={<VendorPayments />} />
          <Route path="leads" element={<Leads />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/:id" element={<Client />} />
          <Route path="profile" element={<VendorProfile />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="faq" element={<VendorFAQ />} />
          <Route path="support" element={<VendorSupport />} />
          <Route path="support/ticket/:id" element={<VendorTicket />} />
        </Route>

        <Route
          path="/client"
          element={<ClientLayout />}
          errorElement={<ErrorPage />}
        >
          <Route index element={<ClientDashboard />} />
          <Route path="dashboard" element={<ClientDashboard />} />
          <Route path="reports" element={<ClientReports />} />
          <Route path="meetings" element={<ClientMeetings />} />
          <Route path="payments" element={<ClientPayments />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
          <Route path="profile" element={<ClientProfile />} />
          <Route path="faq" element={<ClientFAQ />} />
          <Route path="support" element={<ClientSupport />} />
          <Route path="support/ticket/:id" element={<ClientTicket />} />
        </Route>

        <Route path="/*" element={<ErrorPage />} errorElement={<ErrorPage />} />

        {/* <Route
          path="/admin"
          element={
            <RequireAdminAuth>
              <AdminLayout />
            </RequireAdminAuth>
          }
          errorElement={<ErrorPage />}
        >
          <Route index element={<Passcode />} />
          <Route path="passcode" element={<Passcode />} />
          <Route path="advertisement" element={<Advertisement />} />
          <Route path="subscriber" element={<Subscriber />} />
        </Route>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/data"
          element={
            <RequireAuth>
              <FilterContextProvider>
                <Data />
              </FilterContextProvider>
            </RequireAuth>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
