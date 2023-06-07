import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export const InputPhoto = ({
  photo,
  onUpload,
}: {
  photo: string;
  onUpload: Function;
}) => {
  function handleChange(e) {
    onUpload(e);
  }

  return (
    <div className="input-photo">
      {photo ? (
        <img src={photo} alt="" />
      ) : (
        <div className="input-photo__input">
          <input
            type="file"
            id="elementPhoto"
            name="elementPhoto"
            onChange={handleChange}
          />
          <div className="input-photo__add-icon">
            <AddPhotoAlternateIcon sx={{ fontSize: 100 }} />
          </div>
        </div>
      )}
    </div>
  );
};
