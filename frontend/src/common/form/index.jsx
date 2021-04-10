import {
    DigitButton,
    DigitForm,
    DigitLayout
} from "@cthit/react-digit-components";
import GenericInput from "./elements";
import { getInitialValues, getValidationSchema } from "./util";

const Form = ({form}) => {
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
