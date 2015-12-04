'use strict';

var request = require("supertest");
var assert = require("assert");

var requestHandlers = require("../lib/requestHandlers");
var app = require("../index.js");

describe('Tests', function()
{
	it('Existe la base de datos', function(done) 
	{
		assert.equal(requestHandlers.DBexists(), true);
    	done();
  	});

  	it("Index", function(done) {
		request(app)
			.get("/")
			.expect("Content-Type", /text\/html/)
			.expect(200, done);
	});
	it("New user", function(done) {
		request(app)
			.post("/newUser")
			.expect("Content-Type", /text\/html/)
			.expect(200, done);
	});
	it("Delete user", function(done) {
		request(app)
			.post("/deleteUser")
			.expect("Content-Type", /text\/html/)
			.expect(200, done);
	});
});