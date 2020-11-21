export class loginData{
    constructor(){}
     set userId(userId){
        this.userId = userId;
    }
    get userId (){
        return this.userId;
    }
    set username(username:string){
        this.username = username;
    }
    set password(password:string){
        this.password = password;
    }
    set result(result:any){
        this.result = result;
    }
}