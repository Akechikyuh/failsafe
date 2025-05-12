function updateProgressBar(percent) {
    const progressBar = document.querySelector('.progress');
    progressBar.style.width = percent + '%'; // Update width based on percent
}

updateProgressBar(10);
