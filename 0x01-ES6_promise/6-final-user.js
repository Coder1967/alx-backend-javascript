import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName){
	let promise1 = signUpUser(firstName, lastName);
	let promise2 = uploadPhoto(fileName);
	
	let obj1 = {"status": promise1, value: promise1.then((val)=>{return val}).catch((err)=>{err})
	}
	let obj2 = {"status": promise2, value: promise2.then((val)=>{return val}).catch((err)=>{err})
	}
	return [obj1, obj2];
}
