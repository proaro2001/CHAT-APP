// import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label p-2">
          <span className="text-base label-text ">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
      <div className="form-control">
        <label className="label p-2">
          <span className="text-base label-text ">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
