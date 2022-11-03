<template>
  <header
    class="flex justify-between h-[102px] items-center tpl-container py-0"
  >
    <div
      class="
        font-bold
        text-4xl
        bg-gradient-to-br
        from-pink
        to-purple
        text-transparent
        bg-clip-text
      "
    >
      Webtimally
    </div>
    <div class="hidden sm:block">
      <nav>
        <ul class="flex gap-12">
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="services">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center gap-10">
      <div>
        <a class="tpl-button" href="#"
          >Call me<i class="fa-solid fa-arrow-right hidden sm:inline-block"></i
        ></a>
      </div>
    </div>
  </header>
</template>