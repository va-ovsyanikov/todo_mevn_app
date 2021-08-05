<template>
  <ul class="collection">
    <li class="collection-item" >
      
      <label class="collection-item_check" @click="isCompleted" >
        <input  v-model="checked" type="checkbox" />
        <span ></span>
      </label>
      <span :class="{active:checked}" class="todo_title">{{ title }}</span>
     

      <div class="button_group">
         <span >{{date}}</span>
        <!-- <button class="btn-floating btn-small waves-effect waves-light green">
          <i class="material-icons">edit</i>
        </button> -->
        <button
          class="btn-floating btn-small waves-effect waves-light red"
          @click="deleteItem"
        >
          <i class="material-icons">delete</i>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    title: {
      type: String,
    },
    date:{
      type: String
    },
    completed:{
      type:Boolean
    }
  },
  data(){
    return{
      todoIscomplete:"",
      checked: this.completed
    }
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItem");
    },
    isCompleted(){
      this.$emit("isCompleted")
    }
  },
};
</script>

<style lang="less" scoped>
.collection-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.collection-item_check {
  display: flex;
}
.button_group{
  display: flex;
  align-items: center;
  min-width: 260px;
  justify-content: flex-end;
  span{
    margin-right: 10px;
  }
  button + button{
    margin-left: 10px;
  }
}
.todo_title{
  margin-right: auto;
}
.active{
 text-decoration: line-through;
;

}
</style>