/**
 * @module ui/my-component3.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class MyComponent3
 * @extends Component
 */
exports.MyComponent3 = Component.specialize(/** @lends MyComponent3# */ {
    constructor: {
        value: function MyComponent3() {
            this.super();
        }
    }
});
