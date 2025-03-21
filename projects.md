---
title: Projects
layout: landing
description: 'Blockchain Research & Development Projects'
image: assets/images/pic07.jpg
nav-menu: true
show_tile: true
weight: 1
---

<!-- Main -->
<div id="main">

<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h2>My Projects</h2>
		</header>
		<p>Through various blockchain projects, I have gained extensive experience in Layer 2 solutions, blockchain infra, blockchain development and node operations. I primarily work within the Ethereum and Solana ecosystems, contributing to the advancement of blockchain technology's scalability and security.</p>
	</div>
</section>

<!-- Two -->
<section id="two">
	<div class="inner">
		<div class="project-category">
			<h2><i class="fa-solid fa-microscope"></i> Blockchain Research</h2>
			<div class="project-grid">
			{% assign research_posts = site.posts | where: "category", "Blockchain Research" %}
			{% for post in research_posts %}
				<a href="{{ post.url | relative_url }}" class="project-card">
					<div class="card-content">
						<h3>{{ post.title }}</h3>
						<p>{{ post.description }}</p>
						<div class="tech-stack">
							{% for tech in post.tech_stack %}
							<span>{{ tech }}</span>
							{% endfor %}
						</div>
					</div>
				</a>
			{% endfor %}
			</div>
		</div>

		<div class="project-category">
			<h2><i class="fa-solid fa-code"></i> Blockchain Development</h2>
			<div class="project-grid">
			{% assign dev_posts = site.posts | where: "category", "Blockchain Development" %}
			{% for post in dev_posts %}
				<a href="{{ post.url | relative_url }}" class="project-card">
					<div class="card-content">
						<h3>{{ post.title }}</h3>
						<p>{{ post.description }}</p>
						<div class="tech-stack">
							{% for tech in post.tech_stack %}
							<span>{{ tech }}</span>
							{% endfor %}
						</div>
					</div>
				</a>
			{% endfor %}
			</div>
		</div>

		<div class="project-category">
			<h2><i class="fa-solid fa-server"></i> Blockchain Node Operation</h2>
			<div class="project-grid">
			{% assign node_posts = site.posts | where: "category", "Blockchain Node Operation" %}
			{% for post in node_posts %}
				<a href="{{ post.url | relative_url }}" class="project-card">
					<div class="card-content">
						<h3>{{ post.title }}</h3>
						<p>{{ post.description }}</p>
						<div class="tech-stack">
							{% for tech in post.tech_stack %}
							<span>{{ tech }}</span>
							{% endfor %}
						</div>
					</div>
				</a>
			{% endfor %}
			</div>
		</div>
	</div>
</section>

<!-- Three -->
<section id="three">
	<div class="inner">
		<header class="major">
			<h2>Research Focus & Future Direction</h2>
		</header>
		<p>As a blockchain researcher and engineer, I specialize in Ethereum Layer 2 scalability solutions and DeFi protocol development. My research encompasses optimizing rollup technologies, enhancing cross-chain bridges, and developing automated validation systems. With a particular focus on the intersection of Ethereum and Solana ecosystems, I am dedicated to pushing the boundaries of blockchain interoperability and scalability. Through continuous exploration of emerging technologies and active participation in protocol development, I strive to contribute meaningful solutions to the challenges facing decentralized networks.</p>
		<div class="button-container">
			<a href="generic.html" class="button next">About Me</a>
			<a href="https://github.com/kooroot" class="button next">Github</a>
			<a href="https://linktr.ee/kooroot" class="button next">Linktree</a>
		</div>
	</div>
</section>

</div>

<style>
.project-category {
    margin: 4em 0;
    padding: 3em;
    background: rgba(83, 133, 193, 0.03);
    border-radius: 15px;
    border: 1px solid rgba(83, 133, 193, 0.15);
}

.project-category:first-child {
    margin-top: 0;
}

.project-category h2 {
    color: #5385c1;
    margin-bottom: 1.5em;
    padding-bottom: 0.5em;
    border-bottom: 2px solid rgba(83, 133, 193, 0.2);
    display: flex;
    align-items: center;
    font-size: 1.8em;
}

.project-category h2 i {
    margin-right: 0.5em;
    background: rgba(83, 133, 193, 0.15);
    padding: 0.5em;
    border-radius: 10px;
    color: #5385c1;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 2em;
    margin-bottom: 1em;
}

.project-card {
    background: rgba(83, 133, 193, 0.05);
    border-radius: 12px;
    padding: 2em;
    transition: all 0.3s ease;
    border: 1px solid rgba(83, 133, 193, 0.15);
    text-decoration: none;
    color: inherit;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    min-height: 250px;
    display: flex;
    flex-direction: column;
}

.card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.project-card:hover {
    transform: translateY(-5px);
    background: rgba(83, 133, 193, 0.1);
    border-color: #5385c1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.project-card h3 {
    color: #5385c1;
    margin: 0 0 1em 0;
    font-size: 1.3em;
    display: flex;
    align-items: center;
}

.project-card h3:before {
    content: "▹";
    margin-right: 0.5em;
    color: #5385c1;
    flex-shrink: 0;
}

.project-card p {
    margin: 0 0 1.5em 0;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    flex-grow: 1;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8em;
    margin-top: auto;
}

.tech-stack span {
    background: rgba(83, 133, 193, 0.15);
    padding: 0.4em 1em;
    border-radius: 20px;
    font-size: 0.9em;
    color: #5385c1;
    transition: all 0.3s ease;
}

.tech-stack span:hover {
    background: rgba(83, 133, 193, 0.25);
    transform: translateY(-2px);
}

@media screen and (max-width: 1400px) {
    .project-grid {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
    }
}

@media screen and (max-width: 900px) {
    .project-grid {
        grid-template-columns: 1fr;
    }
    
    .project-category {
        padding: 2em;
    }
    
    #two {
        padding: 2em 1em;
    }
}

.button-container {
    display: flex;
    justify-content: flex-start;
    gap: 1em;
    margin: 2em 0;
}

.button-container .button {
    margin: 0;
}

#two {
    background: rgba(0, 0, 0, 0.2);
    padding: 4em 2em;
    margin: 2em 0;
}

#two .inner {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
}
</style>

