import './index.css'

const AppItem = props => {
  const {item} = props
  const {appName, imageUrl} = item
  return (
    <li className="app-card">
      <img className="app-logo" src={imageUrl} alt={`${appName} logo`} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
