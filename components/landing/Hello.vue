<template>
  <section class="w-full overflow-hidden pb-32">
    <div class="my-20">
      <h3
        style="width: 1940px"
        class="relative left-44 text-7xl font-bold text-primary"
      >
        HELLO OLÁ HALLO SALUT CIAO HELO Dia duit
      </h3>
      <h3
        style="width: 1940px"
        class="relative -left-44 text-7xl font-bold text-primary"
      >
        HELLO OLÁ HALLO SALUT CIAO HELO Dia duit
      </h3>
    </div>
    <div class="w-11/12 flex justify-between m-auto">
      <div class="w-4/12">
        <p class="text-2xl text-primary">
          We are a new, small and creative studio based in Buenos Aires -
          Argentina. Formed by a multi-disciplinary team with more than 15 years
          of experience.
        </p>
        <br />
        <p class="text-2xl text-primary">
          Our work encompasses graphics, identity, editorial, environmental and
          websites. We help startups and established companies turn their ideas
          into incredible products and experiences.
        </p>
      </div>
      <div class="w-5/12 flex justify-end items-end">
        <div>
          <h3 class="text-7xl uppercase font-bold text-primary underline">
            say hello
          </h3>
          <div class="flex justify-between mt-5">
            <div class="flex">
              <CommonArrowDown :rotation="'-rotate-45'" />
              <a href="#" class="capitalize text-primary">dribble</a>
            </div>
            <div class="flex">
              <CommonArrowDown :rotation="'-rotate-45'" />
              <a href="#" class="capitalize text-primary">instagram</a>
            </div>
            <div class="flex">
              <CommonArrowDown :rotation="'-rotate-45'" />
              <a href="#" class="capitalize text-primary">behance</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
