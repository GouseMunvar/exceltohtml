// Update span1 and span2 when button is clicked
document.getElementById("b").addEventListener('click', () => {
    let inpt1 = document.getElementById("minv").value;
    let inpt2 = document.getElementById("maxv").value;
    document.getElementById("span1").innerText = inpt1;
    document.getElementById("span2").innerText = inpt2;
    document.getElementById("slider").min=inpt1;
    document.getElementById("slider").max=inpt2;

});

// Update span1 and .display when slider value changes
document.getElementById("slider").addEventListener('input', () => {
    document.getElementById("span1").innerText = document.getElementById("slider").max;
    document.getElementsByClassName("display")[0].innerText = document.getElementById("slider").value;
})
