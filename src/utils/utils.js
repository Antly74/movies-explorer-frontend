function getCardsCountRow() {
  return window.innerWidth >= 1470 ? Math.floor((window.innerWidth - 120) / 270) :
    window.innerWidth >= 1200 ? 4 :
    window.innerWidth >= 870 ? 3 :
    window.innerWidth >= 590 ? 2 : 1;
}

function convertMinutesToTime(duration) {
  const hours = Math.floor(duration / 60),
    minutes = duration % 60;

  return `${hours > 0 ? `${hours}ч ` : ''}${minutes}м`;
}

module.exports = { getCardsCountRow, convertMinutesToTime };
