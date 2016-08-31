///<reference path="./typings/tsd.d.ts" />

import './jqueryui.js';

function useSortable () {
    jQuery( "#sortable" ).sortable();
    jQuery( "#sortable" ).disableSelection();
}

export = useSortable;