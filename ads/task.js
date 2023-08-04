const rotators = Array.from(document.querySelectorAll(".rotator__case"));

function fun(){
    let active = rotators.findIndex((rotatorCase) =>
    rotatorCase.classList.contains("rotator__case_active"));
    rotators[active].classList.remove("rotator__case_active");

    active += 1

    if (active === rotators.length){
        active = 0;
        rotators[active].classList.add("rotator__case_active");
    } else {
        rotators[active].classList.add("rotator__case_active");
    }
}
 setInterval(fun, 1000)

