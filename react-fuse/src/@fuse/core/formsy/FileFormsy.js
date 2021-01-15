import Icon from '@material-ui/core/Icon'
import {withFormsy} from 'formsy-react'
import React, {useState} from 'react'

import FirebaseService from 'app/services/firebaseService'
import FuseLoading from '../FuseLoading'

const FileFormsy = (props) => {
  const value = props.getValue()
  const [loadingImage, setLoadingImage] = useState(false)

  const handleUploadChange = (e) => {
    const file = e.target.files[0]

    if (!file) {
      return
    }

    const uploadTask = FirebaseService.storage
      .ref(`users/${file.name}`)
      .put(file)
    uploadTask.on(
      'state_changed',
      (snapShot) => {
        setLoadingImage(true)
      },
      (err) => {
        setLoadingImage(false)
      },
      () => {
        FirebaseService.storage
          .ref('users')
          .child(file.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setLoadingImage(false)
            props.setValue(fireBaseUrl)
          })
      },
    )
  }

  return (
    <div>
      <div className="flex justify-center sm:justify-start flex-wrap -mx-8">
        <label
          htmlFor="button-file"
          className="flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5">
          <input
            accept="image/*"
            className="hidden"
            id="button-file"
            type="file"
            onChange={handleUploadChange}
          />
          <Icon fontSize="large" color="action">
            cloud_upload
          </Icon>
        </label>
        {value && (
          <div className="flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5">
            <img
              className="max-w-none w-auto h-full"
              src={value}
              alt="product"
            />
          </div>
        )}
        {loadingImage && (
          <div className="flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5">
            <FuseLoading />
          </div>
        )}
      </div>
    </div>
  )
}

export default React.memo(withFormsy(FileFormsy))
