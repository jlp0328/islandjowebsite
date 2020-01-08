<template>
  <Main>
    <div class="contact-main-wrapper">
      <section class="contact-header">
        <div class="flex-center-content">
          <h2>Contact Us</h2>
          <p class="restaurant-hours">Open Daily, 8am - 2pm</p>
        </div>

        <Header v-if="$mq !== 'mobile'" />
      </section>

      <div class="details-wrapper">
        <section class="iframe-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.2470504039716!2d-78.08748068478876!3d33.90904068064504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x454a97dd68cb4a80!2sIsland%20Jo%20Coffee%20%26%20Cafe!5e0!3m2!1sen!2sus!4v1567190569925!5m2!1sen!2sus"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
        </section>
        <section class="phone-and-address">
          <p>
            <strong>Phone Number:</strong>
            <span>
              <a href="tel:1-910-250-1677">(910) 250 - 1677</a>
            </span>
          </p>
          <p>
            <strong>Address:</strong>
            <span>7916 East Oak Island Drive</span>
            <span>Oak Island, NC 28465</span>
          </p>
          <!-- <a href="https://g.page/IslandJo/review" target="_blank">Let us know what you think!</a> -->
        </section>
      </div>
    </div>
  </Main>
</template>

<script>
import Header from '../components/Header';
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.contact-main-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $main-container-padding;
  min-height: $main-container-min-height;
  @media only screen and (max-width: $mobile-breakpoint) {
    padding: $main-container-padding-mobile;
  }
  @media only screen and (min-width: $tablet-min-breakpoint) {
    margin-top: $desktop-nav-height;
  }

  h2 {
    @media only screen and (max-width: $mobile-breakpoint) {
      margin: 20px 0px;
      text-align: center;
    }
  }
}

.contact-header {
  @media only screen and (min-width: $tablet-min-breakpoint) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }
}
.restaurant-hours {
  font-weight: bold;
  text-align: center;
  margin: unset;
  @media only screen and (max-width: $mobile-breakpoint) {
    font-size: 22px;
  }
  @media only screen and (min-width: $tablet-min-breakpoint) and (max-width: $tablet-breakpoint) {
    font-size: 28px;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
    font-size: 30px;
  }
  @media only screen and (min-width: $desktop-min-breakpoint) {
    font-size: 32px;
  }
}
.details-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: $mobile-breakpoint),
    screen and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (orientation: portrait) {
    margin-top: 20px;
  }
}

.iframe-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

iframe {
  width: 450px;
  height: 350px;
  @media only screen and (max-width: $tablet-breakpoint) {
    width: 300px;
    height: 250px;
    margin: 10px;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
    width: 500px;
    height: 300px;
  }

  @media only screen and (min-width: $desktop-min-breakpoint) {
    width: 600px;
    height: 500px;
  }

  @media only screen and (orientation: portrait) and (min-width: $tablet-min-breakpoint) {
    width: 450px;
    height: 250px;
    margin: 10px;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (orientation: portrait) {
    width: 750px;
    height: 350px;
    margin: 50px 0;
  }
}

.phone-and-address {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p,
  a {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
      font-size: 28px;
    }
  }
  a:-webkit-any-link {
    text-decoration: none;
    color: unset;
  }

  @media only screen and (max-width: $mobile-breakpoint) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    p,
    a {
      font-size: 18px;
      strong {
        font-size: 20px;
      }
    }
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
    p,
    a {
      font-size: 28px;
      strong {
        font-size: 32px;
      }
    }
  }
  @media only screen and (min-width: $desktop-min-breakpoint) {
    height: 500px;
    p,
    a {
      font-size: 32px;
      strong {
        font-size: 36px;
      }
    }
  }
}
</style>
