///<reference path="./typings/tsd.d.ts" />

import greeter = require('./greeter');
import useSortable = require('./useSortable');

console.log(greeter("World"));

jQuery(() => {
    //jQuery(document.body).html(greeter("World"));
    useSortable();
    let testVar: string = "es5 test";
    console.log(testVar);
});