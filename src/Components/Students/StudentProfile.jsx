import React, { useRef, useState } from "react";
import profile from "../../Assets/AdminImgFolder/profile.png";
import "../../Assets/Styles/Student/StudentProfile.css";

const StudentProfile = () => {
  const [imgSrc, setImgSrc] = useState(profile);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImgSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="informationContainer w-50 h-75 border d-flex flex-column justify-content-center">
        <div className="profileContainer d-flex flex-column align-items-center text-center">
          <img
            src={imgSrc}
            alt="profile"
            id="profileImage"
            style={{ height: "150px", width: "150px" }}
          />
          <label htmlFor="input-file">Update img</label>

          <input
            type="file"
            name="file"
            id="input-file"
            accept="image/jpeg,image/png,image/jpg"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
        </div>
        <div className="tableContainer d-flex justify-content-center">
          <table className="w-75">
            <tbody>
              <tr>
                <th>User Name:</th> <td>Askinas</td>
              </tr>
              <tr>
                <th>User Gmail:</th> <td>askinas@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-5 w-75 mx-auto text-end">
          <button className="px-3 py-1 rounded" type="button">Log Out</button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
