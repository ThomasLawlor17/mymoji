
export default function ProfileStats(props) {



  return (
    <div>
      <h2>{props.username}</h2>
      <h3>STUFF</h3>
      <ul>
        <li>Downloads: </li>
        <li>Num Emojis: {props.emojis.length}</li>
        <li>User Since: </li>
      </ul>
      </div>
  )
}
