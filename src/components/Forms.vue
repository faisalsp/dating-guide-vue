<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import Input from './Input.vue';
import AjaxInput from './AjaxInput.vue';

const route = useRoute()
const router = useRouter()

const emailParam = route.query.email

// const isValidEmail = (param) => {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//   return emailRegex.test(param)
// }

// if (!isValidEmail(emailParam)) {
//   router.push({ name: 'index' })
// }

const events = ref([
  "Speed Dating",
  "Singles Events",
  "Social Activities",
  "Adult Events",
  "Swingers Parties",
  "Gay Men's Events",
  "Lesbian Events",
  "BDSM Kink Events",
  "Pubs, Nightclubs",
  "Adult Events Women",
  "Gay & Lesbian Events",
]);

const listMonths = ref(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
const currentDate = new Date()
const curDate = ref(currentDate.getDate())
const curMonth = ref(listMonths.value[currentDate.getMonth()])
const curYear = ref(currentDate.getFullYear())

const getTimes = (start, end) => {
  start = parseInt(start) * 2 + (+start.slice(-2) > 0);
  end = parseInt(end) * 2 + (+end.slice(-2) > 0) + 1;
  return Array.from({ length: end - start }, (_, i) =>
    [i + start >> 1, (i + start) % 2 * 30]
  ).map(([h, m]) =>
    `${h % 12 || 12}:${m} ${"AP"[+(h > 11)]}M`.replace(/\b\d\b/g, "0$&")
  );
};

const event = ref({
  eventName: '',
  eventDesc: '',
  fullEventDesc: '',
  stateLoc: 'New South Wales',
  suburbLoc: '',
  dateVal: curDate.value,
  website: '',
  bookingUrl: '',
  getTime: null,
  setTime1: null,
  setTime2: null,
  eventPick: '1',
  monthVal: curMonth.value,
  yearVal: curYear.value,
  eventType: null,
  occur1: false,
  ageStart: 18,
  ageEnd: 18,
  occur2: false,
})


const options = ref({
  states: {
    "New South Wales": "NSW",
    "Victoria": "VIC",
    "South Australia": "SA",
    "Northern Territory": "NT",
    "Queensland": "QLD",
    "Australian Capital Territory": "ACT",
    "Western Australia": "WA",
    "Tasmania": "TAS"
  },
  days: [...Array(31)].map((a, b) => 1 + b),
  months: listMonths.value,
  years: [...Array(6)].map((a, b) => new Date().getFullYear() + b),
  times: getTimes("0:00", "24:00"),
  ages: [...Array(83)].map((a, b) => 18 + b),
})

const getDay = computed(() => {
  let dateString = `${event.value.dateVal} ${event.value.monthVal} ${event.value.yearVal}`
  const dateFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' })
  return dateFormatter.format(new Date(dateString))
})

</script>
<template>
  <div class="">
    <div class="row g-5">
      <div class="col-12 col-lg-8">
        <form action="" method="post" class="">
          <div class="mb-3">
            <h1 class="mb-0 fw-bold h2">Submit an Event</h1>
            <small>Please enter your event details below:</small>
          </div>
          <div class="mb-3">
            <div class="mb-2">
              <h2 class="fw-bold h4">Event Listing type</h2>
            </div>
            <div class="bg-amber p-4">
              <Input id="event-1" name="eventpick" type="radio" v-model="event.eventPick" value="1" nowrapper
                title="Event listing and full event details to appear on this website." checked />
              <Input id="event-2" name="eventpick" type="radio" v-model="event.eventPick" value="2" nowrapper
                title="Event listing which links directly to your website that has full details of your event." />
            </div>
          </div>
          <h2 class="h4 fw-bold mb-3" v-if="event.eventPick == '1'">
            Event Listing & Full Event Details
          </h2>
          <h2 class="text-xl fw-bold mb-3" v-if="event.eventPick == '2'">
            Event Listing that Links to My Website
          </h2>
          <Input id="eventName" title="Event Name*" type="text" className="w-full" v-model="event.eventName"
            placeholder="Event name" required />

          <Input id="eventdesc" title="Short Description of Event*" type="textarea" v-model="event.eventDesc"
            helper="Maximum 3 lines, no emoji" required limit="200" />

          <div class="mb-3">
            <div class="mb-2">
              <h2 class="fw-bold h4">Venue Location*</h2>
            </div>
            <div class="bg-amber p-3">
              <div class="row">
                <div class="col-6">
                  <Input id="states" title="State*" :data="options.states" type="select" v-model="event.stateLoc"
                    required nowrapper usekey />
                </div>
                <div class="col-6">
                  <Input id="states" title="City/Town/Suburb*" type="text" placeholder="City/Town/Suburb" v-model="event.suburbLoc"
                    required nowrapper />
                  <!-- <AjaxInput id="suburb" type="text" title="City/Town/Suburb*" placeholder="City/Town/Suburb"
                    v-model="event.suburbLoc" data="scc_name" param="results"
                    ajaxurl="https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-australia-state-suburb/records?select=scc_name&where=suggest(scc_name%2C%20%22north%22)%20AND%20ste_name%3D%22New%20South%20Wales%22&group_by=scc_name"
                    required /> -->
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-2">
              <h2 class="fw-bold h4">Date & Time of Event*</h2>
            </div>
            <div class="bg-amber p-3">
              <div class="row">
                <div class="col-6">
                  <span class="d-block mb-2 small fw-medium text-gray-900">Date*</span>
                  <div class="d-flex gap-1">
                    <Input id="day" type="select" v-model="event.dateVal" :data="options.days" :selected="curDate"
                      required nowrapper />
                    <Input id="month" type="select" v-model="event.monthVal" :data="options.months" :selected="curMonth"
                      required nowrapper />
                    <Input id="year" type="select" v-model="event.yearVal" :data="options.years" :selected="curYear"
                      required nowrapper />
                  </div>
                </div>
                <div class="col-6">
                  <Input id="time" title="Start Time*" type="select" v-model="event.getTime" :data="options.times"
                    required nowrapper />
                </div>
              </div>
            </div>
          </div>
          <Input id="website" :title="event.eventPick == '2' ? 'Website URL*' : 'Website URL'" type="text"
            v-model="event.website" placeholder="https://" :required="event.eventPick == '2'" />

          <Input id="event" title="Event Type*" type="select" v-model="event.eventType" :data="events" required />

          <div class="mb-3">
            <div class="row">
              <div class="col">
                <span class="d-block mb-2 fw-medium">Suitable age range for this event*</span>
                <div class="d-flex gap-3 align-items-center">
                  <Input type="select" v-model="event.ageStart" :data="options.ages" required nowrapper />
                  <span>To</span>
                  <Input type="select" v-model="event.ageEnd" :data="options.ages" required nowrapper />
                </div>
              </div>
              <div class="col">
                <span class="d-block mb-2 fw-medium">Choose where to display your event</span>
                <Input id="ammsite" title="AdultMatchMaker.com.au" value="AdultMatchMaker.com.au" type="checkbox"
                  nowrapper />
                <Input id="gmmsite" title="GayMatchMaker.com.au" value="GayMatchMaker.com.au" type="checkbox"
                  nowrapper />
                <Input id="lmmsite" title="LesbianMatchMaker.com.au" value="LesbianMatchMaker.com.au" type="checkbox"
                  nowrapper />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="mb-2">
              <h2 class="h4 mb-0">Recurring Dates</h2>
              <small class="fst-italic">If this event reoccurs include other dates</small>
            </div>
            <span class="d-block mb-2 fw-medium">Date & Time <small>(Check box(s)
                to enter other dates to include)</small></span>
            <div class="d-flex gap-1 align-items-center mb-2">
              <Input id="occur-1" v-model="event.occur1" type="checkbox" nowrapper />
              <Input type="select" :selected="curDate" :data="options.days" nowrapper forceselect />
              <Input type="select" :selected="curMonth" :data="options.months" nowrapper forceselect />
              <Input type="select" :selected="curYear" :data="options.years" nowrapper forceselect />
              @
              <Input type="select" v-model="event.setTime1" :data="options.times" :required="event.occur1" nowrapper />

            </div>
            <div class="d-flex gap-1 align-items-center mb-2">
              <Input id="occur-2" v-model="event.occur2" type="checkbox" nowrapper />
              <Input type="select" :selected="curDate" :data="options.days" nowrapper forceselect />
              <Input type="select" :selected="curMonth" :data="options.months" nowrapper forceselect />
              <Input type="select" :selected="curYear" :data="options.years" nowrapper forceselect />
              @
              <Input type="select" v-model="event.setTime2" :data="options.times" :required="event.occur2" nowrapper />
            </div>
          </div>
          <div v-if="event.eventPick == '1'">
            <hr class="border-2 mb-3">
            <div class="mb-3">
              <h2 class="fw-medium h4">Full Event Details</h2>
            </div>
            <Input id="fulleventname" title="Event Name" type="text" placeholder="Event name" />
            <Input id="fulleventdesc" title="Event Description" type="textarea" v-model="event.fullEventDesc"
              helper="Add detailed information about your event, no emoji" />
            <Input id="venueaddress" title="Venue & Address*" type="textarea" helper="Max 200 characters" limit="200"
              required />
            <Input id="dresscode" rows="5" title="Dress code" type="textarea" helper="Max 500 characters" limit="500"
              required />
            <Input id="rules" rows="5" title="Rules" type="textarea" helper="Max 500 characters" limit="500" required />
            <Input id="bookingurl" v-model="event.bookingUrl" title="Booking URL" type="text" placeholder="https://" />
            <Input v-if="event.bookingUrl === ''" id="bookings" title="Bookings" type="textarea" limit="200"
              helper="Max 200 characters" />
            <Input id="ctemail" title="Contact Email" type="email" placeholder="john_doe@mail.com" />

            <Input id="otcontact" title="Other Contact Info" type="textarea" helper="Max 200 characters" />
            <Input id="cost" title="Cost*" type="textarea" helper="Max 200 characters" required />
            <Input id="masthead" title="MastHead Image" type="file" accept="image/jpeg, image/jpg"
              helper="Landscape banner, Max width 580px, Max height 170px, JPG format, file size less than 30k" />
            <Input id="featured" title="Featured Event on Contact Us" type="checkbox" className="mb-2" nowrapper />
            <Input id="profile" title="Show this Linked to My Profile" type="checkbox" className="mb-2" nowrapper />
            <Input id="share" title="Share this on Facebook/Twitter" type="checkbox" className="mb-3" nowrapper />
          </div>
          <div class="d-block d-lg-none">
            <h2 class="text-xl fw-bold mb-2">Event Listing Preview</h2>
            <div class="border border-gray-300 p-3 mb-3">
              <a href="#" class="d-block h4 underline text-primary" v-if="event.eventName">{{ event.eventName }}</a>
              <small class="text-xs fw-bold">{{ getDay }}, {{ event.dateVal }} {{ event.monthVal }} {{ event.yearVal }}
                <span v-if="event.getTime">({{
                  event.getTime }})</span></small>
              <p v-if="event.eventDesc" class="mb-0">{{ event.eventDesc }}</p>
              <p class="small text-success mb-0" v-if="event.eventType">Event Type: <span class="fw-medium text-black">{{
                event.eventType }}</span></p>
              <p class="small text-success mb-0" v-if="event.ageStart && event.ageEnd">Age Group: <span
                  class="fw-medium text-black">{{ event.ageStart }} - {{ event.ageEnd }}</span></p>
              <p class="small text-success mb-0">Location: <span class="fw-medium text-black">{{ event.stateLoc
                  }}<span v-if="event.suburbLoc">, {{ event.suburbLoc }}</span></span></p>
              <a href="#" target="_blank" v-if="event.eventPick == '1'" class="text-blue-700 underline text-xs">More
                Info</a>
            </div>
            <h2 class="text-lg mb-2" v-if="emailParam">Event for: <span class="block italic fw-bold">{{ emailParam
                }}</span>
            </h2>
          </div>
          <div class="d-flex gap-3 justify-content-end">
            <RouterLink to="/" class="btn text-center">Cancel</RouterLink>
            <button type="submit" class="btn btn-primary text-center">Submit
              Event</button>
          </div>
        </form>
      </div>
      <div class="d-none d-lg-block col-12 col-lg-4 position-sticky align-self-baseline" style="top: 60px">
        <h4 class="text-xl fw-bold mb-2">Event Listing Preview</h4>
        <div class="border border-gray-300 p-3 mb-3">
          <a href="#" class="d-block h4 underline text-primary" v-if="event.eventName">{{ event.eventName }}</a>
          <small class="text-xs fw-bold">{{ getDay }}, {{ event.dateVal }} {{ event.monthVal }} {{ event.yearVal }}
            <span v-if="event.getTime">({{
              event.getTime }})</span></small>
          <p v-if="event.eventDesc" class="mb-0">{{ event.eventDesc }}</p>
          <p class="small text-success mb-0" v-if="event.eventType">Event Type: <span class="fw-medium text-black">{{
            event.eventType }}</span></p>
          <p class="small text-success mb-0" v-if="event.ageStart && event.ageEnd">Age Group: <span
              class="fw-medium text-black">{{ event.ageStart }} - {{ event.ageEnd }}</span></p>
          <p class="small text-success mb-0">Location: <span class="fw-medium text-black">{{ event.stateLoc }}<span
                v-if="event.suburbLoc">, {{ event.suburbLoc }}</span></span></p>
          <a href="#" target="_blank" v-if="event.eventPick == '1'" class="text-blue-700 underline text-xs">More
            Info</a>
        </div>
        <h2 class="text-lg mb-2" v-if="emailParam">Event for: <span class="block italic fw-bold">{{ emailParam
            }}</span>
        </h2>
      </div>
    </div>
  </div>
</template>