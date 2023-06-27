/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let domainNames = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domainName = pronoun[i] + adj[j] + noun[k] + ".com";
        domainNames.push(domainName);
      }
    }
  }

  let domainList = document.getElementById("domainList");

  for (let i = 0; i < domainNames.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = domainNames[i];
    domainList.appendChild(listItem);
  }
};
