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
      <form id="sib-form" method="POST" action="https://1ebb0834.sibforms.com/serve/MUIEADUu3Yn0smKZDf7w65IQW8SGHdXd4LMcb_LCVgdNpHGjrcfFK3l3MhrBwmeA5sduAew_gUDWqjEBYga60_LOwkwt4EWuDY1niGTe9HcXiN7x71GkfxVmTAIWTjANjsyJHigjZoVTlyJz7OP1Bnugx0Iw8dztkQ2r4mu0WJiWUBb-HabvdYlrcLQpCIjDxi1aPtH4uSmJnubv"
        data-type="subscription">
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label"> 
                  <h3 class="text-2xl" required data-required="*"> Email address <small class="text-red-600">*</small></h3>
                </label>
                <div class="entry__field">
                  <input class="input input-boxes" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Your email" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary errors">
              </label>
              <label class="entry__specification">
                <div class="helping-text pt-1">This is used only for purposes of endorsement and to send updates if you opt-in to that below 😄 </div>
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label"> 
                  <h3 class="text-2xl" required data-required="*"> Name <small class="text-red-600">*</small> </h3>
                </label>
                <div class="entry__field">
                  <input class="input input-boxes" maxlength="200" type="text" id="NAME" name="NAME" autocomplete="off" placeholder="Your Name" data-required="true" required />
                </div>
              </div>
              <label class="entry__error entry__error--primary errors">
              </label>
              <label class="entry__specification"> 
                <div class="helping-text pt-1">Your Full Name.</div>
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">
                <label class="entry__label" for="AFFILIATION"> 
                  <h3 class="text-2xl"> Affiliation </h3> 
                </label>
                <div class="entry__field">
                  <input class="input input-boxes" maxlength="200" type="text" id="AFFILIATION" name="AFFILIATION" autocomplete="off" placeholder="Your company or organization" />
                </div>
              </div>
              <label class="entry__error entry__error--primary">
              </label>
              <label class="entry__specification"> 
                <div class="helping-text pt-1">Your company or organization. </div> 
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-optin sib-form-block">
            <div class="form__entry entry_mcq">
              <div class="form__label-row ">
                <label class="entry__label" for="SHOW_MY_NAME"> 
                  <h3 class="text-xl" >Show my name on the list of endorsers</h3>
                </label>
                <div class="entry__choice">
                  <label>
                    <input type="checkbox" class="input_replaced" value="1" id="SHOW_MY_NAME" name="SHOW_MY_NAME" />
                    <span class="checkbox checkbox_tick_positive"></span><p class="text-lg">Yes</p></label>
                </div>
              </div>
              <label class="entry__error entry__error--primary">
              </label>
              <label class="entry__specification helping-text">We'll show your name and affiliation on the list of endorsers </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-optin sib-form-block">
            <div class="form__entry entry_mcq">
              <div class="form__label-row ">
                <label class="entry__label" for="GET_UPDATES"> 
                  <h3 class="text-xl">I’d like to hear about upcoming initiatives</h3>
                </label>
                <div class="entry__choice">
                  <label>
                    <input type="checkbox" class="input_replaced" value="1" id="GET_UPDATES" name="GET_UPDATES" />
                    <span class="checkbox checkbox_tick_positive"></span><p class="text-lg">Yes</p></label>
                </div>
              </div>
              <label class="entry__error entry__error--primary">
              </label>
              <label class="entry__specification helping-text">Find out about upcoming initiatives such as curated conversations and imagined futures </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="text-align: left">
            <button class="sib-form-block__button sib-form-block__button-with-loader endorse-button" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                />
              </svg>
              Endorse the Declaration
            </button>
          </div>
        </div>
        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>
</template>

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
	color: #222!important;
	min-height: 16px;
	text-align: left;
}

h3 {
	line-height: 1.5em;
	min-height: 20px;
}

.errors {
  font-size:16px; 
  text-align:left; 
  font-family: Helvetica, sans-serif; 
  color:#661d1d; 
  background-color:#ffeded; 
  border-radius:3px; 
  border-width:px; 
  border-color:#ff4949;
}

.sib-form .entry__field {
  border: none!important;
}

.sib-form .entry__field:focus-within {
  box-shadow: 0 0 0 1px #ccc;
  border-radius: 6px;
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