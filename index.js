const receivesAFunction = (callback) => callback();

const returnsANamedFunction = () => receivesAFunction;

const returnsAnAnonymousFunction = () => function () {};

