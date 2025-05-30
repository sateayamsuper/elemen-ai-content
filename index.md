---
layout: default
title: Elemen.ai Content Hub
permalink: /
---

# AI-Generated Drafts

<!-- Grouped posts by month -->
{% assign posts_grouped = site.posts | group_by_exp: "post", "post.date | date: '%Y-%m'" %}
{% for group in posts_grouped %}
  {% assign ym = group.name %}
  {% assign year = ym | slice: 0, 4 %}
  {% assign month_num = ym | slice: 5, 2 %}
  {% assign month_name = ( "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec" | split: " " )[ month_num | minus: 1 ] %}

  <details class="month-group" open>
    <summary>
      <strong>{{ month_name }} {{ year }}</strong>
      <button
        type="button"
        class="toggle-btn"
        aria-expanded="true"
        aria-controls="month-{{ ym }}"
      >
        Hide
      </button>
    </summary>

    <ul id="month-{{ ym }}">
      {% for post in group.items %}
        <li>
          <a
            class="btn"
            href="{{ post.url | prepend: site.baseurl }}"
            aria-label="Read {{ post.title }}"
          >
            {{ post.title }}
          </a>
          <small>— {{ post.date | date: "%b %-d, %Y" }}</small>
        </li>
      {% endfor %}
    </ul>
  </details>
{% endfor %}

<!-- Sorted list of posts -->
<hr>
<h2>All Posts</h2>
{% assign sorted = site.posts | sort: 'date' | reverse %}
{% for post in sorted %}
- <a class="btn" href="{{ post.url | prepend: site.baseurl }}">
    {{ post.title }}  
    <small>— {{ post.date | date: "%b %-d, %Y" }}</small>
  </a>
{% endfor %}
