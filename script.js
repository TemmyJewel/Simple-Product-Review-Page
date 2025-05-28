
    const select = document.getElementById("color");
    const productImage = document.getElementById("productImage");
    const priceDisplay = document.getElementById("price");
    const name = document.getElementById("name");
    const confirmation = document.getElementById("confirmation");
   
    function selectcolor(){
      const [imagefile, price] = select.value.split("|");   
       
      productImage.src = imagefile;
      priceDisplay.textContent = price;
    }

    function validateform(){
        if(name.value.trim() === ""){
            alert("Please Enter Your Name");
            return false;
        }else{
            confirmation.textContent = `Thank you ${name.value}, your order has been confirmed`;
            confirmation.style.color = "green";
            return false;
        }
    }