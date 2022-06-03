//lld:- low level design
//high level design
//road:- head of village(lld)
//nh:- nititin gatkari(hld)
//parking system

class vehicle{
    constructor(type,regNumber,color) {
        this.type=type;
        this.regNumber=regNumber;
        this.color=color;
    }

    get type() {
        return this.type;
    }

    set type(value) {
        this._type=value;
    }
}

//car

class car extends vehicle {
    constructor(regNumber,color) {
        super("car", regNumber,color);
    }
}