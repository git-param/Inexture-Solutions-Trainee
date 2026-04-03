import React, { useEffect, useState } from "react";
import { getUserById } from "./fakeApi";

type User = {
    id: number;
    name: string;
    email: string;
};

const App: React.FC = ()=>{
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => 
    {
        let isActive = true;

        const fetchUser = async () => {
            try 
            {
                const data = await getUserById(1);
                if (isActive)
                    setUser(data);
            } 
            catch (err) 
            {
                if (isActive) 
                    setError("Something went wrong");
            } 
            finally 
            {
                if (isActive) 
                    setLoading(false);
            }
        };

        fetchUser();

        return ()=>{
            isActive=false; 
        };
    }, []);

    if (loading) 
        return <div>Loading...</div>;
    if (error) 
        return <div>{error}</div>;
    if (!user) 
        return null;

    return (
        <div>
        <h2>User Info</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        </div>
    );
};

export default App;