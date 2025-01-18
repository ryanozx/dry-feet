import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

const options = [
    {label:'A'},
    {label:'B'},
    {label:'C'}
]

const MyAutocomplete = () => {
    return (
        <Autocomplete
            disablePortal
            options={options}
            renderInput={(params) => <TextField {...params} label="Movie" />
        }
        />
    );
}

export default MyAutocomplete;