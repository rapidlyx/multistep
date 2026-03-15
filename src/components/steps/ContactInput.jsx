import React from "react";

export const ContactInput = ({ handleChange, formErrors, formValues }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className=" flex gap-2 flex-col ">
        <p className="text-[14px] font-semibold">
          First name <span className="text-red-500">*</span>
        </p>
        <input
          value={formValues.firstName}
          onChange={handleChange}
          className="rounded-lg border-gray-300 border w-full h-11 pl-3"
          type="text"
          name="firstName"
          style={{
            borderColor: formErrors.firstName ? "red" : undefined,
          }}
        />
        <p className="text-red-500 text-[14px] font-normal">
          {formErrors.firstName}
        </p>
      </div>
      <div className=" flex gap-2 flex-col ">
        <p className="text-[14px] font-semibold">
          Last name <span className="text-red-500">*</span>
        </p>
        <input
          value={formValues.lastName}
          onChange={handleChange}
          className="rounded-lg border-gray-300 border w-full h-11 pl-3"
          type="text"
          name="lastName"
          style={{
            borderColor: formErrors.lastName ? "red" : undefined,
          }}
        />
        <p className="text-red-500 font-2.5">{formErrors.lastName}</p>
      </div>
      <div className=" flex gap-2 flex-col ">
        <p className="text-[14px] font-semibold">
          Username <span className="text-red-500">*</span>
        </p>
        <input
          value={formValues.userName}
          onChange={handleChange}
          className="rounded-lg border-gray-300 border w-full h-11 pl-3"
          type="text"
          name="userName"
          style={{
            borderColor: formErrors.userName ? "red" : undefined,
          }}
        />
        <p className="text-red-500 font-2.5">{formErrors.userName}</p>
      </div>
    </div>
  );
};
