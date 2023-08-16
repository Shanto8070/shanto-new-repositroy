document.getElementById("btn-submit").addEventListener('click',function(){
  

    const emailfield =document.getElementById('user-email')
    const email= emailfield.value;
    
    
   const passwordfeild =document.getElementById('user-password')
   const password =passwordfeild.value;
   console.log(password,email)


   if(email === 'shanto@khan.com' && password ==='shanto'){
    window.location.href='index.html';
       }
       else{
        alert("toi vulpassword disis")
       }
})