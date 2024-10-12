---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

{% include base_path %}

## Selected Projects

{% for post in site.projects %}
  {% if post.type == "selected" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Other Projects

{% for post in site.projects %}
  {% if post.type == "other" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
