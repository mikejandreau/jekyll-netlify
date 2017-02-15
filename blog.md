---
layout: page
title: Blog
permalink: /blog/
order: 2
---

This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](http://jekyllrb.com/)

You can find the source code for the Jekyll new theme at: [github.com/jglovier/jekyll-new](https://github.com/jglovier/jekyll-new)

You can find the source code for Jekyll at [github.com/jekyll/jekyll](https://github.com/jekyll/jekyll)

<div class="blog-posts">
	{% for post in site.posts %}
		<div class="blog-post spacing">
			<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
			<p class="summary">
				{{ post.category }}
				<span class="date">
					{{ post.date | date: '%B %d, %Y' }}
				</span>
			</p>
			{{ post.excerpt }}
		</div>
	{% endfor %}
</div>
