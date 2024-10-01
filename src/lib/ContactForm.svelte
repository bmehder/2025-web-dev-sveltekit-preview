<form>
	<div class="form-container flow">
		<div>
			<label for="first-name">First Name <sup>*</sup></label>
			<input type="text" name="first-name" id="first-name" required />
		</div>
		<div>
			<label for="last-name">Last Name <sup>*</sup></label>
			<input type="text" name="last-name" id="last-name" required />
		</div>
		<div>
			<label for="email">Email <sup>*</sup></label>
			<input type="email" name="email" id="email" required />
		</div>
		<div>
			<label for="phone">Phone</label>
			<input type="tel" name="phone" id="phone" />
		</div>
		<div>
			<label for="message">Message <sup>*</sup></label>
			<textarea name="message" id="message" rows="10" required></textarea>
		</div>
		<div>
			<button class="button bg-pink-600 white">Submit Message</button>
		</div>
	</div>
</form>

<style>
	.form-container {
		max-width: 50ch;
		display: grid;
	}

	.form-container > div {
		display: grid;
		gap: 0.5rem;
	}

	label {
		font-weight: 600;
	}

	sup {
		color: var(--pink-600);
	}

	.button {
		padding: 1.5rem;
		border-radius: 4px;
	}

	.button:hover {
		background: var(--blue-900);
	}
</style>
