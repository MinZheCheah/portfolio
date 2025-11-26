---
layout: page
title: Projects
permalink: /projects/
---

# Projects

<div class="projects-grid">
  {% for project in site.data.projects %}
    <article class="project-card">
      <div class="project-header">
        <h2 class="project-title">
          <a href="{{ project.github }}" target="_blank" rel="noopener">
            {{ project.title }}
          </a>
        </h2>
        {% if project.badge %}
          <span class="project-badge">{{ project.badge }}</span>
        {% endif %}
      </div>

      <p class="project-description">{{ project.description }}</p>

      <div class="project-tech">
        {% for tech in project.technologies %}
          <span class="tech-tag">{{ tech }}</span>
        {% endfor %}
      </div>

      {% if project.media != "" %}
        <button class="media-toggle" data-target="{{ project.title | slugify }}-media">
          View Media
        </button>

        <div class="project-media hidden" id="{{ project.title | slugify }}-media">
          <div class="media-placeholder">
            <p>Project screenshots/video will be displayed here</p>
          </div>
        </div>
      {% endif %}

      <div class="project-links">
        <a href="{{ project.github }}" target="_blank" rel="noopener" class="project-link">
          View on GitHub
        </a>
      </div>
    </article>
  {% endfor %}
</div>
