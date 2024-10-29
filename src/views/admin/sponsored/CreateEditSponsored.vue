<script setup lang="ts">
import InputField from '@/components/InputField.vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';


defineComponent({ name: 'CreateEditSponsored' })

const route = useRoute()
const idParam = Number(route.params.id)

</script>
<template>
  <div class="mx-auto">
    <h1 class="h2 font-bold mb-3">{{ idParam ? 'Edit' : 'Add' }} your Sponsored Ads</h1>
    <img src="https://placehold.co/400x100" class="w-100 mb-3" alt="">
    <h2>Chateau Vino Black Friday Angels & Demons</h2>
    <small class="d-block fw-bold mb-3">Friday, September 13, 2019 (8:30pm)</small>
    <p>Chateau Vino want you to show your angelic or naughty side at their infamous Angels and Demons Party weekend.
      Will you be wearing angelic white or devilish red? Are you sweet and angelic or do you harbour a demon inside?
      Either way you're in for a heavenly night of fun … or perhaps a devilish night of debauchery.</p>
    <p>Since 2011 swingers from all parts of Australia have been coming to Chateau Vino Swingers Club, the first council
      approved club on the Gold Coast to meet, party and play.</p>
    <p>It's a fun, friendly place to MEET, as we provide a safe and non-confrontational venue for swingers to live out
      their fantasies in absolute comfort.</p>
    <p>If you like to PARTY, then we are the "go to" venue in South East Queensland to mix it up with like minded
      "lifestylers". Many visitors from interstate and overseas love our extra large nightclub style dancefloor and
      lighting and sound system.</p>
    <p>Our indoor social areas are large, spacious and have intimate areas where "naughty talk" is the norm. The club is
      also air conditioned, and we can keep you cool in summer and warm in winter, when you want to shed unnecessary
      street clothes.</p>
    <p>Our outdoor area is covered and smokers have their very own area with piped music, where you won't feel left out
      of the action. We also have a pool table, which is a real ice breaker for the more shy couples and singles.</p>
    <div class="table-responsive">
      <table class="table auto">
        <tbody>
          <tr>
            <td><span class="fw-bold">Venue:</span></td>
            <td>Chateau Vino Adult Venue 22 Kamholtz Court, Molendinar</td>
          </tr>
          <tr>
            <td><span class="fw-bold">Cost:</span></td>
            <td>For more information visit our website.</td>
          </tr>
          <tr>
            <td><span class="fw-bold">Contact Info:</span></td>
            <td>You can contact us via email or phone 0403 219 293
              or via our AMM profile:
              <a
                href="http://www.adultmatchmaker.com.au/profiles/chateau.vino">http://www.adultmatchmaker.com.au/profiles/chateau.vino</a>
            </td>
          </tr>
          <tr>
            <td><span class="fw-bold">Bookings:</span></td>
            <td>Please call 0403 219 293 to book or talk to your hosts. Or visit our award winning website for more
              details.</td>
          </tr>
          <tr>
            <td><span class="fw-bold">Dress Code:</span></td>
            <td>Dress code is smart casual or sexy.</td>
          </tr>
          <tr>
            <td><span class="fw-bold">Rules:</span></td>
            <td>Normal club rules apply</td>
          </tr>
          <tr>
            <td><span class="fw-bold">Contact Email:</span></td>
            <td>
              <a
                href="mailto:marketing@chateauvino.com.au?subject=&amp;body=Inquiring%20about%20event%20on%20-%20Friday, September 13, 2019%20%20%208:30pm">email
                event organiser
              </a>
            </td>
          </tr>
          <tr>
            <td><span class="fw-bold">Website:</span></td>
            <td><a href="http://www.chateauvino.com.au" target="_blank">http://www.chateauvino.com.au</a></td>
          </tr>

        </tbody>
      </table>
    </div>
    <div class="max-w-md bg-amber p-3">
      <small>Please enter your sponsored Ad details below</small>
      <h2 class="h4">Sponsored Ad & Featured Ad (required)</h2>
      <InputField id="masthead" title="Update Sponsored Image" type="file" accept="image/jpeg, image/jpg"
        helper="Keep image or browse to update to new image" />
      <div>
        <span class="d-block mb-2 fw-medium">Choose where to display your sponsored ad</span>
        <InputField id="ammsite" title="AdultMatchMaker.com.au" value="AdultMatchMaker.com.au" type="checkbox"
          nowrapper />
        <InputField id="gmmsite" title="GayMatchMaker.com.au" value="GayMatchMaker.com.au" type="checkbox" nowrapper />
        <InputField id="lmmsite" title="LesbianMatchMaker.com.au" value="LesbianMatchMaker.com.au" type="checkbox"
          nowrapper />
      </div>
      <hr />
      <h2 class="h4">Featured Ad (required)</h2>

      <InputField id="featuredAd" title="Include as featured ad" type="checkbox" nowrapper />
      <div class="row">
        <div class="col-lg-5">
          <InputField id="titleName" title="Title*" type="text" className="w-full" required />
        </div>
        <div class="col-lg-2">
          <InputField id="textColor" title="Text Colour (Title)" type="color" className="w-full" />
        </div>
      </div>
      <div class="mb-3">
        <span class="fw-medium small">Event Date</span>
        <p>Friday, 15 November 2024 @ 8:30pm</p>
      </div>
      <div class="row">
        <div class="col-lg-5">
          <InputField id="line1" title="Line 1*" type="textarea" limitLines="2" helper="(2 lines max)" required
            limit="200" />
        </div>
        <div class="col-lg-7">
          <InputField id="textColorLine1" title="Text Colour (Line 1)" type="color" className="w-full" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5">
          <InputField id="line2" title="Line 2*" type="textarea" limitLines="2" helper="(2 lines max)" required
            limit="200" />
        </div>
        <div class="clearfix"></div>
        <div class="col-lg-2">
          <InputField id="bgColor" title="Background Colour" type="color" className="w-full" />
        </div>
        <div class="col-lg-2">
          <InputField id="borderColor" title="Border Colour" type="color" className="w-full" />
        </div>
      </div>
      <hr />
      <h2 class="h4">Sponsored Ad (required)</h2>
      <InputField id="sponsoredAdTitle" title="Sponsored Ad Title*" type="text" className="w-full" required />
      <InputField id="sponsoredAdDescription" title="Sponsored Ad Description*" type="textarea" limitLines="3"
        helper="(3 lines max and ideal)" required limit="300" />
      <div class="d-flex gap-3 justify-content-end">
        <RouterLink to="/admin/sponsored" class="btn text-center">Cancel</RouterLink>
        <button type="submit" class="btn btn-primary text-center">Save Changes</button>
      </div>
    </div>


  </div>

</template>
