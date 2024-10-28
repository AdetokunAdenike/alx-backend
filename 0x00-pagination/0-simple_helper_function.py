#!/usr/bin/python3
"""
function that takes two integer arguments: page and page_size.
"""


def index_range(page, page_size):

    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
