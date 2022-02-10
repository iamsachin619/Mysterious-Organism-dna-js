// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(number, dnaStrand){


  return {dna:dnaStrand,
specimenNum:number,
mutate:function(arr){
  let RandIndex = Math.floor(Math.random()*15)

  let option, randBase;
  switch(arr[RandIndex]){
    case "A":
    option = ['T','C','G']
    randBase = Math.floor(Math.random()*2)
    arr[RandIndex] = option[randBase]
    break;
    case "T":
    option = ['A','C','G']
    randBase = Math.floor(Math.random()*2)
    arr[RandIndex] = option[randBase]
    break;
    case "C":
    option = ['T','A','G']
    randBase = Math.floor(Math.random()*2)
    arr[RandIndex] = option[randBase]
    break;
    case "G":
    option = ['T','C','A']
    randBase = Math.floor(Math.random()*2)
    arr[RandIndex] = option[randBase]
    break;
  }
    return arr
  },
  compareDNA: function(anotherPObj){
    let newDna = anotherPObj.dna
    let common = 0;
    for(let i =0;i<newDna.length;i++){
      if(this.dna[i]=== newDna[i]){
        common+=1
      }
      
    }
    let percent = Math.round((common * 100)/15)
    console.log(`specimen #1 and specimen #2 have ${percent}% DNA in common`)

  },
  willLikelySurvive:function(){
    let count = 0
    this.dna.map((base)=>{
      if(base === 'C' || base ==='G'){
        count++
      }
    })
    if(count >= 9){
      return true
    }else{
      return false
    }
  }
}
}

// let sp1 = pAequorFactory(23,mockUpStrand())

// let sp2 = pAequorFactory(3,mockUpStrand())


// sp2.compareDNA(sp1)

// console.log(sp1.willLikelySurvive())

function setUp(){
  let survivors = []
  for(let i = 0;survivors.length<30;i++){
    let newPAequor = pAequorFactory(i,mockUpStrand())
    if(newPAequor.willLikelySurvive()){
      survivors.push(newPAequor)
    }
  }
  return survivors
}

console.log(setUp())

