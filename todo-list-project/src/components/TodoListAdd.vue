<template>
  <section>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">

          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">

              <h6 class="mb-3">My Todo List</h6>

              <form class="d-flex justify-content-center align-items-center mb-4">
                <div class="form-outline flex-fill">
                  <input type="text" v-model="todos.text" class="form-control form-control-lg" />
                </div>
                <button type="button" @click="addTodo" class="btn btn-primary btn-lg ms-2">Add</button>
              </form>

              <todo-list v-bind:todos="this.todosList" v-if="this.todosList.length>0" @remove-todo-id="removeTodo"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import TodoList from './TodoList.vue'
  export default {
    components: { TodoList },
    name: "TodoListAdd",
    data() {
      return {
        counter:1,
        todosList:[],
        todos:{
          id: "",
          active:false,
          text: "",
        },
      }
    },
    methods:{
      addTodo() {
        this.todos.id = this.counter++
        this.todosList.push(this.todos)
        this.todos = {
          id:"",
          active:false,
          text: "",
        }
      },
      removeTodo(itemID) {
        const arrayIndex = this.todosList.map(item => item.id).indexOf(itemID);
        this.todosList.splice(arrayIndex, 1)
      },
    },
  }
</script>

<style scoped>

</style>