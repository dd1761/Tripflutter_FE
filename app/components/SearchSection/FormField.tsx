// components/FormField.tsx
import React from 'react';

interface FormFieldProps {
  label: string;
  iconClass: string;
  type: string;
  placeholder: string;
  className: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, iconClass, type, placeholder, className }) => (
  <div className="col-lg align-items-end">
    <div className="form-group">
      <label htmlFor="#">{label}</label>
      <div className="form-field">
        <div className="icon">
          <span className={iconClass} />
        </div>
        <input type={type} className={className} placeholder={placeholder} />
      </div>
    </div>
  </div>
);

export default FormField;
