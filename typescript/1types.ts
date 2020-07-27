const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 20;
const float: number = 2.1;
const num: number = 3e10;

const message: string = 'Dima Kruhlyi';

const numbArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numbArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const fio: string[] = ['Dima', 'Kruhlyi'];

//Tuple
const contact: [string, number, boolean] = ['Dima', 1234, false];

//Any
let variable: any = 20;
//...
variable = 'Dimas';

//===
function showName(name: string): void{
    console.log(name);   
}
showName('DimaKruhlyi');

//Never
function throwError(message: string): never{
   throw new Error(message)
}

function infinite(): never{
    while(true){

    }
}

//Type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = '1234';

type someType = string | null | undefined