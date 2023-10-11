<script>
  let version = __APP_VERSION__;
</script>

<div class="navbar bg-base-100 container mx-auto">
  <div class="flex-1">
    <a
      href="/"
      class="normal-case txt-gradient  
    font-extrabold text-2xl inline-block tracking-wide"
      >AAAAAAAAAA</a
    >
  </div>

  <nav class="flex-none">
    <ul class="hidden md:inline-flex gap-2 items-center menu menu-horizontal">
      <li>
        <a href="/dashboard">Home</a>
      </li>
      <li>
        <a href="/arns">ArNS</a>
      </li>
      <li>
        <a href="/account">Account</a>
      </li>
    </ul>
  </nav>
</div>

<style>
  nav ul li a {
    @apply rounded-full px-4 py-2 font-semibold;
  }
  nav ul li a:hover {
    @apply bg-gray-100 shadow-sm;
  }
  nav ul li .gradient {
    @apply p-[2px] drop-shadow-sm;
  }
  nav ul li .gradient:hover {
    @apply p-[2px] drop-shadow-md;
  }
</style>
