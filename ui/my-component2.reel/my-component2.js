/**
 * @module ui/my-component2.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class MyComponent2
 * @extends Component
 */
exports.MyComponent2 = Component.specialize(/** @lends MyComponent2# */ {
    constructor: {
        value: function MyComponent2() {
            this.super();
        }
    }
});
