import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@mui/material/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    createStyles({
        textField: {
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',            
            paddingBottom: 0,
            borderRadius: 100,
            marginTop: 0,
            fontWeight: 500
        },
        input: {
            color: 'white'
        }
    })
})

export default function Search() {
    
    const classes  = useStyles();
    return (<>
            <div>
            <TextField
                label="Search"
                className={classes.textField}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            </div>
           
    </>)
}