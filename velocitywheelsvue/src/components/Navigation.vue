<template>

<!--Navbar-->
<nav class="navbar navbar-expand-sm bg-info navbar-light" id="welcomesection">
<a class="navbar-brand" href="#welcomesection">Velocity Wheels</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link text-body" href="#homesection">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-body" href="#inventorysection">Inventory</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-body" href="#contactsection">Contact</a>
    </li>    
  </ul>
</div>  
</nav>

</template>

<script>
export default {
name: 'Navigation',
props: {
  msg: String
}
}
</script>