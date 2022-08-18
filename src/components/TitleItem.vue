<template>
  <div class="title-box">
    <h1>
      {{title}}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class extends Vue {
  @Prop() title!: string;
}
</script>

<style scoped lang="scss">
.title-box {
  h1 {
    text-align: center;
  }
}
</style>
