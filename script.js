const videoModal = () => {
  const videoBtn = document.querySelector('.video-btn-container');
  const overlay = document.querySelector('.overlay');
  const modalClose = document.querySelector('.modal-close');
  const background = document.querySelector('.video-modal');
  const video = document.querySelector('.video');
  
  videoBtn.addEventListener('click', () => {
    overlay.classList.add('show');
  });

  modalClose.addEventListener('click', () => {
    overlay.classList.remove('show');
    document.getElementById('iframe').src += '';
  });

  background.addEventListener('click', () => {
    overlay.classList.remove('show');
    document.getElementById('iframe').src += '';
  });
}

videoModal();