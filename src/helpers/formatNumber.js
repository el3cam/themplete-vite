function formatNumber(num, fixed = 2) {
  return num
    ? parseFloat(num)
        .toFixed(fixed)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : parseFloat(0).toFixed(fixed);
}
export default formatNumber;
