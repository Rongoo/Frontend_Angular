export class Todo{
    id:number
    name:string
    username:string
    targetDate:Date
    done:boolean
    constructor(id:number,name:string,username:string,targetDate:Date,done:boolean){
      this.id=id;
      this.name=name;
      this.username=username;
      this.targetDate=targetDate;
      this.done=done;
    }
}