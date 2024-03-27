import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordList from '../PasswordList'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    showPasswords: false,
    websiteUrl: '',
    websiteName: '',
    websitePassword: '',
    searchInput: '',
  }

  onClickDelete = id => {
    const {passwordsList} = this.state
    const filterePasswordsList = passwordsList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({
      passwordsList: filterePasswordsList,
    })
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeInputUrl = event => {
    this.setState({websiteUrl: event.target.value})
  }

  onChangeInputName = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeInputPassword = event => {
    this.setState({websitePassword: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {websiteName, websitePassword, websiteUrl, passwordsList} = this.state
    const hiddenPassword = '* * * * * * * * * * * *'
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    if (websiteName !== '' && websitePassword !== '' && websiteUrl !== '') {
      const newPasswordItem = {
        id: uuidv4(),
        websiteName,
        websitePassword,
        websiteUrl,
        hiddenPassword,
        initialClassName: initialBackgroundColorClassName,
      }
      this.setState({
        passwordsList: [...passwordsList, newPasswordItem],
        websiteName: '',
        websitePassword: '',
        websiteUrl: '',
      })
    }
  }

  onClickShowPasswords = () => {
    const {showPasswords} = this.state
    this.setState({showPasswords: !showPasswords})
  }

  render() {
    const {
      websiteName,
      websiteUrl,
      websitePassword,
      passwordsList,
      searchInput,
      showPasswords,
    } = this.state
    const searchResults = passwordsList.filter(eachPassword =>
      eachPassword.websiteUrl.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="card-1">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-img"
            />
          </div>
          <form className="password-input-container" onSubmit={this.onClickAdd}>
            <h1 className="password-input-h">Add New Password</h1>
            <div className="password-input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <hr className="separator" />
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                value={websiteUrl}
                onChange={this.onChangeInputUrl}
              />
            </div>
            <div className="password-input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <hr className="separator" />
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                value={websiteName}
                onChange={this.onChangeInputName}
              />
            </div>
            <div className="password-input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-logo"
              />
              <hr className="separator" />
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                value={websitePassword}
                onChange={this.onChangeInputPassword}
              />
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="card-2">
          <PasswordList
            passwordDetails={searchResults}
            showPasswords={showPasswords}
            onClickShowPasswords={this.onClickShowPasswords}
            onChangeSearchInput={this.onChangeSearchInput}
            onClickDelete={this.onClickDelete}
          />
        </div>
      </div>
    )
  }
}

export default PasswordManager
