#!/bin/bashhh
curl -sI "$1" | grep 'Content-Length:' | cut -d' ' -f2
