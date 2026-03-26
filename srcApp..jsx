import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { OfflineProvider } from "./context/OfflineContext";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Dashboard";
import LessonView from "./components/Lessons/LessonView";
import AdminPanel from "./components/Admin/AdminPanel";

function App() {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return (
    <OfflineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={user ? <Dashboard /> : <Login />} />
          <Route path="/lesson/:id" element={<LessonView />} />
          {user?.isAdmin && <Route path="/admin" element={<AdminPanel />} />}
        </Routes>
      </BrowserRouter>
    </OfflineProvider>
  );
}
export default App;