<template>
  <div class="BCheckout__wrapper">
    <label for="creditcard" class="BCheckout__label-cardbrandswrapper">
      <span class="BCheckout__label">Credit Card Number</span>
      <span class="BCheckout__label-cardbrands"></span>
    </label>
    <div class="BInput__wrapper">
      <input
        name="creditcard"
        class="BInput__field"
        type="tel"
        v-model="checkout.card"
        v-mask="'#### #### #### ####'"
        placeholder="1234 5678 9012 3456"
      />
    </div>
    <div>
      <label for="cardholder" class="BCheckout__label-wrapper"
        ><span class="BCheckout__label">Cardholder Name </span>
      </label>
      <div class="BInput__wrapper">
        <input
          name="cardholder"
          class="BInput__field"
          maxlength="40"
          type="text"
          v-model="checkout.cardholder"
          placeholder="John Doe"
        />
      </div>
    </div>
    <div class="BCheckout__grid">
      <div>
        <label for="expiryDate" class="BCheckout__label-wrapper"
          ><span class="BCheckout__label">Expiry Date</span>
        </label>
        <div class="BInput__wrapper">
          <input
            name="expiryDate"
            class="BInput__field"
            type="tel"
            v-model="checkout.expiryDate"
            masked="true"
            v-mask="'##/##'"
            placeholder="12/25"
          />
        </div>
      </div>
      <div>
        <label for="cvv" class="BCheckout__label-wrapper"
          ><span class="BCheckout__label">CVV </span>
        </label>
        <div class="BInput__wrapper">
          <input
            name="cvv"
            class="BInput__field"
            v-mask="'###'"
            type="tel"
            v-model="checkout.cvv"
            placeholder="759"
          />
        </div>
      </div>
    </div>
    <span
      class="Bcheckout__selected"
      >selected coverage</span
    >
  </div>
</template>

<script>
  export default {
    data(){
      return {
        checkout: {
          card: null,
          cardholder: null,
          expiryDate: null,
          cvv: null,
        }
      }
    }
  }
</script>