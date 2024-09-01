// let  str: string = 'str';
// // str = 5;

const isBirthday: boolean = true;
let ageData: number = 40;
const userNameData: string = 'John';

function logBrtMsg(isBirthday:boolean, userNameData:string, ageData:number):void {
    if (isBirthday) {
        console.log(`Congrats ${userNameData.toUpperCase()} with ${ageData} years`)
    }
}