import React from "react";
interface IFormFieldProps {
    title: string;
    type?: React.HTMLInputTypeAttribute;
    state: string;
    placeholder: string;
    isTextarea?: boolean;
    setState: (value: string) => void;
    notRequired?: boolean;
}

const FormField: React.FC<IFormFieldProps> = ({
    title,
    type,
    state,
    placeholder,
    isTextarea,
    setState,
    notRequired,
}) => {
    return (
        <div className="flexStart flex-col w-full gap-4 my-4">
            <label htmlFor={title} className="w-full text-gray-500">
                {title}
            </label>
            {isTextarea ? (
                <textarea
                    id={title}
                    placeholder={placeholder}
                    value={state}
                    required={!notRequired}
                    className="form-field-input"
                    onChange={(e) => setState(e.target.value)}
                ></textarea>
            ) : (
                <input
                    id={title}
                    placeholder={placeholder}
                    value={state}
                    required={!notRequired}
                    className="form-field-input"
                    onChange={(e) => setState(e.target.value)}
                    type={type || "text"}
                />
            )}
        </div>
    );
};

export default FormField;
