// remove experimental warnings
process.removeAllListeners('warning');

console.log(`Hello, ${process.argv[2]}!`);

export {};
