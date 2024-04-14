export default function throttle(fn: Function, delay: number) {
  let isThrottled = false;

  return (...args: any[]) => {
    if (isThrottled) return;

    fn(...args);

    isThrottled = true;
    
    setTimeout(function() {
      isThrottled = false
    }, delay);
  }
};
