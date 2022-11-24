<template>
  <div>
    <button type="submit" class="btn btn-primary save" @click.prevent="edit">Edit</button>
  </div>
</template>

<script>
  export default {
    methods: {
      edit() {
        this.$emit("edit")
      }
    }
  }
</script>

<style scoped>
.save {
  font-weight: 700;
  background-color: orange;
  height: 30px;
  padding: 0px;
  border: transparent;
  width: 100%;
  
}

</style>