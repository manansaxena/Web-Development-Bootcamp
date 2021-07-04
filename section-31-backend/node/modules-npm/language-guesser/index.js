const franc = require("franc");
const langs = require("langs");

// console.log('franc: ',franc,'langs: ',langs)

const args = process.argv.slice(2);
// console.log(args);
let langCode = franc(args[0], { minLength: 3 });
if (langCode === "und") {
  console.log("error");
}
// console.log(langCode)
else {
  let langName = langs.where("3", langCode);
  if (langName === undefined) {
    console.log("error, not a language");
  } else {
    console.log(langName.name);
  }
}
