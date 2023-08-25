import React from "react";

const defaultFormFields: {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "paragraph";
  isRequired?: boolean;
}[] = [
  { id: "email", label: "E-Mail", type: "email", isRequired: true },
  { id: "anfrage", label: "Anfrage", type: "paragraph", isRequired: true },
];

interface FormField {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "paragraph";
  isRequired?: boolean;
}

interface Props {
  formId: string;
  formFields?: FormField[];
}

const Form: React.FC<Props> = ({ formId, formFields = defaultFormFields }) => (
  <form
    name={formId}
    method="POST"
    action="/form-success"
    data-netlify-honeypot="bot-field"
    data-netlify="true"
    className="flex flex-col items-end gap-8"
  >
    <div className="flex w-full flex-col gap-4">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value={formId} />
      {formFields.map((field) => (
        <div key={field.id}>
          {field.type === "paragraph" ? (
            <textarea
              name={field.id}
              placeholder={field.label + " " + (field.isRequired ? "*" : "")}
              className="input"
              rows={4}
              required={!!field.isRequired}
            />
          ) : (
            <input
              name={field.id}
              placeholder={field.label + " " + (field.isRequired ? "*" : "")}
              type={field.type}
              className="input"
              required={!!field.isRequired}
            />
          )}
        </div>
      ))}
    </div>

    <button type="submit" className="btn-primary">
      Anfrage abschicken
    </button>
  </form>
);

export default Form;
