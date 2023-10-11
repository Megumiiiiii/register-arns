<script>
  import { Route, router } from "tinro";
  import { address } from "./store.js";
  import Announcer from "./components/announcer.svelte";
  import Transition from "./components/transition.svelte";
  import Home from "./home.svelte";
  import Connect from "./connect.svelte";
  import Account from "./account.svelte";
  import AccountForm from "./accounts/form.svelte";
  import Notfound from "./404.svelte";
  import About from "./about.svelte";
  import Arns from "./arns/index.svelte";
  import Ant from "./arns/show.svelte";
  import Claim from "./arns/claim.svelte";
  import Widgets from "./widgets.svelte";
  import WidgetsSupport from "./widgets/support.svelte";
  import WidgetsBuild from "./widgets/build.svelte";
  import WidgetsHome from "./widgets/index.svelte";
  import Dashboard from "./dashboard.svelte";

  import not from "ramda/src/not";
  import isEmpty from "ramda/src/isEmpty";

  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
</script>

<Announcer />
<Transition>
  <Route path="/">
    <Home />
  </Route>
  <Route
    path="/learn"
    redirect="/notes/Xx8lQw1q9xOUn1mB7CMagKHgv8XUy9NxsrQLtfqZItY"
  />
  <Route path="/dashboard">
    <Dashboard />
  </Route>
  <Route path="/arns/*">
    {#if not(isEmpty($address))}
      <Route path="/claim">
        <Claim />
      </Route>
      <Route path="/:ant">
        <Ant />
      </Route>
      <Route path="/">
        <Arns />
      </Route>
      <Route fallback>
        <Arns />
      </Route>
    {:else}
      <Home />
    {/if}
  </Route>

  <Route path="/account/edit">
    {#if not(isEmpty($address))}
      <AccountForm />
    {:else}
      <Home />
    {/if}
  </Route>
  <Route path="/account">
    {#if not(isEmpty($address))}
      <Account />
    {:else}
      <Home />
    {/if}
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/preview">
    <Preview />
  </Route>
  
  <Route path="/widgets">
    <WidgetsHome />
  </Route>
  <Route path="/widgets/support">
    <WidgetsSupport />
  </Route>
  <Route path="/widgets/build">
    <WidgetsBuild />
  </Route>
  <Route path="/404">
    <Notfound />
  </Route>
</Transition>
