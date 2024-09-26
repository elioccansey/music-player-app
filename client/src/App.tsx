import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PlaylistPage from './pages/PlaylistPage';  // Assuming you have this page
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import LogoutButton from './components/LogoutButton';

function App() {
  const isAuthenticated = !!sessionStorage.getItem('authToken'); // Check if user is logged in

  return (
    // <Router>
    <div className="App">
      {/* Show logout button if authenticated */}
      <Routes>
        {/* Default route to login page */}
        <Route path="/" element={!isAuthenticated && <LoginPage />} />

        {/* Protected route for the playlist page */}
        <Route
          path="/playlist"
          element={
            <ProtectedRoute>
              <PlaylistPage isAuthenticated={isAuthenticated} />
            </ProtectedRoute>
          }
        />

        {/* Optional: A 404 route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
    // </Router>
  );
}

export default App;
