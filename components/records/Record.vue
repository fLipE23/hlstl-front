<template>

  <div>
    <p>
      Ф.И.О.: {{record.name}} <br>
      Телефон: {{record.phone}} <br>
      E-mail: {{record.email}} <br>
    </p>

    <hr>
  </div>

</template>

<script>
export default {
  name: "Record",
  props: {
    record: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
