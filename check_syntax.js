const fs = require('fs');
const html = fs.readFileSync('./app/index.html', 'utf8');

// Extract the Babel script content
const babelMatch = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if (babelMatch) {
  const code = babelMatch[1];
  console.log('Babel script found, length:', code.length);
  
  // Try to detect if there are obvious syntax issues
  const lines = code.split('\n');
  console.log('Total lines in Babel script:', lines.length);
  
  // Look for unmatched braces
  let openBraces = 0, openParens = 0, openBrackets = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const char of line) {
      if (char === '{') openBraces++;
      if (char === '}') openBraces--;
      if (char === '(') openParens++;
      if (char === ')') openParens--;
      if (char === '[') openBrackets++;
      if (char === ']') openBrackets--;
    }
  }
  
  console.log(`Open braces: ${openBraces}, Open parens: ${openParens}, Open brackets: ${openBrackets}`);
  
  if (openBraces !== 0 || openParens !== 0 || openBrackets !== 0) {
    console.log('⚠️  SYNTAX ERROR: Unmatched braces/parens/brackets');
  } else {
    console.log('✅ No obvious unmatched braces/parens/brackets');
  }
} else {
  console.log('No Babel script found!');
}

// Check if ReactDOM.createRoot is called
if (html.includes('ReactDOM.createRoot')) {
  console.log('✅ ReactDOM.createRoot found');
} else {
  console.log('⚠️  ReactDOM.createRoot NOT found');
}

// Check if service worker registration exists
if (html.includes('navigator.serviceWorker.register')) {
  console.log('✅ Service Worker registration found');
}

