<template>
  <div class="row">
    <div class="input-field col s12">
      <button class="waves-effect waves-light btn" @click="onSubmit">
        <i class="large material-icons">border_color</i>
      </button>
      <input
        id="icon_prefix"
        type="text"
        v-model="todoValue"
        class="validate"
      />
      <label for="icon_prefix">Задача</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      todoValue: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("addTodo", this.todoValue);
      this.todoValue = "";
    },
  },
};
</script>


<style lang="less" scoped>
.btn {
  position: absolute;

  right: 12px;
}
</style>