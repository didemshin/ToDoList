<template>
  <ul class="list-group mb-0">
    <li v-for="todo in todoListArray" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center border rounded-0 mb-2">
      <div class="d-flex align-items-center">
        <input type="checkbox" @click="todo.active = !todo.active" v-model="todo.active"/>
        <label for="checkbox" class="p-2 text-uppercase">{{ todo.text }}</label>
      </div>
      <div @click="removeTodo(todo.id)">
        <span role="button">Delete</span>
      </div>
    </li>
  </ul>
  <filter-options v-bind:todos="this.todos"
                  @all-todo-list="showAll"
                  @show-active-todo-list="showActive"
                  @show-completed-todo-list="showCompleted"
                  @show-clear-completed-todo-list="showClearCompleted"
                  @remove-todo-id="removeTodo"></filter-options>
</template>

<script>
  import FilterOptions from './FilterOptions.vue';
  export default {
    name: "TodoList",
    components: { FilterOptions},
    data(){
      return{
        todoListArray: this.todos
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
      },
      showAll() {
        this.todoListArray=this.todos
      },
      showActive() {
        this.todoListArray=this.todos.filter(item=>item.active === false);
      },
      showCompleted() {
        this.todoListArray=this.todos.filter(item=>item.active === true)
      },
      showClearCompleted() {
        let arrayValue = this.todoListArray;
        arrayValue.forEach(function(item) {
            if(item.active == true){
              arrayValue.splice(arrayValue.indexOf(item), 1)
            }
        });
      },
    },
  }
</script>

<style scoped>

</style>