import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { unsetAuthedUser } from '../actions/authedUser'

const Navbar = (props) => {

  const { authedUser, dispatch, users } = props
  const author = authedUser ? users[authedUser]: null 

  // When clicking on Logout button, unset the authed user
  const handleClick = evt => {
    dispatch(unsetAuthedUser())
  }

  return (
    <nav className="navbar navbar-expand navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand">Would You Rather</a>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' exact="true" className="nav-link" activeclassname='active'>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/add' className="nav-link" activeclassname='active'>
                New Question
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/leaderboard' className="nav-link" activeclassname='active'>
                Leader Board
              </NavLink>
            </li>
            {authedUser
              ? (<li className="nav-item">
                <div className="nav-link">
                  <img className="" width="30" height="24" 
                       className="d-inline-block" src={author.avatarURL} />
                  <span> </span>
                  <span className="text-muted h6">{author.name}</span>
                </div>
              </li>)
              : null
            }
            <li className="nav-item">
              <NavLink to='/login' className="nav-link"
                       activeclassname='active' onClick={handleClick}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ authedUser, users }) => (
  {
    authedUser,
    users
  }
)

export default connect(mapStateToProps)(Navbar)