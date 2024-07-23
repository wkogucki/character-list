export function getStatusColorClass(status: string) {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'text-green-800';
    case 'dead':
      return 'text-red-800';
    case 'unknown':
    default:
      return 'text-yellow-800';
  }
}
