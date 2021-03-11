/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState } from 'react';

export default function UpLoaderProject({ setProjectMainImage, projectMainImage }) {
  const [loading, setLoading] = useState(false);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'upload');
    setLoading(true);

    const res = 
      await fetch('	https://api.cloudinary.com/v1_1/gisaengchung/image/upload', 
        {
          method: 'POST',
          body: data
        });

    const file = await res.json();

    setProjectMainImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className="uploadImage">
      <h3>Upload Your Picture</h3>
      <input 
        type="file" 
        placeholder="Upload An Image Here" 
        onChange={uploadImage}/>
      {
        loading ? 
          (<h3>Loading...</h3>) :
          (<img src={projectMainImage} style={{ width:'300px' }}/>)
        
      }
    </div>
  );
}
