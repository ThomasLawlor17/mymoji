
import './ProfileStats.css'

export default function ProfileStats(props) {

  return (
    <div className='ProfileStats'>
      <h2 className='usrnm'>{props.username}</h2>
      <div className="the-stuff">
      <h3 className='ps-title'>THE FUN STUFF</h3>
      <ul className='p-list'>
        <li className='li dl'>Downloads: {props.downloads}</li>
        <li className='li ne'># of Emojis: {props.emojis.length}</li>
        <li className='li us'>User Since: {props.date}</li>
        <li className='li dc'>{props.time} - {props.time > 1 ? 'Days' : 'Day'}</li>
      </ul>
        </div>
      </div>
  )
}
