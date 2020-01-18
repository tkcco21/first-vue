<template lang="html">
  <div class="loading">
    <div class="loading-body" />
    <div class="loading-content">
      <p class="loading-text">Loading now...</p>
      <p class="loading-description">
        諸事情により、この読み込みはかなり時間がかかる場合があります。<br>
        辛抱強くお待ちいただけると幸いです。
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style lang="postcss" scoped>
.loading {
  padding: 30px 0;
  text-align: center;
  &-body {
    margin: 0 auto;
    width: 40px;
    height: 40px;
    border: 5px solid var(--lightGray);
    border-top: 5px solid var(--keyColor);
    border-radius: 50%;
    animation: rotate 1.5s infinite;
  }
  &-content {
    margin-top: 10px;
    font-size: 16px;
  }
  &-text {
    color: var(--keyColor);
  }
  &-description {
    margin: 10px;
  }
}
@keyframes rotate {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
</style>
