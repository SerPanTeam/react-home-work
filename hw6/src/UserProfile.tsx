import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  phone: string;
  email: string;
  picture: {
    large: string;
  };
}

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loadStatus, setLoadStatus] = useState(false);

  const fetchUser = () => {
    setLoadStatus(false);
    axios
      .get("https://randomuser.me/api/")
      .then((resp) => {
        setUser(resp.data.results[0]);
        setLoadStatus(true);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!loadStatus) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <>
      <img
        width={100}
        src={user.picture.large}
        alt=""
        style={{ borderRadius: "50%" }}
      />
      <h2>
        {user.name.first} {user.name.last}
      </h2>
      <h3>Phone: {user.phone}</h3>
      <h3>Email: {user.email}</h3>
      <button onClick={fetchUser}>Load new user</button>
    </>
  );
}
