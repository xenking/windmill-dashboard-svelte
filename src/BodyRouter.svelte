<script>
  import {Route} from 'tinro';
  import Dashboard from "./routes/Dashboard.svelte";
  import Forms from "./routes/Forms.svelte";
  import Cards from "./routes/Cards.svelte";
  import Buttons from "./routes/Buttons.svelte";
  import Charts from "./routes/Charts.svelte";
  import Modals from "./routes/Modals.svelte";
  import Tables from "./routes/Tables.svelte";
  import Blank from "./routes/Blank.svelte";
  import NotFound from "./routes/pages/NotFound.svelte";

</script>

<Route>
  <Route path="/">
    <Dashboard />
  </Route>
  <Route path="/forms">
    <Forms />
  </Route>
  <Route path="/cards">
    <Cards />
  </Route>
  <Route path="/charts">
    <Charts />
  </Route>
  <Route path="/buttons">
    <Buttons />
  </Route>
  <Route path="/modals">
    <Modals />
  </Route>
  <Route path="/tables">
    <Tables />
  </Route>
  <Route path="/pages/blank">
    <Blank />
  </Route>
  <Route path="/pages/404">
    <NotFound />
  </Route>
  <Route fallback>
    <NotFound />
  </Route>
</Route>