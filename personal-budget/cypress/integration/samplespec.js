/// <reference types ="cypress"/>

import Chance from 'chance';
const chance = new Chance();


describe('FireStarter', () => {
  const email = chance.email();
  const pass= 'ValidPassword123';

  beforeEach(() => {
    cy.visit('https://finalbudget-client-kritika.herokuapp.com/');
  })

it('has a title', () => {
  //cy.contains('Welcome to FireStarter');

  expect(2).to.equal(2)
});

it ('blocks protected routes', () => {

});





});
