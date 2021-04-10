import {
    DigitCheckbox,
    DigitDesign,
    DigitForm,
    DigitIconButton,
    DigitLayout,
    DigitSelect,
    DigitTextField,
    useDigitFormField
} from "@cthit/react-digit-components";
import propTypes from "prop-types";
import * as yup from "yup";
import { selectable_types } from "./util";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { FormContext, FormContextProvider } from "./contexts/form.context";
import { useContext } from "react";
import Form from "../form";

const TitleField = () => {
    const titleValues = useDigitFormField("title");
    return <DigitTextField {...titleValues} upperLabel="Title" />;
};

const CheckBox = ({ name, title, ...props }) => {
    const requiredValues = useDigitFormField(name);
    return <DigitCheckbox {...requiredValues} {...props} label={title} />;
};

CheckBox.propTypes = {
    name: propTypes.string.isRequired,
    title: propTypes.string
};

const TypeSelectField = () => {
    const typeValues = useDigitFormField("type");
    return (
        <DigitSelect
            {...typeValues}
            size={{ width: "100px" }}
            valueToTextMap={selectable_types}
            upperLabel="Type"
        />
    );
};

const InputItem = ({ title /*, type, required, pd*/ }) => {
    return (
        <DigitDesign.Card>
            <DigitDesign.CardBody>
                <DigitForm
                    initialValues={{
                        title: title,
                        type: "text",
                        required: false,
                        pd: false
                    }}
                    onSubmit={() => {}}
                    validationSchema={yup.object().shape({
                        title: yup.string().required(),
                        type: yup.string().required(),
                        required: yup.bool()
                    })}
                    render={() => (
                        <>
                            <DigitIconButton icon={ArrowUpwardIcon} />
                            <DigitIconButton icon={ArrowDownwardIcon} />
                            <TitleField />
                            <TypeSelectField />
                            <CheckBox
                                name="required"
                                title="Required"
                                size={{ width: "120px" }}
                            />
                            <CheckBox
                                name="pd"
                                title="Personal Data"
                                size={{ width: "170px" }}
                            />
                            <DigitIconButton icon={DeleteIcon} />
                        </>
                    )}
                />
            </DigitDesign.CardBody>
        </DigitDesign.Card>
    );
};

const EditPanel = () => {
    const [form] = useContext(FormContext);
    return (
        <DigitLayout.Column size={{ width: "850px" }}>
            {form.form_shape.map((e, i) => (
                <InputItem key={e.name} {...e} index={i} />
            ))}
            <DigitIconButton icon={AddIcon} size={{ width: "50px" }} />
        </DigitLayout.Column>
    );
};

/**
 * form = {
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
            }
 */

const FormPreview = () => {
    const [form] = useContext(FormContext);
    return <Form form={form} />;
};

const FormEditor = () => {
    return (
        <FormContextProvider>
            <DigitLayout.Row>
                <FormPreview />
                <EditPanel />
            </DigitLayout.Row>
        </FormContextProvider>
    );
};

export default FormEditor;
