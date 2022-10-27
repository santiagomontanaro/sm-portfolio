function scaleCv() {
  document.body.classList.add('scale-cv');
}

function removeScale() {
  document.body.classList.remove('scale-cv');
}

let areacv = document.getElementById('area-cv');
let resumeButton = document.getElementById('download-cv');

let opt = {
  margin: 0,
  filename: 'resumen-cv.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: 'a4', orientation: 'portrait' },
}

function generateResume() {
  html2pdf(areacv, opt);
}

resumeButton.addEventListener('click', () => {
  scaleCv();
  setTimeout(removeScale, 1500);
  generateResume();
});