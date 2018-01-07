class uglyNumber {
    constructor(number){
        this.number = number
        this.nextUgly="";
        this.uglyArray = [];
    }

    maxDivides(number, divisible){
        while(number % divisible == 0) {
            number = number / divisible;
          }
        return number;
    }

    isUgly(numberUgly){
        numberUgly = this.maxDivides(numberUgly, 2);
        numberUgly = this.maxDivides(numberUgly, 3);
        numberUgly = this.maxDivides(numberUgly, 5);
      
        return (numberUgly == 1) ? true : false;
    }

    getUglyNumber(input){
        
        let i = 1;
        let countUglyNumber = 1; // ugly number count
      
        // check for all integers until count becomes n */
        while(input > countUglyNumber) {
          i++;
          if(this.isUgly(i) == 1) {
              countUglyNumber++;
          }
          
        }
        this.nextUgly=i;
        return this;
    }

    getUglyArray(){
        let tempUgly=0;
        while(this.uglyArray.length !== this.number){
            tempUgly++;
            if(this.isUgly(tempUgly) === true){
                this.uglyArray.push(tempUgly);
            }
        }
        return `Ugly No : ${this.nextUgly} | Ugly Array : ${this.uglyArray}`;
    }
}

let class1 =  new uglyNumber();

console.log(class1.getUglyNumber(10))
console.log(class1.getUglyNumber(15))
console.log(class1.getUglyNumber().getUglyArray());

