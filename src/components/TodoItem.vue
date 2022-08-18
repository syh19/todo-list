<template>
  <div class="todo-item-box"
    :class="{'hover-background-color':isMouseEnterChangeColor}"
    @mouseenter="showEditBtn();mouseEnterChangeColor($event)"
    @mouseleave="hideEditBtn();mouseLeaveChangeColor()">
    <el-checkbox v-model="item.isCompleted"></el-checkbox>
    <el-input :readonly="!isEdit"
      :border="false"
      v-model="item.content"></el-input>
    <div class="finish-btn"
      v-if="isEdit">
      <el-button size="mini"
        @click="finishEdit"
        type="success"
        icon="el-icon-check"
        circle></el-button>
    </div>
    <div class="edit-btn"
      v-show="!isOtherItemEditingStatus&&!isEdit&&isShowEditBtn">
      <el-button size="mini"
        @click="editItem"
        type="primary"
        icon="el-icon-edit"
        circle></el-button>
      <el-button size="mini"
        @click="deleteItem"
        type="danger"
        icon="el-icon-delete"
        circle></el-button>
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
  // ----------------------Prop----------------------
  @Prop() item!: any;
  /** 是否处于可编辑状态 */
  @Prop() isOtherItemEditingStatus!: boolean;
  // ----------------------data----------------------
  isMouseEnterChangeColor = false;
  /** 是否处于编辑状态 */
  isEdit = false;
  /** 悬停展示编辑删除按钮 */
  isShowEditBtn = false;
  // ----------------------methods----------------------
  showEditBtn() {
    this.isShowEditBtn = true;
  }
  hideEditBtn() {
    this.isShowEditBtn = false;
  }

  @Emit("change-edit-status")
  editItem() {
    this.isEdit = true;
    return this.isEdit;
  }

  @Emit("delete-item")
  deleteItem() {
    return this.item.id;
  }

  @Emit("change-edit-status")
  finishEdit() {
    this.isEdit = false;
    return this.isEdit;
  }
  /**
   * @description: 鼠标进入后改变当前项目的背景颜色
   * @param {*} e 鼠标事件
   * @return {*}
   * @author:
   */
  mouseEnterChangeColor(e: any) {
    console.log(e.target.__vue__._props.item.id);
    if (e.target.__vue__._props.item.id === this.item.id) {
      this.isMouseEnterChangeColor = true;
    }
  }
  mouseLeaveChangeColor() {
    this.isMouseEnterChangeColor = false;
  }
}
</script>

<style scoped lang="scss">
.todo-item-box {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 5px;

  height: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.04);

  .el-checkbox {
    zoom: 110%;
  }
  .el-input {
    margin-left: 10px;
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
.hover-background-color {
  background-color: rgba(90, 156, 248, 0.12);
  ::v-deep .el-input__inner {
    background-color: rgba(90, 156, 248, 0);
  }
}
</style>
