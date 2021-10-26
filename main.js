// const root = "/";
const root = "/mathworks/";

let current_slide = 0

const config = {
    position: "Software engineer C/C++",
    author: "GM Oliveira, PhD",
    date: "Oct 27th, 2021",
    slides: [
        { header: "", address: "index.html" },
        { header: "Education", address: "education.html" },
        { header: "Work Experience", address: "experience.html" },
        { header: "Project: GP-Tool", address: "project.html" },
        { header: "MathWorks", address: "mathworks.html" },
    ]
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

function generateHeader() {

    let header = document.querySelector('header');
    for (let k = 1; k < config.slides.length; k++) {

        const txt = document.createElement('a');
        txt.className = current_slide == k ? 'active' : 'other';
        txt.innerText = config.slides[k].header;
        txt.href = config.slides[k].address;

        header.append(txt);
    };
}

function generateFooter() {
    const footer = document.querySelector('footer');

    let elem = document.createElement('h3');
    let txt = document.createTextNode(config.position);
    elem.appendChild(txt)
    footer.append(elem);

    elem = document.createElement('h3');
    txt = document.createTextNode(config.author);
    elem.appendChild(txt)
    footer.append(elem);


    elem = document.createElement('h3');
    txt = document.createTextNode(config.date);
    elem.appendChild(txt)
    footer.append(elem);
}


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

window.addEventListener("keyup", (event) => {

    if (event.key == "ArrowRight" && current_slide + 1 < config.slides.length)
        window.location = config.slides[current_slide + 1].address;

    if (event.key == "ArrowLeft" && current_slide > 0)
        window.location = config.slides[current_slide - 1].address;

});

window.addEventListener("wheel", (event) => {
    if (event.wheelDeltaX < 0.0 && current_slide + 1 < config.slides.length)
        window.location = config.slides[current_slide + 1].address;

    if (event.wheelDeltaX > 0.0 && current_slide > 0)
        window.location = config.slides[current_slide - 1].address;

});

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

// THIS MAIN FUNCTION RUNS AUTOMATICALLY
(function main() {

    for (let k = 0; k < config.slides.length; k++) {
        // Appending the root path to slide pathname
        config.slides[k].address = root + config.slides[k].address;

        // Saving index to current path
        if (config.slides[k].address == window.location.pathname)
            current_slide = k;
    }

    if (current_slide > 0) {
        generateHeader();
        generateFooter();
    }

})()