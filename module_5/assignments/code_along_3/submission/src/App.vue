<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/product">Product</router-link>
    <router-link to="/settings">Settings</router-link>
  </nav>

  <router-view />
</template>

<script>
export default {

}
</script>

<style>
  nav {
    background: plum;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    padding: 20px 40px;
  }

  a {
    margin-right: 20px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    color: whitesmoke;
  }

  a:hover {
    color: purple;
    transition: 0.3s;
  }
</style>
