import { Checkbox, FormControlLabel } from "@mui/material"

const MyCheckbox = ({ label, isChecked, onChange}) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={isChecked}
                    onChange={onChange}
                />
            }
            label={label}
        />
    );
}

export default MyCheckbox;