<template>
<div>
  <b-navbar toggleable="lg" type="dark" class="navbar navbar-color">
    <b-navbar-brand tag="h1" class="mb-0">Takefumi's portfolio</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/history">History</b-nav-item>
        <b-nav-item to="/works">Works</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
