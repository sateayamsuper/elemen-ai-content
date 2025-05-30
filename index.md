---
layout: default
title: Elemen.ai Content Hub
permalink: /
---

# Welcome to the Elemen.ai Content Hub

Below are our latest AI-generated drafts:

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | prepend: site.baseurl }}">
        {{ post.title }}
      </a>
      <br><small>{{ post.date | date: "%b %-d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
