#!/bin/bash
# This Send a GET request to a given URL with a header variable.
curl -sX GET -H "X-School-User-Id: 98" "$1"
