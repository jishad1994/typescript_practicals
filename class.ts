//threr ara three visibilty modifiers

//public
//private
//modiefiers

//by default everything is public (accessible by all instances )
class Bank {
    protected balance: number;
    protected name: string;
    public constructor(b: number, name: string) {
        this.balance = b;
        this.name = name;
    }

    public getBalance(): number {
        return this.balance;
    }
}

const myAccount = new Bank(1000, "jishad");

// console.log(myAccount.balance);          OUT PUT WILL NOT GIVEN SINCE THE PROPERTY IS PRIVATE;
console.log(myAccount.getBalance()); //OUTPUT WILL GIVE THE BALANCE SINCE METHOD IS PUBLIC

class Branch extends Bank {
    // public branchName: string;

    // constructor(balance: number, name: string, branchname: string) {
    //     super(balance, name);                  call super() only if the child class has a seperate constructor🙅‍♂️

    //     this.branchName = branchname;
    // }

    public getBalance(): number {
        return this.balance;
    }
}

const myBranch = new Branch(5000, "sadique");

console.log(myBranch.getBalance());

//overritde parent menthods
class Parent {
    public greet(): void {
        console.log("hello from parent");
    }
}

class child extends Parent {
     greet() {
        console.log("hello form child");
    }
}

const mychild=new child();