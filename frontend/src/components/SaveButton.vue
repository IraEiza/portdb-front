<template>
  <div>
    <button type="submit" class="btn btn-primary save" @click.prevent="save">Save</button>
  </div>
</template>

<script>
  export default {
    methods: {
      save() {
        this.$emit("save")
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

.save:hover {
  background-color: orange;
 
}
.save:focus {
  background-color: orange;
}

</style>