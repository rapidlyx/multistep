import React from "react";

export const PrivateInput = ({ handleChange, formErrors, formValues }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className=" flex gap-2 flex-col">
        <p className="text-[14px] font-semibold">
          Email <span className="text-red-500">*</span>
        </p>
        <input
          value={formValues.email}
          name="email"
          className="rounded-lg border-gray-300 border w-full h-11 pl-3 "
          type="text"
          placeholder="Placeholder"
          onChange={handleChange}
          style={{
            borderColor: formErrors.email ? "red" : undefined,
          }}
        />
        <p className="text-red-500 text-[14px] font-normal">
          {formErrors.email}
        </p>
      </div>
      <div className=" flex gap-2 flex-col">
        <p className="text-[14px] font-semibold">
          Phone number <span className="text-red-500">*</span>
        </p>
        <input
          value={formValues.phoneNumber}
          name="phoneNumber"
          className="rounded-lg border-gray-300 border w-full h-11 pl-3"
          type="text"
          placeholder="Placeholder"
          onChange={handleChange}
          style={{
            borderColor: formErrors.phoneNumber ? "red" : undefined,
          }}
        />
        <p className="text-red-500 text-[14px] font-normal">
          {formErrors.phoneNumber}
        </p>
      </div>
      <div className=" flex gap-2 flex-col">
        <p className="text-[14px] font-semibold">
          Password <span className="text-red-500">*</span>
        </p>
        <input
          value={formValues.password}
          name="password"
          className="rounded-lg border-gray-300 border w-full h-11 pl-3"
          type="password"
          placeholder="Placeholder"
          onChange={handleChange}
          style={{
            borderColor: formErrors.password ? "red" : undefined,
          }}
        />
        <p className="text-red-500 text-[14px] font-normal">
          {formErrors.password}
        </p>
      </div>
      <div className=" flex gap-2 flex-col">
        <p className="text-[14px] font-semibold">
          Comfirm Password <span className="text-red-500">*</span>
        </p>
        <input
          value={formValues.comfirmPassword}
          name="comfirmPassword"
          className="rounded-lg border-gray-300 border w-full h-11 pl-3"
          type="password"
          placeholder="Placeholder"
          onChange={handleChange}
          style={{
            borderColor: formErrors.comfirmPassword ? "red" : undefined,
          }}
        />
        <p className="text-red-500 text-[14px] font-normal">
          {formErrors.comfirmPassword}
        </p>
      </div>
    </div>
  );
};
