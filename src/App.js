import React, {useEffect, useState} from "react";
import FadeIn from "react-fade-in";
import CardItem from "./components/CardItem";
import UserCardPlaceholder from "./components/UserCardPlaceholder";
import "./App.css";

export default function App() {

    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            let userData;
            try {
                const response = await fetch("https://my.api.mockaroo.com/users.json?key=aa675110");
                userData = await response.json();
            } catch (error) {
                console.log(error);
                userData = [];
            }
            setUsers(userData);
            console.log(userData)
        })();
        setTimeout(function () {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="App">
            <h1>User Cards</h1>
            {isLoading ?
                <FadeIn>
                    {users?.map(user => (
                        <div key={`user--${user.id}`}>
                            <UserCardPlaceholder/>
                        </div>
                    ))}
                </FadeIn>
                :
                <div className="cards-container">
                    {users.map((user, index) => (
                        <CardItem key={index} userData={user}/>
                    ))}
                </div>
            }
        </div>
    );
}
