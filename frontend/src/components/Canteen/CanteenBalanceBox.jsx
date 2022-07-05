import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

function CanteenBalanceBox() {
    const [balance, setBalance] = useState(0);
    const [inputBalance, setInputBalance] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getBalance();
    }, []);

    const getBalance = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            navigate('/');
            return;
        }
        try {
            const response = await axios.get('http://localhost:5000/api/v1/canteen-balance-box', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            setBalance(response.data.data.balance);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    localStorage.setItem('accessToken', '');
                    navigate('/');
                }
            }
        }
    }

    const add = async () => {
        const accessToken = localStorage.getItem('accessToken');
        try{
            const response = await axios.put('http://localhost:5000/api/v1/canteen-balance-box/add', {
                balance: inputBalance
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            navigate('/products');
            } catch(error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    const withdraw = async () => {
        const accessToken = localStorage.getItem('accessToken');
        try{
            const response = await axios.put('http://localhost:5000/api/v1/canteen-balance-box/withdraw', {
                balance: inputBalance
            }, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            navigate('/products');
        } catch(error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div className="mb-3 mt-3" style={{ fontWeight: "700", fontSize: "20px" }}>
                Rp{balance}
            </div>
            <div>
                <form method="POST">
                    <div className="form-group">
                        <input
                            onChange={(e) => setInputBalance(parseInt(e.target.value))}
                            id="balance"
                            type="text"
                            className="form-control mb-4 w-25 m-auto"
                            name="balance"
                            placeholder="Balance"
                            autoFocus
                        />
                        <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block me-2"
                        style={{ fontSize: "16px", width: "102px" }}
                        onClick={add}
                        >Add
                        </button>
                        <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                        style={{ fontSize: "16px" }}
                        onClick={withdraw}
                        >Withdraw
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CanteenBalanceBox;