<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import InputField from '@/components/InputField.vue';

defineComponent({ name: 'MailList' });
const search = ['Mail Unresponded to', "Marked as Don't Respond", "Mail Responded to"]
const searchModel = ref('Mail Unresponded to')

</script>
<template>
  <div class="mx-auto">
    <h1 class="h2 font-bold">Mail</h1>
    <div class="d-flex">
      <InputField id="search" title="Search" className="mb-3" v-model="searchModel" :data="search" type="select" />
    </div>
    <ul class="nav nav-underline mb-3" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link text-dark active" id="general-tab" data-bs-toggle="tab"
          data-bs-target="#general-tab-pane" type="button" role="tab" aria-controls="general-tab-pane"
          aria-selected="true">General Inquiries<span class="badge text-bg-secondary ms-1">89236</span></button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-dark" id="ads-tab" data-bs-toggle="tab" data-bs-target="#ads-tab-pane"
          type="button" role="tab" aria-controls="ads-tab-pane" aria-selected="false">Advertising Inquiries<span
            class="badge text-bg-secondary ms-1">1</span></button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-dark" id="suggestion-tab" data-bs-toggle="tab"
          data-bs-target="#suggestion-tab-pane" type="button" role="tab" aria-controls="suggestion-tab-pane"
          aria-selected="false">Suggestion Feedback<span class="badge text-bg-secondary ms-1">2</span></button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-dark" id="complaints-tab" data-bs-toggle="tab"
          data-bs-target="#complaints-tab-pane" type="button" role="tab" aria-controls="complaints-tab-pane"
          aria-selected="false">Complaints<span class="badge text-bg-secondary ms-1">0</span></button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-dark" id="login-tab" data-bs-toggle="tab" data-bs-target="#login-tab-pane"
          type="button" role="tab" aria-controls="login-tab-pane" aria-selected="false">Login Inquires<span
            class="badge text-bg-secondary ms-1">0</span></button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link text-dark" id="other-tab" data-bs-toggle="tab" data-bs-target="#other-tab-pane"
          type="button" role="tab" aria-controls="other-tab-pane" aria-selected="false">Other Inquiries<span
            class="badge text-bg-secondary ms-1">1</span></button>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="general-tab-pane" role="tabpanel" aria-labelledby="general-tab"
        tabindex="0">
        <table class="table auto table-striped table-bordered mail-table">
          <thead>
            <tr>
              <th>Message</th>
              <th class="d-none d-lg-table-cell">Reply</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 10" :key="i">
              <td class="p-3">
                <span class="d-block text-success">From: <span class="fw-bold">Martin Kat</span></span>
                <span class="d-block text-success">Email: <span class="fw-bold">manager@sensualball.com</span></span>
                <span class="d-block text-success">Message Date: <span class="fw-bold">Tuesday, 8 May 2024</span></span>
                <hr />
                <span class="d-block fw-bold">user email and password</span>
                <p>Very sorry but we have used this site to submit our Sensual Ball event on 10th June (we think) and
                  now want to edit the words but our usual email addresses and passwords do not work (@sensual.com.au
                  @sensualball.com) Please can you sen the password to the registered email address and we'll work it
                  out from there. I am pretty sure we put the event in ourselves but this system is pretty new. Regards
                  and sorr for the time wasting Martin & Kat www.sensualball.com</p>
                <div class="d-block d-lg-none">
                  <span class="d-block fw-bold">Reply</span>
                  <InputField type="textarea" className="mb-2 mt-3" rows="7" nowrapper />
                  <InputField :id="`dontReply-mob-general-${i}`" title="Don't Reply" type="checkbox" />
                </div>
              </td>
              <td class="p-3 d-none d-lg-table-cell">
                <InputField type="textarea" className="mb-2 mt-3" rows="7" nowrapper />
                <InputField :id="`dontReply-general-${i}`" title="Don't Reply" type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <button type="submit" v-if="searchModel === 'Mail Unresponded to'" class="btn btn-primary text-center">Submit:
            Replies are Emailed
            and show next messages</button>
          <nav aria-label="...">
            <ul class="pagination mb-0">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="tab-pane fade" id="ads-tab-pane" role="tabpanel" aria-labelledby="ads-tab" tabindex="0">
        <table class="table auto table-striped table-bordered mail-table">
          <thead>
            <tr>
              <th>Message</th>
              <th class="d-none d-lg-table-cell">Reply</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 2" :key="i">
              <td class="p-3">
                <span class="d-block text-success">From: <span class="fw-bold">Hansaka Dissanayaka</span></span>
                <span class="d-block text-success">Email: <span class="fw-bold">hansaka1986@yahoo.com</span></span>
                <span class="d-block text-success">Message Date: <span class="fw-bold">Tuesday, 27 April
                    2024</span></span>
                <hr />
                <span class="d-block fw-bold">Need good partner</span>
                <p>I am from Sri Lanka,I neeed lifetimepartner to marry in canada,I am going to Canda next year so I
                  need a good ,honest partner,but I dont know how to find that person please helpme to find him from
                  Canada.I am 24y,faire hansome guy.</p>
                <div class="d-block d-lg-none">
                  <span class="d-block fw-bold">Reply</span>
                  <InputField type="textarea" className="mb-2 mt-3" rows="7" nowrapper />
                  <InputField :id="`dontReply-mob-ads-${i}`" title="Don't Reply" type="checkbox" />
                </div>
              </td>
              <td class="p-3 d-none d-lg-table-cell">
                <InputField type="textarea" className="mb-2 mt-3" rows="7" nowrapper />
                <InputField :id="`dontReply-ads-${i}`" title="Don't Reply" type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <button type="submit" v-if="searchModel === 'Mail Unresponded to'" class="btn btn-primary text-center">Submit:
            Replies are Emailed and show next messages</button>
        </div>
      </div>
      <div class="tab-pane fade" id="suggestion-tab-pane" role="tabpanel" aria-labelledby="suggestion-tab" tabindex="0">
        ...
      </div>
      <div class="tab-pane fade" id="complaints-tab-pane" role="tabpanel" aria-labelledby="complaints-tab" tabindex="0">
        ...
      </div>
      <div class="tab-pane fade" id="login-tab-pane" role="tabpanel" aria-labelledby="login-tab" tabindex="0">...
      </div>
      <div class="tab-pane fade" id="other-tab-pane" role="tabpanel" aria-labelledby="other-tab" tabindex="0">...
      </div>
    </div>
  </div>
</template>