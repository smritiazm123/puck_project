import type { Config } from "@measured/puck";

export const config: Config = {
  components: {
    FormBlock: {
      fields: {
        title: { 
          type: "text", 
          label: "Form Title",
        },
        formFields: { 
          type: "array",
          label: "Form Fields",
          defaultValue: [], // Add this to ensure the array is initialized
          arrayFields: {    // Change from itemType to arrayFields
            label: { 
              type: "text", 
              label: "Field Label", 
            },
            fieldType: {    // Changed from 'type' to 'fieldType' to avoid confusion
              type: "select",
              label: "Field Type",
              options: [
                { label: "Text Input", value: "text" },
                { label: "Email Input", value: "email" },
                { label: "Radio Button", value: "radio" },
                { label: "Checkbox", value: "checkbox" },
                { label: "Textarea", value: "textarea" }
              ],
            },
          },
        },
      },
      
      defaultProps: {
        title: "Form",
        formFields: [
          { label: "Name", fieldType: "text" },
          { label: "Email", fieldType: "email" },
        ],
      },
    
      render: ({ title, formFields }) => (
        <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 5 }}>
          <h3>{title}</h3>
          <form>
            {formFields?.map((field, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <label>{field.label}</label>
                {field.fieldType === "text" && <input type="text" placeholder={field.label} />}
                {field.fieldType === "email" && <input type="email" placeholder={field.label} />}
                {field.fieldType === "radio" && <input type="radio" />}
                {field.fieldType === "checkbox" && <input type="checkbox" />}
                {field.fieldType === "textarea" && <textarea placeholder={field.label} />}
              </div>
            ))}
          </form>
        </div>
      ),
    }
  }
};

export default config;
export const rootTemplate = {
  zones: ["content"],
  components: ["FormBlock"]  // Make sure FormBlock is listed here
};