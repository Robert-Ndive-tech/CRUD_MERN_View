import React, { useState, useEffect } from "react";
import axios from "axios";

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
        "http://localhost:4520/upload",
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
  };const [data, setData] = useState(""); 
  
  useEffect(() => {
      fetch("http://localhost:4520/download/1")
        .then((resp) => resp.json())
        .then((apiData) => {
          setData(apiData);
        });
    }, []);

  
  const handleDownload = async (event) => {
    event.preventDefault();
     setMe(true);

   /* try {
      const response = await fetch(`http://localhost:4520/download/1`);
      const data = await response.json();
      if (data.length === 0) {
      } else {
        setData(data);
      
      }
    } catch (error) {
      console.error("Error:", error);
    }*/
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
           
              <img src={data} alt="Robert" width={80} /> 
        
          }
         
        </li>
      </ul>
    </div>
  );
};

export default UploadForm;
