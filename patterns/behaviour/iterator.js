class MyIterator{
    constructor(data){
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator](){
        return{
            next: () => {
                if(this.index < this.data.length){
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else{
                    this.index = 0;
                    return{
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}

const iterator = new MyIterator(['This', 'is', 'an', 'iterator']);

for(const val of iterator){
    console.log('Value: ', val);
}

// The same with generator (just for example)
function* generator(collection){
    let index = 0;

    while(index < collection.length){
        yield collection[index++];
    }
}

const gen = generator(['This', 'is', 'an', 'iterator']);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);