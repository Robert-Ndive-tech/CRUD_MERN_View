import React, { useState } from "react";
import axios from "axios";
import me1 from "../Assets/1712426977213-me1.png";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [me, setMe] = useState(false);
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setMessage(""); // Clear any previous message
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setMessage("Please select a photo to upload");
      return;
    }

    const formData = new FormData();
    formData.append("photo", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:4500/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage("PHOTO UPLOADED SUCCEFULLY THANKS FOR YOUR TRIALS");
    } catch (error) {
      console.error("Error uploading photo:", error);
      setMessage("Error uploading photo. Please try again.");
    }
  };
  const [data, setData] = useState("");
  const handleDownload = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:4500/download`);
      const data = await response.json();
      if (data.length === 0) {
      } else {
        setData(data);
        setMe(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  var ram;
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="file" onChange={onFileChange} />
        <button type="submit" name="photo">
          Send Photo
        </button>
      </form>
      <p>{message}</p>
      <button onClick={handleDownload} name="button">
        Click Me
      </button>
      <ul>
        <li>
          {me &&
            data.map((item) => (
              <img src={item.PHOTONAME} alt="Robert" width={80} />
            ))}
        </li>
      </ul>
      <img src={me1} alt="RObert" width={70} />
    </div>
  );
};

export default UploadForm;
