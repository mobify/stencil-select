require.config({
    packages: [
        {
            name: 'dustjs-component',
            main: 'index'
        },
    ],
    paths: {
        'text': '../../bower_components/text/text',
        'dust-core': '../../bower_components/dustjs-linkedin/dist/dust-core',
        'dust-full': '../../bower_components/dustjs-linkedin/dist/dust-full',
        'dustjs-component': '../../bower_components/dustjs-component',
        'stencil-spec': '../../bower_components/stencil-spec',
    },
    shim: {
        'dust-core': {
            'exports': 'dust'
        },
        'dust-full': {
            'exports': 'dust'
        }
    },
});
