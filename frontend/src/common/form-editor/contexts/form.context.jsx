import { createContext, useState } from "react";

export const FormContext = createContext({ form_shape: [] });

export const FormContextProvider = ({ children }) => {
    const form = useState({
        form_shape: [
            {
                name: "name",
                type: "text",
                required: true,
                title: "Name",
                initial_value: ""
            }
        ]
    });
    return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
};
