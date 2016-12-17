//数据结构与算法的Javascirpt描述
//Zhengyaing learn Data Structures and Algorithms with javascript!

//栈是一种高效的数据结构，因为数据只能在栈顶添加或者删除。（LIFO，后入先出）
//这里采用数组来存储数据的底层数据结构

function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
    return this.dataStore[--this.top];
}

function peek(){
    return this.dataStore[this.top - 1];
}

function length(){
    return this.top;
}

funciton clear(){
    return this.top = 0;
}
var sta = new Stack();
sta.push("sh");
sta.push("ex");
sta.push("ju");
console.log(sta);
sta.pop();
console.log(sta);