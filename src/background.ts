console.log('background script loaded');

await new Promise(resolve => setTimeout(() => {console.log('promise awaited'); resolve(true); }, 1000));