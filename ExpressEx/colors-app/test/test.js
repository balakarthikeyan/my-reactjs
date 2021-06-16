var chai = require("chai");
var expect = chai.expect;
var should = chai.should();
var chaiAsPromised = require("chai-as-promised");
var assert = require("assert");
var customApp = require("../index");
chai.use(chaiAsPromised).should();
var car, loadUserList;

beforeEach("Setting up the userList", function () {
    console.log("beforeEach");
    loadUserList = customApp.loadUserList;
    car = { name: "Figo", Maker: "Ford" };
});

describe.only("Basic Mocha String Test", function () {
    it("should return number of characters in a string", function () {
        assert.equal("Hello".length, 5); //Mocha
    });
    it("should return first character of the string", function () {
        assert.equal("Hello".charAt(0), "H"); //Mocha
    });
});

describe("Validate User ID", function () {
    it("should validate user id", function () {
        var isValid = customApp.isValidUserId(loadUserList, "abc123");
        // assert.equal(isValid, true); //Mocha
        expect(isValid).to.be.true;
    });
    it.only("should return false if invalid user id", function () {
        var isValid = customApp.isValidUserId(loadUserList, "abc1234");
        //assert.equal(isValid, false); //Mocha
        isValid.should.equal(false);
    });
    it("isValidUserIdAsync", function (done) {
        customApp.isValidUserIdAsync(loadUserList, "xyz321", 
        function (isValid) {
            assert.equal(isValid, true);
            done();
        });
    });
});

describe.skip("isAuthorizedPromise", function () {
    it("should return true if valid user id", function () {
        return customApp.isAuthorizedPromise(loadUserList, "abc123").should.eventually.be.true;
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

describe("Object Test", function () {
    it("should have property name", function () {
        car.should.have.property("name");
    });

    it("should have property name with value Figo", function () {
        car.should.have.property("name").equal("Figo");
    });

    it("should compare objects", function () {
        var car1 = car;
        car.should.deep.equal(car1);
    });

    it("handling null", function () {
        var car = null;
        should.not.exist(car);
    });
});

describe('isValidUserId', function(){
    it('should return false if user id blank');
});