// let  str: string = 'str';
// // str = 5;

// const isBirthday: boolean = true;
// let ageData: number = 4;
// const userNameData: string = 'John';

// function logBrtMsg(isBirthday:boolean, userNameData:string, ageData:number):void {
//     if (isBirthday) {
//         console.log(`Congrats ${userNameData.toUpperCase()} with ${ageData} years`)
//     }
// }
// const currRate = '1.05';
// const fetchCurr = (response:string) => {
//     const data = JSON.parse(response);
//     return data;
// }

// function transferEurToUsd(available:boolean, amount:number, comission:number):void {
//     if (available) {
//         let res = fetchCurr(currRate) * amount *comission
//     console.log(res)
//     } else {
//         console.log('skdak')
//     }
// };

// transferEurToUsd(true,500,1.05)

// const obj: { age: number, username: string } = {
//     age: 50,
//     username:'Murvat'
// }

// function msg(data: { age: number, username: string }) {
//     console.log(data.age, data.username);
// }

// msg(obj);

// const departenst: string[] = ['dev', 'design', 'marketing'];
// const nums: number[] = [5, 32, 8];
// const values: number[][] = [[12], [12], [8]];
// const report: string[] = departenst.filter((d: string) => d != 'dev')

//

// const message: string|number='2'

// function printMsg(msg: string | number | boolean):void {
//     if (typeof msg === 'string') {
//         msg.toUpperCase()
//     } else if (typeof msg === 'number') {
//         msg.toExponential();
        
//     }
// }
// let msg: 'hello' = 'hello';
// msg = 'hello';
// const portal3000: number = 3000;
// const portal3001: number = 3001;
// function startServer(
//     protocol: 'http' | 'https',
//     port: 3000 | 3001): 'Server started' {

//     return 'Server started';
    
// }

// function createAnimation(id: string | number,) {
//     const elem = document.querySelector(`#${id}`) as HTMLElement;
//     elem ?elem.style.animation = '' : null;
// }

// type AnimationTimingFunc = 'ease' | 'ease' | 'ease-in';
// type AnimationID = string | number;
// function createAnimation(
//     id: AnimationID,
//     animName: string,
//     timingFunc:AnimationTimingFunc
// ) {
//     const elem = document.querySelector(`#${id}`) as HTMLElement;
//     elem ?elem.style.animation = '' : null;
// }


//TYPES
 type Config={protocol:'http' | 'https',port: 3000 | 3001 }


const serverConfig: Config = {
    protocol: 'https',
    port:3001
}

const backupConfig: Config = {
    protocol: 'http',
    port: 3000
};



type Engine = { fuel: 'disel' | 'gas', hp: 5000 | 2000 };
type Role = {
    role:string
}
type ConfigWithRole = Engine & Role;
const car: ConfigWithRole = {
    fuel: 'disel',
    hp: 5000,
    role:'Bmw'
}

type StartFunction = (
    protocol: 'http' | 'https',
    port: 3000 | 3001) => string;


const  startServer:StartFunction=(
    protocol: 'http' | 'https',
    port: 3000 | 3001): 'Server started' => {

    return 'Server started';
};

startServer(serverConfig.protocol, serverConfig.port);


//INTERFACES
type Reguest1 = { protocol: 'https' | 'https'; port: 3000 | 3001 };

interface Reguest2 {
    protocol: 'http' | 'https';
    port: 3000 | 3001;
}

interface IRole{
    role: string;
}

interface ReguestWithRole extends Config, Role { };

interface Styles{
    [key: string]: string;
}
const styles:Styles = {
    position: 'absolute',
    top: '20px',
    left:'50px',
}