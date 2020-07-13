if (process.argv[2] == '-d') {
  console.log(`Order placed at ${process.argv[3]}...`);
  setTimeout(console.log, 1000, 'Picking up order...');
  setTimeout(console.log, 2000, 'Im outside with your order :D');
}

if (process.argv[2] == '-q') {
  console.log('beep boop beep boop');
  setTimeout(console.log, 1000, 'fancy smancy quantum math');
  setTimeout(console.log, 2000, 'schrödinger\'s cat is alive');
}

if (process.argv[2] == '-j') {
  console.log('why\s dark spelled with K instead of C?');
  setTimeout(console.log, 2000, 'comic timing........');
  setTimeout(console.log, 5000, 'because you can\'t C in the dark :D');
}
