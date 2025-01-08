import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    flex: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '0px 0px 0px 0px'
    },

    container: {
        marginTop: '100px',
        width: '100%'
    },

    avatar: {
        color: 'white',
        backgroundColor: '#000000',
        margin: '40px 0px -20px 35px',
        fontFamily: 'helvetica',
        padding: '4px 4px 4px 4px',
    },
    button: {
        color: 'white',
        fontFamily: 'helvetica',
        backgroundColor: '#000000',
        borderRadius: '8px',
        padding: '15px 20px 15px 20px',
        margin: '-30px 40px 40px 0px',
        "&:hover": {
            backgroundColor: "#ffbf00",
            color: 'black'
        },
    },
    

    
    
    
}))