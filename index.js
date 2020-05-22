function BoardMember(name, homestate, training) {
  
}

BoardMember.prototype.veto = function() {
  return `No, I must disagree`;
};

BoardMember.prototype.approve = function(){
  console.log(`You can do that!`);
};

BoardMember.prototype.doCharity = function(){
  console.log(`I like to help people.`);
};

BoardMember.prototype.releasePressStatement = function(){
  console.log(`You will see great things from Scuber.`);
};

BoardMember.prototype.sayHi = function(){
  console.log(`Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`);
};