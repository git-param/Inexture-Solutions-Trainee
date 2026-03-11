import React, { useEffect, useState } from "react";
import { getUserById } from "./fakeApi";

type User = {
  id: number;
  name: string;
  email: string;
};

const App: React.FC = () => {
  const [user, setUser]=useState<User | null>(null);

  useEffect(() => {
    getUserById(1).then((data: User) => {
      setUser(data);
    });
  }, []);

  if (!user) 
    return <div>Loading...</div>;

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default App;