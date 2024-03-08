<template>
  <ul class="list-group mb-0">
    <li v-for="todo in todos" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center border rounded-0 mb-2">
      <div class="d-flex align-items-center">
        <input type="checkbox" @click="todo.active = !todo.active" v-model="todo.active"/>
        <label for="checkbox" class="p-2 text-uppercase">{{ todo.text }}</label>
      </div>
      <div @click="removeTodo(todo.id)">
        <span role="button">Delete</span>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "TodoList",
    data(){
      return{

      }
    },
    props:{
      todos: {
        type: Array,
        required: true
      }
    },
    methods:{
      removeTodo(itemID) {
        this.$emit('remove-todo-id', itemID);
      }
    },
  }
</script>

<style scoped>

</style>