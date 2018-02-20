import uglify from 'rollup-plugin-uglify';

export default {
    input: 'bundles/index.js',
    output: {
        name: 'ng2Completer',        
        format: 'umd',
        file: 'bundles/ng2-completer.umd.js',
        sourcemap: true,        
        globals: {
            '@angular/core': 'ng.core',
            '@angular/common': 'ng.common',
            '@angular/compiler': 'ng.compiler',
            '@angular/forms': 'ng.forms',
            '@angular/http': 'ng.http',
            '@angular/platform-browser': 'ng.platformBrowser',
            '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic',
            'rxjs/Subject': 'Rx',
            'rxjs/observable/PromiseObservable': 'Rx',
            'rxjs/operator/toPromise': 'Rx.Observable.prototype',
            'rxjs/Observable': 'Rx',
            'rxjs/Rx': 'Rx',
            'rxjs/add/operator/map': 'Rx.Operator.map',
            'rxjs/add/operator/catch': 'Rx.Operator.catch'
        }
    },
    treeshake: true,
    onwarn: function (warning) {
        // Suppress this error message... there are hundreds of them. Angular team says to ignore it.
        // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
        if (warning.code === 'THIS_IS_UNDEFINED')
            return;
        },
    plugins: [
        uglify()
    ],
    external: [
        '@angular/core',
        '@angular/common',
        '@angular/compiler',
        '@angular/forms',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        'rxjs/Subject',
        'rxjs/observable/PromiseObservable',
        'rxjs/operator/toPromise',
        'rxjs/Observable',
        'rxjs/Rx'
    ]
}
