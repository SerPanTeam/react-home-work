import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL, createAvatarUrl } from "../api";

export default function Tasks() {
  const token = useSelector((state) => state.auth.token);
  const [tasks, setTasks] = useState([]);

  async function fetchTasks() {
    const url = `${API_URL}/api/collections/tasks/records`;//?expand=user`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">User</th>
            <th scope="col">...</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <th scope="row">{task.title}</th>
              <td>{task.status}</td>
              <td>
                {/* <img
                  src={createAvatarUrl(task.expand.user)}
                  alt={task.expand.user.name}
                /> */}
              </td>
              <td>
                <button>Open</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
