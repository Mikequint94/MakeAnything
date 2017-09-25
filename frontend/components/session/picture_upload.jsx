import React from 'react';
// import { Link, withRouter } from 'react-router-dom';

import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/make-anything/upload';

class PictureUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: "",
      dropzoneClass: "picupload"
    };
    let loaderClass="hidden";
    this.CLOUDINARY_UPLOAD_PRESET = this.props.preset;
  }

onImageDrop(files) {
  this.loaderClass="loader";
  this.setState({
    uploadedFile: files[0],
    dropzoneClass: "hiddendrop"
  });
  this.handleImageUpload(files[0]);
}

handleImageUpload(file) {
  let upload = request.post(CLOUDINARY_UPLOAD_URL)
                      .field('upload_preset', this.CLOUDINARY_UPLOAD_PRESET)
                      .field('file', file);

  upload.end((err, response) => {
    if (err) {
      console.error(err);
    }

    if (response.body.secure_url !== '') {
      let secureUrl = response.body.secure_url;
      this.setState({
        uploadedFileCloudinaryUrl: response.body.secure_url
      });
    }
  });
}

render() {

  return (
    <div>


            <div className="uploadsection">
              <Dropzone className={this.state.dropzoneClass}
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop or click to upload a profile picture.</p>
              </Dropzone>
              {this.state.uploadedFileCloudinaryUrl === '' ?
                <div>

                  <div className={this.loaderClass}></div>

                </div> :
                <div>
                  <img id="uploadImg" src={this.state.uploadedFileCloudinaryUrl} />
                </div>}
            </div>


    </div>
  );
  }
}

export default PictureUpload;
