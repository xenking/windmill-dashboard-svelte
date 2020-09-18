<script>
  import {Route} from 'tinro';
  import Login from "./routes/pages/Login.svelte";
  import CreateAccount from "./routes/pages/CreateAccount.svelte";
  import ForgotPassword from "./routes/pages/ForgotPassword.svelte";
  import NotFound from "./routes/pages/NotFound.svelte";

</script>

<Route>
  <Route path="/pages/*">
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/create-account">
      <CreateAccount />
    </Route>
    <Route path="/forgot-password">
      <ForgotPassword />
    </Route>
  </Route>
  <Route>
    <slot />
  </Route>
  <Route fallback>
    <NotFound/>
  </Route>
</Route>

