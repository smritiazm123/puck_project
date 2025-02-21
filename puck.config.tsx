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
          type: "array",   // ✅ Allows users to add fields dynamically
          label: "Form Fields",
          of: {   // ✅ Use `of` instead of `items`
            type: "object",
            label: "Field",
            fields: {
              label: { 
                type: "text", 
                label: "Field Label", 
              },
              type: {
                type: "select",
                label: "Field Type",
                options: ["text", "email", "radio", "checkbox", "textarea"],  // ✅ Field type options
              },
            },
          },
        },
      },
    
      defaultProps: {
        title: "Form",
        formFields: [
          { label: "Name", type: "text" },
          { label: "Email", type: "email" },
        ],
      },
    
      render: ({ title, formFields }) => (
        <div style={{ padding: 16, border: "1px solid #ddd", borderRadius: 5 }}>
          <h3>{title}</h3>
          <form>
            {formFields?.map((field, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <label>{field.label}</label>
                {field.type === "text" && <input type="text" placeholder={field.label} />}
                {field.type === "email" && <input type="email" placeholder={field.label} />}
                {field.type === "radio" && <input type="radio" />}
                {field.type === "checkbox" && <input type="checkbox" />}
                {field.type === "textarea" && <textarea placeholder={field.label} />}
              </div>
            ))}
          </form>
        </div>
      ),
    }
  }
};

export default config;
