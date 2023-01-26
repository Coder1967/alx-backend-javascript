export default class HolbertonCourse{
	constructor(name, length, students){
		if (typeof(name) !== "string"){
			throw(new TypeError("Name must be a string"));
		}
		if (typeof(length) !== "number"){
			throw(new TypeError("Length must be a number"));
		}
		if (!(students instanceof Array)){
			throw(new TypeError("Students must be an array"));
		}
		this._name = name;
		this._length = length;
		this._students = students;
	}

	/* setter and getter for fields*/
	set name(newName){
		this._name = newName;
	}
	get name(){
		return this._name;
	}

	set length(newLength){
                this._length = newLength;
	}
	get length(){                                               return this._length;
        }

	set students(newStudent){
                this._students = newStudent;
	}
	get students(){                                               return this._students;
        }
}
