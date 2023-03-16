const { createApp } = Vue

createApp({
  data() {
    return {
      list: [
        {
            text: 'prova1',
            done: false
        },
        {
            text: 'prova2',
            done: true
        },
        {
            text: 'prova3',
            done: false
        },
      ],
    }
  },
  methods: {
    removeElement(index) {
        this.list.splice(index, 1);
    },
  }
}).mount('#app')