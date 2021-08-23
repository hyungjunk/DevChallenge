import { requestAnimFrame } from "chart.js/helpers";

const requestTimeout = function (fn: Function, delay: number) {
  if (
    !window.requestAnimationFrame &&
    !window.webkitRequestAnimationFrame &&
    !(
      window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame
    ) &&
    !window.oRequestAnimationFrame &&
    !window.msRequestAnimationFrame
  ) {
    return window.setTimeout(fn, delay);
  }

  const start = new Date().getTime();
  const handle: any = { value: 0 };

  function loop(): number | void {
    const current = new Date().getTime();
    const delta = current - start;
    if (delta >= delay) {
      fn.call(null);
    } else {
      handle.value = requestAnimFrame(loop);
    }
  }
  handle.value = requestAnimFrame(loop);
  return handle;
};
