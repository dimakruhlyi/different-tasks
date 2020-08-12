class User{
    constructor(name){
        this.name = name;
        this.room = null;
    }

    send(message, to){
        this.room.send(message, this, to);
    }

    receive(message, from){
        console.log(`${from.name} => ${this.name} : ${message}`);
    }
}

class ChatRoom{
    constructor(){
        this.users = {};
    }

    register(user){
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from , to){
        if(to){
            to.receive(message, from);
        } else{
            Object.keys(this.users).forEach(key => {
                if(this.users[key] !== from){
                    this.users[key].receive(message, from);
                }
            })
        }
    }
}

const dima = new User('Dima');
const nikolas = new User('Nikolas');
const bastian = new User('Bastian');

const room = new ChatRoom();

room.register(dima);
room.register(nikolas);
room.register(bastian);

dima.send('Hello!', nikolas);
nikolas.send('What do you want?', dima);
bastian.send('Hello everyone!');