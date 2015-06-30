require.config({
    paths: {
        'dust-full': '../../node_modules/dustjs-linkedin/dist/dust-full',
        'adaptivejs': '../../node_modules/adaptivejs',
        '$': '../../node_modules/jquery/dist/jquery',
    },
    shim: {
        'dust-full': {
            'exports': 'dust'
        },
        '$': {
            'exports': 'jQuery'
        }
    },
});
