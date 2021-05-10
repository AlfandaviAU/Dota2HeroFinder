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

var heroDB = ['Abaddon','Alchemist','Ancient Apparition','Anti-Mage','Arc Warden','Axe','Bane','Batrider','Beastmaster','Bloodseeker','Bounty Hunter','Brewmaster','Bristleback','Broodmother','Centaur Warrunner','Chaos Knight','Chen','Clinkz','Clockwerk','Crystal Maiden','Dark Seer','Dazzle','Death Prophet','Disruptor','Doom','Dragon Knight','Drow Ranger','Earth Spirit','Earthshaker','Elder Titan','Ember Spirit','Enchantress','Enigma','Faceless Void','Gyrocopter','Huskar','Invoker','Io','Jakiro','Juggernaut','Keeper of the Light','Kunkka','Legion Commander','Leshrac','Lich','Lifestealer','Lina','Lion','Lone Druid','Luna','Lycan','Magnus','Medusa','Meepo','Mirana','Monkey King','Morphling','Naga Siren','NatureProphet','Necrophos','Night Stalker','Nyx Assassin','Ogre Magi','Omniknight','Oracle','Outworld Devourer','Phantom Assassin','Phantom Lancer','Phoenix','Puck','Pudge','Pugna','Queen of Pain','Razor','Riki','Rubick','Sand King','Shadow Demon','Shadow Fiend','Shadow Shaman','Silencer','Skywrath Mage','Slardar','Slark','Sniper','Spectre','Spirit Breaker','Storm Spirit','Sven','Techies','Templar Assassin','Terrorblade','Tidehunter','Timbersaw','Tinker','Tiny','Treant Protector','Troll Warlord','Tusk','Underlord','Undying','Ursa','Vengeful Spirit','Venomancer','Viper','Visage','Warlock','Weaver','Windranger','Winter Wyvern','Witch Doctor','Wraith King','Zeus','DawnBreaker','Void Spirit','Hoodwink','SnapFire','Mars','GrimStroke','Pangolier','Dark Willow']
// console.log(heroDB[0]);
// console.log(heroDB.length);
var x = 'Phantom';
// console.log(heroDB[0].length);
// console.log(KMP(heroDB[0],x));
// console.log(KMP(x,heroDB[i]));
for (var i = 0; i < heroDB.length; i++){
    if (KMP(heroDB[i],x) != -1){
        document.write(`${heroDB[i]} <br>`);
        // console.log(i);
    }
}