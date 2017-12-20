var chai = require('chai');
var chaiHttp = require('chai-http');
var supertest = require('supertest');
var request = require("request");
var should = require('should/as-function');

var app = require('../app.js');
var server = supertest.agent("http://localhost:3000");

describe('Test API', function() {

  //Home Page
  describe("RETURN home page",function(){
      it("should return home page",function(done){
        server
        .get("/")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err,res){
              should.exist(res.body);
              done();
          });
      });
  });

  //Get value by Key
  describe('GET /object/:key', function() {
       // Testing how to find a task by id
       it('returns a value by key', function(done) {
          var key = "mykey";
           server
           .get('/object/key')
           .expect("Content-type",/json/)
           //.expect("key").to.equal("key")
           //.expect({ key: 'mykey' }).to.deep.equal({ key: 'mykey' })
           .end(function(err, res) {
                  chai.expect({ value: 'myvalue' });
                  done(err);
            });
       });

       // Testing the status 404 for task not found
       it('returns status 404 when id is not found', function(done) {
           var task = {
               key: 'noKey'
           }
           server
           .get('/tasks/' + task.key)
           .end(function(err, res) {
                  chai.expect("no records found");
                  done(err);
            });
       });
   });

  //POST
  describe("POST /object",function(){
      it("save key and value",function(done){
        server
        .post('/object')
        .send({key : "mykey", value : "myvalue"})
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err,res){
          done(err);
        });
      });
  });

});
