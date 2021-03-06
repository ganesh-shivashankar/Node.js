var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
  name: '',
  sayings: []
}

rl.question("what is the name of a real person ?", function(answer) {

  realPerson.name = answer;
  rl.setPrompt(`what would ${realPerson.name} say ?`)
  rl.prompt();

  rl.on('line', function(saying) {

    realPerson.sayings.push(saying.trim());
    if(saying.toLowerCase().trim() == 'exit') {
      rl.close();
    }
    else {
      rl.setPrompt(`what else would ${realPerson.name} say ? ('exit' to leave)`);
      rl.prompt();
    }
    //console.log(saying.trim());
  });
});

rl.on('close', function() {
  console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
  process.exit();
});
