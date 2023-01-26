export default class Currency{
	constructor(code, name){
		this._name = name;
		this._code = code;
	}

	/*setters for the fields*/
	set name(newName){
		this._name = newName;
	}
	set code(newCode){
		this._code = newCode;
	}

	/*getters for the fields*/
	get name(){
		return this._name;
	}
	get code(){
		return this._code;
	}

	displayFullCurrency(){
		return `${this._name} (${this._code})`
	}
}
