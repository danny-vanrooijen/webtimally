<template>
  <header class="flex justify-between h-[102px] items-center tpl-container py-0">
    <a
      href="/"
      class="w-48 font-bold text-4xl bg-gradient-to-br from-pink to-purple text-transparent bg-clip-text"
    >
      Webtimally
    </a>
    <div class="hidden sm:block">
      <nav>
        <ul class="flex gap-12">
          <li><a href="/">Home</a></li>
          <li><a href="about">About us</a></li>
          <li><a href="services">Our services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="w-48 flex justify-end gap-10">
      <div>
        <a
          class="tpl-button"
          href="tel:+4524522110"
        >
          Call us<i class="fa-solid fa-arrow-right hidden sm:inline-block"></i>
        </a>
      </div>
    </div>
  </header>
</template>