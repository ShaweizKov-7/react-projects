import { useEffect, useState } from "react"


export function SearchAutoComplete() {

    const [users, setUsers] = useState([]);
    const [searchParams, setSearchParams] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showUsers, setShowUsers] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                console.log(data.users);
                setUsers(data.users.map(user => user.firstName));
                setLoading(false);
            } catch (e) {
                console.log(e.message);
                 setError(e.message);
                 setLoading(false);
            }
        }
        fetchUsers();


    }, []);


    function handleChange(query) {
        if (query.length > 1) {
            setShowUsers(true);
            setFilteredUsers(users.filter(user => user.toLowerCase().includes(query.toLowerCase())));
        } else {
            setShowUsers(false);
            setFilteredUsers([])
        }

         

    }


        if (loading) return <div>Loading...</div>
    if (error !== null) return <div>Error Occured: {error}</div>

console.log(users)

    return (
        <div className="container">
            <input
                type="text"
                value={searchParams}
                onChange={(e) => {
                    setSearchParams(e.target.value);
                    handleChange(e.target.value);
                }}
            />

            <div className="filtere-users">
                {
                    showUsers && <div>
                        {
                            filteredUsers.map((user, index) => {
                                return (
                                    <li key={index}>{user}</li>
                                )
                            })
                        }
                    </div>
                }
            </div>

        </div>
    )
}