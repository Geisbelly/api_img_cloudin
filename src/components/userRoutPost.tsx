
export  async function enviarImgProduto(data: { profile: File[] }) {
  const image = data.profile[0];
  const formData = new FormData();
  const clodname = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET_PRODUCT;
  const name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!clodname || !name ) {
      console.error("Cloud name ou upload preset não estão definidos.");
      return null;
    }
  
  formData.append("file", image);
  formData.append("upload_preset", clodname);
  const uploadResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${name}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const uploadedImageData = await uploadResponse.json();
  const imageUrl = uploadedImageData.secure_url;
  console.log(imageUrl);
};



export  async function enviarImgProfile(data: { profile: File[] }) {
  const image = data.profile[0];
  const formData = new FormData();
  const clodname = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!clodname || !name ) {
      console.error("Cloud name ou upload preset não estão definidos.");
      return null;
    }
  
  formData.append("file", image);
  formData.append("upload_preset", clodname);
  const uploadResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${name}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const uploadedImageData = await uploadResponse.json();
  const imageUrl = uploadedImageData.secure_url;
  console.log(imageUrl);
};