import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

function CanteenBalanceBox() {
    const [balance, setBalance] = useState(0);
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        const rawAccessToken = localStorage.getItem('accessToken');
        setAccessToken(rawAccessToken);
    }, [accessToken]);

    useEffect(() => {
        getBalance();
    }, []);

    const getBalance = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/auth/login', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            setBalance(response.data.data.balance);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div>
                {balance}
            </div>
        </div>
    );
}

export default CanteenBalanceBox;