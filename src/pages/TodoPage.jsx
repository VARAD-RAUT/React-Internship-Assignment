import { useSelector } from "react-redux";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TodoPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">Your To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default TodoPage;
