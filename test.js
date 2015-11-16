'use strict';

var assert = require("assert");
var requestHandlers = require("./requestHandlers");


describe('Tests', function()
{
	it('Existe la base de datos', function(done) 
	{
		assert.equal(requestHandlers.DBexists(), true);
    	done();
  	});
});