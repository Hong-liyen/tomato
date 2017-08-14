<template>
  <nav class="navbar navbar-default navbar-fixed-top navbar-toggleable-md" role="navigation">
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#"><img src="../assets/logo.png" alt="">Tomato Red</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" :to="{path: '/helloo'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{path: '/category'}">Category</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{path: '/food'}">Food</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{path: '/qa'}">Q&A</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{path: '/bloggers'}">Bloggers</router-link>      
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
