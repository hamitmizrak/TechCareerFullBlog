// $("").

//modal active
$(function () {
  $('#btn_giris').click(function () {
    $('#myUye').modal('show')
  })

  $('#deneme44').css('color', 'red').css('background', 'black')
})

//form validation
$(function () {
  //Submit  Tıklandığında
  $('#btnSubmit').click(function () {
    //input içeriği aldım
    let email, password
    email = $('#user_email').val()
    password = $('#user_password').val()

    //validation Email
    if (email == '') {
      $('#validation_email').html('email boş geçilemez....')
    } else if (validateEmail(email) == false) {
      $('#validation_email').html('email uygun formatta girmediniz....')
    }
    //validation Password
    if (password == '') {
      $('#validation_password').html('Şifre boş geçilemez....')
    }

    function validateEmail(email){
        let regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

  })
})
