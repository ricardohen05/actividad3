class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.next = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
      this.cola = null;
    }
  
    
    push(dato) {
      const nuevoNodo = new Nodo(dato);
      if (!this.cabeza) {
        this.cabeza = this.cola = nuevoNodo;
      } else {
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza = nuevoNodo;
      }
    }
  
    pop() {
      if (!this.cabeza) {
        throw new Error('La pila está vacía');
      }
      const dato = this.cabeza.dato;
      this.cabeza = this.cabeza.next;
      if (!this.cabeza) {
        this.cola = null;
      }
      return dato;
    }
  
    // Operaciones de cola 
    enqueue(dato) {
      const nuevoNodo = new Nodo(dato);
      if (!this.cola) {
        this.cabeza = this.cola = nuevoNodo;
      } else {
        this.cola.next = nuevoNodo;
        this.cola = nuevoNodo;
      }
    }
  
    dequeue() {
      if (!this.cabeza) {
        throw new Error('La cola está vacía');
      }
      const dato = this.cabeza.dato;
      this.cabeza = this.cabeza.next;
      if (!this.cabeza) {
        this.cola = null;
      }
      return dato;
    }
  }
  
  const lista = new ListaEnlazada();
  lista.push(1);
  lista.push(2); 
  lista.enqueue(3); 
  console.log(lista.pop()); 
  console.log(lista.dequeue()); 