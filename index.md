---
layout: default
title: Home
permalink: /
---

<h1>{{ page.title }}</h1>
<p>Welcome to our AI-generated content hub.</p>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
      <span>— {{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
