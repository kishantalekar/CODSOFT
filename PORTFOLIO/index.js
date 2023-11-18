
    document.querySelector('.cross').style.display = 'none';
    
document.querySelector('.hamBurger').addEventListener("click",()=>{
    document.querySelector('.side-bar').classList.toggle('side-barGo');
    if(document.querySelector('.side-bar').classList.contains('side-barGo'))
    {
        document.querySelector('.ham').style.display = "inline";
        document.querySelector('.cross').style.display = "none";
    }
    else{
        document.querySelector('.ham').style.display = "none";
        setTimeout(() => {
            document.querySelector('.cross').style.display = "inline";
            
        }, 300);
    }
})