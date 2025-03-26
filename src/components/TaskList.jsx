import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "2534af022a7bafa6bad0afbb55779d47"; // Replace with your actual API key

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=${API_KEY}`
        );
        setWeather({
          temp: response.data.main.temp,
          condition: response.data.weather[0].description,
        });
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-center">Task List</h2>

      {/* Display Weather Info */}
      {weather && (
        <div className="bg-blue-200 p-3 rounded-md text-center mb-4">
          <p className="text-sm font-semibold">
            🌤️ Current Weather in Pune: {weather.temp}°C, {weather.condition}
          </p>
        </div>
      )}

      {tasks.length === 0 ? (
        <p className="text-center mt-4 text-gray-500">No tasks available</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-2 border rounded-md"
            >
              <span className="flex-1">
                {task.text} (<strong>{task.priority}</strong>)
              </span>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
