var select = document.getElementById("mySelect");

select.addEventListener("change", function (e) {
    let p = document.querySelector('#selectedValue');
    p.innerHTML = e.target.value; 
    console.dir(e.target);
})