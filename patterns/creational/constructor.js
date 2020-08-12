// function Server(name, ip){
//     this.name = name;
//     this.ip = ip;
// }

// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:80`;
// }
//              OR
class Server{
    constructor(name, ip){
        this.name = name;
        this.ip = ip;
    }
    getUrl() {
        return `https://${this.ip}:80`;
    }
}

const aws = new Server('AWS Ukraine', '192.168.1.120'); //constructor using
console.log(aws.getUrl());