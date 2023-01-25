import createUser from "./utils";
import  uploadPhoto from "./utils"

export default function handleProfileSignup(){
	createUser.then((usr){
		console.log(`${usr.firstName} ${usr.lastName}`);
	}).catch(()=>{console.log("Signup system offline")});
}
