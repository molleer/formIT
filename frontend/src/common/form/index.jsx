import {
    DigitButton,
    DigitForm,
    DigitLayout
} from "@cthit/react-digit-components";
import GenericInput from "./elements";
import { getInitialValues, getValidationSchema } from "./util";

const form = {
    id: "335ab2b9-90a4-4185-a41b-86b83ca3266b",
    authentication: {
        provider: "gamma",
        authority: null
    },
    submit_title: "Send",
    form_shape: [
        {
            name: "name",
            type: "text",
            required: true,
            title: "Name",
            initial_value: ""
        },
        {
            name: "email",
            type: "text",
            required: true,
            title: "Email",
            initial_value: ""
        }
    ]
};

const Form = () => {
    return (
        <DigitForm
            onSubmit={val => console.log(val)}
            initialValues={getInitialValues(form.form_shape)}
            validationSchema={getValidationSchema(form.form_shape)}
            render={() => (
                <DigitLayout.Column
                    size={{
                        width: "320px"
                    }}
                >
                    {form.form_shape.map(e => (
                        <GenericInput key={e.name} {...e} />
                    ))}
                    <DigitButton raised submit text={form.submit_title} />
                </DigitLayout.Column>
            )}
        />
    );
};

export default Form;
