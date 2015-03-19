'use strict';

/**
 * @ngdoc function
 * @name codeEvalApp.controller:FizzbuzzCtrl
 * @description
 * # FizzbuzzCtrl
 * Controller of the codeEvalApp
 */
angular.module('codeEvalApp')
  .controller('FizzbuzzCtrl', function ($scope) {

    var file = document.getElementById("fileItem");

    file.addEventListener('change', handleFiles, false);

    function handleFiles (event){

      var fileList = event.target.files[0];

      if(fileList){
        var reader = new FileReader();
        reader.onload = function(){

          var numString = this.result,
            myArray   = [];
          myArray = numString.split(" ").map(Number).filter(Boolean);

          console.log("Your file contains " + myArray.length  + " numbers: " + myArray);

          for( var i = 1; i < myArray[2]; i+=1) {

            if(i % myArray[0] === 0 && i % myArray[1] === 0)
            {
              console.log("FB");

            }else if(i % myArray[0] === 0 )
            {
              console.log("F");

            }else if (i % myArray[1] === 0 )
            {
              console.log("B");

            }else
            {
              console.log(i);
            }
          }
        };
        var numString = reader.readAsText(fileList);

      } else {
        console.log("Unable to load the file");
      }
    }
  });
