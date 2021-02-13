#!/bin/bash

# (C) @felipecrs https://github.com/facebook/docusaurus/issues/3475#issuecomment-700204163

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$script_dir"

src='../../README.md'
dest='../docs/index.mdx'

cat << EOF > $dest
---
slug: /
id: intro
title: Introduction
hide_title: true
hide_table_of_contents: true
---
<!-- This file is copied via copy-docs.sh at build time. Do not edit it! -->

EOF

cat $src >> $dest
echo "Copied $src to $dest"

src='../../CONTRIBUTING.md'
dest='../docs/contributing.mdx'

cat << EOF > $dest
---
id: contributing
title: Contributing
hide_title: true
hide_table_of_contents: true
---
<!-- This file is copied via copy-docs.sh at build time. Do not edit it! -->

EOF

cat $src >> $dest
echo "Copied $src to $dest"

src='../../packages/react-day-picker/CHANGELOG.md'
dest='../docs/changelog.mdx'

cat << EOF > $dest
---
id: changelog
title: Changelog
hide_table_of_contents: true
---
<!-- This file is copied via copy-docs.sh at build time. Do not edit it! -->

EOF

cat $src >> $dest
echo "Copied $src to $dest"

src='../../LICENSE'
dest='../docs/license.mdx'

cat << EOF > $dest
---
id: license
title: License
hide_table_of_contents: true
---
<!-- This file is copied via copy-docs.sh at build time. Do not edit it! -->

EOF

cat $src >> $dest
echo "Copied $src to $dest"
