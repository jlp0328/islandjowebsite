<template>
  <Main>
    <div class="contact-main-wrapper">
      <h2>Contact & Location</h2>
      <div class="details-wrapper">
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.2470504039716!2d-78.08748068478876!3d33.90904068064504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x454a97dd68cb4a80!2sIsland%20Jo%20Coffee%20%26%20Cafe!5e0!3m2!1sen!2sus!4v1567190569925!5m2!1sen!2sus"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </section>
        <section>
          <h3>Phone Number: (910)</h3>
        </section>
      </div>
    </div>
  </Main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $main-container-padding;
  h2 {
    @media only screen and (max-width: $mobile-breakpoint) {
      margin: 20px 0px;
    }
  }
}

.details-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: $mobile-breakpoint) {
  }
}

iframe {
  width: 450px;
  height: 350px;
  @media only screen and (max-width: $tablet-breakpoint) {
    width: 300px;
    height: 250px;
  }
  //   @media only screen and (max-width: $tablet-breakpoint) {
  //     width: 600px;
  //     height: 450px;
  //   }
}
</style>