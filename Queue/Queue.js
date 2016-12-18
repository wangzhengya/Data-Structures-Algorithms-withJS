//数据结构与算法的Javascirpt描述
//Zhengyaing learn Data Structures and Algorithms with javascript!

//队列：FIFO，在队尾插入元素，在对首删除元素。
//javascript中的数组来实现队列

function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;//向队尾添加一个元素
    this.dequeue = dequeue;//队首删除一个元素
    this.front = front;//读取队首的元素
    this.back = back;//读取队尾的元素
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(){
    return this.dataStore.shift();
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length - 1];
}

function toString(){
    var retStr = "";
    for(var i = 0; i < this.dataStore.length; ++i){
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

function empty(){
    if(this.dataStore.length == 0){
        return true;
    }else{
        return false;
    }
}