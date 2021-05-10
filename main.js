function buildPatternTable(pattern) {
    const patternTable = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;
  
    while (suffixIndex < pattern.length) {
      if (pattern[prefixIndex] === pattern[suffixIndex]) {
        patternTable[suffixIndex] = prefixIndex + 1;
        suffixIndex += 1;
        prefixIndex += 1;
      } else if (prefixIndex === 0) {
        patternTable[suffixIndex] = 0;
        suffixIndex += 1;
      } else {
        prefixIndex = patternTable[prefixIndex - 1];
      }
    }
  
    return patternTable;
  }

function KMP(text, word) {
    if (word.length === 0) {
      return 0;
    }
  
    let textIndex = 0;
    let wordIndex = 0;
  
    const patternTable = buildPatternTable(word);
  
    while (textIndex < text.length) {
      if (text[textIndex] === word[wordIndex]) {
        if (wordIndex === word.length - 1) {
          return (textIndex - word.length) + 1;
        }
        wordIndex += 1;
        textIndex += 1;
      } else if (wordIndex > 0) {
        wordIndex = patternTable[wordIndex - 1];
      } else {
        wordIndex = 0;
        textIndex += 1;
      }
    }
  
    return -1;
}

var heroDB = ['abaddon','alchemist','ancient apparition','anti-mage','arc warden','axe','bane','batrider','beastmaster','bloodseeker','bounty hunter','brewmaster','bristleback','broodmother','centaur warrunner','chaos knight','chen','clinkz','clockwerk','crystal maiden','dark seer','dazzle','death prophet','disruptor','doom','dragon knight','drow ranger','earth spirit','earthshaker','elder titan','ember spirit','enchantress','enigma','faceless void','gyrocopter','huskar','invoker','io','jakiro','juggernaut','keeper of the light','kunkka','legion commander','leshrac','lich','lifestealer','lina','lion','lone druid','luna','lycan','magnus','medusa','meepo','mirana','monkey king','morphling','naga siren','natureprophet','necrophos','night stalker','nyx assassin','ogre magi','omniknight','oracle','outworld devourer','phantom assassin','phantom lancer','phoenix','puck','pudge','pugna','queen of pain','razor','riki','rubick','sand king','shadow demon','shadow fiend','shadow shaman','silencer','skywrath mage','slardar','slark','sniper','spectre','spirit breaker','storm spirit','sven','techies','templar assassin','terrorblade','tidehunter','timbersaw','tinker','tiny','treant protector','troll warlord','tusk','underlord','undying','ursa','vengeful spirit','venomancer','viper','visage','warlock','weaver','windranger','winter wyvern','witch doctor','wraith king','zeus','dawnbreaker','void spirit','hoodwink','snapfire','mars','grimstroke','pangolier','dark willow']
// console.log(KMP("dawnbreaker","nbre"));
function main(){
  var x = document.getElementById("hero").value;
  // console.log(x);
  // for (var i = 0; i < x.length; i++){
  //   if (KMP(heroDB[i],x) != 0){
  //     document.write(heroDB[i]);
  //     console.log(i);
  //   }
  // }
  var outputnya = "";
  for (var i = 0; i < heroDB.length; i++){
    if (KMP(heroDB[i],x) != -1){
      outputnya += (`${heroDB[i]} <br>`);
      // document.getElementById("res").innerHTML = "asu";
      
        // document.write(`${heroDB[i]} <br>`);
        // console.log(i);
    }
  }
  document.getElementById("res").innerHTML = outputnya;
}

