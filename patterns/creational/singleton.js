class Database{
    constructor(data){
        if(Database.exists){
            return Database.instance;
        }
        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData(){
        return this.data;
    }
}

const mongo = new Database('Mongo DB');
console.log(mongo.getData()); // Mongo DB

const mysql = new Database('MySql');
console.log(mysql.getData()); // Mongo DB