---
layout: default
title: Elemen.ai Content Hub
permalink: /
---

# AI-Generated Drafts

{% assign sorted = site.posts | sort: 'date' | reverse %}
{% for post in sorted %}
- <a class="btn" href="{{ post.url | prepend: site.baseurl }}">
    {{ post.title }}  
    <small>— {{ post.date | date: "%b %-d, %Y" }}</small>
  </a>
{% endfor %}
