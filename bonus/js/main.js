const { createApp } = Vue

createApp({
  data() {
    return {
      list: [
            {
                text: 'Farmare materiali',
                done: false
            },
            {
                text: 'Ottenere arma',
                done: false
            },
            {
                text: 'Livellare equipaggiamento',
                done: false
            },
        ],
        newElement: {
            text: '',
            done: false
        },
        error: false  
    }
  },
  methods: {
    removeElement(index) {
        this.list.splice(index, 1);
    },
    addElement() {
        if (this.newElement.text.length >= 5) {
        const newTask = {...this.newElement} ;
        this.list.unshift(newTask);
        this.newElement.text = '';
        this.error = false;
        } else {
            this.error = true;
        }
    },
    trueFalse(index) {
        if (this.list[index].done == false){
            this.list[index].done = true; 
        } else {
            this.list[index].done = false;
        } 
    }
  }
}).mount('#app')