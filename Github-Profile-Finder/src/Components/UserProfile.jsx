
import './styles.css';

export function UserProfile({user}){

    const createdDate = new Date(user.created_at)
    
    return (
        <div className="user-data">
             <div className="user-avatar">
                <img src={user.avatar_url} alt="" />
            </div>
        <div className='user-info'>
                  <div className='user-data-container-1'>

              <div className='user-id'>
                    User Id : {user.id}
                </div>

            <div className='user-name' >
                User Name : <a href={user.html_url}>{user.name || user.login}</a>
            </div>
            </div>

            <div className='user-data-container-2'>
                  <div className='repos'>
                User Public Repositories : {user.public_repos}
            </div>
             
             <div className='created-date'>
                Created At : {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
                    month: 'short'
                })} ${createdDate.getFullYear()}`}
             </div>
            </div>
        </div>
      
         
        </div>
    )
}