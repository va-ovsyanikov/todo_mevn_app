<template>
  <div id="app">
    <Todo/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Todo: () => import("./components/Todo")
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
