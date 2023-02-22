

function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
     const fn = function namedFunction(){}
     return fn
}

function returnsAnAnonymousFunction() {
    return function(){}
}