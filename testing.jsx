function superMarco(){
    console.log("Marco is the hero that nobody wanted to see back");
}

const one = 1;
const two = "two";
const three = {
    one: 'one',
    two: 'two',
    three: () => {
        console.log(one + " " + two);
    }
}

console.log(one);
console.log(two);
console.log(three.three());
console.log(superMarco());