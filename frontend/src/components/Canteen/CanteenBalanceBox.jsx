import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";

function CanteenBalanceBox() {
    const [balance, setBalance] = useState(0);
    const [addBalance, setAddBalance] = useState(0);
    const [withdrawBalance, setWithdrawbalance] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getBalance();
    }, [balance]);

    const getBalance = async () => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.get('http://localhost:5000/api/v1/canteen-balance-box', {
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

    const add = async () => {
        const accessToken = localStorage.getItem('accessToken');
        try{
            const response = await axios.put('http://localhost:5000/api/v1/canteen-balance-box/add', {
                balance: addBalance
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
            balance: withdrawBalance
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
            <div>
                {balance}
            </div>
            <form method="POST">
                <div className="row">
                    <div className="form-group col-6">
                        <input
                            onChange={(e) => setAddBalance(parseInt(e.target.value))}
                            id="add"
                            type="text"
                            className="form-control mb-4"
                            name="add"
                            placeholder="Balance to be added"
                            autoFocus
                        />
                        <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block mb-4"
                        style={{ fontSize: "16px" }}
                        onClick={add}
                        >Add
                        </button>
                        <input
                            onChange={(e) => setWithdrawbalance(parseInt(e.target.value))}
                            id="withdraw"
                            type="text"
                            className="form-control mb-4"
                            name="withdraw"
                            placeholder="Balance to be withdrawed"
                            autoFocus
                        />
                        <button
                        type="button"
                        className="btn btn-primary btn-lg btn-block"
                        style={{ fontSize: "16px" }}
                        onClick={withdraw}
                        >Withdraw
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CanteenBalanceBox;