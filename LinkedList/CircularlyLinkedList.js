//数据结构与算法的Javascirpt描述
//Zhengyaing learn Data Structures and Algorithms with javascript!

//基于对象的循环链表

function Node(element){
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList(){
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.dispReverse = dispReverse;
    this.findLast = findLast;
}

function find(item){
    var currNode = this.head;
    while((currNode.element != item)&&!(currNode.next.element == "head")){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement,item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
    if(newNode.next != null){
        newNode.next.previous = newNode;
    }
    
}

function display(){
    var currNode = this.head;
    while(!(currNode.next == null)&&!(currNode.next.element == "head")){
        console.log(currNode.next.element);
        currNode = currNode.next;       
    }
}

function findPrevious(item){
    var currNode = this.head;
    while(!(currNode.next == null)&&!(currNode.next.element == "head")){
        if(currNode.next.element == item){
            return currNode;
        }else{
            currNode = currNode.next;
        }
    }
}

function remove(item){
    var currNode = this.find(item);
    if(currNode.next != null){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }   
}

function findLast(){
    var currNode = this.head;
    while(currNode.next != null){
        currNode = currNode.next;
    }
    return currNode;
}

function dispReverse(){
    var currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.next == null)&&!(currNode.next.element == "head")){
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

var fruits = new LList();
fruits.insert("Apples","head");
fruits.insert("Orange","Apples");
fruits.insert("BlueBerry","Apples");
fruits.dispReverse();
