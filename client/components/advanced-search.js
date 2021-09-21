import { createStyles, alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => {
    createStyles({
        search: {
           position:'relative',
           borderRadius: theme.shape.borderRadius,
           backgroundColor: alpha(theme.palette.common.white, 0.15),
           '&:hover':{
               backgroundColor: alpha(theme.palette.common.white,0.25),
           },
           marginLeft: 0,
           width: '100%',
           [theme.breakpoints.up('sm')]: {
               marginLeft: theme.spacing(1),
               width: 'auto',
           }
        },
        searchIcon: {
            padding: theme.spacing(0,2),
            height:'100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        inputRoot:{
            color:'inherit'
        },
        inputInput:{
            padding: theme.spacing(1,1,1,0),
            paddingLeft: `calc(1em) + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch'
                }
            }
        }
    })
})

export default function AdvancedSearch(){
   const classes = useStyles();
   return (
    <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
       </div>
      <InputBase 
        placeholder="Search..." 
        classes={{
            root:classes.inputRoot,
            input:classes.inputInput
        }}
      />
    </div>
   )
}