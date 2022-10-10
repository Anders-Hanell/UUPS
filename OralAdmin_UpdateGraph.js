function OralAdmin_UpdateGraph() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}