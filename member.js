function skillsMember() {
  const member = document.querySelector('.member');
  const memberBtn = document.querySelector('.member__btn');

  if (member) {
    memberBtn.addEventListener('click', () => {
      member.classList.toggle('member--active');
    });
  }
}
