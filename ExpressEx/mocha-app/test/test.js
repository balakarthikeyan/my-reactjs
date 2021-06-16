var chai = require("chai");
var expect = chai.expect;
// var should = chai.should();
var chaiAsPromised = require("chai-as-promised");
var assert = require("assert");
var customApp = require("../index");
chai.use(chaiAsPromised).should();
var result;
describe('Check Value', function(){
    beforeEach(function(){
        result = 100;
    });  
    it('should return an Integer', function(){
        assert((result>0), 'Value is an Integer')
    }); 
});

describe("#numFormatter", function () {
    it("should convert single digits", function () {
        var result = customApp.numFormatter(1);
        expect(result).to.equal("1");
    });

    it("should convert 4 digits", function () {
        var result = customApp.numFormatter(1234);
        expect(result).to.equal("1,234");
    });

    it.skip("should convert 5 digits", function () {
        var result = customApp.numFormatter(12345);
        expect(result).to.equal("12,345");
    });

    it("should convert digits with decimal", function () {
        var result = customApp.numFormatter(1234567.89);
        expect(result).to.equal("1,234,567.89");
    });
});