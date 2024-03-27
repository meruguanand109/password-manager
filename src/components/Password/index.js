import './index.css'

const Password = props => {
  const {data, showPasswords, onClickDelete} = props
  const {websiteUrl, websiteName, websitePassword, id, initialClassName} = data
  const onDelete = () => {
    onClickDelete(id)
  }
  const profile = `profile ${initialClassName}`
  return (
    <li className="Password-list-item">
      <div className={profile}>{websiteUrl[0].toUpperCase()}</div>
      <div className="Password-text-card">
        <p className="websiteUrl">{websiteUrl}</p>
        <p className="websiteName">{websiteName}</p>
        {showPasswords ? (
          <p className="websitePassword">{websitePassword}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
      </div>
      <button className="delete-btn" onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default Password
