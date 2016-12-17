//数据结构与算法的Javascirpt描述
console.log("Zhengyaing learn javascript!");
console.log("列表是一组有序的数据！")
function List(){
    this.listSize = 0;//列表元素的个数
    this.pos = 0;//列表的当前位置
    this.dataStore = [];//空数组用来存储列表元素
    // this.clear = clear;             //清空列表所有元素
    // this.find = find;               //
    // this.toString = toString;       //显示列表中所有元素
    // this.insert = insert;           //在列表起始位置插入元素
    this.append = append;           //在列表末尾位置插入元素
    // this.remove =remove;            //从列表中删除元素
    // this.front = front;             //将当前位置移动到第一个元素
    // this.end = end;                 //将当前位置移动到最后一个元素
    // this.prev =prev;                //将当前位置向前移动一个
    // this.next = next;               //将当前位置向后移动一个
    // this.length =length;            //返回列表元素的个数
    // this.currPos = currPos;         //返回列表当前位置
    // this.moveTo = moveTo;           //将当前位置移动到指定位置
    // this.getElement = getElement;   //返回当前位置的元素
    // this.contains = contains;       //
}

function append(element){
    this.dataStore[this.listSize++] = element;
}

var list = new List();
list.append("zhengyaing");
list.append("sda");
console.log(list);