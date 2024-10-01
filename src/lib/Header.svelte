<header>
	<div class="boxed flex-container">
		<a href="/">
			<img
				class="logo"
				src="/logo-dark.svg"
				alt="Skilled Home"
				width="111"
				height="28"
			/>
		</a>
		<nav>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/blog">Blog</a>
				</li>
				<li>
					<a href="/contact">Contact</a>
				</li>
				<li>
					<a href="/blog" class="button bg-blue-900 white"> Get Started</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	.flex-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		padding-block: 1.5rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1.5rem;
		list-style: none;
		padding: 0;
	}

	.button:hover {
		background: var(--gradient-pink);
	}

	a:hover:not(.button) {
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-thickness: 2px;
	}
</style>
