const request = require("supertest")("http://localhost:8080");
const openExchangeReq = require("supertest")("https://openexchangerates.org/api");
const expect = require("chai").expect;


describe("Back end Service test", function () {
    this.timeout(50000);
  
    it("Currency converter back end service is up and running", async function () {
    const response = await request.get("/");

    expect(response.status).to.eql(200);
  });

  it('Currency converter api endpoint test', function(done) {
    request.get("/convert/EUR/EUR").
      then(response => {
        expect(response.status).to.eql(200);
        expect(response.body).to.be.a("number");
        expect(response.body).to.eql(1);
        done();
      }).
      catch(err => done(err));
  });

  it('Exchange rate api rate comparison with local service rate', function(done) {
    let responseFromLocalService;

    request.get("/convert/USD/INR").
    then(response => {
      responseFromLocalService = response.body;
    }).
    catch(err => done(err));

    openExchangeReq.get("/latest.json?app_id=9ffb657172604ee1ba320d493bdacc8c&symbols=INR").
      then(response => {
        expect(response.body.rates.INR).to.eql(responseFromLocalService);
        done();
      }).
      catch(err => done(err));
  });



});

  
