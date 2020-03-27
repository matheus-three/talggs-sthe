const styles = {
    root: {
        height: 'calc(100vh - 140px)',
        width: 'calc(100% - 600px)',
        backgroundColor: 'black',
        padding: '70px 300px',

        '& .title': {

        },

        '& .card': {
            width: '100%'
        },

        '& .form': {
            marginTop: 32,
            display: 'flex',
            flexDirection: 'column',
            '& .input': {
                marginBottom: 12
            }
        },
    }
}

export default styles;