// Function to find the magical link that leads to the land of releases
function findMagicReleasesLink() {
  const releasesLink = document.querySelector('a[href*="/releases"]');
  if (releasesLink) {
    return releasesLink.href;
  }
  return null;
}

// Function to summon and place the button of joy
async function sprinkleDownloadButton() {
  const releasesPageUrl = findMagicReleasesLink();
  if (!releasesPageUrl) {
    console.error('Oh no! The magical link is missing!');
  }

  const buttonOfHappiness = document.createElement('a');
  buttonOfHappiness.href = releasesPageUrl;
  buttonOfHappiness.innerText = 'DOWNLOAD BUTTON FOR IDIOT BABIES'; // A delightful text adorned with cute emojis
  buttonOfHappiness.className = 'github-download-button';

  // Styling the button with love and care
  buttonOfHappiness.style.position = 'relative';
  buttonOfHappiness.style.backgroundColor = '#ff0000'; // Sweet pink color
  buttonOfHappiness.style.fontSize = '24px'; // Reduced font size
  buttonOfHappiness.style.color = '#FFFFFF'; // White color
  buttonOfHappiness.style.padding = '10px 20px';
  buttonOfHappiness.style.borderRadius = '40px';
  buttonOfHappiness.style.zIndex = '9999';
  buttonOfHappiness.style.fontFamily = 'Comic Sans MS'; // Comic Sans font
  buttonOfHappiness.style.boxShadow = '5px 5px 5px #FFB6C1'; // Soft shadow
  buttonOfHappiness.style.textDecoration = 'none'; // Remove underline

  // Discovering the enchanted about section
  const aboutSection = document.querySelector('#repo-content-pjax-container .BorderGrid-cell');

  // Finding the first child section within the about section
  const firstChildSection = aboutSection.querySelector('div');

  // Placing the button before the first child section
  if (aboutSection && firstChildSection) {
    aboutSection.insertBefore(buttonOfHappiness, firstChildSection);
  } else {
    console.error('The about section or the first child section is hiding!');
    return;
  }

  // Casting a spell to hide repository files and languages section
  const repoFilesSection = document.querySelector('.js-repo-nav');
  const foldersAndFilesSection = document.querySelector('[aria-labelledby="folders-and-files"]');
  const topButtons = document.querySelector("#repository-details-container");
  const branchShit = document.querySelector('.Box-sc-g0xbh4-0.eLcVee');

  if (repoFilesSection) {
    repoFilesSection.style.display = 'none';
  }

  if (foldersAndFilesSection) {
    foldersAndFilesSection.style.display = 'none';
  }
  
  if (topButtons) {
    topButtons.style.display = 'none';
  }

  if (branchShit) {
    branchShit.style.display = 'none';
  }
}

// Invoking the spell to add cuteness to the page
sprinkleDownloadButton();
