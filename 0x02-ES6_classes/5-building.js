export default class Building{
	constructor(sqft){
		if (this.constructor !== Building){
			if (!("evacuationWarningMessage" in this)){
				throw(new Error("Class extending Building must override evacuationWarningMessage"))
			}
		}
		this._sqft = sqft;
	}

	/*getter and setter for _sqft attribute*/
	
	set sqft(newSqft){
		this._sqft = newSqft;
	}
	
	get sqft(){
		return this._sqft;
	}
}
