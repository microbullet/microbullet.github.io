occupied = false;

function show_jobs() {
    console.log(document.getElementById("jobs").style.visibility);

    if (document.getElementById("jobs").style.visibility == "hidden") {
        if (occupied == true) {
            document.getElementById("acolades").style.visibility = "hidden";
        }
        document.getElementById("jobs").style.visibility = "visible";
        occupied = true;
    }
    else {
        document.getElementById("jobs").style.visibility = "hidden";
        occupied = false;
    }
}

function show_acolades() {
    console.log(document.getElementById("acolades").style.visibility);

    if (document.getElementById("acolades").style.visibility == "hidden") {
        if (occupied == true) {
            document.getElementById("jobs").style.visibility = "hidden";
        }
        document.getElementById("acolades").style.visibility = "visible";
        occupied = true;
    }
    else {
        document.getElementById("acolades").style.visibility = "hidden";
        occupied = false;
    }
}

function change_badge(badge) {
    document.getElementById("badge_button").style.top = "-540px";

    if (badge == 3 || badge == 6) {
        document.getElementById("badge_button").style.top = "-516px";
        console.log("yes");
    }
    document.getElementById("badge").src = `images/badge_blank_${badge}.png`;
}

var jobs = [
    {item: 1, has: false},
    {item: 2, has: false},
    {item: 3, has: false},
    {item: 4, has: false},
    {item: 5, has: false},
    {item: 6, has: false}
]

function change_job(job_value) {
    has = jobs[job_value-1].has;

    if (has == true) {
        jobs[job_value-1].has = false;
        document.getElementById(`job_${job_value}`).src = `images/job_${job_value}.png`;
    }
    else {
        jobs[job_value-1].has = true;
        document.getElementById(`job_${job_value}`).src = `images/job_taken_${job_value}.png`;
    }

    document.getElementById(`job_slot_1`).src = "images/job_small_blank.png";
    document.getElementById(`job_slot_2`).src = "images/job_small_blank.png";
    document.getElementById(`job_slot_3`).src = "images/job_small_blank.png";
    document.getElementById(`job_slot_4`).src = "images/job_small_blank.png";
    document.getElementById(`job_slot_5`).src = "images/job_small_blank.png";
    document.getElementById(`job_slot_6`).src = "images/job_small_blank.png";

    times = 0

    for (i in jobs) {
        if (jobs[i].has == true) {
            times += 1
            document.getElementById(`job_slot_${times}`).src = `images/job_small_${jobs[i].item}.png`;
        } 
    }
}

function click_pfp() {
    document.getElementById("pfpclick").click();
}

function enable_bulletp(id) {
    has = document.getElementById(`bullet_${id}`).src
    target = has.substring(77)

    if (target == "images/bullet.png") {
        console.log(id)
        document.getElementById(`bullet_${id}`).src = "images/bullet_empty.png";
    }
    else {
        document.getElementById(`bullet_${id}`).src = "images/bullet.png";
    }
}

// theft from a stack overflow user :)

function previewFile() {
    var preview = document.querySelector('#pfp');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    
    console.log(preview)

    reader.onloadend = function () {
        preview.src = reader.result;
    }
  
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
  }