var grunt = require('grunt');

exports.compass = {
  compile: function(test) {
    'use strict';
    test.expect(1);

    var actual = grunt.file.read('tmp/compile.css');
    var expected = grunt.file.read('test/expected/compile.css');
    test.equal(actual, expected, 'should compile sass to css using compass');

    test.done();
  }
};
