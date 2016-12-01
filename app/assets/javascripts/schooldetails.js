// var iChars = "!@#$%^&*()+=-_[]\\\';,./{}|\":<>?~`";
// const numbers = "0123456789";
 
// $(document).ready(function(){
// 	var label = document.getElementsByClassName('error-first');
//  console.log( label)
//  var input = document.getElementsByClassName('school-create-validation');
//  console.log(input)
//     for(var i=0; i<input.length; i++) {
// 	   $(input[i]).bind("change focusout", function() {
//         validation($(this),$(this).next())
//     })
// 	   // $(input[i]).focusout(function() {
//     //         validation($(this), $(this).next())
//     //     })
//         // input[i].addEventListener('onFocus', validation(input[i], label[i]))
//     }
// function validation(inputValue,labelValues){
// 	console.log(inputValue);
// 	var input = inputValue.val();
// 	console.log(input)
// 	var labelValue = labelValues[0];
// 	console.log(labelValue)
// 	 console.log($(inputValue).attr('id'))
	 

// 	 if(input.trim() === ''){
// 	 	 console.log("e1")
// 	 	$(labelValue).attr('data-error',"conn't be emity");
// 	 	return $(inputValue).addClass("invalid").removeClass("valid")

// 	 }else{

// 	 }
// 	 if($(inputValue).attr('id') === "pincode"){
//        if(input.length === 6){
//      	return $(inputValue).addClass("valid").removeClass("invalid")

//      }else{
//      	return $(inputValue).addClass("invalid").removeClass("valid")

//      }
// }
// else{
// 	for(var i= 0;i<input.length;i++){
// 		if(input[i] === ' ' && input[i + 1] === ' '){
// 			$(inputValue).addClass("invalid");
// 			return $(labelValue).attr('data-error','Double space not allowed')
       
// 		}
		
// 		if(iChars.indexOf(input[i]) != -1){
// 			// alert("e4");
// 		$(inputValue).addClass("invalid").removeClass("valid");
// 		return $(labelValue).attr('data-error','special cheractor not allowed')
		
		
// 	}
// 	 if(numbers.indexOf(input[i]) != -1){
// 	 	  // alert("e2")
// 	 	$(inputValue).addClass("invalid");
// 	 	return $(labelValue).attr('data-error','number not allowed')
       
       
//     }
// }

// }

// return $(inputValue).addClass("valid").removeClass("invalid")
// }
// });
	 // if(numbers.indexOf(inputValue) != -1){
	 // 	alert("e2")
	 // 	$(inputValue).addClass("invalid");
	 // 	$(labelValue).attr('data-error','number not allowed')
  //       return ''
  //   }
//         for(var i = 0; i<inputValue.length; i++) {
//          if(inputValue[i] === '_' && inputValue[i - 1] === inputValue[i]) {
// 	 	$(labelValue).attr('data-error','undersroce not allowed')
// 	 	alert("e3")

// 	  }
// 	  if(iChars.indexOf(inputValue[i]) != -1){
// 	  	$(labelValue).attr('data-error','undersroce not allowed')
// 	 	alert("e4")
// 	 	return
// 	  }
// 	  if(numbers.indexOf(inputValue) != -1){
// 	 	alert("e2")
// 	 	$(inputValue).addClass("invalid");
// 	 	$(labelValue).attr('data-error','number not allowed')
//         return ''
//     }
// }
// if(inputValue.attr('id') == )
// alert("s")
// $(inputValue).addClass("valid").removeClass("invalied");

// }
// $(".pincode-validate").change(function(){
// 	alert("in")
// 	var pincode = $(this).val();
// 	console.log(pincode)
// 	if(pincode.length == 6){
// 		$(this).addClass("valid")
// 	}else{

// 	}
// })
// });
	
          


// var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?~`";
// var numbers = "0123456789";

// $(document).ready(function(){
//     var label = document.getElementsByClassName('error-first');
//     console.log(label)
//     var input = document.getElementsByClassName("school-craete-validation")
//     console.log(input);

//     for(var i=0; i<input.length; i++) {
//         $(input[i]).change(function() {
//         console.log(label[0])
//             validation($(this).val(), $(this).next())
//         })
//         // input[i].addEventListener('onFocus', validation(input[i], label[i]))
//     }

//     function validation(inputValue, labelValues) {
    
//     var labelValue = labelValues[0];
//     console.log(labelValue)
//         if( inputValue=== '_') {
//         alert("e1 ")
//        $(labelValue).attr('data-error', 'special character not allowed')
//         return ''
//       }
//       if(numbers.indexOf(inputValue[0]) != -1) {
//         alert("e2")
//         $(labelValue).attr('data-error', 'number not allowed')
//         return ''
//       }
//       for(var i = 0; i<inputValue.length; i++) {
//          if(inputValue[i] === '_' && inputValue[i - 1] === inputValue[i]) {
//              $(labelValue).attr('data-error', 'underscore not allowed')
//           alert("e3")
//          }
//          if(iChars.indexOf(inputValue[i]) != -1) {
//              $(labelValue).attr('data-error', 'underscore not allowed')
//           alert("e4")
//           return ''
//          }
//       }
//     }
//     // $(input[0]).change(function() {

    //     var value = $(this).val();
    //     if( value=== '_') {
//         alert("e1 ")
//        label.attr('data-error', 'special character not allowed')
//         return ''
//       }
//       if(numbers.indexOf(value[0]) != -1) {
//         alert("e2")
//         return ''
//       }
//       for(var i = 0; i<value.length; i++) {
//          if(value[i] === '_' && value[i - 1] === value[i]) {
//           alert("e3")
//          }
//          if(iChars.indexOf(value[i]) != -1) {
//           alert("e4")
//           return ''
//          }
//       }
    // })
// });