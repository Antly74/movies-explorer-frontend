function getCardsCountRow() {
  const width = document.documentElement.clientWidth;
  const result = {
    row: width >= 1470 ? Math.floor((width - 120) / 270) :
      width >= 1200 ? 4 :
      width >= 870 ? 3 :
      width >= 590 ? 2 : 1
  };

  result.next = result.row === 1 ? 2 : 1;
  result.first = result.row === 1 ? 5 : 4;

  return result;
}

function convertMinutesToTime(duration) {
  const hours = Math.floor(duration / 60),
    minutes = duration % 60;

  return `${hours > 0 ? `${hours}ч ` : ''}${minutes}м`;
}

module.exports = { getCardsCountRow, convertMinutesToTime };
