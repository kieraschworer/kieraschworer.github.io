<template>

<head>
<title>Velocity Wheels</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
<style>
</style>
</head>
<!--Website Content-->
<body>
  <main>
  <div id="app" class="bg-dark">
    <Navigation />
    <Welcome />
    <Home />
    <Inventory />
    <Contact />
    <FooterSection />
  </div>
</main>
</body>

</template>

<script>
import Navigation from './components/Navigation.vue'
import Welcome from './components/Welcome.vue'
import Home from './components/Home.vue'
import Inventory from './components/Inventory.vue'
import Contact from './components/Contact.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    Navigation, Welcome, Home, Inventory, Contact, FooterSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
