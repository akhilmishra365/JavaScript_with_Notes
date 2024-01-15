class User{
    constructer (username)
    {
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`) ; 
    }
   //ab mai chah ra ki jaise hi mera username aye usko usi samay ek unique id mil jaye 
    static CreateId(){
    return `123`
   }
}
const hitesh = new User("hiteash")
//console.log(hitesh.CreateId()) ;  error dega cuz static use kiya hai
//ab yr kyi baar aisa hota hai ki hm ye createId method ka acces hitesh object ko ni dena chahte jo hmne userclass se instantiate kiya hai 
//uske liye hm create id ke aage static lga do 





