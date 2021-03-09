/* eslint-disable max-len */
import React, { useState } from 'react';
import { patchUserData } from '../../services/fetches/fetches';
import { useSession } from '../../state/AuthUserProvider';
                           
export default function UpLoader({ setProfileImageUrl }) {

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  const { session, setSession }  = useSession() || {}; 

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

    setProfileImageUrl(file.secure_url);

    setLoading(false);

    console.log(file);

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
          (<img src={image} style={{ width:'300px' }}/>)
      }
    </div>
  );
}
