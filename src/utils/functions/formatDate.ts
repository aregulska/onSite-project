export function formatDate(timestamp: number) {
  return timestamp ? new Date(timestamp).toLocaleDateString() : null;
}

export function formatTime(timestamp: number) {
  return timestamp ? new Date(timestamp).toLocaleTimeString() : null;
}
