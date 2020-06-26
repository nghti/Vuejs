<template>
  <div>
    <h2 class="fs-24">Slider</h2>
    <a-carousel autoplay>
      <div>
        <img src="https://picsum.photos/1280/160" alt="title" />
      </div>
      <div>
        <img src="https://picsum.photos/1280/160" alt="title" />
      </div>
      <div>
        <img src="https://picsum.photos/1280/160" alt="title" />
      </div>
      <div>
        <img src="https://picsum.photos/1280/160" alt="title" />
      </div>
    </a-carousel>
    <a-carousel autoplay>
      <div>
        <img src="http://placekitten.com/1280/160" alt="title" />
      </div>
      <div>
        <img src="http://placekitten.com/1280/160" alt="title" />
      </div>
      <div>
        <img src="http://placekitten.com/1280/160" alt="title" />
      </div>
      <div>
        <img src="http://placekitten.com/1280/160" alt="title" />
      </div>
    </a-carousel>
    <a-carousel autoplay>
      <div>
        <img src="https://picsum.photos/1280/160" alt="title" />
      </div>
      <div>
        <img src="https://picsum.photos/1280/160" alt="title" />
      </div>
      <div>
        <img src="https://picsum.photos/1280/160" alt="title" />
      </div>
      <div>
        <img src="https://picsum.photos/1280/160" alt="title" />
      </div>
    </a-carousel>
    <h2 class="fs-24" @click="toggleClass">Workplace</h2>
    <div v-show="this.toggle">
      <p>那是一种内在的东西，他们到达不了，也无法触及的</p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
      <p>
        段落示意：蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
        ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: true,
    };
  },
  methods: {
    toggleClass() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style lang="scss" scoped>
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
