import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
    form: {
        marginLeft: '120px',
        padding: '10px 20px 10px 80px',
        backgroundColor: '#5A290C',
        width: '620px',
        height: '750px',
        borderRadius: '550px 0px 450px 450px',
    },

    input: {
       padding: '10px 200px 10px 10px',
       marginTop: '5px',
       borderRadius: '7px',
       borderStyle: 'none',
    },
    
    label: {
       paddingTop: '20px',
       paddingBottom: '5px',
    },

    area: {
        marginTop: '5px',
        padding: '20px 170px 90px 10px',
        borderRadius: '10px',
        borderStyle: 'none',
    },

    name: {
        marginTop: '150px',
        marginLeft: '130px',
        color: 'white',
    },

    email: {
        marginTop: '10px',
        marginLeft: '130px',
        color: 'white',
    },

    plate: {
        marginTop: '30px',
        marginLeft: '130px',
        color: 'white',
    },

    message: {
        marginTop: '10px',
        marginLeft: '130px',
        color: 'white',
     },

    button: {
        marginTop: '20px',
        fontSize: '12px',
        padding: '12px 20px',
        borderRadius: '7px',
        borderStyle: 'none',
        backgroundColor: '#ffbf00',
        color: 'black'
    },

    title: {
        marginLeft: '120px',
        fontSize: '50px',
        fontFamily: 'Heavitas',
        color: '#ffbf00',
    },

    success: {
        color: '#00ffc8',
    },

    '@media (max-width:1196px)': {
        form: {
            padding: '10px 20px 10px 40px',
            backgroundColor: '#E4584B',
            width: '350px',
            height: '500px',
            borderRadius: '20px 140px 20px 20px',
        },

        group: {
            display: 'flex',
            justifyContent: 'center',
        },

        title: {
            fontSize: '50px',
            fontFamily: 'bolgota',
            color: '#fff37e',
            marginLeft: '0px',
            display: 'flex',
            justifyContent: 'center',
        },

        input: {
            padding: '10px 100px 10px 10px',
            marginTop: '5px',
            borderRadius: '7px',
            borderStyle: 'none',
         },

         area: {
            marginTop: '5px',
            padding: '20px 100px 90px 10px',
            borderRadius: '10px',
            borderStyle: 'none',
        },
        
      },

      '@media (max-width:520px)': {
        form: {
            padding: '10px 20px 10px 40px',
            backgroundColor: '#E4584B',
            width: '320px',
            height: '500px',
            borderRadius: '20px 140px 20px 20px',
        },

        group: {
            display: 'flex',
            justifyContent: 'center',
        },

        input: {
            padding: '10px 100px 10px 10px',
            marginTop: '5px',
            borderRadius: '7px',
            borderStyle: 'none',
         },

         area: {
            marginTop: '5px',
            padding: '20px 100px 90px 10px',
            borderRadius: '10px',
            borderStyle: 'none',
        },
        
      },
/*  */
    
    
    
}))