---
title: "{{ replace .Name "-" " " | replaceRE "^\\d{8}\\s+" "" | title }}"
publishDate: {{ dateFormat "2006-01-02T15:04:05Z0700" now.UTC }}
waybackDate: {{ dateFormat "20060102150405" now.UTC }}
slug: {{ replace .Name "-" " " | replaceRE "^\\d{8}\\s+" "" | urlize }}
aliases:
  - {{ .Name | replaceRE "^(\\d{4})(\\d{2})(\\d{2})-" "/$1/$2/$3/" }}
tags:
  - Default
draft: true
---
