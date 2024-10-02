// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, adn) => {
  return pAequor ={
    specimeNum: num,
    dna: adn,
    mutate() {
      let baseIndex=Math.floor(Math.random() *15);
      let base=returnRandBase();
      if (base!=this.dna[baseIndex]) {this.dna[baseIndex]=base;}
        else {
          do {
              base=returnRandBase();
            } while (base===this.dna[baseIndex]);
          this.dna[baseIndex]=base;
        }
      return this.dna;
    },
    compareDNA(pAequor) {
      let count=0;
      let arr=this.dna;
      for (let i=0; i<arr.length; i++) {
        if(pAequor.dna[i]===arr[i]) {count++;}
      }
      let final=(count*100)/15;
      console.log(pAequor.dna);
      console.log(this.dna);
      return `specimen #${pAequor.specimeNum} and specimen #${this.specimeNum} have ${final}%DNA in common`
    },
    willLikelySurvive() {
      let count=0;
      let arr=this.dna;
      for (let i=0; i<arr.length; i++) {
        if (arr[i]==='C' || arr[i]==='G') {count++;}
      }
      if ((count*100)/15>=60) {return true}
        else {return false}
    }
  } 
}

let numar=0;
let y=1
do {
  let x=pAequorFactory(y,mockUpStrand());
  y++;
  if (x.willLikelySurvive()===true) {
    numar++;
    console.log(`${numar} + ${x.dna}`);
  }
} while (numar<30);