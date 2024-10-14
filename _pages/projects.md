---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}

## Research Projects

{% for post in site.projects reversed %}
  {% if post.type == "research" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Selected Projects

{% for post in site.projects reversed %}
  {% if post.type == "selected" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Other Projects

{% for post in site.projects reversed %}
  {% if post.type == "other" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
