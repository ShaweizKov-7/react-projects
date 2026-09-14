import {  useState } from "react"
import { UserProfile } from "./UserProfile";
import './styles.css';

export function GithubProfileFinder(){


    const [userName, setUserName] = useState('ShaweizKov-7');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadUserData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${userName}`);
            const data = await response.json();
            console.log(data);
            if(data) {
                setUserData(data);
            }
            setLoading(false);
        } catch(e) {
            console.log(e.message);
            setError(e.message);
            setLoading(false);
        }
    }

   

    if(loading) return <div className="loading">Loading...</div>
    if(error !== null) return <div>Error Occured : {error}</div>

    return (
        <div className="profile-container">
            <div className="search-bar">
               <input
             className="search"
             value={userName}
             onChange={(e) => setUserName(e.target.value) }
             type="text"
             placeholder="Write User Name"
            />
            <button className="search-btn" 
                    onClick={loadUserData}
            >
              Find
            </button>
            </div>
         
        {
            userData ?
             <UserProfile user={userData} /> : null
        }
        </div>
    )
}