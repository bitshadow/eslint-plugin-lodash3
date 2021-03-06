'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/prefer-lodash-method');
var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('prefer-lodash-method', rule, {
    valid: [
        'var x = _.map(arr, f)',
        'var x = _(arr).map(f).reduce(g)',
        'var x = _.chain(arr).map(f).reduce(g).value()',
        'var x = _.keys(obj)'
    ],
    invalid: [{
        code: 'var x = a.map(function(x) {return x.f()});',
        errors: [{message: 'Prefer \'_.map\' over the native function.'}]
    }, {
        code: 'var x = arr.filter(x => x.f())',
        ecmaFeatures: {arrowFunctions: true},
        errors: [{message: 'Prefer \'_.filter\' over the native function.'}]
    }, {
        code: 'var x = Object.keys(node)',
        errors: [{message: "Prefer '_.keys' over the native function."}]
    }]
});
