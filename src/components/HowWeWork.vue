<template>
  <section class="how-we-work bg-black text-white py-20">
    <div class="tpl-container tpl-grid mb-12">
      <div class="col-span-9">
        <h2 class="text-white">How we are working</h2>
      </div>
    </div>
    <div class="tpl-container tpl-grid sm:divide-x divide-grey-900">
      <div class="col-span-12 sm:col-span-6 sm:mr-5">
        <ul class="grid gap-6">
          <li>
            <label for="how-we-work-1" class="flex items-center cursor-pointer">
              <div class="w-12 sm:w-20 shrink-0">
                <div
                  class="
                    w-10
                    h-10
                    sm:w-16 sm:h-16
                    rounded-full
                    grid
                    place-items-center
                    text-xl
                    sm:text-2xl
                    p-0
                  "
                >
                  <mark>01</mark>
                </div>
              </div>
              <div class="pl-2">
                <h3 class="text-white">Product research</h3>
                <p
                  class="
                    line-clamp-1
                    bg-gradient-to-br
                    from-white
                    to-black
                    text-transparent
                    bg-clip-text
                  "
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </p>
              </div></label
            >
          </li>
          <li>
            <label for="how-we-work-2" class="flex items-center cursor-pointer">
              <div class="w-12 sm:w-20 shrink-0">
                <div
                  class="
                    w-10
                    h-10
                    sm:w-16 sm:h-16
                    rounded-full
                    grid
                    place-items-center
                    text-xl
                    sm:text-2xl
                    tpl-button tpl-button--border
                    border-2
                    p-0
                  "
                >
                  <mark>02</mark>
                </div>
              </div>
              <div class="pl-2">
                <h3 class="text-white">Agreement</h3>
                <p
                  class="
                    line-clamp-1
                    bg-gradient-to-br
                    from-white
                    to-black
                    text-transparent
                    bg-clip-text
                  "
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </p>
              </div></label
            >
          </li>
          <li>
            <label class="flex items-center cursor-pointer">
              <div class="w-12 sm:w-20 shrink-0">
                <div
                  class="
                    w-10
                    h-10
                    sm:w-16 sm:h-16
                    rounded-full
                    grid
                    place-items-center
                    text-xl
                    sm:text-2xl
                    p-0
                  "
                >
                  <mark>03</mark>
                </div>
              </div>
              <div class="pl-2">
                <h3 class="text-white">Conditions</h3>
                <p
                  class="
                    line-clamp-1
                    bg-gradient-to-br
                    from-white
                    to-black
                    text-transparent
                    bg-clip-text
                  "
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </p>
              </div></label
            >
          </li>
        </ul>
      </div>
      <div class="col-span-12 sm:col-span-6 sm:-ml-5 sm:pl-10">
        <input
          id="how-we-work-1"
          name="how-we-work"
          class="hidden"
          type="radio"
          checked
        />
        <div class="hidden">
          <div class="tpl-image aspect-w-16 aspect-h-6">
            <img src="http://placeimg.com/1920/800/nature" alt="" />
          </div>
          <div class="prose text-white text-lg mt-6">
            <h3 class="text-white text-2xl">Product research</h3>
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
            <img src="http://placeimg.com/1920/800/tech" alt="" />
          </div>
          <div class="prose text-white text-lg mt-6">
            <h3 class="text-white text-2xl">Agreement</h3>
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