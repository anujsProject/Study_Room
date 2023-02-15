// import axios from 'axios';

// Solve the issue of importing, but wanna use fetch here

import * as baseView from './view/baseView.js';
import * as authenticate from './controller/authenticate.js';
import * as grpController from './controller/grpController.js';

// ## When Login Form is submitted
if (baseView.DOMElements.formLogin) {
  baseView.DOMElements.formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    if (baseView.validateInputs()) {
      authenticate.login(
        baseView.DOMElements.email.value,
        baseView.DOMElements.password.value
      );
    }
  });
}
/* ###### */

// ## When SignUp Form is submitted
if (baseView.DOMElements.formSignup) {
  baseView.DOMElements.formSignup.addEventListener('submit', (e) => {
    e.preventDefault();
    if (baseView.validateInputs()) {
      authenticate.signup(
        baseView.DOMElements.name.value,
        baseView.DOMElements.email.value,
        baseView.DOMElements.password.value
      );
    }
  });
}
/* ###### */

// ## When Grp Creation Form is submitted
if (baseView.DOMElements.formGrpCreation) {
  baseView.DOMElements.formGrpCreation.addEventListener('submit', (e) => {
    e.preventDefault();
    if (baseView.validateInputs()) {
      grpController.createGroup(
        baseView.DOMElements.grpName.value,
        baseView.DOMElements.grpSubject.value,
        baseView.DOMElements.dateEnd.value
      );
    }
  });
}
/* ###### */

if (baseView.DOMElements.filesToUpload) {
  baseView.DOMElements.uploadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // if (baseView.validateInputs()) {
    grpController.uploadFiles(baseView.DOMElements.filesToUpload);
    // }
  });
}

// ## When join button is clicked
if (baseView.DOMElements.btnGrpJoin) {
  baseView.DOMElements.btnGrpJoin.addEventListener('click', (e) => {
    e.preventDefault();
    grpController.joinGroup();
  });
}
/* ###### */

// Handling the Change file click
if (baseView.DOMElements.filesToUpload) {
  baseView.DOMElements.filesToUpload.addEventListener('change', function (e) {
    e.preventDefault();

    baseView.DOMElements.filesDesc.textContent =
      this.files.length + ` file chosen`;
  });
}

// Handling the Download button click
// if (baseView.DOMElements.btnDownloadMaterial) {
//   baseView.DOMElements.btnDownloadMaterial.addEventListener('click', (e) => {
//     e.preventDefault();

//     console.log('clicked');
//     grpController.downloadItem(
//       baseView.DOMElements.btnDownloadMaterial.dataset.item
//     );
//   });
// }