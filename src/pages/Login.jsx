import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold">{isAuthenticated ? "Welcome Back!" : "Login to Continue"}</h2>
      {isAuthenticated ? (
        <>
          <p className="mt-4 text-green-600">You are logged in.</p>
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 text-white p-2 rounded-md mt-4"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          onClick={() => dispatch(login())}
          className="bg-blue-500 text-white p-2 rounded-md mt-4"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
