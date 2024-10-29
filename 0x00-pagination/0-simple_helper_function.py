#!/usr/bin/env python3
"""
function that takes two integer arguments: page and page_size.
"""

from typing import Tuple


def index_range(page, page_size):
    """Compute the start and end index"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    result = (start_index, end_index)
    return (result)
