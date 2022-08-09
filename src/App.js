import React, { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import CardItem from "./components/CardItem";
import UserCardPlaceholder from "./components/UserCardPlaceholder";
import "./App.css";
import mockData from "./components/MockData.json";
export default function App() {

    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            let userData;
            try {
                const response = await fetch("https://randomuser.me/api/?results=10");
                userData = await response.json();
            } catch (error) {
                console.log(error);
                userData = [];
            }

            // setUsers(userData.results);
             setUsers(mockData);
            console.log(users)
            setLoading(false);
        })();
    }, []);

    return (
        <div className="App">
            <h1>User Cards</h1>
            {isLoading && (
                <FadeIn>
                    {users?.map(user => (
                        <div key={`user--${user.id}` }>
                            <UserCardPlaceholder/>
                        </div>
                    ))}
                </FadeIn>
            )}
            {!isLoading && (
            <div className="cards-container">
                {users.map((user, index) => (
                    <CardItem key={index} userData={user} />
                ))}
            </div>
                )}
        </div>
    );
}
