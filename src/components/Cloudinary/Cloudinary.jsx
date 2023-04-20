import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cloudName = process.env.CloudinaryName;

const MyCloudinaryImage = () => {
  const myImage = new CloudinaryImage("sample", {
    cloudName,
  }).resize(fill().width(100).height(150));

  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
};

export { MyCloudinaryImage, cloudName };
