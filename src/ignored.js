console.log(
  "I should not be bundled into main.js with other files, because I am not imported anywhere related to index.js which webpack targets by default"
);
