const firstNames = [
  'Aarav', 'Bhavna', 'Chirag', 'Deepika', 'Eshan', 'Fiona', 'Gaurav', 'Hina',
  'Ishaan', 'Jaya', 'Karan', 'Lila', 'Mohan', 'Neha', 'Omkar', 'Priya'
];

const lastNames = [
  'Sharma', 'Patel', 'Gupta', 'Singh', 'Kumar', 'Verma', 'Mehta', 'Joshi',
  'Reddy', 'Nair', 'Desai', 'Rao', 'Chopra', 'Malhotra', 'Shah', 'Yadav'
];

function generateRandomName(count = 1) {
  const names = [];
  for (let i = 0; i < count; i++) {
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
    names.push(`${randomFirst} ${randomLast}`);
  }
  return count === 1 ? names[0] : names;
}

export { generateRandomName };

const motivators = [
  'Keep pushing', 'Stay strong', 'Believe in yourself', 'Never give up', 
  'Embrace the challenge', 'Rise above', 'Seize the day', 'Stay focused',
  'Dream big', 'Take action'
];

const actions = [
  'you’ve got this!', 'success is near!', 'you’re unstoppable!', 
  'the sky’s the limit!', 'you’re stronger than you know!', 
  'great things await!', 'you’re making progress!', 
  'your potential is endless!', 'victory is yours!', 
  'you’re a game-changer!'
];

function generateMotivationalMessage(count = 1) {
  const messages = [];
  for (let i = 0; i < count; i++) {
    const randomMotivator = motivators[Math.floor(Math.random() * motivators.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    messages.push(`${randomMotivator}, ${randomAction}`);
  }
  return count === 1 ? messages[0] : messages;
}

export { generateMotivationalMessage };