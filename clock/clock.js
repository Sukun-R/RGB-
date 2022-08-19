window.onload = function now() {
    let now_d = new Date();

    let now_year = now_d.getFullYear();
    let now_month = ("00" + (now_d.getMonth() + 1)).slice(-2);
    let now_day_k = ("00" + now_d.getDate()).slice(-2);
    let now_hours = ("00" + now_d.getHours()).slice(-2);
    let now_minutes = ("00" + now_d.getMinutes()).slice(-2);
    let now_seconds = ("00" + now_d.getSeconds()).slice(-2);
    let now_youbi_k = now_d.getDay() - 1;
    const now_youbi_list = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let now_youbi = now_youbi_list[now_youbi_k]
    let now_day = now_year + " : " + now_month + "," + now_day_k + "," + now_hours + ":" + now_minutes + ":" + now_seconds;
    document.getElementById('clock').innerHTML = now_day;
    document.getElementById('day').innerHTML = now_youbi;
}


function jikan() {
    let d = new Date();

    let year = d.getFullYear();
    let month = ("00" + (d.getMonth() + 1)).slice(-2);
    let day_k = ("00" + d.getDate()).slice(-2);
    let hours = ("00" + d.getHours()).slice(-2);
    let minutes = ("00" + d.getMinutes()).slice(-2);
    let seconds = ("00" + d.getSeconds()).slice(-2);
    let youbi_k = d.getDay() - 1;
    const youbi_list = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let youbi = youbi_list[youbi_k]
    let day = year + " : " + month + "," + day_k + "," + hours + ":" + minutes + ":" + seconds;
    document.getElementById('clock').innerHTML = day;
    document.getElementById('day').innerHTML = youbi;
}
setInterval(jikan, 1000);

function copy() {

    let clock = document.getElementsByClassName('clock')[0];
    let coppybutton = document.getElementById('copybutton');
    clock.className = "copy_clock_data";
    clock.selected = true;
    coppybutton.id = "align_center_button";
    if (navigator.clipboard) {
        navigator.clipboard.writeText(clock.textContent);
    }
    coppybutton.innerHTML = "copy ✓";
    let crock = document.getElementsByClassName('copy_clock_data')[0];
    crock.className = "clock";
    setTimeout(function() {
        coppybutton.innerHTML = "copy";
        document.getElementById('align_center_button').id = "copybutton";
    }, 1500);

}