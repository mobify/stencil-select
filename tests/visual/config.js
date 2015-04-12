require.config({
    bundles: {
        'dust-full': ['dust.core', 'dust.compile'],
    },
    packages: [
        {name: 'dustjs-component', main: 'index'},
    ],
    paths: {
        'text': '../../bower_components/text/text',
        'dust-full': '../../bower_components/dustjs-linkedin/dist/dust-full',
        'dustjs-component': '../../bower_components/dustjs-component',
        'stencil-spec': '../../bower_components/stencil-spec',
    },
});

// Enable AMD loading of Dust.js
define.amd.dust = true;
