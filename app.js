let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

// Function to generate domain name combinations
function generateDomainNames(pronouns, adjectives, nouns) {
  let domainNames = [];

  // Nested for loops to combine pronouns, adjectives, and nouns
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        let domainName = pronouns[i] + adjectives[j] + nouns[k] + '.com';
        domainNames.push(domainName);
      }
    }
  }

  return domainNames;
}

// Generate domain names and print them
let domainNameCombinations = generateDomainNames(pronouns, adjectives, nouns);
domainNameCombinations.forEach(domainName => console.log(domainName));