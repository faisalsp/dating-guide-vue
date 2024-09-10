<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Modal } from 'bootstrap';

const jsModalRef = ref<Element | null>(null);
let jsModal: Modal;

onMounted(() => {
  jsModal = new Modal(jsModalRef.value!);
});

onUnmounted(() => {
  jsModal.dispose();
});

function toggleModal() {
  jsModal.show();
}
</script>

<template>
  <section>
    <h3>Test Gigacon</h3>
    <span class="d-sm-block">Information <i class="gigacon gigacon-information"></i></span>
    <span class="d-sm-block">Star <i class="gigacon gigacon-star"></i></span>
  </section>
  <section>
    <h3>Test Bootstrap 5 Alert</h3>
    <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
  </section>
  <section>
    <h3>Test Bootstrap 5 Modal via Attributes</h3>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
      Open modal
    </button>

    <Teleport to="body">
      <div class="modal" id="myModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modal Via Attributes</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">Hello Modal</div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
  <section>
    <h3>Test Bootstrap 5 Modal via JavaScript</h3>
    <button class="btn btn-success" @click="toggleModal">Toggle Modal</button>

    <Teleport to="body">
      <div ref="jsModalRef" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Modal Via JavaScript</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">Hello Modal</div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped></style>
