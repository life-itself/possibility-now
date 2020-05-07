<template>
  <div class="sib-form">
    <div id="sib-form-container" class="sib-form-container">
      <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;max-width:540px; border-width:px;">
        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
          <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
            <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"/>
          </svg>
          <span class="sib-form-message-panel__inner-text"> Your endorsement did not work 😢 Could you please try again 🙏 </span>
        </div>
      </div>
      <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; color:#085229; background-color:#e7faf0; border-radius:3px; border-width:px; border-color:#13ce66;max-width:540px; border-width:px;">
        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
          <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"/>
          </svg>
          <span class="sib-form-message-panel__inner-text"> Your subscription has been successful.</span>
        </div>
      </div>
  <div id="sib-container" class="sib-container--large sib-container--vertical">
    <form id="sib-form" method="POST" action="" data-type="subscription">
      <div class="inner-container pt-12 text-left">
        <div class="pb-3 sib-input sib-form-block">
          <div class="form__entry entry_block">
            <div class="form__label-row">
              <label class="entry__label">
                <h3 class="text-2xl pb-2" required data-required="*"> Email address <small class="text-red-600">*</small> </h3>
              </label>
            <div class="entry__field">
              <input type="text" class="input input-boxes" value="" data-required="true" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" required>
            </div>
            </div>
            <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;"></label>
            <label class="entry__specification">
            <!-- Provide your email address to endorse. For example <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="81e0e3e2c1f9f8fbafe2eeec">[email&#160;protected]</a> -->
              <div class="helping-text pt-1">Provide your email address to endorse. For example abc@xyz.com</div>
            </label>
          </div>
        </div>
        <div class="pb-3 sib-input sib-form-block">
          <div class="form__entry entry_block">
            <div class="form__label-row">
              <label class="entry__label">
                <h3 class="text-2xl pb-2" required data-required="*"> Name <small class="text-red-600">*</small> </h3>
              </label>
            <div class="entry__field">
              <input type="text" class="input input-boxes" value="" data-required="true" id="NAME" name="NAME" autocomplete="off" placeholder="Name" required>
            </div>
            </div>
            <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;"></label>
            <label class="entry__specification">
            <!-- Provide your email address to endorse. For example <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="81e0e3e2c1f9f8fbafe2eeec">[email&#160;protected]</a> -->
              <div class="helping-text pt-1">Provide your name to endorse. For example Max Examplemann.</div>
            </label>
          </div>
        </div>
        <div class="pb-3 sib-input sib-form-block">
          <div class="form__entry entry_block">
            <div class="form__label-row">
              <label class="entry__label">
                <h3 class="text-2xl pb-2" required data-required="*"> Affiliation <small class="text-red-600">*</small> </h3>
              </label>
            <div class="entry__field">
              <input type="text" class="input input-boxes" value="" data-required="true" id="AFFILIATION" name="AFFILIATION" autocomplete="off" placeholder="Affiliation" required>
            </div>
            </div>
            <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;"></label>
            <label class="entry__specification">
            <!-- Provide your email address to endorse. For example <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="81e0e3e2c1f9f8fbafe2eeec">[email&#160;protected]</a> -->
              <div class="helping-text pt-1">Provide your company or organization name to endorse.</div>
            </label>
          </div>
        </div>

        <div class="py-3 sib-optin sib-form-block" >
          <div class="form__entry entry_mcq">
            <div class="form__label-row ">
              <label class="entry__label" for="SHOW_MY_NAME"><h3 class="text-xl pb-3" >Show my name on the list of endorsers</h3></label>
               <div class="entry__choice">
                  <label class="label-check"> 
                    <input type="checkbox" value="1" name="SHOW_MY_NAME" id="SHOW_MY_NAME" class="input_replaced">  
                    <span class="checkbox checkmark checkbox_tick_positive"></span>
                    <span><p>Yes</p></span>
                  </label>
                </div>
              </div>
             <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;">
            </label>
            <label class="entry__specification">
              <div class="helping-text"> We'll show your name and affiliation on the list of endorsers</div>
            </label>  
          </div>
        </div>

        <div class="py-3 sib-optin sib-form-block" >
          <div class="form__entry entry_mcq">
            <div class="form__label-row ">
              <label class="entry__label" for="GET_UPDATES"><h3 class="text-xl pb-3" >I’d like to hear about upcoming initiatives</h3></label>
               <div class="entry__choice">
                  <label class="label-check"> 
                    <input type="checkbox" value="1" name="GET_UPDATES" id="GET_UPDATES" class="input_replaced">  
                    <span class="checkbox checkmark checkbox_tick_positive"></span>
                    <span><p>Yes</p></span>
                  </label>
                </div>
              </div>
             <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;">
            </label>
            <label class="entry__specification">
              <div class="helping-text"> Find out about upcoming initiatives such as curated conversations and imagined futures</div>
            </label>  
          </div>
        </div>

        <div class="sib-form-block">
          <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#FFFFFF; background-color:#3E4857; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
            <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
              <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"/>
            </svg> Endorse the Declaration
          </button>
        </div>
                                  
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">

        <!-- <div class="py-3 sib-input sib-form-block">
          <div class="form__entry entry_block">
            <h3 class="text-2xl pb-2" required data-required="*"> Name <small class="text-red-600">*</small> </h3>
            <input type="text" class="input-boxes" value="" placeholder="Name">
            <div class="helping-text pt-1">Provide your full name to endorse. For example Max Exampleman. </div>
          </div>
        </div>
        <div class="py-3 sib-input sib-form-block">
          <div class="form__entry entry_block">
            <h3 class="text-2xl pb-2"> Affiliation </h3>
            <input type="text" class="input-boxes" value="" placeholder="Affiliation">
            <div class="helping-text pt-1">Provide your company or organization name to endorse.</div>
          </div>
        </div>		
        <div class="py-3 sib-optin sib-form-block">
          <div class="form__entry entry_mcq">
            <div class="form__label-row">
              <h3 class="text-xl pb-3" >Show my name on the list of endorsers</h3>
              <label class="label-check">
                <input type="checkbox" name="checkbox" value="I'd like you to show my name on the list of endorsers." class="">  
                <span class="checkmark"></span>
                <span class="">Yes</span>
              </label> 
            </div>
            <div class="helping-text"> We'll show your name and affiliation on the list of endorsers</div>
          </div>
        </div>
        <div class="py-3 sib-optin sib-form-block">
          <div class="form__entry entry_mcq">
            <div class="form__label-row">
              <h3 class="text-xl pb-3">I'd like to hear about upcoming initiatives</h3>
              <label class="label-check">
                <input type="checkbox" name="checkbox" value="I'd like to hear about upcoming initiatives." class="">  
                <span class="checkmark"></span>
                <span class="">Yes</span>
              </label> 
            </div>
            <div class="helping-text"> Find out about upcoming initiatives such as curated conversations and imagined futures </div>
          </div>
        </div>
        <div class="pt-8">
          <button class="sib-form-block__button sib-form-block__button-with-loader endorse-button md:px-8 px-6 py-4" form="sib-form" type="submit">
            <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
              <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"></path>
            </svg>
            Endorse the Declaration
          </button> -->
          <!-- <button class="sib-form-block__button sib-form-block__button-with-loader endorse-button md:px-8 px-6 py-4" form="sib-form" type="submit">
            Endorse the Declaration
          </button> -->
        <input type="hidden" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
        <input type="hidden" name="html_type" value="SendInBlue Endorse Form">
      <script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/-wV2EAWEOTlEtZh4vNQtn3H1/recaptcha__en.js"></script>
      <script type="text/javascript" src="https://sibforms.com/forms/end-form/build/main.js"></script>
      <script src="https://www.google.com/recaptcha/api.js?hl=en"></script>
      <script data-cfasync="false" src="https://1ebb0834.sibforms.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
      </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { SibForm } from '../theme/util'
import { submitData } from '../theme/util'

export default {
	data() {
    return {
    }
  },
  methods: {
		SibForm,
		submitData
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
  }
}
</script>

<style>

#sib-container {
  background-color: transparent!important;
}

.entry__field {
  background-color: transparent!important;
}

::placeholder {
	color:#222!important;
	text-transform: uppercase;
}

.inner-container {
	width: 80%;
}

.helping-text {
	white-space: pre-wrap;
	font-size: 17px;
	line-height: 1.5em;
	color: #222;
	min-height: 16px;
	text-align: left;
}

h3 {
	line-height: 1.5em;
	min-height: 20px;
}

.input-boxes {
	text-align: left;
	font-weight: 500;
	line-height: 1.5em;
	font-family: Helvetica, sans-serif;
	color: #222;
}

input.input-boxes {
	max-width: 100%!important;
	width: 100%!important;
	padding: 14px 16px!important;
	border: 1px solid #222!important;
	border-radius: 6px!important;
	background-color: transparent!important;
	line-height: 1.6!important;
	font-size: 14px!important;
	color: #222!important;
}

.label-check input {
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 1.5px;
  left: 0;
	border-radius: 3px;
  height: 20px;
  width: 20px;
  background-color: transparent;
	border: 1px solid #222;
}

.label-check {
  display: block;
  position: relative;
  padding-left: 10px;
  margin-bottom: 6px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* On mouse-over, add a grey background color */
.label-check:hover input ~ .checkmark {
  background-color: transparent;
}

/* When the checkbox is checked, add a blue background */
.label-check input:checked ~ .checkmark {
  background-color: transparent;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.label-check input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.label-check .checkmark:after {
  left: 5.5px;
  top: 1.2px;
  width: 8px;
  height: 13px;
  border: solid #222;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.endorse-button {
	width: fit-content;
	border: 1px solid #222;
	border-radius: 6px;
	background: #222;
	line-height: 1.6;
	font-size: 17px;
	color: white;
}

</style>