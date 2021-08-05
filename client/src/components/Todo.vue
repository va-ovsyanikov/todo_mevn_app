<template>
  <div class="container">
    <TodoInput @addTodo="addTodo" />
    <template v-if="GETTERS_TODO.length">
      <TodoItem
        v-for="(todo, key) in GETTERS_TODO"
        :key="key"
        :title="todo.title"
        :date="todo.date"
        :completed="todo.completed"
        @deleteItem="deleteItem(todo._id)"
        @isCompleted="isCompleted(todo._id, (todoCompleted = !todo.completed))"
      />
    </template>
    <div class="todo_empty" v-else>
      <p>Пусто</p>
    </div>
  </div>
</template> 

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "v-todo",
  components: {
    TodoItem: () => import("./TodoItem"),
    TodoInput: () => import("./TodoInput"),
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["GETTERS_TODO"]),
  },
  methods: {
    ...mapActions(["GET_TODO", "DELETE_TODO", "ADD_TODO", "COMPLETED_TODO"]),
    addTodo(value) {
      if (value === "") {
        return false;
      } else {
        this.ADD_TODO(value);
      }
    },
    isCompleted(id, todoCompleted) {
      let data = {
        id,
        todoCompleted,
      };
      this.COMPLETED_TODO(data);
    },
    deleteItem(id) {
      this.DELETE_TODO(id);
    },
  },

  mounted() {
    this.GET_TODO();
  },
};
</script>

<style lang="less" scoped>
.container {
  margin-top: 100px;
  max-width: 700px;
  padding: 10px;
  min-height: 300px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  background-color: #fff;
}
.todo_empty{
  text-align: center;
}
</style>