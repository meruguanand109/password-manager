import Password from '../Password'
import './index.css'

const PasswordList = props => {
  const {
    passwordDetails,
    onClickShowPasswords,
    onClickDelete,
    showPasswords,
    onChangeSearchInput,
  } = props
  const isPasswordsListEmpty = passwordDetails.length === 0
  return (
    <div className="list-container">
      <div className="list-header">
        <div className="password-count-container">
          <h1 className="list-p">Your Passwords</h1>
          <p className="password-count">{passwordDetails.length}</p>
        </div>
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="input-logo"
          />
          <hr className="separator" />
          <input
            type="search"
            className="input-search"
            placeholder="search"
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <hr className="separator-h" />
      <div className="password-list-container">
        <div className="show-password-container">
          <input
            type="checkbox"
            id="showpassword"
            className="input-showpassword"
            onClick={onClickShowPasswords}
          />
          <label htmlFor="showpassword" className="label-showpassword">
            Show passwords
          </label>
        </div>
        {isPasswordsListEmpty ? (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
              alt="no passwords"
              className="no-passwords-img"
            />
            <p className="no-passwords-text">No Passwords</p>
          </>
        ) : (
          <ul className="passwords-container">
            {passwordDetails.map(eachPassword => (
              <Password
                key={eachPassword.id}
                data={eachPassword}
                showPasswords={showPasswords}
                onClickDelete={onClickDelete}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default PasswordList
