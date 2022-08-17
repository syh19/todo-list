<template>
  <div class="box"
    @mouseenter="isShowEditBtn=true"
    @mouseleave="isShowEditBtn=false">
    <el-checkbox v-model="item.isCompleted"></el-checkbox>
    <el-input :readonly="!isEdit"
      :border="false"
      v-model="item.content"
      size="mini"></el-input>
    <div class="finish-btn"
      v-if="isEdit">
      <el-button size="mini"
        @click="finishEdit">完成</el-button>
    </div>
    <div class="edit-btn"
      v-show="!isOtherItemEditingStatus&&!isEdit&&isShowEditBtn">
      <el-button size="mini"
        @click="editItem">编辑</el-button>
      <el-button size="mini">删除</el-button>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

// interface Item {
//   id: string;
//   isCompleted: boolean;
//   isShow:boolean,
//   content: string;
// }
@Component({
  components: {},
})
export default class extends Vue {
  @Prop() item!: any;
  /** 是否处于可编辑状态 */
  @Prop() isOtherItemEditingStatus!:boolean;

  /** 是否处于编辑状态 */
  isEdit = false;
  /** 悬停展示编辑删除按钮 */
  isShowEditBtn = false;

  @Emit("change-edit-status")
  editItem() {
    this.isEdit = true;
    return this.isEdit;
  }

  @Emit("change-edit-status")
  finishEdit() {
    this.isEdit = false;
    return this.isEdit;
  }
}
</script>
<style scoped lang="scss">
.box {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  border-top: 1px solid rgb(199, 199, 199);

  .el-input {
    margin-left: 20px;
    ::v-deep .el-input__inner {
      border: none;
    }
  }
}
.edit-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}
</style>
