//Creamos un nodo

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
    }

    getSize(){
        return this.size;
    }    

    isEmpty(){
        return this.size === 0;
    }

    insertFirst(data){
        const node = new Node(data);
        if (this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertLast(data){
        const node = new Node(data);
        if (this.isEmpty()){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insert(data, index){
        if (index < 0 || index > this.size){
            console.log("Índice inválido");
            return;
        }
        if (index === 0){
            this.insertFirst(data);
        } else {
            const node = new Node(data);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeIndex(index){
        if (index < 0 || index >= this.size) {
            console.log("Índice inválido.");
            return null;
        }
        if (index === 0){
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++){
                 prev = prev.next;
            }
            prev.next = prev.next.next;
        }
        this.size--;
    }

    searchIndex(index){
        if (index < 0 || index > this.size) {
            console.log("Índice inválido.");
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current.data;
    }
     // tarea de buscar y eliminar valor
     searchValue(value) {
        let compara = 0;
        let tries = 0;
        for (let i = 1; i < this.size + 1; i++) {
            compara = this.searchIndex(i);
            if (value === compara) {
                return i;
            }
            tries++;
        }
        if (tries === this.size) {
            console.log("No se ha encontrado un valor");
            return null;
        }
    }
    removeValue(value) {
        let compara = '';
        let i = 0;
        let j = 0;
        do {
            compara = this.searchIndex(i + 1);
            if (i === this.size) {
                break;
            }
            if (value === compara) {
                this.size--;
                if ((this.searchValue(compara) - 1) === 0) {
                    this.head = this.head.next;
                    break;
                } else {
                    let container = this.head;
                    do {
                        container = container.next;
                        j++;
                    } while (j < i - 1);
                    container.next = container.next.next;
                    break;
                }
            }
            i++;
        } while (i < this.size);
        if (i === this.size && value !== compara) {
            console.log("No se ha encontrado un valor");
        }
    }

    printAll(){
        if (this.isEmpty()){
            console.log("La lista está vacía");
           
        } else {
            let current = this.head;
            let result = "";
            while(current){
                result += current.data + ' -> ';
                current = current.next;
            }
            console.log(result + ' null')
        }
        
    }

}

let lista = new LinkedList();
console.log(lista.isEmpty());
lista.printAll();
lista.insertFirst("Mario");
lista.printAll();
lista.insertLast("Ricardo"); 
lista.printAll();
lista.insertFirst("Pedro");
lista.printAll()
lista.insertLast("Barack Obama");
lista.printAll();
lista.insert("Maria corina", 3);
lista.printAll();
lista.removeIndex(3);
lista.printAll();
lista.insert({
    nombre: "Maria corina",
    categoria: "Presidenta"
}, 2)
lista.insertLast("Nicolas Maburro")
lista.insertLast("Maria Polo")
lista.removeValue("Roberto");
lista.removeValue("brad pitt");

console.log("índice:" + lista.searchValue("Nicolas Maburro"));
lista.printAll();