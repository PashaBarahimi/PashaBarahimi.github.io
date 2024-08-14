---
layout: archive
title: "Portfolio"
permalink: /portfolio/
author_profile: true
---

{% include base_path %}

## Research Projects

{% for post in site.portfolio %}
  {% if post.type == "research" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Selected Projects

{% for post in site.portfolio %}
  {% if post.type == "selected" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Other Projects

{% for post in site.portfolio %}
  {% if post.type == "other" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
