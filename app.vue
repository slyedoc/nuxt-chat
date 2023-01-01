


<template>
  
  <div class="flex flex-col min-h-screen bg-primary text-primary ">
    <Navbar class="bg-secondary"/>
    <main class="flex-1 mt-8">
        <NuxtPage />
    </main>
    <AuthenticationStatus />
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>