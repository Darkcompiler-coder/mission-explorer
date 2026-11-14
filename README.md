# Mission Explorer | Still Out There

An interactive web application cataloging human-made spacecraft, rovers, and scientific instruments left on the Moon, Mars, and in deep space.

**Live Deployment:** [https://darkcompiler-coder.github.io/explorer.html](https://darkcompiler-coder.github.io/explorer.html)

---

## Overview
Mission Explorer is a frontend-only static web application designed to help users search, filter, and compare historical and active space exploration hardware across multiple destinations.

## Key Features
* **Mission Directory:** Real-time keyword search paired with multi-criteria filtering by destination (*Moon*, *Mars*, *Deep space*) and operational status (*Operating*, *Passive science*, *Ended / silent*, *Disposed*), sorted chronologically.
* **Interactive Knowledge Check:** Client-side assessment module with state tracking and instant reset capability.
* **Operational Status Legend:** Reference guide defining spacecraft lifecycle and telemetry states.
* **Structured Navigation:** Dedicated sections covering Lunar missions, Martian missions, Deep Space probes, and official citations.

## Architecture & Tech Stack
* **Structure & Styling:** HTML5 and CSS3 (`index.html`, `space.css`)
* **Client-Side Logic:** Vanilla JavaScript (`explorer.js`) handling DOM manipulation, live search filtering, and quiz state management
* **Deployment:** Hosted via GitHub Pages as a zero-backend static application

## Data & Media Attribution
* Spacecraft telemetry, mission timelines, and status classifications sourced from official **NASA** mission archives.
* Public-domain planetary and spacecraft photography courtesy of **NASA**.

## AI Usage Disclosure
The concept, information architecture, and design of Mission Explorer were developed by our team. An AI coding assistant was utilized during development to assist with structuring, writing, and debugging the HTML, CSS, and JavaScript filtering and quiz logic. All mission data and status classifications were independently verified against official NASA documentation.

## License
Distributed under the **Apache License 2.0**. See `LICENSE` for more information.
