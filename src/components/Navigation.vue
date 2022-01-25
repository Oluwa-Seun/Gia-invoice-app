<template>
  <header class="flex">
      <div class="branding flex">
          <img src="@/assets/file-invoice-dollar-solid.png" alt="">
      </div>
  </header>
</template>

<script>
export default {
    name: "navigation"
}
</script>

<style lang="scss" scoped>
header {
    z-index: 99;
    flex-direction: row;
   background-color: #7458e4;
    @media(min-width: 900px) {
        min-height: 100%;
        min-width: 90px;
        flex-direction: column;
        border-radius: 0 20px 20px;
    }
    .branding {
        border-radius: 0 20px 20px 0;
        background-color: #080808;
         
        padding: 24px;
        @media(min-width: 900px){
            width: 100%; 
        }
        img {
            width: auto;
            height: 50px;
        }
    }
}
</style>>

