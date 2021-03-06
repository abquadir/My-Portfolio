$(function(){
    $('#sidebarCollapse').on('click',()=>{
        $('#sidebar,#content').toggleClass('active');
    })
})
$(function(){
    $('.menu-bar').on('click',()=>{
        $('#sidebar,#content').toggleClass('active');
    })
})

var header = document.getElementById("list");
var btns = header.getElementsByClassName("footer_list");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

const topBtn = document.querySelector('#topbtn')

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 100){
        topBtn.classList.add('active')
    }
    else{
        topBtn.classList.remove('active')
    }
    
})

$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 1000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
  });

  let username = document.getElementById('username')
  let usermail = document.getElementById('usermail')
  let usermessage = document.getElementById('usermessage')
  let submitBtn = document.getElementById("submitbtn")

  submitBtn.addEventListener('click',(params)=>{
    params.preventDefault()
    if(!usermail.value || !username.value || !usermessage.value){
      swal("Not Good", "Please Fill all the fields!", "error");
    }else{
      let tempParams = {
        to_name : username.value,
        from_name : usermail.value,
        message : usermessage.value
      }
      emailjs.send('service_v37x3tn','template_piymxse',tempParams)
      .then((res)=>{
        swal({
          title: "Form Submitted!",
          text: "You clicked the button!",
          icon: "success",
        });
        usermail.value=""
        username.value=""
        usermessage.value=""
      })
    }
   
    
  })
