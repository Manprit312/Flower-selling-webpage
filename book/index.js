let carts=document.querySelectorAll('.carts');
for( let i=0;i<carts.length;i++)
{carts[i].addEventListener('click' ,()=>{
    console.log("added to")})}
function openMenu(e) {
    var nav = document.getElementById('menu');
    if (nav.style.display === 'none') { nav.style.display = "block" } else {
        nav.style.display = 'none'
    }

}
// // onclick or href function or attribute