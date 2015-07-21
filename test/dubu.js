//QUnit.test( "hello test", function( assert ) {
//    assert.ok( 1 == "1", "Passed!" );
//});

(function() {
    //alert('adfs');
    var _ = typeof require == 'function' ? require('..') : window._;

    QUnit.module('Collections');

    test('each', function() {
        _.each([1, 2, 3], function(num, i) {
            equal(num, i + 1, 'each iterators provide value and iteration count');
        });

        //_.each()

    });

    QUnit.test( "hello test", function( assert ) {
        assert.ok( 1 == "1", "Passed!" );
    });

}());
