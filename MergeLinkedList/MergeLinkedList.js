/*
Given two sorted linked lists, merge them together in ascending order and return 
a reference to the merged list
*/
//Note - This will create a new list. Will work on updating the same list in near future
const mergeLinkedList = (list1, list2) => {
    var pointer1 = list1.head;
    var pointer2 = list2.head;

    var resultList = new LinkedList();

    while (pointer1 && pointer2) {
        if(pointer1.data < pointer2.data){
            addNodeToLinkedList(resultList, new ListNode(pointer1.data));
            pointer1 = pointer1.next;
        }else{
            addNodeToLinkedList(resultList, new ListNode(pointer2.data));
            pointer2 = pointer2.next;
        }
    }

    while (pointer1) {
        addNodeToLinkedList(resultList, new ListNode(pointer1.data));
        pointer1 = pointer1.next;
    }

    while (pointer2) {
        addNodeToLinkedList(resultList, new ListNode(pointer2.data));
        pointer2 = pointer2.next;
    }
    
    return resultList;
}

class ListNode {

    constructor(d){
        this.data = d;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head
    }
}

const addNodeToLinkedList = (linkedList, node) =>{
    if(linkedList.head){
        var temp = linkedList.head;
        while (temp.next) {
            temp = temp.next;
        }
        temp.next = node;
    }else{
        linkedList.head = node;
    }
}

var linkedList1 = new LinkedList(new ListNode(4));
addNodeToLinkedList(linkedList1,new ListNode(4));
addNodeToLinkedList(linkedList1,new ListNode(7));

var linkedList2 = new LinkedList(new ListNode(1));
addNodeToLinkedList(linkedList2,new ListNode(5));
addNodeToLinkedList(linkedList2,new ListNode(6));


console.log("linkedList1:")
console.log(`${linkedList1.head.data}`);
var temp = linkedList1.head;

while(temp.next){
    temp = temp.next;
    console.log(`${temp.data}`);
}

console.log("linkedList2:")
console.log(`${linkedList2.head.data}`);
temp = linkedList2.head;

while(temp.next){
    temp = temp.next;
    console.log(`${temp.data}`);
}

console.log("----Merging now-----");

var resultList = mergeLinkedList(linkedList1,linkedList2);

console.log("Result list:")
console.log(`${resultList.head.data}`);
temp = resultList.head;

while(temp.next){
    temp = temp.next;
    console.log(`${temp.data}`);
}

