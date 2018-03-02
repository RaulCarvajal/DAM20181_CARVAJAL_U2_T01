/*
CARVAJAL_U2_T01
*/
interface Person{
    name:string;
    email:string;
    salary:number;
    active:boolean;
}

var people = Array<Person>();

function createPeople():void{
    let newPerson:any;
    
    for (let i = 0; i < 10; i++) {
        newPerson={
            name:`Raúl ${i}`,
            email:`i${i}@gmail.com`,
            salary:(i+10000),
            active:i%2===0?true:false//If primitivo
        }
        people.push(newPerson);
    }
    people.push({
        name:`Raúl`,
        email:`novalido@gmailcom`,
        salary:2500,
        active:true
    });
}

function showPeople():void{
    createPeople();
    people.forEach(function(e){
        if(e.active==true&&validateEmail(e.email)){
            console.log(e);
        }
    });
}

function validateEmail(email:string):boolean {
    //generar la regex para email
    var v = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return v.test(String(email).toLowerCase());
}

showPeople();