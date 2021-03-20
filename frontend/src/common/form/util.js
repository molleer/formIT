import * as yup from "yup";

export const input_types = {
    text: "string"
};

export const getInitialValues = form_shape => {
    let values = {};
    for (var i in form_shape) {
        values[form_shape[i].name] = form_shape[i].initial_value;
    }
    return values;
};

export const getValidationSchema = form_shape => {
    let schema = {};
    for (var i in form_shape) {
        switch (input_types[form_shape.type]) {
            case "string":
                schema[form_shape[i].name] = yup.string();
                break;
            default:
                schema[form_shape[i].name] = yup.string();
        }
        if (form_shape[i].required) {
            schema[form_shape[i].name] = schema[form_shape[i].name].required();
        }
    }
    return yup.object().shape(schema);
};
