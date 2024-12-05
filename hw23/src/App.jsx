import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile";
import Tasks from "./components/Tasks";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
