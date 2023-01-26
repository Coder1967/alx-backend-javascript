import Building from './5-building.js'
export default SkyHighBuilding extends Building{
	constructor(sqft, floors){
		super(sqft);
		this._floors = floors;
	}
	/*setters for fields*/
	set sqft(newSqft){
		this._sqft = newSqft;
	}

	set floors(newFloors){
		this._floors = newFloors;
	}

	/*getters for fields*/
	get floors(){
		return this._floors;
	}

	get sqft(){
		return this._sqft;
	}

	evacuationWarningMessage(){
		return `Evacuate slowly the ${this.floors} floors`
	}
}
