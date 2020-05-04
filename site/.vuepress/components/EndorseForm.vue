<template>
	<form id="sib-form" method="POST" action="https://1ebb0834.sibforms.com/serve/MUIEACj6RhqlVLoMyyfjBbeL5I5Mlyk8wzaMgQx1eITABphtlplo6bUIn9AvOK0Y1ZUoVn6HESOlTHTdme4sL8eK5sKi3mp8fb9rCFUKGHtqqQFvfeRohuhsqnL3Hw1lh36iFH55T38v29z6pPrH5_pnZgiqnTA2aVRzbf8hwkmzlPgXFigxvgYW5YkieTERa3UzhIXsXpPAP7lp">
		<div class="inner-container pt-12 text-left">
			<div class="pb-3">
				<h3 class="text-2xl pb-2" required data-required="*"> Email address <small class="text-red-600">*</small> </h3>
				<input type="text" class="input-boxes" value="" placeholder="Email">
				<div class="helping-text pt-1">Provide your email address to endorse. For example abc@xyz.com</div>
			</div>
			<div class="py-3">
				<h3 class="text-2xl pb-2" required data-required="*"> Name <small class="text-red-600">*</small> </h3>
				<input type="text" class="input-boxes" value="" placeholder="Name">
				<div class="helping-text pt-1">Provide your full name to endorse. For example Max Exampleman. </div>
			</div>
			<div class="py-3">
				<h3 class="text-2xl pb-2"> Affiliation </h3>
				<input type="text" class="input-boxes" value="" placeholder="Affiliation">
				<div class="helping-text pt-1">Provide your company or organization name to endorse.</div>
			</div>		
			<div class="py-3">
				<h3 class="text-xl pb-3" >Show my name on the list of endorsers</h3>
				<label class="label-check">
					<input type="checkbox" name="checkbox" value="I'd like you to show my name on the list of endorsers." class="">  
					<span class="checkmark"></span>
					<span class="">Yes</span>
				</label> 
				<div class="helping-text"> We'll show your name and affiliation on the list of endorsers</div>
			</div>
			<div class="py-3">
				<h3 class="text-xl pb-3">I'd like to hear about upcoming initiatives</h3>
				<label class="label-check">
					<input type="checkbox" name="checkbox" value="I'd like to hear about upcoming initiatives." class="">  
					<span class="checkmark"></span>
					<span class="">Yes</span>
				</label> 
				<div class="helping-text"> Find out about upcoming initiatives such as curated conversations and imagined futures </div>
			</div>
			<div class="pt-8">
				<button class="endorse-button md:px-8 px-6 py-4" form="sib-form" type="submit">
					Endorse the Declaration
				</button>
			</div>
			<input type="hidden" name="email_address_check" value="" class="input--hidden">
			<input type="hidden" name="locale" value="en">
			<input type="hidden" name="html_type" value="SendInBlue Endorse Form">
		</div>
	</form>
</template>

<style scoped>

::placeholder {
	color:#222;
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

input {
	max-width: 100%;
	width: 100%;
	padding: 14px 16px;
	border: 1px solid #222;
	border-radius: 6px;
	background: transparent;
	line-height: 1.6;
	font-size: 14px;
	color: #222;
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