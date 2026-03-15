import React, { useRef, useState } from "react";
import { Camera, X } from "lucide-react";

export const ProfData = ({
  handleChange,
  formErrors,
  setFormValues,
  formValues,
}) => {
  const [isDraging, setIsDraging] = useState(false);
  const inputRef = useRef(null);
  const [imageUrl, setImgUrl] = useState("");

  const handleBrowserClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleUploadImage = (file) => {
    const imgUrl = URL.createObjectURL(file);
    setImgUrl(imgUrl);
    setFormValues((previous) => ({ ...previous, profileImage: imgUrl }));
  };

  const imageHandler = (event) => {
    const uploadedImg = event.target.files[0];

    handleUploadImage(uploadedImg);
  };

  const ClearImage = () => {
    inputRef.current.value = "";
    setImgUrl("");
    setFormValues((previous) => ({ ...previous, profileImage: "" }));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedImg = Array.from(event.dataTransfer.files).at(0);
    handleUploadImage(uploadedImg);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDraging(true);
  };

  const handleDragLeave = () => {
    setIsDraging(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <p className="text-[14px] font-semibold">
          Date of birth <span className="text-red-500">*</span>
        </p>
        <input
          value={formValues.date}
          className="w-full border border-gray-300 rounded-lg h-11 pl-3"
          type="Date"
          placeholder="--/--/--"
          onChange={handleChange}
          name="date"
          style={{ borderColor: formErrors.date ? "red" : undefined }}
        />
        <p className="text-red-500 text-[14px] font-normal">
          {formErrors.date}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[14px] font-semibold">
          Profile image <span className="text-red-500">*</span>
        </p>

        <div
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleBrowserClick}
          className={`bg-gray-100 w-full h-45 rounded-lg flex justify-center items-center flex-col border-5 relative ${
            isDraging
              ? "border-dashed border-green-400"
              : "border-solid border-transparent"
          }`}
        >
          <Camera />

          <input
            ref={inputRef}
            hidden
            type="file"
            name="profileImage"
            onChange={imageHandler}
            style={{
              borderColor: formErrors.profileImage ? "red" : undefined,
            }}
          />

          {imageUrl ? (
            <img
              className="w-full rounded-md h-full bg-cover bg-center"
              src={imageUrl}
              alt="image"
            />
          ) : (
            "Add Photo"
          )}
          <button
            className={`${
              imageUrl
                ? "absolute top-2 left-91 text-white  bg-black p-1 rounded-full"
                : "hidden"
            }`}
            onClick={ClearImage}
          >
            <X />
          </button>
        </div>

        <p className="text-red-500 text-[14px] font-normal">
          {formErrors.profileImage}
        </p>
      </div>
    </div>
  );
};
