<script>
	import { auth } from '$lib/scripts/firebase';
	import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

	let phone = '';
	//let recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
</script>

<h2>Отправить код</h2>
<div id="recaptcha-container" />

<div class="mt-3">
	<input
		id="sign-in-button"
		class="form-control mb-2"
		bind:value={phone}
		placeholder="Номер телефона"
	/>
	<button
		class="btn btn-dark text-light"
		on:click={() => {
			signInWithPhoneNumber(auth, phone, new RecaptchaVerifier('recaptcha-container', {}, auth));
		}}>Отправить</button
	>
</div>
