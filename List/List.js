//数据结构与算法的Javascirpt描述
//Zhengyaing learn Data Structures and Algorithms with javascript!

console.log("列表是一组有序的数据！")
function List(){
    this.listSize = 0;//列表元素的个数
    this.pos = 0;//列表的当前位置
    this.dataStore = [];//空数组用来存储列表元素
    this.clear = clear;             //清空列表所有元素
    this.find = find;               //查找一个元素，返回元素在列表中位置，没有则返回-1
    this.toString = toString;       //显示列表中所有元素
    this.insert = insert;           //在列表起始位置插入元素
    this.append = append;           //在列表末尾位置插入元素
    this.remove =remove;            //从列表中删除元素
    this.front = front;             //将当前位置移动到第一个元素
    this.end = end;                 //将当前位置移动到最后一个元素
    this.prev =prev;                //将当前位置向前移动一个
    this.next = next;               //将当前位置向后移动一个
    this.length =length;            //返回列表元素的个数
    this.currPos = currPos;         //返回列表当前位置
    this.moveTo = moveTo;           //将当前位置移动到指定位置
    this.getElement = getElement;   //返回当前位置的元素
    this.contains = contains;       //查找一个元素是否在列表中
}

function append(element){
    this.dataStore[this.listSize++] = element;
}

function find(element){
    for(var i = 0; i < this.listSize; i++){
        if(this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
}

function remove(element){
    let findAt = this.find(element);
    if(findAt >= 0){
        this.dataStore.splice(findAt,1);
        --this.listSize;
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function toString(){
    return this.dataStore;
}

function clear(){
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function insert(element,after){
    let findAt = this.find(after);
    if(findAt >= 0){
        this.dataStore.splice(findAt+1,0,element);
        this.listSize +=1;
    }
    return false;
}

function contains(element){
    for(var i = 0; i < this.listSize; ++i){
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
}

function front(){
    this.pos = 0;
}

function end(){
    this.pos = this.listSize - 1;
}

function prev(){
    if(this.pos > 0){
        --this.pos;
        return true;
    }else{
        return false;
    }
}

function next(){
    if(this.pos < this.listSize - 1){
        this.pos++;
        return true;
    }else{
        return false;
    }
}

function currPos(){
    return this.pos;
}

function moveTo(position){
    this.pos = position;
}

function getElement(){
    return this.dataStore[this.pos];
}

var list = new List();
list.append("zhengyaing");
list.append("sda");
list.insert("suning","sda");
console.log(list);
list.next();
console.log(list.getElement());