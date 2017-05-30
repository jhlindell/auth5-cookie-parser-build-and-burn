'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');

const server = require('../server');

suite('cookie-parser should be properly implemented.', () => {

  test('GET /set should set the cookie foo=bar in the response.', (done) => {

    request(server)
    .get('/set')
    .expect('Set-Cookie', 'foo=bar; Path=/')
    .expect(200, done);

  });

  test('GET /read should read the cookies from the request and return the values as JSON in the response.', (done) => {

    let cookie = 'mega=man';
    let cookieObj = {"mega":"man"};

    request(server)
    .get('/read')
    .set('Cookie', cookie)
    .expect(200, cookieObj, done);

  });

  test('GET /clear should clear the cookie named deleteMe in the response.', (done) => {
    request(server)
    .get('/clear')
    .expect('Set-Cookie', 'deleteMe=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT')
    .expect(200, done);

  });

});
