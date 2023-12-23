const questions = document.querySelectorAll(".question");
let open = false;


questions.forEach((item)=>{
    item.addEventListener('click',function(e){
        if(!open)
        {
            //then open
            e.target.style.color = "#8247ff"; // change color
            e.target.nextElementSibling.style.display = "block"; // make the answer visible
            open = true;
        }
        else{
            //if open then close
            e.target.style.color = "black"; // change color
            e.target.nextElementSibling.style.display = "none"; // make the answer visible
            open = false;

        }
    })
})