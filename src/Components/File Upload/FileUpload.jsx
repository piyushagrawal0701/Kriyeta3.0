import React, { useState } from "react";

const FileUpload = () => {
  const [success, setSuccess] = useState("");

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.elements.file.files[0];

    formData.append("file", file);

    try {
      const response = await fetch("/process", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess("Data has been successfully stored in Firebase.");
      } else {
        setSuccess("There was an error processing your file.");
      }
    } catch (error) {
      setSuccess("There was an error processing your file.");
    }
  };

  return (
    <div>
      <form onSubmit={handleFileUpload} encType="multipart/form-data">
        <label htmlFor="file">Choose a file:</label>
        <input type="file" name="file" id="file" required />
        <button class="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Upload
        </button>
      </form>

      {success && <p>{success}</p>}
    </div>
  );
};

export default FileUpload;
