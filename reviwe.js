const review=[
    {
        id:1,
        name:"sarah jones",
        job:" ui/ux designer",
        img: "/img/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
    },
{
    id:1,
    name:"stephanie john",
    job:" contactor",
    img: "/img/stephanie-liverani-Zz5LQe-VSMY-unsplash.jpg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
},
{
    id:2,
    name:"peter servoic" ,
    job:" Software Engineer ",
    img:"/img/petr-sevcovic-e12wQLAjQi0-unsplash.jpg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
},
{
    id:3,
    name:"loreta nackos" ,
    job:" web designer",
    img:"/img/jake-nackos-IF9TK5Uy-KI-unsplash.jpg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
},
{
    id:3,
    name:"stephanie john" ,
    job:" contactor",
    img:"/img/brooke-cagle-NoRsyXmHGpI-unsplash.jpg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
},
{
    id:4,
    name:"lagundoye juwon",
    job:"font-end developer",
    img:"/img/cropeed.jpeg",
    text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ducimus minus velit veniam voluptas enim ab laborum nam reprehenderit hic! Architecto cupiditate voluptatem optio corrupti magni aliquid ut, dolorem impedit",
}
];
//select items 
const img=document.getElementById("person-img");
const author =document.getElementById("author");
const job =document.getElementById("job");
const info =document.getElementById("info");

const prevBtn=document.querySelector(".left");
const nextBtn=document.querySelector(".right");
const randomBtn=document.querySelector(".random");

//set starting items
let currentitem=0;

//load initial item 

window.addEventListener("DOMContentLoaded",function (){
   
    showperson();
});
// show person based on item 

function showperson(){
    const item =review[currentitem];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

//show next person

nextBtn.addEventListener("click", function(){
    currentitem++;
    if(currentitem>review.length -1){
        currentitem=0;
    }
    showperson(currentitem)
});

prevBtn.addEventListener("click", function(){
    currentitem--;
    if(currentitem<0){
        currentitem=review.length-1;
    }
    showperson(currentitem)
})

//show random person 
randomBtn.addEventListener("click" ,function(){
     currentitem=Math.floor(Math.random()*review.length)
     showperson()
})