class Student {
    firstName;
    lastName;
    nationalId;

    constructor(fN, lN, nId) {
        let x = "ay klam";
        this.firstName = fN;
        this.lastName = lN;
        this.nationalId = nId;
    }

    // getter function
    getNationalId() {
        return this.nationalId.split(0, 4).join("") + "******";
    }
}

class Test extends Student {}
// other part of the project;

const ahmed = new Test("Ahmed", "Taha", "2022001");

ahmed.getNationalId();
ahmed.x;
console.log(ahmed.getNationalId());
