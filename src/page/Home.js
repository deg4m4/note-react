import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Alert from "./Alert"
import { useSelector, useDispatch } from 'react-redux'
import { clearLogOutState } from '../reducers/logoutstate'

const Home = (e) => {

  const logOutSele = useSelector(state => state.logoutstate.value)
  const dispatch = useDispatch()
  let [logoutState, setLogOutState] = useState(false)
  let [logoutState2, setLogOutState2] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLogOutState(logOutSele)    
      setLogOutState2(logOutSele)    
    }, 1)
    dispatch(clearLogOutState())
    setTimeout(() => {
      setLogOutState(false)    
    }, 7001)
  }, [])

  return (
    <>
      <Alert show={logoutState} event={() => setLogOutState(false)} massage={"Logout Successful"} color={"green"} />
      <div className="navbar">
        <a href="/" className="nav-title">
          Note
        </a>
        <div>
          {(() => {
            if (!e.mod || logoutState2) {
              return (
                <>
                  <Link to="/login">Login</Link>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <Link to="/register">Register</Link>
                </>
              )
            } else {
              return (
                <>
                  <Link to="/note">Your Notes</Link>
                </>
              )
            }
          })()}
        </div>
      </div>

      <div className="div-center">
        <h1 className="hello">
          Hello, World!
        </h1>

        {(() => {
          if (!e.mod || logoutState2) {
            return (
              <>
                <br />
                <Link className="btn btn-primary hello-button" to="/register">Register</Link>
                <br />
                <br />
                <Link className="link" to="/login">Login</Link>
              </>
            )
          } else {
            return (
              <>
                <br />
                <Link className="btn btn-primary hello-button" to="/note">Go To Note</Link>
              </>
            )
          }
        })()}
      </div>

    </>
  )

}

export default Home