<template>
  <div class="row d-flex justify-content-between align-items-center mt-2">
    <div class="col">
      <span>{{todos.length}} items left </span>
    </div>
    <div class="col text-center">
      <button @click="showAll">All</button>
      <button @click="showActive">Active</button>
      <button @click="showCompleted">Completed</button>
    </div>
    <div class="col float-right">
      <button @click="showClearCompleted">Clear Completed</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilterOptions",
    todoFilterKey: "showAll",
    data(){
      return{
        todosRemoveList:[],
      }
    },
    props:{
      todos: {
        type: Array,
        required: true
      }
    },
    methods:{
      showAll() {
        this.$emit('all-todo-list');
      },
      showActive() {
        this.$emit('show-active-todo-list');
      },
      showCompleted() {
        this.$emit('show-completed-todo-list');
      },
      showClearCompleted() {
        this.$emit('show-clear-completed-todo-list');
      },
    },
  }
</script>

<style scoped lang="scss">
  button{border: none;background: transparent;padding: 0 10px;}
  .float-right{
    button{
      float: right;
    }
  }
</style>