//数据结构与算法的Javascirpt描述
//Zhengyaing learn Data Structures and Algorithms with javascript!

//javascript中数组的主要问题是，它们被实现成了对象，效率很低
//链表，每个节点都使用一个对象的引用指向它的后继
//数组：靠它们的位置进行引用；链表：靠相互之间的关系进行引用

//基于对象的单向链表

function Node(element){
    this.element = element;
    this.next = null;
}

function LList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

function find(item){
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement,item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display(){
    var currNode = this.head;
    while(!(currNode.next == null)){
        console.log(currNode.next.element);
        currNode = currNode.next;       
    }
}

function findPrevious(item){
    var currNode = this.head;
    while(currNode.next != null){
        if(currNode.next.element == item){
            return currNode;
        }else{
            currNode = currNode.next;
        }
    }
}

function remove(item){
    var preNode = this.findPrevious(item);
    if(!(preNode.next == null)){
        preNode.next = preNode.next.next;
    }
}

var fruits = new LList();
fruits.insert("Apples","head");
fruits.insert("Orange","Apples");
fruits.insert("BlueBerry","Apples");
fruits.display();
fruits.remove("Apples");
fruits.display();