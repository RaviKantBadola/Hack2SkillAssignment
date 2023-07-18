import { it } from "mocha";
import Heroku_PO from "../support/PageObjects/Heroku_P0";

describe("Heroku Test suite", () => {
  const Heroku = new Heroku_PO();
  
  it('validating if there are broken images', () => {
    Heroku.visit_Url("http://the-internet.herokuapp.com/broken_images")
    Heroku.getImages().each((img) => {
      Heroku.checkBrokenImages(img);
    });
  });

   
  it('validating upload a file', () => {
    const filePath = 'cypress//fixtures//SDET ASSIGNMENT _ Hack2skill.pdf';
    Heroku.visit_Url("http://the-internet.herokuapp.com/upload")
    Heroku.uploadFile(filePath);
    cy.contains("File Uploaded!").should('have.text',"File Uploaded!")
    cy.get("#uploaded-files").should('have.text',"\n    SDET ASSIGNMENT _ Hack2skill.pdf\n  ")
  });
 
  it('validating upload a file', () => {
    const filePath = 'cypress//fixtures//SDET ASSIGNMENT _ Hack2skill.pdf';
    Heroku.visit_Url("http://the-internet.herokuapp.com/upload")
    Heroku.dragAndDropFileUpload(filePath);
    cy.contains("Internal Server Error").should('have.text',"Internal Server Error")
  
  });


});
  



