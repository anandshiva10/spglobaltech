function sendMail(){
    var params={
        from_name:document.getElementById("name").value,
        email_id:document.getElementById("email").value,
        mobile_no:document.getElementById("number").value,
        message:document.getElementById("message").value
    }
    console.log("shiva")
    emailjs.send("service_etkjmdl","template_lqeijwb",params).then(function (res){
        var frm = document.getElementById('contact-form');
        frm.reset();
        alert("Success!"+res.status);

    })
}