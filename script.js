function openLink(searchUrl, mainUrl) {
      const keyword = document.getElementById('keyword').value.trim();
      let finalUrl;
      if (keyword) {
        finalUrl = searchUrl + encodeURIComponent(keyword);
      } else {
        finalUrl = mainUrl;
      }
      window.open(finalUrl, '_blank');
    }

let lightClicks = 0;
const warning1 = 1;
const warning2 = 2;
const warning3 = 3;
const warning4 = 4;
const REQUIRED_CLICKS = 5;
const why = 6

function lightModeClicked() {
  lightClicks++;

  if (lightClicks == warning1) {
    alert('NUH UH');
  }
  if (lightClicks == warning2) {
    alert('still nope');
  }
  if (lightClicks == warning3) {
    alert('seriously, STOP');
  }
  if (lightClicks == warning4) {
    alert('LAST WARNING! STOP!!!');
  }

  if (lightClicks == REQUIRED_CLICKS) {
    alert('you like light mode so much? then here you go');
    activateExtremeBrightness();
  }
 if (lightClicks >= why) {
    alert('...');
  }
}

function activateExtremeBrightness() {
  // create overlay if it doesn't exist
  let overlay = document.getElementById('brightOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'brightOverlay';
    document.body.appendChild(overlay);
  }

  overlay.style.opacity = '0.995';

  document.documentElement.style.filter = 'brightness(1000000000000)';
}