<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar position-fixed bg-white flex-md-nowrap p-0 border-bottom w-100 z-2">
    <RouterLink class="navbar-brand" to="/admin"><img src="@/assets/images/logo.png" class="ms-2" alt="Logo" />
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
        <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu"
          aria-labelledby="sidebarMenuLabel">
          <div class="offcanvas-header">
            <img src="@/assets/images/logo.png" alt="Logo" />
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu"
              aria-label="Close"></button>
          </div>
          <div class="mt-lg-5 offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
            <ul class="nav flex-column">
              <li class="nav-item">
                <button
                  class="nav-link btn btn-toggle align-items-center rounded collapsed w-100 d-flex justify-content-between align-items-center link-dark"
                  data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                  <span>
                    <i class="gigacon gigacon-heart-double me-2"></i>Events</span>
                  <i class="gigacon gigacon-chevron-down"></i>
                </button>
                <div class="collapse" id="dashboard-collapse">
                  <ul class="btn-toggle-nav nav-link list-unstyled fw-normal py-1 small">
                    <li>
                      <RouterLink to="/admin/events" class="nav-link link-dark">Edit Events</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/admin/pending-events" class="nav-link link-dark">Pending Events <span class="badge rounded-circle text-bg-primary ms-1">3</span></RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/admin/add-event" class="nav-link link-dark">Add Event for Member</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/admin/sponsored" class="nav-link link-dark">Sponsored Ads</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/admin/homepage-listing" class="nav-link link-dark">Home Page Listings</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/admin/dg-home-listing" class="nav-link link-dark">DG Home Page Listings</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/admin/admin-logins" class="nav-link link-dark">Logins</RouterLink>
                    </li>
                  </ul>
                </div>

              </li>
              <li class="nav-item">
                <button
                  class="nav-link btn btn-toggle align-items-center rounded collapsed w-100 d-flex justify-content-between align-items-center link-dark"
                  data-bs-toggle="collapse" data-bs-target="#travel-collapse" aria-expanded="false">
                  <span>
                    <i class="gigacon gigacon-star-double me-2"></i>Travel Events</span>
                  <i class="gigacon gigacon-chevron-down"></i>
                </button>
                <div class="collapse" id="travel-collapse">
                  <ul class="btn-toggle-nav nav-link list-unstyled fw-normal py-1 small">
                    <li>
                      <RouterLink to="/admin/travel/travel-events" class="nav-link link-dark">Travel Events</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/admin/travel/travel-sponsored" class="nav-link link-dark">Travel SponsoredAds</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/admin/travel/travel-events-pending" class="nav-link link-dark">Travel Events Pending (0)</RouterLink>
                    </li>
                  </ul>
                </div>

              </li>
              <li class="nav-item">
                <button
                  class="nav-link btn btn-toggle align-items-center rounded collapsed w-100 d-flex justify-content-between align-items-center link-dark"
                  data-bs-toggle="collapse" data-bs-target="#clubs-collapse" aria-expanded="false">
                  <span>
                    <i class="gigacon gigacon-wink-mutual me-2"></i>Clubs</span>
                  <i class="gigacon gigacon-chevron-down"></i>
                </button>
                <div class="collapse" id="clubs-collapse">
                  <ul class="btn-toggle-nav nav-link list-unstyled fw-normal py-1 small">
                    <li>
                      <RouterLink to="/admin/clubs" class="nav-link link-dark">Clubs</RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/admin/pending-clubs" class="nav-link link-dark">Pending Clubs (0)</RouterLink>
                    </li>
                  </ul>
                </div>

              </li>
              <li class="nav-item">
                <button
                  class="nav-link btn btn-toggle align-items-center rounded collapsed w-100 d-flex justify-content-between align-items-center link-dark"
                  data-bs-toggle="collapse" data-bs-target="#mail-collapse" aria-expanded="false">
                  <span>
                    <i class="gigacon gigacon-envelope me-2"></i>Mail</span>
                  <i class="gigacon gigacon-chevron-down"></i>
                </button>
                <div class="collapse" id="mail-collapse">
                  <ul class="btn-toggle-nav nav-link list-unstyled fw-normal py-1 small">
                    <li>
                      <RouterLink to="/admin/create-event" class="nav-link link-dark">Pending Mail</RouterLink>
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
        <RouterView class="mt-4" />
      </main>
    </div>
  </div>
</template>