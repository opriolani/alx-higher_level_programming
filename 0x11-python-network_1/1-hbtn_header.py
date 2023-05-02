#!/usr/bin/python3
"""This Fetches header"""
import urllib.request
import sys

def fetcher():
    """The fetcher"""
    with urllib.request.urlopen(sys.argv[1]) as response:
        header = response.info()
        print(header["X-Request-Id"])

if __name__ == "__main__":
    fetcher()
