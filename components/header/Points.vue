<template>
  <div
    class="
      flex flex-col
      w-20
      h-20
      justify-center
      items-center
      group
      cursor-pointer
    "
  >
    <div class="flex justify-between">
      <div
        v-for="(item, index) in 3"
        class="bg-cream w-1.5 h-1.5 m-px rounded-full relative z-10"
        :key="Math.floor(Math.random() * index)"
      ></div>
    </div>
    <div class="flex justify-between relative">
      <div
        v-for="(item, index) in 3"
        class="
          bg-cream
          w-1.5
          h-1.5
          m-px
          rounded-full
          transition-all
          duration-300
          relative
        "
        :class="{
          'transform group-hover:scale-210 group-hover:z-50 group-hover:w-4 group-hover:h-4':
            index === 1,
        }"
        :key="Math.floor(Math.random() * index)"
      ></div>
    </div>
    <div class="flex justify-between">
      <div
        v-for="(item, index) in 3"
        class="bg-cream w-1.5 h-1.5 m-px rounded-full relative z-10"
        :key="Math.floor(Math.random() * index)"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-cream {
  background-color: #ffeed6;
}
</style>
