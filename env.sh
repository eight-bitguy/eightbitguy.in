#!/bin/bash

> /var/www/html/env_config.js
echo "window._env_ = {" >> /var/www/html/env_config.js

hostnameValue=$(curl "http://metadata.google.internal/computeMetadata/v1/instance/hostname" -H 'Metadata-Flavor':'Google')
echo "   hostname: \"$hostnameValue\"" >> /var/www/html/env_config.js

echo "}" >> /var/www/html/env_config.js
