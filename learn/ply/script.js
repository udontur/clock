function multiplyNumeric(obj) {
    for(let key in obj){
        if(typeof obj[key] === "number"){
            obj[key]*=2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title(){
        console.log(`My menu is \$${this.width}`);
    },
};

multiplyNumeric(menu);

console.log(menu)

menu.title();