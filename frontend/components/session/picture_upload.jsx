import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'no40n1d1';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/make-anything/upload';

class PictureUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: ""
    };
  }

onImageDrop(files) {
  this.setState({
    uploadedFile: files[0]
  });
  this.handleImageUpload(files[0]);
}

handleImageUpload(file) {
  let upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);

  upload.end((err, response) => {
    if (err) {
      console.error(err);
    }

    if (response.body.secure_url !== '') {
      this.setState({
        uploadedFileCloudinaryUrl: response.body.secure_url
      });
    }
  });
}

render() {

  return (
    <div>

      <tr>
        <td>

            <div>
              {this.state.uploadedFileCloudinaryUrl === '' ?
                <Dropzone className="picupload"
                  multiple={false}
                  accept="image/*"
                  onDrop={this.onImageDrop.bind(this)}>
                  <p>Drop or click to upload a profile picture.</p>
                </Dropzone> :
                <div>
                  <img id="uploadImg" src={this.state.uploadedFileCloudinaryUrl} />
                </div>}
            </div>

        </td>
      </tr>

    </div>
  );
  }
}

export default PictureUpload;
