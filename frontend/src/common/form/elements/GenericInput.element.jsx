import TextField from "./TextField.element";
import propTypes from "prop-types";
import { input_types } from "../util";

const GenericInput = props => {
    switch (props.type) {
        case "text":
            return <TextField {...props} />;
        default:
            return null;
    }
};

GenericInput.propTypes = {
    type: propTypes.oneOf(Object.keys(input_types)).isRequired,
    name: propTypes.string.isRequired,
    required: propTypes.bool,
    title: propTypes.string.isRequired,
    initial_value: propTypes.string.isRequired
};

export default GenericInput;
