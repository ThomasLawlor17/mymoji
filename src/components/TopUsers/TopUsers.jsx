
import './TopUsers.css'

export default function TopUsers(props) {

  return (
    <div>
      <h1 className='tut'>TOP CREATORS</h1>
      <ol className='tul'>
      {props.users.map(u => <li key={u._id} className="user-li">{u.username} : {u.downloads}</li>).sort((a,b) => a - b)}
      </ol>
    </div>
  )
}
