const styles = {
    root: {
        height: 'calc(100vh - 194px)',
        width: 'calc(100% - 820px)',
        backgroundColor: '#232F40',
        padding: '97px 410px',

        '& .card': {
            width: '100%',
            backgroundColor: '#F7F6EE',
        },

        '& .form': {
            marginTop: 32,
            display: 'flex',
            flexDirection: 'column',
            '& .input': {
                margin: '20px 60px',
                background: 'transparent',
                fontSize: '18px',
                borderBottom: '1px solid #707070',
                borderTop: '0',
                borderLeft: '0',
                borderRight: '0',
                padding: '0px 15px',
            },
            '& .button': {
                height: '60px',
                fontSize: '20px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                borderRadius: '30px',
                border: 'none',
                color: '#F7F6EE',
                backgroundColor: '#232F40',
                margin: '6% 12%',
            },
        },

        '& .link-register': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2D9AA6',
            textDecoration: 'none',
            fontWeight: 500,
        },
    }
}

export default styles;