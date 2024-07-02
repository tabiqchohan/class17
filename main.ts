class student {
    name:string
    age:number

constructor(stdName:string,stdage:number){
this.name =stdName ,this. age =stdage
}
canProgram ():void {
    console.log("this student can program"); 
}
}
let s1:student = new student("m tabiq",24)
console.log(s1);


abstract class takePhoto{
    filter:string
    brust:number
    constructor(filName:string,brstNo:number){
        this.filter=filName , this.brust = brstNo
    }
}
//Inheritance
class Instagram extends takePhoto{
reelTime : number
constructor(filName:string,brstNo:number,reelTime:number){
    super(filName,brstNo),
    this.reelTime = reelTime
}
}
let Instapp:Instagram = new Instagram("whitenes",10,10)
console.log(Instapp);














class perconalData{
    name:string
    age:number
    experience:number
    constructor(tname:string,tage:number,exp:number){
        this.name =tname 
        this.age = tage
        this.experience = exp
    }
}
let tdata1:perconalData = new perconalData("tabiq",24,3)
console.log(tdata1);



class GiaicAtm {
   private name:string
    private pin:number
  public  balance:number
   private logedIn:boolean
    constructor(name:string,pin:number,balance:number){
        this.name = name
        this.pin = pin
        this.balance = balance
        this.logedIn =false
    }
    login():void{
        if(this.name ===  "tabiq"  && this.pin === 8569 )
            {
                this.logedIn = true
                console.log("login Successful");
                
            }else{
                this.logedIn = false
                console.log("login faild please check correct pin");
                
            }
    }
    deposit(amount:number):number{
        if(this.logedIn){
         this.balance += amount
         return this.balance
        }else{
            console.log("you must be logged in to deposit.");
            return this.balance
        }
    }
    withdrawl (amount:number):number{
        if(this.logedIn){
            if(amount<= this.balance){
                this.balance -= amount
                return this.balance
}else{
    console.log("insufficiant funts");
    return this.balance;
}
 } else {
        console.log("you must be logged in to withdrawl");
        return this.balance
        
    }
    
}
}

    

let tabiqTransaction:GiaicAtm = new GiaicAtm("tabiq",8569,50000)
tabiqTransaction.login();
console.log("balance after deposit",tabiqTransaction.deposit(5000));
console.log("balance after withdrawl",tabiqTransaction.withdrawl(20000));









