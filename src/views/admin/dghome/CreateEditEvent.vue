<script setup lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, ref } from 'vue'
import InputField from '@/components/InputField.vue'

defineComponent({ name: 'CreateEditDGHomeEvent' })

const route = useRoute()
const idParam = Number(route.params.id)

</script>
<template>
  <div class="">
    <div class="row g-5">
      <div class="col-12 col-lg-9">
        <form action="" method="post" class="">
          <div class="mb-3">
            <h1 class="mb-0 fw-bold h2">{{ idParam ? 'Edit Event 1' : 'Add Event to Display on DatingGuides Home Page' }} </h1>
            <small>Enter details below to add event on DatingGuides home page:</small>
          </div>
          
          <InputField id="title" title="Title*" type="text" className="w-full" required />
          <InputField id="desc" title="Description*" type="textarea" rows="6" required />
          <InputField id="eventid" title="Event ID*" type="text" className="w-full" required />
          
          <div class="mb-3">
            <span class="d-block mb-2 fw-medium">Display on:</span>
            <InputField id="dgsite" title="DatingGuide" value="DatingGuide" type="checkbox"
              nowrapper />
            <InputField id="ammsite" title="Adult DatingGuide" value="Adult DatingGuide" type="checkbox"
              nowrapper />
            <InputField id="swingerssite" title="Swingers DatingGuide" value="Swingers DatingGuide" type="checkbox"
              nowrapper />
            <InputField id="gaysite" title="Gay DatingGuide" value="Gay DatingGuide" type="checkbox"
              nowrapper />
            <InputField id="lesbiansite" title="Lesbian DatingGuide" value="Lesbian DatingGuide" type="checkbox" nowrapper />
            <InputField id="fetishsite" title="Fetish DatingGuide" value="Fetish DatingGuide" type="checkbox"
              nowrapper />
          </div>
          <InputField id="listimg" title="Image (Optional)" type="file" accept="image/jpeg, image/jpg, image/gif"
            helper="max width: 376px, formats: .jpg .gif" />

          <div class="d-flex gap-3 justify-content-end">
            <RouterLink to="/admin/clubs" class="btn text-center">Cancel</RouterLink>
            <button type="submit" class="btn btn-primary text-center">{{idParam ? 'Save' : 'Add Event'}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>