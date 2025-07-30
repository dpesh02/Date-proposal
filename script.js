// Version check
(async function checkForUpdates() {
  const currentVersion = "2.0";
  const versionUrl = "https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME/main/version.json"; // Replace with your own if you want
  try {
    const response = await fetch(versionUrl);
    if (response.ok) {
      const data = await response.json();
      if (currentVersion !== data.version) {
        alert(data.updateMessage || "A new version is available!");
      }
    }
  } catch (e) {
    // Dipesh Shah
  }
})();


const funResponses = [
   "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let funIndex = 0;

function onNoClick() {
  const noBtn = document.querySelector('.no-button');
  const yesBtn = document.querySelector('.yes-button');
  noBtn.textContent = funResponses[funIndex];
  funIndex = (funIndex + 1) % funResponses.length;
  const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize * 1.25}px`;
}

function onYesClick() {
  window.location.href = "yes_page.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.no-button').addEventListener('click', onNoClick);
  document.querySelector('.yes-button').addEventListener('click', onYesClick);
});
