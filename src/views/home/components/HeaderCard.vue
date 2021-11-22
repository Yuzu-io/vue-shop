<template>
  <div class="card">
    <div class="card_item" v-for="item in list" :key="item.svg">
      <el-card class="box-card">
        <svg-icon
          class="card_svg"
          :class="item.svg"
          :iconClass="item.svg"
        ></svg-icon>
        <div class="card_content">
          <div>{{ item.cardContent }}</div>
          <span>{{ item.cardData | numberFormat }}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import SvgIcon from '../../../svgIcon/index.vue'
export default {
  components: {
    SvgIcon
  },
  data () {
    return {
      list: [
        {
          svg: 'peoples',
          cardContent: 'New Visits',
          cardData: 102400
        },
        {
          svg: 'message',
          cardContent: 'Messages',
          cardData: 81212
        },
        {
          svg: 'money',
          cardContent: 'Purchases',
          cardData: 9280
        },
        {
          svg: 'shopping',
          cardContent: 'Shoppings',
          cardData: 13600
        }
      ]
    }
  },
  filters: {
    numberFormat (data) {
      return (
        data.toString().slice(0, data.toString().length - 3) +
        ',' +
        data.toString().substring(data.toString().length - 3)
      )
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  display: flex;
  justify-content: space-between;
}
.card_item {
  width: 25%;
  height: 108px;
  padding: 0 20px;
}
.box-card {
  height: 108px;
  /deep/.el-card__body {
    height: 100%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // cursor: pointer;
    &:hover {
      .peoples {
        background-color: #40c9c6;
        color: #fff;
      }
      .message {
        background-color: #36a3f7;
        color: #fff;
      }
      .money {
        background-color: #f4516c;
        color: #fff;
      }
      .shopping {
        background-color: #34bfa3;
        color: #fff;
      }
    }
  }
}
.card_svg {
  padding: 16px;
  margin: 0 0 0 14px;
  font-size: 48px;
  border-radius: 6px;
  transition: all 0.38s ease-out;
}
.peoples {
  color: #40c9c6;
}
.message {
  color: #36a3f7;
}
.money {
  color: #f4516c;
}
.shopping {
  color: #34bfa3;
}
.card_content {
  margin: 0 26px 0 0;
  div {
    line-height: 18px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    margin: 0 0 12px 0;
  }
  span {
    font-size: 20px;
    color: #666;
  }
}
@media screen and(max-width:1200px) {
  .card {
    flex-wrap: wrap;
    margin: 0;
  }
  .card_item {
    box-sizing: border-box;
    width: 50%;
    margin-bottom: 32px;
  }
}
@media screen and(max-width:768px) {
  .card {
    flex-wrap: wrap;
    margin: 0;
  }
  .card_item {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 32px;
  }
}
</style>
