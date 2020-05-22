function BoardMember(name, homestate, training) {
  
}

User.prototype.veto = function() {
  console.log(`No, I must disagree`);
};

user.prototype.approve = function(){
  console.log(`You can do that!`);
};

user.prototype.doCharity = function(){
  console.log(`I like to help people.`);
};

user.prototype.releasePressStatement = function(){
  console.log(`You will see great things from Scuber.`);
};

BoardMember.prototype.sayHi = function(){
  console.log(`Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`);
};