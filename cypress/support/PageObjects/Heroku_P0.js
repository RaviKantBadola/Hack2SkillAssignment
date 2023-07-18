///<reference types="cypress-xpath" />
///<reference types="Cypress" />

class Heroku_PO {
  visit_Url(link) {
    cy.visit(link);
  }

  getImages() {
    return cy.get("img");
  }

  checkBrokenImages(img) {
    const imageUrl = img.prop("src");
    cy.request({
      url: imageUrl,
      failOnStatusCode: false,
    }).then((response) => {
      if (response.body.length === 0) {
        cy.log(`Broken Image URL: ${imageUrl}`);
      }
    });
  }
 
  uploadFile(filePath) {
    const fileInput = cy.get('#file-upload');
    fileInput.selectFile(filePath);
    fileInput.parent().submit();
  }
  
  dragAndDropFileUpload(file){
    const fileInput = cy.get("#drag-drop-upload");
    fileInput.selectFile(file,{action: 'drag-drop'});
    cy.get("#file-submit").click()
    
  }


}

export default Heroku_PO;
