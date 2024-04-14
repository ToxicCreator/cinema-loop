export default function debounce(callback: Function, delay: number) {
  let timer: NodeJS.Timeout | undefined;
  return function(...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay)
  }
}
