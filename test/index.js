const graphQLSchema = require('../lib');
const assert = require('assert');

describe('petstore schema', () => {
  it('converting JSON', (done) => {
    graphQLSchema(`${__dirname}/fixtures/petstore.json`).then(() => done()).catch(done);
  });

  it('converting YAML', (done) => {
    graphQLSchema(`${__dirname}/fixtures/petstore.yaml`).then(() => done()).catch(done);
  });

});

describe('bearer security', () => {
  it('converting YAML', (done) => {
    graphQLSchema(`${__dirname}/fixtures/security.yaml`).then(() => done()).catch(done);
  });

  it('parsing directives', (done) => {
    graphQLSchema(`${__dirname}/fixtures/security.yaml`)
      .then(schema => {
        assert.equal(schema._directives.length, 3);
        done();
      })
      .catch(done);
  });

});
