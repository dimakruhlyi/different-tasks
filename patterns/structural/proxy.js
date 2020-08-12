function networkFetch(url){
    return `${url} - response from server`;
}

const cache = new Set();

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args){
        const url = args[0];
        if(cache.has(url)){
            return `${url} - response from cache`;
        }else{
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    }
})

console.log(proxiedFetch('youtube.com'));// server
console.log(proxiedFetch('facebook.com'));// server
console.log(proxiedFetch('youtube.com'));// cache