let websiteList = [];
let startTime = "08:00";
let endTime = "17:00";

document.getElementById("add-website").addEventListener("click", addWebsite);
document.getElementById("start-time").addEventListener("change", updateStartTime);
document.getElementById("end-time").addEventListener("change", updateEndTime);
document.getElementById("block-websites").addEventListener("click", blockWebsites);

function addWebsite() {
    let website = document.getElementById("website").value;
    if (website !== "") {
        websiteList.push(website);
        updateWebsiteList();
        document.getElementById("website").value = "";
    }
}

function updateStartTime() {
    startTime = document.getElementById("start-time").value;
}

function updateEndTime() {
    endTime = document.getElementById("end-time").value;
}

function updateWebsiteList() {
    let websiteListHTML = "";
    websiteList.forEach((website, index) => {
        websiteListHTML += `<li>${website} <span class="remove" onclick="removeWebsite(${index})">Remove</span></li>`;
    });
    document.getElementById("website-list").innerHTML = websiteListHTML;
}

function removeWebsite(index) {
    websiteList.splice(index, 1);
    updateWebsiteList();
}

function blockWebsites() {
    // Add code to block websites here
}