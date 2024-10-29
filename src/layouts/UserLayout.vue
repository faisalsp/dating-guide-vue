<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar position-fixed bg-white flex-md-nowrap p-0 border-bottom w-100 z-2">
    <RouterLink class="navbar-brand" to="/user"><img src="@/assets/images/logo.png" class="ms-2" alt="Logo" />
    </RouterLink>

    <ul class="navbar-nav flex-row d-md-none">

      <li class="nav-item text-nowrap">
        <button class="nav-link px-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i class="gigacon gigacon-hamburger"></i>
        </button>
      </li>
    </ul>
  </header>

  <div class="container-fluid">
    <div class="row">
      <div class="h-100 sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
        <div class="offcanvas-md offcanvas-end bg-body-tertiary overflow-y-auto h-100" tabindex="-1" id="sidebarMenu"
          aria-labelledby="sidebarMenuLabel">
          <div class="offcanvas-header">
            <img src="@/assets/images/logo.png" alt="Logo" />
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu"
              aria-label="Close"></button>
          </div>
          <div class="mt-lg-5 offcanvas-body d-md-flex flex-column p-0 pt-lg-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <RouterLink class="nav-link d-flex align-items-center gap-2 link-dark" aria-current="page" to="/user">
                  <i class="gigacon gigacon-user"></i>
                  My Account
                </RouterLink>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link btn btn-toggle align-items-center rounded collapsed w-100 d-flex justify-content-between align-items-center link-dark"
                  data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                  <span>
                    <i class="gigacon gigacon-article me-2"></i>Advertisers</span>
                  <i class="gigacon gigacon-chevron-down"></i>
                </button>
                <div class="collapse" id="dashboard-collapse">
                  <ul class="btn-toggle-nav nav-link list-unstyled fw-normal py-1 small">
                    <li>
                      <RouterLink to="/user/events" class="nav-link link-dark">Event List
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/user/create-event" class="nav-link link-dark">Submit an Event
                      </RouterLink>
                    </li>
                  </ul>
                </div>

              </li>

            </ul>

            <hr class="my-3">

            <ul class="nav flex-column mt-auto">
              <li class="nav-item">
                <RouterLink class="nav-link link-dark d-flex align-items-center gap-2" to="/login">
                  <i class="gigacon gigacon-log-out"></i>
                  Sign out
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 my-5">
        <RouterView class="container mx-auto py-3 mt-4" />
      </main>
    </div>
  </div>
</template>