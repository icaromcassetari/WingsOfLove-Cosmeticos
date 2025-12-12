<script setup>
import logo from '@/assets/imagens/logo-semtexto.png'
import IconPhone from "@/assets/icons/IconPhone.vue"
import IconEmail from "@/assets/icons/IconEmail.vue"
import IconInsta from "@/assets/icons/IconInsta.vue"
</script>
<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col d-flex align-items-center justify-content-center">
          <img :src="logo" alt="Logo Wings Of Love" style="width: 350px" class="text-white" />
      </div>
    </div>
    <!-- <hr class="mb-2 border-efect-normal mt-3 " >
    <hr class="mb-2 border-efect-large mt-2" >
    <hr class="mb-4 border-efect-medium mt-2 " > -->
    <h4 class="text-center text-dark fw-bold mb-5 mt-5">A Wings Of Love agradeçe sua visita.</h4>
    <!-- <hr class="text-dark" > -->
    <div class="row justify-content-center pb-5">
      <div class="col col-md-4">
      <div class="row justify-content-center">
        <div class="col-2">
          <div class="card card-footer border-0 p-3"></div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4 ">
          <div class="card card-footer border-0 p-3 rounded-top-4"></div>
        </div>
      </div>
      <div class="card rounded-4 border-0 card-footer p-4 shadow">
          <div class="card-body border-0">
            <div class="row">
                <div class="col-auto d-flex align-items-center">
                  <IconPhone style="height: 35px; width: 35px"  class="text-dark"  />
                </div>
                <div class="col d-flex align-items-center">
                    <h6 class="text-dark m-0 fw-light">(11) 94564876 - ICARO BUNDÃO</h6>
                </div>
              </div>
              <hr class="text-dark" >
              <div class="row">
                <div class="col-auto d-flex align-items-center">
                  <IconPhone style="height: 35px; width: 35px"  class="text-dark"  />
                </div>
                <div class="col d-flex align-items-center">
                    <h6 class="text-dark m-0 fw-light">(11) 94564876 - REVENDEDORA</h6>
                </div>
              </div>
              <hr class="text-dark" >
              <div class="row">
                <div class="col-auto d-flex align-items-center">
                  <IconEmail style="height: 35px; width: 35px" class="text-dark"/>
                </div>
                <div class="col d-flex align-items-center">
                    <h5 class="text-dark m-0 fw-light">teste@teste.com.br</h5>
                </div>
              </div>
              <hr class="text-dark" >
              <div class="row">
                <!-- <button class="p-0 btn btn-transparent text-dark shadow-0 w-100 text-start">
                    <IconInsta style="height: 30px; width: 30px" /> @wingsOfLove
                </button> -->
                <div class="col-auto d-flex align-items-center">
                  <IconInsta style="height: 35px; width: 35px" class="text-dark"/>
                </div>
                <div class="col d-flex align-items-center">
                    <h5 class="text-dark m-0 fw-light">@wingsOfLove</h5>
                </div>
              </div>
          </div>
      </div>

      </div>
    </div>
    <!-- <div class="row justify-content-center">
      <div class="col">
        <div class="card rounded-0 border-0 card-footer p-5 shadow mt-5">
          <div class="card-body border-0 rounded-0 p-5">
            <div class="row">
              <div class="col border-end-dark ">
                <div class="row">
                  <div class="col-auto d-flex align-items-center">
                    <IconPhone style="height: 30px; width: 30px"  class="text-dark"  />
                  </div>
                  <div class="col">
                      <p class="text-dark m-0">(11) 94564876</p>
                      <small class="xl-small">ICARO BUNDÃO</small>
                  </div>
                </div>
              </div>
              <div class="col border-end-dark">
                <div class="row">
                  <div class="col-auto d-flex align-items-center  justify-content-center">
                    <IconPhone style="height: 30px; width: 30px"  class="text-dark" />
                  </div>
                  <div class="col">
                    <p class="text-dark m-0 text-center">(11) 94564876</p>
                    <p class="m-0"><small class="xl-small">(REVENDEDORA)</small></p>
                  </div>
                </div>
              </div>
              <div class="col d-flex align-items-center border-end-dark justify-content-center">
                <p class="text-dark text-center m-0">
                  <IconEmail style="height: 30px; width: 30px" class="text-dark"/>
                  teste@wmailcom.com.br
                </p>
              </div>
              <div class="col d-flex align-items-center ">
                <button class="p-0 btn btn-transparent text-dark shadow-0 w-100">
                    <IconInsta style="height: 30px; width: 30px" /> @wingsOfLove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
