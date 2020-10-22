<template>
  <div class=" fixed w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="absolute w-full h-full bg-gray-900 opacity-50"></div>
    <div class="bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-10 overflow-y-auto">
      <div class="modal-content py-4 text-left px-6">
         <div class="flex justify-end pb-3">
          <div class="cursor-pointer">
            <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>
        <slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bmodal",
};
</script>