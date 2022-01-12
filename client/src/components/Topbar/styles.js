import { makeStyles } from '@material-ui/core/styles'

let useStyles = makeStyles(theme => ({
    title: {
        flex: 1
    },
    menu: {
        cursor: 'pointer'
    },
    link: {
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '1.2em'
    }
}))

export default useStyles