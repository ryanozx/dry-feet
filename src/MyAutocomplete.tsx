import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

const MyAutocomplete = ({label, options, onChange}) => {
    return (
        <Autocomplete
            disablePortal
            options={options}
            renderInput={(params) => <TextField {...params} label={label} />}
            onChange={onChange}
        />
    );
}

export default MyAutocomplete;