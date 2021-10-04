export default interface Toast {
  msg: string;
  type: 'error' | 'info' | 'warning' | 'success' | string;
}
