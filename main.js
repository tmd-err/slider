const container = document.querySelector('.container') ;
const  prev = document.getElementById('prev') ; 
const next = document.getElementById('next') ;
container.addEventListener('wheel',(e)=>{
    e.preventDefault() ;
    container.scrollLeft += e.deltaY ;
})
var counter = 0 ;
setInterval(() => {
    if(container.style.scrollLeft>=600)
    {
        console.log('verified')
    }
}, 1000);
next.addEventListener('click',()=>{
    container.style.scrollBehavior = 'smooth';
    if(counter<3){
        counter +=1;
        container.scrollLeft+=215 ;

    }else if(counter==3){
        container.scrollLeft-=640 ;
        counter = 0 ;

    }
})
prev.addEventListener('click',()=>{
    if(counter>0){
        counter-=1
        container.style.scrollBehavior = 'smooth';
        container.scrollLeft-=215

    }
    else if(counter==0){
        container.style.scrollBehavior = 'smooth';
        container.scrollLeft+=640 ;
        counter = 3 ;

    }
    
})