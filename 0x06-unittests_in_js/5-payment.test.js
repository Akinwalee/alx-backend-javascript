const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let sinonSpy;

  beforeEach(() => {
    if (!sinonSpy) {
      sinonSpy = sinon.spy(console);
    }
  });

  afterEach(() => {
    sinonSpy.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(sinonSpy.log.calledWith('The total is: 120')).to.be.true;
    expect(sinonSpy.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(sinonSpy.log.calledWith('The total is: 20')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});
