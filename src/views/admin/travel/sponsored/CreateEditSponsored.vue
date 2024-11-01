<script setup lang="ts">
import InputField from '@/components/InputField.vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

defineComponent({ name: 'CreateEditSponsored' });

const route = useRoute();
const idParam = Number(route.params.id);
</script>
<template>
  <div class="mx-auto">
    <h1 class="h2 font-bold mb-3">{{ idParam ? 'Edit' : 'Add' }} your Sponsored Ads</h1>
    <img src="https://placehold.co/400x100" class="w-100 mb-3" alt="" />
    <h2>Mexican Riviera Lifestyle Cruise</h2>
    <small class="d-block fw-bold">7 Nights</small>
    <small class="d-block fw-bold mb-3">Saturday 03 May - 10 May 2014</small>
    <p>Join us for a full ship takeover, couples-only lifestyle-swinger oriented cruise.</p>
    <p>
      Couples Cruise is heading to the West Coast for a Mexican Riviera Fiesta. We are looking
      forward to this unique itinerary that will take us to some of Mexico's best cities and resort
      towns. Sailing on the west coast of Mexico in May will give us some spectacular scenery along
      this stretch of land known as the "Gold Coast". This is where the hit TV show "The Love Boat"
      was filmed, making Puerto Vallarta popular to an American audience. We will have our own "Love
      Boat" for this exciting new itinerary.
    </p>
    <p>
      Of course, like all Couples Cruises, this full ship charter will be Clothing Optional on all
      of the pool and sun decks. We will have a spectacular Tantra Room where couples can go to
      explore their own sexuality and even explore with others if that is what you are looking for.
    </p>
    <p>
      We will have seminars, all night pool parties, extra entertainment and everything else that
      makes a Couples Cruise the premier Adults Only cruise in the industry.
    </p>
    <div class="table-responsive">
      <table class="table auto">
        <tbody>
          <tr>
            <td><span class="fw-bold">Contact:</span></td>
            <td>
              For more information on pricing and cabin availability click through to our website
            </td>
          </tr>

          <tr>
            <td><span class="fw-bold">Website:</span></td>
            <td>
              <a href="http://www.chateauvino.com.au" target="_blank"
                >http://www.chateauvino.com.au</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="max-w-md bg-amber p-3">
      <small>Please enter your sponsored Ad details below</small>
      <h2 class="h4">Sponsored Ad & Featured Ad (required)</h2>
      <InputField
        id="masthead"
        title="Update Sponsored Image"
        type="file"
        accept="image/jpeg, image/jpg"
        helper="Keep image or browse to update to new image"
      />
      <div>
        <span class="d-block mb-2 fw-medium">Choose where to display your sponsored ad</span>
        <InputField
          id="ammsite"
          title="AdultMatchMaker.com.au"
          value="AdultMatchMaker.com.au"
          type="checkbox"
          nowrapper
        />
        <InputField
          id="gmmsite"
          title="GayMatchMaker.com.au"
          value="GayMatchMaker.com.au"
          type="checkbox"
          nowrapper
        />
        <InputField
          id="lmmsite"
          title="LesbianMatchMaker.com.au"
          value="LesbianMatchMaker.com.au"
          type="checkbox"
          nowrapper
        />
      </div>
      <hr />
      <h2 class="h4">Featured Ad (required)</h2>

      <div class="row">
        <div class="col-lg-5">
          <InputField id="titleName" title="Title*" type="text" className="w-full" required />
        </div>
        <div class="col-lg-2">
          <InputField id="textColor" title="Text Colour (Title)" type="color" className="w-full" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5">
          <InputField id="noDateText" title="No Date Text" type="text" className="mb-2" nowrapper />
        </div>
        <div class="col-lg-2 align-self-end">
          <InputField id="noDate" title="Use no dates" type="checkbox" />
        </div>
      </div>
      <div class="mb-3">
        <span class="fw-medium small">Event Date</span>
        <p>Friday, 15 November 2024 @ 8:30pm</p>
      </div>
      <div class="row">
        <div class="col-lg-5">
          <InputField
            id="line1"
            title="Line 1*"
            type="textarea"
            limitLines="2"
            helper="(2 lines max)"
            required
            limit="200"
          />
        </div>
        <div class="col-lg-7">
          <InputField
            id="textColorLine1"
            title="Text Colour (Line 1)"
            type="color"
            className="w-full"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5">
          <InputField
            id="line2"
            title="Line 2*"
            type="textarea"
            limitLines="2"
            helper="(2 lines max)"
            required
            limit="200"
          />
        </div>
        <div class="clearfix"></div>
        <div class="col-6 col-lg-2">
          <InputField id="bgColor" title="Background Colour" type="color" className="w-full" />
        </div>
        <div class="col-6 col-lg-2">
          <InputField id="borderColor" title="Border Colour" type="color" className="w-full" />
        </div>
      </div>
      <div class="d-flex gap-3 justify-content-end">
        <RouterLink to="/admin/sponsored" class="btn text-center">Cancel</RouterLink>
        <button type="submit" class="btn btn-primary text-center">Save Changes</button>
      </div>
    </div>
  </div>
</template>
