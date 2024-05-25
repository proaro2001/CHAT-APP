// import React from 'react'

const GenderCheckbox = (prop) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer "}>
          <span className="text-base label-text ">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={prop.selectedGender === "male"}
            onChange={() => prop.onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer }"}>
          <span className="text-base label-text ">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={prop.selectedGender === "female"}
            onChange={() => prop.onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
