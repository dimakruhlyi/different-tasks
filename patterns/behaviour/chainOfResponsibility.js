class MySum{
    constructor(initialValue = 42){
        this.sum = initialValue;
    }
    add(value){
        this.sum += value;
        return this; // <= chain of responsibility
    }
}

const sum1 = new MySum();
console.log(sum1.add(15).add(12).add(4).add(123).sum); // 196 (realization of this pattern)

const sum2 = new MySum(0);
console.log(sum2.add(1).add(2).add(3).sum);