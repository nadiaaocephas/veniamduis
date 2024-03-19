const queue = [
  { id: 1, data: 'foo' },
  { id: 2, data: 'bar' },
  { id: 3, data: 'baz' },
];

const queuedMove = { id: 2, data: 'bar' };

if (!queue[0] || queue[0].id !== queuedMove.id) return;

// The queued move is at the front of the queue, so we can perform an action
console.log('The queued move is at the front of the queue');
