<template>
  <section class="how-we-work bg-black py-20 text-white">
    <div class="tpl-container tpl-grid mb-12">
      <div class="col-span-9">
        <h2 class="text-white">How we are working</h2>
      </div>
    </div>
    <div class="tpl-container tpl-grid divide-grey-900 md:divide-x">
      <div class="col-span-12 md:col-span-6 md:mr-5">
        <ul class="grid gap-6">
          <li>
            <label
              for="how-we-work-1"
              class="flex cursor-pointer items-center"
            >
              <div class="w-12 shrink-0 md:w-20">
                <div
                  class="grid h-10 w-10 place-items-center rounded-full p-0 text-xl md:h-16 md:w-16 md:text-2xl"
                >
                  <mark>01</mark>
                </div>
              </div>
              <div class="pl-2">
                <h3 class="text-white">Product research</h3>
                <p
                  class="bg-gradient-to-br from-white to-black bg-clip-text text-transparent line-clamp-1"
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </p>
              </div></label
            >
          </li>
          <li>
            <label
              for="how-we-work-2"
              class="flex cursor-pointer items-center"
            >
              <div class="w-12 shrink-0 md:w-20">
                <div
                  class="tpl-button tpl-button--border grid h-10 w-10 place-items-center rounded-full border-2 p-0 text-xl md:h-16 md:w-16 md:text-2xl"
                >
                  <mark>02</mark>
                </div>
              </div>
              <div class="pl-2">
                <h3 class="text-white">Agreement</h3>
                <p
                  class="bg-gradient-to-br from-white to-black bg-clip-text text-transparent line-clamp-1"
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </p>
              </div></label
            >
          </li>
          <li>
            <label class="flex cursor-pointer items-center">
              <div class="w-12 shrink-0 md:w-20">
                <div
                  class="grid h-10 w-10 place-items-center rounded-full p-0 text-xl md:h-16 md:w-16 md:text-2xl"
                >
                  <mark>03</mark>
                </div>
              </div>
              <div class="pl-2">
                <h3 class="text-white">Conditions</h3>
                <p
                  class="bg-gradient-to-br from-white to-black bg-clip-text text-transparent line-clamp-1"
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </p>
              </div></label
            >
          </li>
        </ul>
      </div>
      <div class="col-span-12 md:col-span-6 md:-ml-5 md:pl-10">
        <input
          id="how-we-work-1"
          name="how-we-work"
          class="hidden"
          type="radio"
          checked
        />
        <div class="hidden">
          <div class="tpl-image aspect-w-16 aspect-h-6">
            <img
              src="http://placeimg.com/1920/800/nature"
              alt=""
            />
          </div>
          <div class="prose mt-6 text-lg text-white">
            <h3 class="text-2xl text-white">Product research</h3>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
        <input
          id="how-we-work-2"
          name="how-we-work"
          class="hidden"
          type="radio"
        />
        <div class="hidden">
          <div class="tpl-image aspect-w-16 aspect-h-6">
            <img
              src="http://placeimg.com/1920/800/tech"
              alt=""
            />
          </div>
          <div class="prose mt-6 text-lg text-white">
            <h3 class="text-2xl text-white">Agreement</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
