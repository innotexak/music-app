import { useState } from 'react';
import axios from 'axios';

const useCloudinaryUpload = (cloudinaryUrl: string, uploadPreset: string) => {
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (fileUri: string): Promise<string> => {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append('file', {
        uri: fileUri,
        type: 'image/jpeg', 
        name: 'upload.jpg',
      });
      formData.append('upload_preset', uploadPreset);

      const response = await axios.post(cloudinaryUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setUploading(false);

      return response.data.secure_url;
    } catch (error) {
      setUploading(false);
      console.error('Cloudinary upload failed:', error);
      throw error;
    }
  };

  return { uploadFile, uploading };
};

export default useCloudinaryUpload;
