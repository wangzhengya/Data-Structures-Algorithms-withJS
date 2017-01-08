//数据结构与算法的Javascirpt描述
//Zhengyaing learns Data Structures and Algorithms with javascript!

//字典是一种键-值对形式存储数据的数据结构
//Dictionary类基础是Array类

function Dictionary(){
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
}

function add(key,value){
    this.dataStore[key] = value;
}

function find(key){
    return this.dataStore[key];
}

function remove(key){
    delete this.dataStore[key];
}

function showAll(){
    console.log(this.dataStore["wang"]);
    dataStore = this.dataStore;
    Object.keys(this.dataStore).forEach(function(k,i){
        console.log(k);console.log(this.dataStore[k]);
        console.log(k + "->" + this.dataStore[k]);
    });
}
function count(){
    var n = 0 ;
    for(var key in Object.keys(this.dataStore)){
        ++n;
    }
    return n;
}

var squares = new Dictionary();
squares.add("wang","2");
squares.add("test","4");
squares.add("asdf","9");
squares.remove("asdf");
squares.add("whatever","16");
squares.showAll();
console.log(squares.find("wang"));
