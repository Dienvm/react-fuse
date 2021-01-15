import FuseSplashScreen from '@fuse/core/FuseSplashScreen'
import * as userActions from 'app/auth/store/actions'
import firebaseService from 'app/services/firebaseService'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Auth extends Component {
  state = {
    waitAuthCheck: true,
  }

  componentDidMount() {
    return Promise.all([this.firebaseCheck()]).then(() => {
      this.setState({ waitAuthCheck: false })
    })
  }

  firebaseCheck = () =>
    new Promise((resolve) => {
      firebaseService.init((success) => {
        if (!success) {
          resolve()
        }
      })

      firebaseService.onAuthStateChanged((authUser) => {
        if (authUser) {
          /**
           * Retrieve user data from Firebase
           */
          firebaseService.getUserData(authUser.uid).then(
            (user) => {
              this.props.setUserDataFirebase(user, authUser)
              resolve()
            },
            (error) => {
              resolve()
            }
          )
        } else {
          resolve()
        }
      })

      return Promise.resolve()
    })

  render() {
    return this.state.waitAuthCheck ? (
      <FuseSplashScreen />
    ) : (
      <>{this.props.children}</>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setUserDataFirebase: userActions.setUserDataFirebase,
    },
    dispatch
  )
}

export default connect(null, mapDispatchToProps)(Auth)
