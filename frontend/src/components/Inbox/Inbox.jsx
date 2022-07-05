import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import jwtDecode from "jwt-decode";

function Inbox() {
    const [inboxes, setInboxes] = useState([]);
    const navigate = useNavigate();

    const getInboxes = async () => {
        const accessToken = localStorage.getItem('accessToken');
        try {
            const response = await axios.get('http://localhost:5000/api/v1/inboxes', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            setInboxes(response.data.data.inboxes);
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    localStorage.setItem('accessToken', '');
                    navigate('/');
                }
            }
        }
    }

    useEffect(() => {
        getInboxes();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container">
                <ul className="list-group">
                    {
                        inboxes.map((inbox) => {
                            return <li className="list-group-item" key={inbox.id}>{inbox.content}</li>
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default Inbox;