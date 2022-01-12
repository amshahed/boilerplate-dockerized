import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        marginTop: theme.spacing(10),
        padding: theme.spacing(5),
        justifyContent: 'center',
    },
    wrapper: {
        width: '60%',
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(2)
    },
}));

export default useStyles;
