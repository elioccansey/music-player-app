import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PlaylistPage from './pages/PlaylistPage';  // Assuming you have this page
// import NotFoundPage from './pages/NotFoundPage';  // Optional: for handling 404 pages
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';  // Import the protected route


function App() {
  return (
   
      <div className="App">
        <Routes>
          {/* Default route to login page */}
          <Route path="/" element={<LoginPage />} />
          
          {/* Protected route for the playlist page */}
          <Route
            path="/playlist"
            element={
              <ProtectedRoute>
                <PlaylistPage />
              </ProtectedRoute>
            }
          />
          
          {/* Optional: A 404 route */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
   
  );
}

export default App;
