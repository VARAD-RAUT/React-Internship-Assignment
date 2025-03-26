import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import TodoPage from "./pages/TodoPage";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center p-6">
        <h1 className="text-2xl font-bold mb-4">Advanced React To-Do App</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isAuthenticated ? <TodoPage /> : <Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
