class SimpleMembership{
    constructor(name){
        this.name = name;
        this.cost = 50;
    }
}

class StandartMembership{
    constructor(name){
        this.name = name;
        this.cost = 150;
    }
}

class PremiumMembership{
    constructor(name){
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory{
    static list = {
        simple: SimpleMembership,
        standart: StandartMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple'){
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function(){
            console.log(`${this.name} (${this.type}) : ${this.cost}`);
        }
        return member;
    }
}

const factory = new MemberFactory();
const members = [
    factory.create('Dima', 'simple'),
    factory.create('Kolia', 'premium'),
    factory.create('Oleg', 'standart'),
    factory.create('Thomas', 'premium'),
    factory.create('Robert')
];

//console.log(members);

members.forEach((m) => {
    m.define();
})