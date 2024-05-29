#!/bin/bash
shopt -s globstar

./repren -p <(cat << 'EOF'

# Rust literals
"Deno	"system

# JS and TS
Deno.	system.
.Deno	.system

= Deno	= system
Deno {	system {

EOF
) --at-once --literal `find | grep -Pv '^\.$|^(?:\.\/)?(?:\.git|'"$(basename "$0")"'$)'`

rm **/*.orig