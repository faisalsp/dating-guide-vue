<script setup lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, ref } from 'vue'
import InputField from '@/components/InputField.vue'
import AjaxInput from '@/components/AjaxInput.vue'

defineComponent({ name: 'CreateEditClub' })
interface Options {
  states: { [key: string]: string };
}

const clubPick = ref('1')

const route = useRoute()
// const is_admin = route.matched[0].path === '/admin' ? true : false
const statex = ref("Victoria")
const searchQuery = defineModel()
const idParam = Number(route.params.id)
// const emailParam = route.query.email

const options = ref<Options>({
  states: {
    "New South Wales": "NSW",
    "Victoria": "VIC",
    "South Australia": "SA",
    "Northern Territory": "NT",
    "Queensland": "QLD",
    "Australian Capital Territory": "ACT",
    "Western Australia": "WA",
    "Tasmania": "TAS"
  }
});

</script>
<template>
  <div class="">
    <div class="row g-5">
      <div class="col-12 col-lg-8">
        <form action="" method="post" class="">
          <div class="mb-3">
            <h1 class="mb-0 fw-bold h2">{{ idParam ? 'Edit Club 1' : 'Submit a Club' }} </h1>
          </div>
          <div class="mb-3">
            <div class="mb-2">
              <h2 class="fw-bold h4">Listing type</h2>
            </div>
            <div class="bg-amber p-4">
              <InputField id="event-1" type="radio" v-model="clubPick" value="1" nowrapper
                title="Short Listing (only club listing displayed, club website is required)." checked />
              <InputField id="event-2" type="radio" v-model="clubPick" value="2" nowrapper
                title="Full Details (club listing and club details displayed)." />
            </div>
          </div>
          <h2 class="h4 fw-bold mb-3">
            Club Listing
          </h2>
          <InputField id="clubName" title="Club Name*" type="text" className="w-full" required />
          <div class="mb-3">
            <span class="d-block mb-2 fw-medium">Club Type*</span>
            <div class="d-flex gap-3 align-items-center">
              <div>
                <InputField id="adlut" title="Adult for Men & Women" type="checkbox" nowrapper />
                <InputField id="gay" title="Gay" type="checkbox" nowrapper />
                <InputField id="lesbian" title="Lesbian" type="checkbox" nowrapper />
                <InputField id="singles" title="Singles" type="checkbox" nowrapper />
                <InputField id="swingers" title="Swingers" type="checkbox" nowrapper />
              </div>
              <div>
                <InputField id="fetish" title="Fetish" type="checkbox" nowrapper />
                <InputField id="glb" title="Gay & Lesbian" type="checkbox" nowrapper />
                <InputField id="pubs" title="Pubs, Nightclubs & Music" type="checkbox" nowrapper />
                <InputField id="soc" title="Social Clubs" type="checkbox" nowrapper />
                <InputField id="wo" title="Women Only" type="checkbox" nowrapper />
              </div>
            </div>
          </div>
          <InputField id="service" title="Service*" type="text" className="w-full"
            placeholder="(Example: Swingers Parties)" required />
          <InputField id="disLocation" title="Display location*" type="text" className="w-full"
            helper="(Full address is optional, minimum required is City or Town)" required />
          <InputField id="gmapLocation" title="Google Map location" type="text" className="w-full" />
          <div class="mb-3">
            <div class="row">
              <div class="col-6">
                <InputField id="states" v-model="statex" title="State*" :data="options.states" type="select" required nowrapper usekey />
              </div>
              <div class="col-6">
                <AjaxInput id="suburbs" :state="statex" method="POST" type="text" title="Nearest Region*" v-model="searchQuery"
                  param="suburbs" ajaxurl="/suburbs.json" nowrapper required />
              </div>
            </div>
          </div>

          <InputField id="listingDesc" title="Listing Description*" type="textarea" required />
          <InputField id="website" :title="clubPick === '1' ? 'Website*' : 'Website'" type="text" className="w-full"
            :required="clubPick === '1' ? true : false" />
          <div v-if="clubPick === '2'">
            <hr class="border-2 mb-3">
            <h2 class="h4 fw-bold mb-3">
              Full Details
            </h2>
            <InputField id="contact" title="Contact" rows="2" type="textarea" />
            <InputField id="email" title="Email" type="email" />
            <InputField id="detailheader" title="Details Header*" type="textarea" required />
            <InputField id="detaildesc" title="Details Description*" type="textarea" rows="8" required />
          </div>
          <hr class="border-2 mb-3">
          <div class="mb-3">
            <span class="d-block mb-2 fw-medium">Display on:</span>
            <InputField id="ammsite" title="AdultMatchMaker.com.au" value="AdultMatchMaker.com.au" type="checkbox"
              nowrapper />
            <InputField id="gmmsite" title="GayMatchMaker.com.au" value="GayMatchMaker.com.au" type="checkbox"
              nowrapper />
            <InputField id="lmmsite" title="LesbianMatchMaker.com.au" value="LesbianMatchMaker.com.au" type="checkbox"
              nowrapper />
            <InputField id="lovesite" title="LoveClub.com.au" value="LoveClub.com.au" type="checkbox" nowrapper />
            <InputField id="aussiesite" title="AussieMatchMaker.com.au" value="AussieMatchMaker.com.au" type="checkbox"
              nowrapper />
          </div>
          <InputField id="listimg" title="Listing Image*" type="file" accept="image/jpeg, image/jpg, image/gif" required
            helper="(image height:85, width:135, format: gif or jpeg)" />
          <InputField id="detailimg" title="Details image" v-if="clubPick === '2'" type="file"
            accept="image/jpeg, image/jpg, image/gif"
            helper="(max height:400px, max width:563px, format: gif or jpeg" />

          <div class="d-flex gap-3 justify-content-end">
            <RouterLink to="/admin/clubs" class="btn text-center">Cancel</RouterLink>
            <button type="submit" class="btn btn-primary text-center">{{idParam ? 'Save' : 'Submit Club'}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>