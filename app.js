var questionBar = document.querySelectorAll(".questionBar");

function open(){
    questionBar.forEach((bar)=>{
        var openIInBar = bar.querySelector('.open');
        var plusIconInBar = bar.querySelector('.plusIcon');
        var minusIconInBar = bar.querySelector('.minusIcon');

        bar.addEventListener("click", ()=>{
            if(openIInBar.style.display === "block"){
               openIInBar.style.display = "none";
               plusIconInBar.style.display = 'block'
               minusIconInBar.style.display = 'none'
            }
            else {
                openIInBar.style.display = "block";
                plusIconInBar.style.display = 'none'
                minusIconInBar.style.display = 'block'
            }
        })
    })
}

open();



// openI.style.display == "block";
//     plusIcon.style.display == "none";
//     console.log("opnen");