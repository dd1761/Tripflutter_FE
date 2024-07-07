// components/FormFieldSelect.tsx
import React from 'react';

interface FormFieldSelectProps {
  label: string;
  iconClass: string;
  options: string[];
  className: string;
}

const FormFieldSelect: React.FC<FormFieldSelectProps> = ({ label, iconClass, options, className }) => (
  <div className="col-lg align-items-end">
    <div className="form-group">
      <label htmlFor="#">{label}</label>
      <div className="form-field">
        <div className="select-wrap">
          <div className="icon">
            <span className={iconClass} />
          </div>
          <select name="" id="" className={className}>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>
);

export default FormFieldSelect;
