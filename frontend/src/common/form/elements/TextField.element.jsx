import {
    DigitTextField,
    useDigitFormField
} from "@cthit/react-digit-components";
import propTypes from "prop-types";

const TextField = ({ name, title }) => {
    const textField = useDigitFormField(name);
    return <DigitTextField {...textField} upperLabel={title} />;
};

TextField.propTypes = {
    name: propTypes.string,
    title: propTypes.string
};

export default TextField;
