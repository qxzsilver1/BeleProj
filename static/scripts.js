$( document ).ready(function() {
  $('#inputGroupFile').on('change',function(){
      //get the file name
      var fileName = $(this).val();
      var fileNameParts =  fileName.split('\\');
      //replace the "Choose a file" label
      $(this).next('.custom-file-label').html(fileNameParts.pop());
      previewSourceImg(this);
  });

  function previewSourceImg(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
        reader.onload = function (e) {
          $('#source-img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }
});
